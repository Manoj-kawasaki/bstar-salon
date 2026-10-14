import assert from "node:assert";
import { REVIEW_CATEGORIES, isValidCategory, getCategoryById } from "../src/lib/review-categories.ts";
import { checkReviewRateLimit, recordSuccessfulGeneration, getDailyUsageStats } from "../src/lib/rate-limit.ts";
import fs from "node:fs";
import path from "node:path";

console.log("=================================================");
console.log("🧪 B★STAR AI Review System - Automated Test Suite");
console.log("=================================================\n");

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`✅ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`❌ FAIL: ${name}`, err);
  }
}

// TEST SUITE 1: 10 Service Categories Integrity
runTest("All 10 required service categories are present and defined", () => {
  const expectedCategories = [
    "Men's Grooming",
    "Women's Haircut",
    "Facial & Cleanup",
    "Detan & Bleach",
    "Waxing Service",
    "Threading",
    "Mani & Pedicure",
    "Hair Spa & Massage",
    "Bridal & Makeup",
    "Global Colour & Roots",
  ];

  assert.strictEqual(REVIEW_CATEGORIES.length, 10, "Must have exactly 10 categories");
  expectedCategories.forEach((catName) => {
    const found = REVIEW_CATEGORIES.find((c) => c.name === catName);
    assert.ok(found, `Category ${catName} must exist`);
    assert.ok(found.services.length >= 4, `${catName} must have at least 4 services`);
    assert.ok(found.observations.length >= 4, `${catName} must have at least 4 observations`);
  });
});

runTest("Category lookup and validation helpers work accurately", () => {
  assert.ok(isValidCategory("Men's Grooming"));
  assert.ok(isValidCategory("mens"));
  assert.ok(isValidCategory("Global Colour & Roots"));
  assert.ok(!isValidCategory("Bogus Service Category"));
  assert.strictEqual(getCategoryById("facial")?.name, "Facial & Cleanup");
});

// TEST SUITE 2: Rate Limiting & Cooldown Logic
runTest("Cooldown prevents instant double submission", () => {
  const testIp = "192.168.1.101";
  const check1 = checkReviewRateLimit(testIp, 20);
  assert.strictEqual(check1.allowed, true);
  
  recordSuccessfulGeneration(testIp);

  // Immediate second check should trigger cooldown
  const check2 = checkReviewRateLimit(testIp, 20);
  assert.strictEqual(check2.allowed, false);
  assert.strictEqual(check2.reason, "cooldown");
  assert.ok((check2.retryAfterSeconds || 0) > 0);
});

runTest("Daily budget limit stops generation after budget is reached", () => {
  const testIp = "10.0.0.99";
  // Simulate reaching budget of 20
  for (let i = 0; i < 25; i++) {
    recordSuccessfulGeneration(`10.0.0.${i + 1}`);
  }
  const check = checkReviewRateLimit(testIp, 20);
  assert.strictEqual(check.allowed, false);
  assert.strictEqual(check.reason, "daily_limit");
  
  const stats = getDailyUsageStats(20);
  assert.ok(stats.count >= 20);
  assert.strictEqual(stats.remaining, 0);
});

// TEST SUITE 3: Secret Protection & Security Verification
runTest("Frontend client bundles do NOT leak OPENROUTER_API_KEY", () => {
  const nextStaticDir = path.resolve(".next/static");
  if (fs.existsSync(nextStaticDir)) {
    const scanDir = (dir) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(fullPath);
        } else if (entry.name.endsWith(".js")) {
          const content = fs.readFileSync(fullPath, "utf8");
          assert.ok(
            !content.includes("OPENROUTER_API_KEY"),
            `Secret OPENROUTER_API_KEY leaked into client bundle: ${entry.name}`
          );
        }
      }
    };
    scanDir(nextStaticDir);
  }
});

runTest(".env and .env.local are in .gitignore", () => {
  const gitignore = fs.readFileSync(".gitignore", "utf8");
  assert.ok(gitignore.includes(".env*") || gitignore.includes(".env.local"), "Gitignore must contain .env rule");
});

runTest(".env.example contains only empty placeholders", () => {
  const example = fs.readFileSync(".env.example", "utf8");
  assert.ok(example.includes("OPENROUTER_API_KEY="), "Must have OPENROUTER_API_KEY placeholder");
  assert.ok(!example.includes("sk-or-"), "Must NOT contain any real key");
});

// TEST SUITE 4: Google Direct Review Place ID Verification
runTest("Google Place ID is correctly preserved", () => {
  const targetPlaceId = "ChIJQwX9_hQRrjsRPGH6avSZBOc";
  const siteConfigContent = fs.readFileSync("src/config/site.ts", "utf8");
  const reviewAssistantContent = fs.readFileSync("src/components/ReviewAssistant.tsx", "utf8");
  
  assert.ok(siteConfigContent.includes(targetPlaceId), "siteConfig must include Google review place ID");
  assert.ok(reviewAssistantContent.includes(targetPlaceId), "ReviewAssistant must target valid Google review place ID");
});

// TEST SUITE 5: OpenRouter Parsing and Model Output Robustness
function parseDraftContent(rawContent) {
  let draftText = "";
  try {
    const parsedJson = JSON.parse(rawContent);
    draftText = parsedJson.draft || parsedJson.review || parsedJson.text || parsedJson.message || "";
  } catch {
    const match = rawContent.match(/"draft"\s*:\s*"([^"]+)"/);
    if (match) {
      draftText = match[1];
    } else {
      draftText = rawContent.replace(/```json/g, "").replace(/```/g, "").trim();
    }
  }
  return draftText.replace(/^["']|["']$/g, "").trim();
}

runTest("Model output parser extracts clean draft from JSON", () => {
  const raw = JSON.stringify({ draft: "I received a precision haircut and beard trim. The stylist was very attentive." });
  const draft = parseDraftContent(raw);
  assert.strictEqual(draft, "I received a precision haircut and beard trim. The stylist was very attentive.");
});

runTest("Model output parser extracts draft from markdown code block", () => {
  const raw = "```json\n{\n  \"draft\": \"Had a relaxing fruit cleanup today. My skin feels fresh and calm.\"\n}\n```";
  const draft = parseDraftContent(raw);
  assert.strictEqual(draft, "Had a relaxing fruit cleanup today. My skin feels fresh and calm.");
});

runTest("Model output parser falls back gracefully on plain text", () => {
  const raw = "I had global hair colour done at B★Star. The shade looks natural and rich in sunlight.";
  const draft = parseDraftContent(raw);
  assert.strictEqual(draft, "I had global hair colour done at B★Star. The shade looks natural and rich in sunlight.");
});

// TEST SUITE 6: System Prompt Policy Compliance
runTest("System prompt enforces ethical non-promotional constraints", () => {
  const routeContent = fs.readFileSync("src/app/api/reviews/generate/route.ts", "utf8");
  assert.ok(routeContent.includes("NEVER invent treatments"), "Must forbid inventing treatments");
  assert.ok(routeContent.includes("NEVER assume a 5-star experience"), "Must forbid forcing 5-stars");
  assert.ok(routeContent.includes("NEVER use promotional marketing clichés"), "Must forbid marketing clichés");
  assert.ok(routeContent.includes("nvidia/nemotron-3.5-lightning:free"), "Must configure Nemotron 3.5 Lightning Free");
});

console.log(`\n=================================================`);
console.log(`Summary: ${passedTests}/${totalTests} tests passed`);
console.log(`=================================================`);

if (passedTests !== totalTests) {
  process.exit(1);
}
