---
name: seo-on-page
description: On-page SEO and Search Experience Optimization (SXO) specialist. Optimizes
  title tags, meta descriptions, H1-H6 heading hierarchy, keyword prominence and density,
  internal linking anchor text, image SEO and alt attributes, above-the-fold content
  hierarchy, user intent fulfillment, and page-type layout patterns.
metadata:
  version: 2.6.2
  author: AgriciDaniel / Adapt for Gemini CLI
  category: seo
---

# Single Page Analysis

## What to Analyze

### On-Page SEO
- Title tag: 50-60 characters, includes primary keyword, unique
- Meta description: 150-160 characters, compelling, includes keyword
- Meta description is not a restatement of the title: run
  `python .gemini/skills/seo-on-page/scripts/metadata_template.py --title "<title>" --description "<desc>" --json`
  (heuristic, deterministic string comparison). A description that opens by
  repeating its own title and closes on a stock CTA ("Try it free now.",
  "Start free!") is templated metadata, the shape bulk generation jobs produce
  site-wide, and duplicated or templated metadata is a documented
  content-quality problem regardless of how original the body copy is
- H1: exactly one, matches page intent, includes keyword
- H2-H6: logical hierarchy (no skipped levels), descriptive
- URL: short, descriptive, hyphenated, no parameters
- Internal links: sufficient, relevant anchor text, no orphan pages
- External links: to authoritative sources, reasonable count

### Content Quality
- Word count vs page type minimums (see quality-gates.md)
- Readability: Flesch Reading Ease score, grade level
- Keyword density: natural (1-3%), semantic variations present
- E-E-A-T signals: author bio, credentials, first-hand experience markers
- Content freshness: publication date, last updated date

### Technical Elements
- Canonical tag: present, self-referencing or correct
- Meta robots: index/follow unless intentionally blocked
- Open Graph: og:title, og:description, og:image, og:url
- Twitter Card: twitter:card, twitter:title, twitter:description
- Hreflang: if multi-language, correct implementation

### Schema Markup
- Detect all types (JSON-LD preferred)
- Validate required properties
- Identify missing opportunities
- Never recommend HowTo (deprecated) or FAQ for rich results (retired May 2026); existing FAQPage need not be removed, use QAPage for genuine Q&A

### Images
- Alt text: present, descriptive, includes keywords where natural
- File size: flag >200KB (warning), >500KB (critical)
- Format: recommend WebP/AVIF over JPEG/PNG
- Dimensions: width/height set for CLS prevention
- Lazy loading: report `lazy_method` per image (native | perfmatters | ewww | js-generic | none). Do not flag "not lazy-loaded" when JS lazy-loaders (Perfmatters, EWWW, lazysizes) are detected, they intentionally strip the native `loading="lazy"` attribute and use `data-src` placeholders

### Core Web Vitals (reference only, not measurable from HTML alone)
- Flag potential LCP issues (huge hero images, render-blocking resources)
- Flag potential INP issues (heavy JS, no async/defer)
- Flag potential CLS issues (missing image dimensions, injected content)

## Output

### Page Score Card
```
Overall Score: XX/100

On-Page SEO:     XX/100  ████████░░
Content Quality: XX/100  ██████████
Technical:       XX/100  ███████░░░
Schema:          XX/100  █████░░░░░
Images:          XX/100  ████████░░
```

### Issues Found
Organized by priority: Critical -> High -> Medium -> Low

### Recommendations
Specific, actionable improvements with expected impact

### Schema Suggestions
Ready-to-use JSON-LD code for detected opportunities

## DataForSEO Integration (Optional)

If DataForSEO MCP tools are available, use `serp_organic_live_advanced` for real SERP positions and `backlinks_summary` for backlink data and spam scores.

## Error Handling

| Scenario | Action |
|----------|--------|
| URL unreachable (DNS failure, connection refused) | Report the error clearly. Do not guess page content. Suggest the user verify the URL and try again. |
| Page requires authentication (401/403) | Report that the page is behind authentication. Suggest the user provide the rendered HTML directly or a publicly accessible URL. |
| JavaScript-rendered content (empty body in HTML) | Note that key content may be rendered client-side. Analyze the available HTML and flag that results may be incomplete. Suggest using a browser-rendered snapshot if available. |

# Search Experience Optimization (SXO)

