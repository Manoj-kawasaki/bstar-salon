#!/usr/bin/env python3
"""Standalone Schema.org JSON-LD validator for Gemini CLI.

Validates JSON-LD schema blocks within HTML, JSX, TSX, Vue, Svelte, PHP, or JSON files.
- Exits with code 0 on valid schema.
- Exits with code 1 and descriptive error message on validation failure.
"""

import json
import os
import re
import sys
from typing import Any, List

BRACKET_PLACEHOLDERS = (
    "[Business Name]",
    "[City]",
    "[State]",
    "[Phone]",
    "[Address]",
    "[Your",
    "[INSERT",
    "[URL]",
    "[Email]",
)
BARE_PLACEHOLDER_RE = re.compile(r"\bREPLACE(?:_[A-Z]+)*\b")

# Match every <script ...>...</script> pair, then filter on the type attribute.
# Use atomic quote groups to prevent embedded quotes from truncating attributes.
# Disallow self-closing (/>) as an opening tag so subsequent tags are not swallowed.
_ATTRS_RE = r'(?:"[^"]*"|\'[^\']*\'|[^"\'>])*'
SCRIPT_TAG_RE = re.compile(
    r"<script\b(" + _ATTRS_RE + r")(?<!/)>(.*?)</script\s*>", re.DOTALL | re.IGNORECASE
)
LD_JSON_TYPE_RE = re.compile(
    r"""(?:^|\s)type\s*=\s*"""
    r"""(?:"application/ld\+json"|'application/ld\+json'|application/ld\+json(?=\s|$))""",
    re.IGNORECASE,
)

# Server- or client-side template expressions that render JSON-LD at runtime.
SERVER_TEMPLATE_RE = re.compile(
    r"""^(?:
        <\?(?:php\b|=)            # <?php ... ?> / <?= ... ?>
      | <%                        # EJS / ERB
    )""",
    re.VERBOSE,
)
COMPONENT_EXPRESSION_RE = re.compile(
    r"""^(?:
        \{\{                      # Vue / Handlebars / Twig
      | \{@html\b                 # Svelte
      | \$\{                      # JS template literal
      | \{\s*[A-Za-z_$][\w$.]*    # JSX expression: {schema} / {JSON.stringify(...)}
    )""",
    re.VERBOSE,
)
COMPONENT_EXTENSIONS = (".jsx", ".tsx", ".vue", ".svelte")

SCHEMA_ORG_CONTEXTS = frozenset(
    {"https://schema.org", "http://schema.org", "https://schema.org/", "http://schema.org/"}
)


def _configure_utf8() -> None:
    """Keep diagnostics printable on legacy console encodings."""
    for stream in (sys.stdout, sys.stderr):
        reconfigure = getattr(stream, "reconfigure", None)
        if reconfigure:
            reconfigure(encoding="utf-8", errors="replace")


def _extract_ld_json_blocks(content: str) -> List[str]:
    """Return the bodies of every ``<script type="application/ld+json">`` block.

    Attribute order, extra attributes (``nonce``, ``id``, ``data-*``), tag case
    and unquoted type values are all accepted; only the type value is decisive.
    """
    blocks = []
    for attributes, body in SCRIPT_TAG_RE.findall(content):
        if LD_JSON_TYPE_RE.search(attributes):
            # If dangerouslySetInnerHTML was used in JSX/TSX attributes, body is empty/rendered at runtime
            if "dangerouslySetInnerHTML" in attributes:
                continue
            blocks.append(body)
    return blocks


def _is_template_expression(block: str, filepath: str = "") -> bool:
    """True when the script body is rendered at runtime rather than literal JSON.

    Server-side markers (PHP, EJS) are never valid JSON and are skipped for
    every file type. Component expressions (JSX, Vue, Svelte, template
    literals) are only skipped in component sources, so a malformed object
    literal in a plain ``.html`` file is still reported.
    """
    if SERVER_TEMPLATE_RE.match(block):
        return True
    if filepath.lower().endswith(COMPONENT_EXTENSIONS):
        return bool(COMPONENT_EXPRESSION_RE.match(block))
    return False


def _is_schema_org_context(value: Any) -> bool:
    """Accept the schema.org context in its string, list and object forms."""
    if isinstance(value, str):
        return value in SCHEMA_ORG_CONTEXTS
    if isinstance(value, list):
        return any(_is_schema_org_context(item) for item in value)
    if isinstance(value, dict):
        return _is_schema_org_context(value.get("@vocab"))
    return False


def validate_jsonld(content: str, filepath: str = "") -> List[str]:
    """Validate JSON-LD blocks in HTML or JSON content."""
    errors = []
    blocks = _extract_ld_json_blocks(content)

    if not blocks:
        # Check if the file is a pure .json file containing JSON-LD directly
        if filepath.lower().endswith(".json"):
            try:
                data = json.loads(content)
                if isinstance(data, list):
                    for item in data:
                        if isinstance(item, dict):
                            errors.extend(_validate_schema_object(item, 1))
                        else:
                            errors.append("Block 1: JSON-LD list members must be objects")
                elif isinstance(data, dict):
                    errors.extend(_validate_schema_object(data, 1))
            except json.JSONDecodeError as e:
                errors.append(f"Block 1: Invalid JSON; {e}")
        return errors

    for i, block in enumerate(blocks, 1):
        block = block.strip()
        if _is_template_expression(block, filepath):
            continue  # Rendered at runtime; nothing to validate statically
        try:
            data = json.loads(block)
        except json.JSONDecodeError as e:
            errors.append(f"Block {i}: Invalid JSON; {e}")
            continue

        if isinstance(data, list):
            for item in data:
                if isinstance(item, dict):
                    errors.extend(_validate_schema_object(item, i))
                else:
                    errors.append(f"Block {i}: JSON-LD list members must be objects")
        elif isinstance(data, dict):
            errors.extend(_validate_schema_object(data, i))
        else:
            errors.append(f"Block {i}: JSON-LD root must be an object or list")

    return errors