SXO bridges the gap between SEO (what Google rewards) and UX (what users need).
Traditional SEO audits check technical health. SXO asks: "Does this page deserve
to rank for this keyword based on what Google is actually rewarding in the SERP?"

## Core Insight

A page can score 95/100 on technical SEO and still fail to rank because it is the
**wrong page type** for the keyword. If Google shows 8 product pages and 2 comparison
pages for your keyword, your blog post will never break through -- no matter how
well-optimized it is.

## Commands

| Command | Purpose |
|---------|---------|
| `/seo sxo <url>` | Full SXO analysis (auto-detect keyword from page) |
| `/seo sxo <url> <keyword>` | Full SXO analysis for a specific keyword |
| `/seo sxo wireframe <url>` | Generate IST/SOLL wireframe with concrete placeholders |
| `/seo sxo personas <url>` | Persona-only scoring (skip SERP analysis) |

## Execution Pipeline

### Step 1: Target Acquisition

1. Fetch the target URL via `python .gemini/skills/seo-on-page/scripts/render_page.py <URL> --mode auto` (SPA-aware and SSRF-safe)
2. Parse with `python .gemini/skills/seo-on-page/scripts/parse_html.py <URL>` to extract: title, H1, meta description,
   headings hierarchy, word count, schema markup, CTAs, media elements
3. If no keyword provided, extract primary keyword from title tag + H1 overlap
4. Validate keyword is non-empty before proceeding

### Step 2: SERP Backwards Analysis

Read `references/page-type-taxonomy.md` for classification rules.

1. Search Google for the target keyword (WebSearch)
2. For each of the top 10 organic results, record:
   - URL and domain authority tier (brand / niche authority / unknown)
   - Page type (classify using taxonomy)
   - Content format (long-form, listicle, how-to, comparison, tool, video)
   - Word count estimate (from snippet length and page structure)
   - Schema types present (from currently supported SERP features; exclude FAQ/HowTo)
   - Media signals (video carousel, image pack, thumbnail presence)
3. Record SERP features present:
   - Featured snippet (paragraph / list / table / video)
   - People Also Ask (extract all visible questions)
   - Ads (top and bottom -- count and analyze ad copy themes)
   - Related searches (extract all)
   - Knowledge panel / local pack / shopping results
   - AI Overview presence and source types
4. Calculate SERP consensus:
   - Dominant page type (>60% = strong consensus, 40-60% = mixed, <40% = fragmented)
   - Content depth expectations (average word count tier)
   - Schema expectation (most common structured data types)
   - Media expectations (video required? images critical?)

### Step 3: Page-Type Mismatch Detection

This is the core SXO insight. Compare target page type against SERP consensus.

**Mismatch severity levels:**

| Target Type | SERP Expects | Severity | Recommendation |
|-------------|-------------|----------|----------------|
| Blog Post | Product Pages | CRITICAL | Create dedicated product page |
| Blog Post | Comparison | HIGH | Restructure as comparison with matrix |
| Product | Informational | HIGH | Add educational content layer |
| Landing Page | Tool/Calculator | HIGH | Build interactive tool component |
| Service Page | Local Results | MEDIUM | Add location signals + local schema |
| Any type match | - | ALIGNED | Focus on content depth and UX |

**Classification rules:**
- Classify target page using `references/page-type-taxonomy.md`
- Classify each SERP result using the same taxonomy
- Flag mismatch if target type differs from SERP dominant type
- If SERP is fragmented (no dominant type), note opportunity for differentiation

### Step 4: User Story Derivation

Read `references/user-story-framework.md` for the full framework.

From SERP signals, derive user stories:

1. **PAA questions** reveal knowledge gaps and concerns
2. **Ad copy themes** reveal commercial triggers and value propositions
3. **Related searches** reveal the search journey (what comes before/after)
4. **Featured snippet format** reveals the expected answer structure
5. **AI Overview** reveals what Google considers the definitive answer

For each signal cluster, generate a user story:
```
As a [persona derived from signal],
I want to [goal derived from query intent],
because [emotional driver from ad copy / PAA tone],
but I'm blocked by [barrier derived from PAA questions / related searches].
```

Generate 3-5 user stories covering the primary intent angles.

### Step 5: Gap Analysis

Compare the target page against SERP expectations across 7 dimensions:

| Dimension | What to Compare | Score |
|-----------|----------------|-------|
| Page Type | Target type vs SERP dominant type | 0-15 |
| Content Depth | Word count, heading depth, topic coverage | 0-15 |
| UX Signals | CTA clarity, above-fold content, mobile layout | 0-15 |
| Schema Markup | Present vs expected structured data types | 0-15 |
| Media Richness | Images, video, interactive elements vs SERP norm | 0-15 |
| Authority Signals | E-E-A-T markers, social proof, credentials | 0-15 |
| Freshness | Last updated, date signals, content recency | 0-10 |

**Total: 0-100 SXO Gap Score** (lower = larger gap, higher = better alignment)

### Step 6: Persona-Based Scoring

Read `references/persona-scoring.md` for methodology.

1. Derive 4-7 personas from SERP intent signals:
   - Cluster PAA questions by theme
   - Segment ad copy by target audience
   - Map related searches to journey stages
2. For each persona, score the target page on 4 dimensions (25 pts each):
   - **Relevance**: Does the page address this persona's need?
   - **Clarity**: Can this persona find their answer within 10 seconds?
   - **Trust**: Are there adequate trust signals for this persona?
   - **Action**: Is there a clear next step for this persona?
3. Output persona cards with scores and specific improvement recommendations
4. Sort recommendations by weakest persona first (biggest opportunity)

### Step 7: Wireframe Generation (Optional)

Only execute when `/seo sxo wireframe` is invoked.

Read `references/wireframe-templates.md` for templates.

1. Generate IST (current state) wireframe from parsed page structure
2. Generate SOLL (target state) wireframe based on:
   - SERP consensus page type
   - Gap analysis findings
   - Persona scoring weaknesses
3. Use ultra-concrete placeholders:
   - NOT: "Add a CTA here"
   - YES: "Add pricing CTA with annual savings badge below hero, linking to /pricing#enterprise"
4. Output as semantic HTML section outline with annotations

## DataForSEO Integration

If DataForSEO MCP tools are available:

1. **Before any API call**, run cost estimate and confirm with user
2. Use `serp_organic_live_advanced` for precise SERP data (positions, features, snippets)
3. Use `kw_data_google_ads_search_volume` for search volume and competition metrics
4. Fall back to WebSearch if DataForSEO unavailable -- note reduced precision in output

## SXO Score vs SEO Health Score

The SXO score is **separate** from the main SEO Health Score.

- SEO Health Score = technical compliance (crawlability, speed, schema, etc.)
- SXO Gap Score = alignment between page and SERP expectations
- A page can score 95 SEO + 30 SXO = technically perfect but strategically misaligned
- Both scores should be reported together when both are available

## Cross-Skill References

| Finding | Hand Off To |
|---------|-------------|
| E-E-A-T gaps in persona scoring | `/seo content` for deep E-E-A-T audit |
| Missing schema types | `/seo schema` for generation |
| Local intent detected in SERP | `/seo local` for GBP analysis |
| Content depth gaps | `/seo page` for deep page analysis |
| Technical issues found during fetch | `/seo technical` for full audit |
| Image/media gaps | `/seo images` for optimization |

## Output Format

### Full SXO Analysis

```
## SXO Analysis: [URL]
### Target Keyword: [keyword]

### 1. SERP Landscape
- Dominant page type: [type] ([confidence]% consensus)
- SERP features: [list]
- Content depth norm: [word count range]
- Schema expectation: [types]

### 2. Page-Type Alignment
- Your page type: [type]
- SERP expects: [type]
- Verdict: [ALIGNED | MISMATCH (severity)]
- Impact: [explanation]

### 3. User Stories (derived from SERP signals)
[3-5 user stories with source signals]

### 4. Gap Analysis (SXO Score: XX/100)
[7-dimension breakdown table]

### 5. Persona Scores
[4-7 persona cards with 4-dimension scores]

### 6. Priority Actions
[Ranked list: fix mismatch first, then weakest persona gaps]

### 7. Limitations
[What could not be assessed, data source notes]
```

## Error Handling

| Error | Action |
|-------|--------|
| URL fetch fails | Report error, suggest checking URL accessibility |
| No keyword provided or detected | Ask user to provide target keyword |
| WebSearch returns <5 results | Proceed with available data, note limited sample |
| SERP has no organic results (all ads) | Note highly commercial SERP, analyze ad copy only |
| Target page is JavaScript-rendered | Note limitation, use available HTML content |
| DataForSEO cost exceeds threshold | Fall back to WebSearch, notify user |