def _validate_schema_object(
    obj: dict[str, Any], block_num: int, *, inherited_context: bool = False
) -> List[str]:
    """Validate one schema node, including members of a top-level ``@graph``."""
    errors = []
    prefix = f"Block {block_num}"

    # Check @context
    if "@context" not in obj and not inherited_context:
        errors.append(f"{prefix}: Missing @context")
    elif "@context" in obj and not _is_schema_org_context(obj["@context"]):
        errors.append(f"{prefix}: @context should be 'https://schema.org'")

    graph = obj.get("@graph")
    has_graph = isinstance(graph, list)

    # A graph container does not need its own @type. Its object members do.
    if "@type" not in obj and not has_graph:
        errors.append(f"{prefix}: Missing @type")

    # Check for placeholder text
    placeholder_scope = {key: value for key, value in obj.items() if key != "@graph"}
    text = json.dumps(placeholder_scope, ensure_ascii=False)
    for p in BRACKET_PLACEHOLDERS:
        if p.lower() in text.lower():
            errors.append(f"{prefix}: Contains placeholder text: {p}")
    for placeholder in BARE_PLACEHOLDER_RE.findall(text):
        errors.append(f"{prefix}: Contains placeholder text: {placeholder}")

    # Check for deprecated types
    schema_type = obj.get("@type", "")
    deprecated = {
        "HowTo": "deprecated September 2023",
        "SpecialAnnouncement": "deprecated July 31, 2025",
        "CourseInfo": "retired June 2025",
        "EstimatedSalary": "retired June 2025",
        "LearningVideo": "retired June 2025",
        "ClaimReview": "retired June 2025; fact-check rich results discontinued",
        "VehicleListing": "retired June 2025; vehicle listing structured data discontinued",
    }
    schema_types = schema_type if isinstance(schema_type, list) else [schema_type]
    for st in schema_types:
        if isinstance(st, str) and st in deprecated:
            errors.append(f"{prefix}: @type '{st}' is {deprecated[st]}")

    if "@graph" in obj:
        if not isinstance(graph, list):
            errors.append(f"{prefix}: @graph must be a list")
        else:
            context_is_inherited = inherited_context or "@context" in obj
            for index, item in enumerate(graph, 1):
                if not isinstance(item, dict):
                    errors.append(
                        f"{prefix}: @graph member {index} must be an object"
                    )
                    continue
                errors.extend(
                    _validate_schema_object(
                        item,
                        block_num,
                        inherited_context=context_is_inherited,
                    )
                )

    return errors


def main():
    _configure_utf8()

    if len(sys.argv) > 1 and sys.argv[1] in ("--help", "-h"):
        print("Usage: python validate_schema.py <file_path>")
        print("Validates Schema.org JSON-LD structured data in HTML, templates, or JSON files.")
        print("Exits with code 0 on valid schema, exits with code 1 on validation failure.")
        sys.exit(0)

    if len(sys.argv) < 2:
        print("Usage: python validate_schema.py <file_path>", file=sys.stderr)
        sys.exit(1)

    filepath = sys.argv[1]
    if filepath == "-":
        content = sys.stdin.read()
    else:
        if not os.path.isfile(filepath):
            print(f"Error: File not found: {filepath}", file=sys.stderr)
            sys.exit(1)

        # Only validate HTML-like and JSON files
        valid_extensions = (".html", ".htm", ".jsx", ".tsx", ".vue", ".svelte", ".php", ".ejs", ".json")
        if not filepath.lower().endswith(valid_extensions):
            print(f"Skipping non-schema file: {filepath}")
            sys.exit(0)

        # File-size guard: skip files >10MB to bound memory
        MAX_FILE_BYTES = 10 * 1024 * 1024  # 10 MiB
        try:
            if os.path.getsize(filepath) > MAX_FILE_BYTES:
                print(f"Skipping oversized file (>10MB): {filepath}")
                sys.exit(0)
        except OSError as e:
            print(f"Error accessing file: {e}", file=sys.stderr)
            sys.exit(1)

        try:
            with open(filepath, "r", encoding="utf-8", errors="replace") as f:
                content = f.read()
        except (OSError, IOError) as e:
            print(f"Error reading file: {e}", file=sys.stderr)
            sys.exit(1)

    errors = validate_jsonld(content, filepath)

    if not errors:
        print(f"✓ Schema validation passed: No errors found in {filepath}")
        sys.exit(0)

    print(f"🛑 Schema validation failed for {filepath}:", file=sys.stderr)
    for e in errors:
        print(f"  - {e}", file=sys.stderr)

    sys.exit(1)


if __name__ == "__main__":
    main()