## Quality Checklist

Before delivering results, verify:
- [ ] Target URL was fetched via `python .gemini/skills/seo-on-page/scripts/render_page.py <URL> --mode auto` (not raw curl/fetch)
- [ ] Page type classification uses taxonomy from references
- [ ] At least 5 SERP results were analyzed
- [ ] User stories cite specific SERP signals as evidence
- [ ] Persona scores include concrete improvement suggestions
- [ ] SXO score is clearly labeled as separate from SEO Health Score
- [ ] Limitations section is present and honest
- [ ] Cross-skill recommendations are included where relevant

# Image Optimization Analysis

## Checks

### Alt Text
- Present on all `<img>` elements (except decorative: `role="presentation"`)
- Descriptive: describes the image content, not "image.jpg" or "photo"
- Includes relevant keywords where natural, not keyword-stuffed
- Length: 10-125 characters

**Good examples:**
- "Professional plumber repairing kitchen sink faucet"
- "Red 2024 Toyota Camry sedan front view"
- "Team meeting in modern office conference room"

**Bad examples:**
- "image.jpg" (filename, not description)
- "plumber plumbing plumber services" (keyword stuffing)
- "Click here" (not descriptive)

### File Size

**Tiered thresholds by image category:**

| Image Category | Target | Warning | Critical |
|----------------|--------|---------|----------|
| Thumbnails | < 50KB | > 100KB | > 200KB |
| Content images | < 100KB | > 200KB | > 500KB |
| Hero/banner images | < 200KB | > 300KB | > 700KB |

Recommend compression to target thresholds where possible without quality loss.

### Format
| Format | Browser Support | Use Case |
|--------|-----------------|----------|
| WebP | 97%+ | Default recommendation |
| AVIF | 92%+ | Best compression, newer |
| JPEG | 100% | Fallback for photos |
| PNG | 100% | Graphics with transparency |
| SVG | 100% | Icons, logos, illustrations |

Recommend WebP/AVIF over JPEG/PNG. Check for `<picture>` element with format fallbacks.

#### Recommended `<picture>` Element Pattern

Use progressive enhancement with the most efficient format first:

```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Descriptive alt text" width="800" height="600" loading="lazy" decoding="async">
</picture>
```

The browser will use the first supported format. Global browser support (caniuse.com, checked 2026-09-28): AVIF about 95.4%, WebP about 96.8%. Re-check caniuse before quoting.

#### JPEG XL: Emerging Format

Third-party reporting and Wikipedia describe a Rust-based JPEG XL decoder as shipped in Chrome 145 stable (2026-02-10) behind the `chrome://flags/#enable-jxl-image-format` flag, not enabled by default; no Google-owned confirmation was retrieved in the fact pack. Because default support is not confirmed, it is not yet practical for production web delivery. Keep serving AVIF/WebP with JPEG fallback and monitor.

### Responsive Images
- `srcset` attribute for multiple sizes
- `sizes` attribute matching layout breakpoints
- Appropriate resolution for device pixel ratios

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Description"
>
```

### Lazy Loading
- `loading="lazy"` on below-fold images
- Do NOT lazy-load above-fold/hero images (hurts LCP)
- Check for native vs JavaScript-based lazy loading

```html
<!-- Below fold - lazy load -->
<img src="photo.jpg" loading="lazy" alt="Description">

<!-- Above fold - eager load (default) -->
<img src="hero.jpg" alt="Hero image">
```

#### Detected lazy-loader methods (`lazy_method` field)

`python .gemini/skills/seo-on-page/scripts/parse_html.py` classifies each image's lazy-loading mechanism via the
`lazy_method` field on every image entry. Five values:

| `lazy_method` | Signal detected | Common stack |
|---|---|---|
| `native` | `loading="lazy"` HTML attribute | Modern browsers, plain HTML |
| `perfmatters` | `data-perfmatters-src`/`-srcset` OR class `perfmatters-lazy` | WordPress + Perfmatters plugin |
| `ewww` | `data-ewww-src` / `data-eio` OR class `lazyload-eio` | WordPress + EWWW Image Optimizer |
| `js-generic` | `data-src` / `data-lazy-src` / `data-original` / `data-srcset` OR class `lazyload`/`lazyloaded`/`lazy` | Lazysizes, vanilla-lazyload, jQuery plugins |
| `none` | Neither attribute nor class signal | Page is not lazy-loading this image |

When auditing image SEO, report `lazy_method` alongside `loading` so users know
whether their site is using a JS-driven lazy-loader (in which case the native
`loading="lazy"` attribute is intentionally absent, that is not a regression).

### `fetchpriority="high"` for LCP Images

Add `fetchpriority="high"` to your hero/LCP image to prioritize its download in the browser's network queue:

```html
<img src="hero.webp" fetchpriority="high" alt="Hero image description" width="1200" height="630">
```

**Critical:** Do NOT lazy-load above-the-fold/LCP images. Using `loading="lazy"` on LCP images directly harms LCP scores. Reserve `loading="lazy"` for below-the-fold images only.

### `decoding="async"` for Non-LCP Images

Add `decoding="async"` to non-LCP images to prevent image decoding from blocking the main thread:

```html
<img src="photo.webp" alt="Description" width="600" height="400" loading="lazy" decoding="async">
```

### CLS Prevention
- `width` and `height` attributes set on all `<img>` elements
- `aspect-ratio` CSS as alternative
- Flag images without dimensions

```html
<!-- Good - dimensions set -->
<img src="photo.jpg" width="800" height="600" alt="Description">

<!-- Good - CSS aspect ratio -->
<img src="photo.jpg" style="aspect-ratio: 4/3" alt="Description">

<!-- Bad - no dimensions -->
<img src="photo.jpg" alt="Description">
```

### File Names
- Descriptive: `blue-running-shoes.webp` not `IMG_1234.jpg`
- Hyphenated, lowercase, no special characters
- Include relevant keywords

### CDN Usage
- Check if images served from CDN (different domain, CDN headers)
- Recommend CDN for image-heavy sites
- Check for edge caching headers

## Output

### Image Audit Summary

| Metric | Status | Count |
|--------|--------|-------|
| Total Images | - | XX |
| Missing Alt Text | ❌ | XX |
| Oversized (>200KB) | ⚠️ | XX |
| Wrong Format | ⚠️ | XX |
| No Dimensions | ⚠️ | XX |
| Not Lazy Loaded | ⚠️ | XX |

### Prioritized Optimization List

Sorted by file size impact (largest savings first):

| Image | Current Size | Format | Issues | Est. Savings |
|-------|--------------|--------|--------|--------------|
| ... | ... | ... | ... | ... |

### Recommendations
1. Convert X images to WebP format (est. XX KB savings)
2. Add alt text to X images
3. Add dimensions to X images
4. Enable lazy loading on X below-fold images
5. Compress X oversized images

---

## Image SERP Analysis

When DataForSEO MCP is available, enhance the image audit with competitive data.

### `/seo images serp <keyword>`

Cross-reference on-page images with the image results visible in the Google SERP.

**Workflow:**
1. The pinned DataForSEO MCP server (2.8.10) has no Google Images SERP tool.
   Use the `images` element of `serp_organic_live_advanced` (depth=100) when the
   SERP has one, and say plainly when no image SERP data is available
2. Extract: top domains, image types, alt text patterns
3. Output competitor image SERP landscape

**Output:**

| Rank | Domain | Title/Alt | Image URL | Page URL |
|------|--------|-----------|-----------|----------|
| 1 | example.com | "Blue running shoes..." | .../shoes.webp | /products/... |

**Analysis includes:**
- **Domain dominance**: which sites own the most image positions (top 10 by count)
- **Alt text patterns**: common title/alt patterns in top-ranking images
- **Format distribution**: WebP vs JPEG vs PNG in top results
- **Opportunity score**: keywords where you have page rankings but no image presence

If DataForSEO MCP is not available, inform user and suggest installing the extension.

---

## Image File Optimization

Optimize image files for SEO: format conversion, metadata injection, compression.

### `/seo images optimize <path>`

Optimize image file(s) for web and SEO. Converts to WebP/AVIF, injects IPTC
metadata, compresses, and generates responsive variants.

**Tools used (in order of preference):**
- `exiftool` -- EXIF/IPTC/XMP read/write (install: `sudo apt install libimage-exiftool-perl`)
- `cwebp` -- WebP conversion (install: `sudo apt install webp`)
- ImageMagick `convert` -- Format conversion, resizing (pre-installed on most systems)
- FFmpeg -- Fallback for format conversion (pre-installed)

**Before running:** Check which tools are available with `which exiftool cwebp convert ffmpeg`.

### Format Conversion

Convert images to modern formats with metadata preservation:

```bash
# WebP (recommended default) - with metadata preserved
cwebp -q 82 -metadata all input.jpg -o output.webp

# WebP via ImageMagick (fallback if cwebp not installed)
convert input.jpg -quality 82 output.webp

# AVIF via FFmpeg (slower encode, best compression)
ffmpeg -i input.jpg -c:v libaom-av1 -crf 30 -still-picture 1 output.avif

# Responsive variants (400w, 800w, 1200w)
convert input.jpg -resize 400x -quality 82 image-400.webp
convert input.jpg -resize 800x -quality 82 image-800.webp
convert input.jpg -resize 1200x -quality 82 image-1200.webp
```

### Metadata Injection (IPTC for Google Images Display)

Google Images displays IPTC Creator, Credit Line, and Copyright in search results.
This is **NOT a ranking factor** but can improve Google Images display and brand attribution.

**With exiftool (preferred):**
```bash
# Read all metadata
exiftool image.jpg

# Inject IPTC + XMP metadata for Google Images rich results
exiftool \
  -IPTC:ObjectName="Product Photo Description" \
  -IPTC:Caption-Abstract="Detailed image description" \
  -IPTC:By-line="Brand Name Photography" \
  -IPTC:Credit="Brand Name" \
  -IPTC:CopyrightNotice="Copyright 2026 Brand Name" \
  -IPTC:Source="brandname.com" \
  -XMP:Title="Product Photo Description" \
  -XMP:Description="Detailed image description" \
  -XMP:Creator="Brand Name Photography" \
  -XMP:Rights="Copyright 2026 Brand Name" \
  image.jpg

# Batch inject to all images in directory
exiftool -overwrite_original \
  -IPTC:By-line="Brand Name" \
  -IPTC:CopyrightNotice="Copyright 2026 Brand Name" \
  *.jpg *.webp *.png
```

**With ImageMagick (fallback):**
```bash
identify -verbose image.jpg | head -50

convert input.jpg \
  -set comment "Product Photo Description" \
  -set IPTC:2:80 "Brand Name Photography" \
  -set IPTC:2:116 "Copyright 2026 Brand Name" \
  output.jpg
```

Note: WebP supports EXIF and XMP but not IPTC natively. For WebP files,
use XMP fields instead of IPTC. exiftool handles this conversion automatically.

### AI-Generated Images: `DigitalSourceType` (Merchant Center requirement)

For product images produced by generative AI, **Google Merchant Center requires**
IPTC `DigitalSourceType: TrainedAlgorithmicMedia` metadata. This is an
operational policy requirement, not a ranking factor: feeds missing this label
on AI-generated imagery can be disapproved.

Primary source (Merchant Center AI-generated content policy):
https://support.google.com/merchants/answer/14743464
(the ai-optimization-guide does not document DigitalSourceType/IPTC/Merchant labeling.)

**Audit command:**

```bash
# Audit a directory for the IPTC label (counts: missing, ai, captured, etc.)
python .gemini/skills/seo-on-page/scripts/iptc_ai_label.py audit ./images/ --json

# Audit a single image
python .gemini/skills/seo-on-page/scripts/iptc_ai_label.py audit ./hero.webp --json

# Inject the AI label into an image
python .gemini/skills/seo-on-page/scripts/iptc_ai_label.py inject ./ai-hero.webp \
    --source-type trainedAlgorithmicMedia

# Other vocabulary values:
#   compositeSynthetic               (mix of captured + AI elements)
#   algorithmicMedia                 (created purely by algorithm, NOT from sampled training data)
#   compositeWithTrainedAlgorithmicMedia (e.g. AI inpainting/outpainting over real media)
#   digitalCapture                   (fully captured photograph)
```

**Raw exiftool equivalents** (for ad-hoc usage):

```bash
# Inject manually
exiftool \
  -XMP-iptcExt:DigitalSourceType="https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia" \
  ai-generated-product.jpg

# Audit: find images missing the label across a directory
exiftool -if 'not $XMP-iptcExt:DigitalSourceType' \
  -filename -DigitalSourceType *.jpg *.webp *.png
```

Google extracts these IPTC `DigitalSourceType` values:
- `trainedAlgorithmicMedia`: fully AI-generated (use this for diffusion-model
  product imagery)
- `compositeSynthetic`: mixes captured + AI-generated elements
- `algorithmicMedia`: created purely by an algorithm, **not** from sampled
  training data
- `compositeWithTrainedAlgorithmicMedia`: composite of trained algorithmic
  media + other media (e.g. AI inpainting/outpainting over a real photo)
- `digitalCapture`: fully captured photograph (note: `digitalCapture` is **not**
  on Google's extracted-values list, but is a valid IPTC value)

> **Provenance signals (consumer-facing):** **SynthID** watermarks and **C2PA**
> Content Credentials are emerging signals for AI media identification. Treat
> product-surface coverage as subject to change unless verified from a current
> Google-owned source.
> This is detection/transparency, **not** an extra required Merchant feed field
> beyond IPTC DigitalSourceType.

> **Licensable images:** to earn the Licensable badge, supply EITHER structured
> data (`ImageObject` with the `license` property + `acquireLicensePage` for the
> "Get this image" link) OR embedded IPTC photo metadata (Licensor URL / Web
> Statement of Rights). Cross-link `seo-schema` for the ImageObject markup.

> **Discovery note:** image discovery now includes **visual search fan-out**
> across Lens / AI Mode / Circle to Search (Gemini multimodal scene/object
> understanding), so images surface via scene, objects, and materials, not alt
> text alone. No new published image-SEO lever yet; keep descriptive alt text +
> clean structured data.

When `/seo images optimize` is run on AI-generated assets, prompt the user to
confirm the source type and inject the matching IPTC value automatically.

For **AI-generated product titles and descriptions**, Google Merchant Center
also requires the AI-generated text to be separately specified and labeled in
the feed. This is enforced at the feed layer, not the page layer, flag this
in cross-reference with `seo-ecommerce`.

### Metadata Audit

```bash
# Quick audit with exiftool
exiftool -IPTC:all -XMP:all -EXIF:ImageDescription image.jpg

# Batch audit - find images missing IPTC Creator
exiftool -if 'not $IPTC:By-line' -filename *.jpg *.webp *.png
```

### Full Optimization Pipeline

For maximum image SEO, run this pipeline on each image:

1. **Audit existing metadata**: `exiftool -IPTC:all -XMP:all image.jpg`
2. **Inject IPTC/XMP metadata**: Creator, Copyright, Description
3. **Convert to WebP**: `cwebp -q 82 -metadata all image.jpg -o image.webp`
4. **Generate responsive variants**: 400w, 800w, 1200w
5. **Verify metadata preserved**: `exiftool image.webp`
6. **Generate `<picture>` HTML**: AVIF > WebP > JPEG fallback chain

### What Matters vs What Doesn't for Google Images

| Factor | Impact | Where to Set |
|--------|--------|--------------|
| Alt text | **CRITICAL** (ranking) | HTML `<img alt="">` |
| Filename | **HIGH** (ranking) | File system (descriptive, hyphenated) |
| Page context | **HIGH** (ranking) | Surrounding HTML content |
| File size/speed | **MEDIUM** (indirect via CWV) | Compression + format conversion |
| IPTC Creator/Copyright | **LOW** (display only) | Image file metadata |
| EXIF camera data | NONE | Irrelevant for SEO |
| IPTC Keywords | NONE | Google ignores these |

---

## Error Handling

| Scenario | Action |
|----------|--------|
| URL unreachable | Report connection error with status code. Suggest verifying URL and checking if site requires authentication. |
| No images found on page | Report that no `<img>` elements were detected. Suggest checking if images are loaded via JavaScript or CSS background-image. |
| Images behind CDN or authentication | Note that image files could not be directly accessed for size analysis. Report available metadata (alt text, dimensions, format from markup) and flag inaccessible resources. |
| exiftool not installed | Fall back to ImageMagick for metadata. Recommend: `sudo apt install libimage-exiftool-perl` |
| cwebp not installed | Fall back to ImageMagick or FFmpeg for WebP conversion. Recommend: `sudo apt install webp` |
| DataForSEO MCP not available | Skip Image SERP Analysis section. Note extension is not installed. |
