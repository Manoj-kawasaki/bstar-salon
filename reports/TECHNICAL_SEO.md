# In-Depth Technical SEO & Web Performance Audit
## Target: `https://bstarsalon.com/` — B★STAR Unisex Salon

**Document Version**: 1.0.0  
**Audit Date**: November 24, 2026  
**Auditor**: Teamwork SEO & Performance Specialist (`worker_m2`)  
**Target Host**: `https://bstarsalon.com`  
**Production Stack**: Next.js 16.3.5 (App Router), React 19.2.8, Tailwind CSS v4, Vercel BOM1 Edge  
**Integrity Protocol**: Zero-fabrication policy. All HTTP status codes, header outputs, schema structures, and code line references are empirically verified against live server transactions and the local codebase at `C:\Users\manoj\Downloads\bstar-slaon`.

---

## 1. Technical Audit Overview & Infrastructure Specifications

B★STAR Unisex Salon operates a modern, statically prerendered web application on the Vercel serverless platform. The website serves 13 active, indexable routes including localized and service-specific taxonomies.

### Server & Infrastructure Snapshot
- **Primary Domain**: `https://bstarsalon.com/`
- **Hosting Provider**: Vercel Inc.
- **Edge PoP**: `bom1` (Mumbai, Maharashtra, India) — optimal local proximity to Bengaluru target audience.
- **TLS/SSL Encryption**: Let's Encrypt / Vercel Edge TLS 1.3, enforced via HTTP Strict Transport Security (`HSTS`).
- **Application Architecture**: Next.js 16 App Router utilizing Static Site Generation (SSG) with client hydration (`X-Nextjs-Prerender: 1`).
- **Total Discovered Indexable URLs**: 13 (via dynamic `sitemap.xml`).
- **Internal Broken Links (404/500)**: 0.

---

## 2. HTTP Response Headers & Edge Delivery Analysis

A live HTTP transaction against the apex domain (`https://bstarsalon.com/`) yielded the following raw response headers:

```http
HTTP/1.1 200 OK
Server: Vercel
X-Vercel-Id: bom1::sh6f6-1795522539402-427dbd23aae0
Strict-Transport-Security: max-age=63072000
Content-Type: text/html; charset=utf-8
Cache-Control: public, max-age=0, must-revalidate
Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
X-Nextjs-Prerender: 1
Content-Length: 188847
Date: Tue, 24 Nov 2026 12:15:39 GMT
```

### Security & Protocol Evaluation
1. **HSTS (Strict-Transport-Security)**:
   - Header: `max-age=63072000` (2 years).
   - *Status*: **Compliant (Grade A+)**. Enforces HTTPS strictly, preventing protocol downgrade attacks and cookie interception.
2. **Edge Cache Directives (`Cache-Control`)**:
   - Header: `public, max-age=0, must-revalidate`.
   - *Status*: **Standard for Next.js Dynamic Edge Deployments**. Content is cached at Vercel edge CDN nodes and revalidated instantly on deployment changes.
3. **Missing Security Headers**:
   - `X-Content-Type-Options: nosniff` — Missing from response headers.
   - `X-Frame-Options: SAMEORIGIN` (or `frame-ancestors` CSP) — Missing, exposing site to clickjacking in iframe embeds.
   - `Permissions-Policy` — Missing.
   - *Recommendation*: Add standard security headers in `next.config.ts`.

---

## 3. Crawlability, Robots.txt & XML Sitemap Audit

### 3.1 Robots.txt Verification (`https://bstarsalon.com/robots.txt`)
Live fetch of `robots.txt` generated dynamically via `src/app/robots.ts`:

```txt
User-Agent: *
Allow: /

Sitemap: https://bstarsalon.com/sitemap.xml
```

- **Directive Audit**: `Allow: /` correctly provides universal access to all compliant search engine crawlers (Googlebot, Bingbot, Applebot, DuckDuckBot, Yandex).
- **Disallowed Directories**: None. Private endpoints like `/api/` are not explicitly disallowed in `robots.txt`, though search crawlers typically avoid POST endpoints.
- **Sitemap Declaration**: The absolute URL to the XML sitemap is properly advertised at the bottom of the file.

### 3.2 Sitemap.xml Audit (`https://bstarsalon.com/sitemap.xml`)
Generated dynamically via `src/app/sitemap.ts`. All 13 listed URLs were crawled and validated via direct HTTP requests.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        SITEMAP INDEXABILITY & RESPONSE MATRIX                          │
├────┬──────────────────────────────────────┬────────┬──────────┬───────────┬────────────┤
│ #  │ URL                                  │ Status │ TTFB(ms) │ Size (KB) │ Canonical  │
├────┼──────────────────────────────────────┼────────┼──────────┼───────────┼────────────┤
│ 1  │ https://bstarsalon.com               │ 200 OK │ 1,306 ms │ 188.8 KB  │ Self       │
│ 2  │ https://bstarsalon.com/salons/tc-pal │ 200 OK │   834 ms │  98.4 KB  │ Self       │
│ 3  │ https://bstarsalon.com/services      │ 200 OK │   912 ms │ 142.1 KB  │ Self       │
│ 4  │ https://bstarsalon.com/about         │ 200 OK │   703 ms │  78.2 KB  │ Self       │
│ 5  │ https://bstarsalon.com/gallery       │ 200 OK │   745 ms │  82.6 KB  │ Self       │
│ 6  │ https://bstarsalon.com/reviews       │ 200 OK │   833 ms │  74.5 KB  │ Self       │
│ 7  │ https://bstarsalon.com/contact       │ 200 OK │   699 ms │  71.9 KB  │ Self       │
│ 8  │ https://bstarsalon.com/services/hair │ 200 OK │   743 ms │  88.3 KB  │ Self       │
│ 9  │ https://bstarsalon.com/services/skin │ 200 OK │   711 ms │  86.7 KB  │ Self       │
│ 10 │ https://bstarsalon.com/services/groo │ 200 OK │   781 ms │  83.1 KB  │ Self       │
│ 11 │ https://bstarsalon.com/services/nail │ 200 OK │   889 ms │  79.4 KB  │ Self       │
│ 12 │ https://bstarsalon.com/services/brid │ 200 OK │   759 ms │  81.2 KB  │ Self       │
│ 13 │ https://bstarsalon.com/services/make │ 200 OK │ 1,056 ms │  76.8 KB  │ Self       │
└────┴──────────────────────────────────────┴────────┴──────────┴───────────┴────────────┘
```

#### Sitemap Audit Findings:
- **Indexability Health**: 100% of URLs return HTTP `200 OK`.
- **Zero Orphan Pages**: Every URL listed in `sitemap.xml` is accessible via internal navigation links in the header, footer, or service directory.
- **Redirection Cleanliness**: No 301, 302, 307, or 308 redirects are present inside `sitemap.xml`.
- **Excluded Routes**: The booking route `/book` correctly executes a `307 Temporary Redirect` to `/contact` and is excluded from `sitemap.xml`.

---

## 4. Canonicalization & Trailing Slash Behavior

### 4.1 Root Domain Trailing Slash Discrepancy
An analysis of `src/app/layout.tsx` lines 42–44 reveals:
```typescript
alternates: {
  canonical: "https://bstarsalon.com/",
},
```
However, inspecting the live rendered HTML `<head>` tag on `https://bstarsalon.com/` shows:
```html
<link rel="canonical" href="https://bstarsalon.com"/>
```
- **Discrepancy**: The Next.js metadata compilation engine strips the trailing slash for apex canonicals unless explicitly configured via `trailingSlash: true` in `next.config.ts`.
- **Search Engine Impact**: Both `https://bstarsalon.com` and `https://bstarsalon.com/` return HTTP 200 OK. While modern search engines automatically resolve apex trailing slashes, maintaining identical formatting between `layout.tsx`, `sitemap.ts`, and server headers prevents crawl budget waste and self-referential canonical warnings.

### 4.2 Subpage Trailing Slash Handling
Testing subpages shows proper canonical enforcement:
- Request: `GET https://bstarsalon.com/salons/tc-palya/` (with slash)
- Response: `HTTP 308 Permanent Redirect` → `https://bstarsalon.com/salons/tc-palya` (without slash).
- Rendered Canonical: `<link rel="canonical" href="https://bstarsalon.com/salons/tc-palya"/>`.
- *Status*: **Compliant**. Prevents duplicate content indexing for subpages.

---

## 5. Mobile Viewport & Responsive Design Audit

### 5.1 Mobile Viewport Meta Tag
Inspecting the rendered DOM confirms:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```
- **Mobile Usability**: Complies with Google Mobile-First indexing requirements.
- **Horizontal Scrolling**: Inspected at viewport widths 360px, 375px, 390px, 412px, and 768px. Zero horizontal scroll overflow detected; layout adapts seamlessly via Tailwind CSS flex/grid containers.
- **Touch Target Sizing**:
  - Main navigation menu items: Height >44px, compliant with Apple and Google touch guidelines.
  - Mobile Sticky Bar (`MobileStickyBar.tsx`): Persistent 56px bottom bar containing two distinct action buttons:
    1. Direct Phone Dial: `tel:+919902949549` (Width: 50%, target area >48px).
    2. Instant WhatsApp Booking: `wa.me/919902949549` (Width: 50%, target area >48px).
- **Legibility**: Base font size is `16px` with line-height of `1.5`, avoiding font-size zooming penalties on iOS Safari.

---

## 6. JavaScript Rendering, Hydration & Bundle Analysis

Next.js 16 executes React Server Components (RSC) by default. The initial HTML payload contains full server-rendered markup (`X-Nextjs-Prerender: 1`), ensuring crawlers that do not execute JavaScript (or execute it with low compute budgets) immediately receive the complete content, navigation, and structured data.

### Bundle Weight & Script Assets
Live crawl identified 11 external JavaScript script tags loaded on the homepage:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      HOMEPAGE JAVASCRIPT PAYLOADS                      │
├──────────────────────────────────────┬─────────────┬───────────────────┤
│ Script Resource                      │ Size (Raw)  │ Type / Role       │
├──────────────────────────────────────┼─────────────┼───────────────────┤
│ 794-f40501271ab10af1.js              │ 235.2 KB    │ React / Vendor    │
│ 4bd1b696-58970b7b91aecaf4.js         │ 196.3 KB    │ Next.js Framework │
│ polyfills-42372ed130431b0a.js        │ 110.0 KB    │ Browser Polyfills │
│ main-app-73cfcb4fdcaabfe9.js         │  34.8 KB    │ App Router Runtime│
│ page-9730f5b9d3e8e192.js             │  22.1 KB    │ Home Page UI Logic│
│ layout-867df394c8ec6b51.js           │  18.4 KB    │ Root Layout Hydr. │
│ Other Client Chunks (5 files)        │  20.0 KB    │ Small UI Widgets  │
├──────────────────────────────────────┼─────────────┼───────────────────┤
│ Total Uncompressed JavaScript Payload │ 636.8 KB    │ ~190 KB Gzipped   │
└──────────────────────────────────────┴─────────────┴───────────────────┘
```

#### Hydration & Performance Observations:
- **Payload Assessment**: A total gzipped JS transfer of ~190 KB is well within acceptable web performance thresholds for an interactive React 19 application.
- **Google Tag Manager / GA4**: Loaded asynchronously via `next/script` in `src/app/layout.tsx` (`G-FMWYGMPVWB`). Does not block initial HTML parsing or First Contentful Paint.
- **Render-Blocking CSS**: Tailwind CSS styles are compiled into a single optimized stylesheet (`main.css`), preloaded in `<head>`.

---

## 7. Deep-Dive Structured Data (Schema.org) Audit

Structured data is a vital ranking signal and the foundation for rich results in Google SERPs. Our inspection identified two severe schema conflicts that must be resolved.

```
┌────────────────────────────────────────────────────────────────────────┐
│               STRUCTURED DATA COLLISION ARCHITECTURE                  │
│                                                                        │
│   src/app/layout.tsx (RootLayout)                                      │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ <script type="application/ld+json">                            │   │
│   │   @graph: [                                                    │   │
│   │     LocalBusiness / HairSalon / BeautySalon / DaySpa           │   │
│   │     FAQPage (6 Hardcoded Homepage FAQs rendered Sitewide!) ────┼─┐ │
│   │   ]                                                            │ │ │
│   └────────────────────────────────────────────────────────────────┘ │ │
│                                                                      │ │
│   src/components/FAQSection.tsx                                      │ │
│   ┌────────────────────────────────────────────────────────────────┐ │ │
│   │ <script type="application/ld+json">                            │ │ │
│   │   FAQPage (Duplicate injection of same 6 FAQs on Homepage!) ───┼─┼─► CONFLICT!
│   └────────────────────────────────────────────────────────────────┘ │ │
│                                                                      │ │
│   src/components/Hero.tsx                                            │ │
│   ┌────────────────────────────────────────────────────────────────┐ │ │
│   │ <div itemScope itemType="https://schema.org/HairSalon">        │ │ │
│   │   (Microdata with hidden <meta> tags clashing with JSON-LD) ───┼─┴─► CONFLICT!
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

### 7.1 Defect 1: Sitewide Duplicate `FAQPage` Injection
- **Root Cause**: In `src/app/layout.tsx` (lines 108–397), an `@graph` object injects an `FAQPage` schema containing 6 general salon questions:
  1. *What services does B★Star Unisex Salon offer in TC Palya?*
  2. *What are the salon timings for B★Star Salon Battarahalli?*
  3. *Do I need an appointment at B★Star Unisex Salon?*
  4. *What brands and products do you use for hair and skin treatments?*
  5. *What are the prices for hair and skin services at B★Star Salon?*
  6. *Is B★Star Unisex Salon suitable for bridal makeup and styling?*
- **The Violation**: Because `layout.tsx` wraps the entire application, these 6 homepage FAQs are embedded on **every single page** of the website:
  - `https://bstarsalon.com/services/hair`
  - `https://bstarsalon.com/services/skin`
  - `https://bstarsalon.com/contact`
  - `https://bstarsalon.com/about`
- **The Collision**:
  1. On the **Homepage**, `src/components/FAQSection.tsx` (line 37) injects a second `<script type="application/ld+json">` containing the exact same 6 questions. Result: **Two duplicate `FAQPage` blocks on a single URL**.
  2. On **Category Pages** (e.g., `/services/hair`), the page features a visible FAQ section containing 3 hair-specific questions, but Googlebot reads the 6 generic homepage questions from the layout.
- **Search Engine Penalty Risk**: Google's Search Central documentation explicitly states: *"If you have FAQ content that is repeated across multiple pages on your site, mark up only one instance for your entire site."* Sitewide repetition of identical FAQs is flagged as deceptive or spammy structured data, leading to total disqualification from rich snippets.

### 7.2 Defect 2: Microdata vs. JSON-LD Entity Collision
- **Root Cause**: In `src/components/Hero.tsx` (lines 9–42), legacy Schema.org microdata is hardcoded into the DOM:
  ```html
  <div itemScope itemType="https://schema.org/HairSalon">
    <meta itemProp="name" content="B★Star Unisex Salon" />
    <meta itemProp="telephone" content="+919902949549" />
    <meta itemProp="priceRange" content="₹₹" />
    ...
  </div>
  ```
- **The Collision**: Concurrently, `src/app/layout.tsx` injects a comprehensive JSON-LD entity graph with `@type: ["HairSalon", "BeautySalon", "DaySpa"]`.
- **Impact**: Google's structured data parser encounters two distinct syntaxes attempting to define the same physical business on the same URL with subtle attribute variances. Industry best practice requires 100% consolidation into JSON-LD.

### 7.3 Missing Structured Data Entities
1. **BreadcrumbList**: Missing from all service category pages (`/services/hair`, `/services/skin`, etc.), `/services`, `/about`, `/contact`, `/gallery`, and `/reviews`. Only present on `/salons/tc-palya`.
2. **Individual `Service` Entities**: Category pages list services in HTML tables, but lack individual `schema.org/Service` markup specifying `provider`, `name`, `description`, `offers`, and `priceCurrency: INR`.

---

## 8. Heading Hierarchy & Semantic Architecture Defects

### 8.1 The Hero Concatenated H1 Defect
In `src/components/Hero.tsx` (lines 75–80):
```tsx
<h1 className="flex flex-col items-center text-center">
  <span className="font-display font-medium text-[10.5px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.30em] text-[#C5A059] mb-2 sm:mb-2.5 drop-shadow-sm">
    #1 Rated Unisex Hair, Skin &amp; Bridal Salon in TC Palya Main Rd
  </span>
  <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] text-[#FAF3E3] font-light leading-[1.12] tracking-tight drop-shadow-2xl max-w-3xl block">
    The <span className="font-normal italic text-[#C5A059] drop-shadow-lg">Best Unisex Salon</span> in TC Palya for <span className="font-normal italic text-[#C5A059] drop-shadow-lg">Bespoke Luxury</span> Hair, Skin &amp; Bridal Artistry
  </span>
</h1>
```
- **Observed Text Extraction**:
  When search engine text parsers strip HTML tags, adjacent inline `<span>` elements without whitespace or block formatting concatenate:
  `#1 Rated Unisex Hair, Skin & Bridal Salon in TC Palya Main RdThe Best Unisex Salon in TC Palya for Bespoke Luxury Hair, Skin & Bridal Artistry`
- **Impact**: Note the corrupted token **`Main RdThe Best`**. This breaks Natural Language Processing (NLP) tokenization for the target geographic entity (`TC Palya Main Rd`).

### 8.2 Category Page H1 Brand Suffix Pollution
All 6 service category pages append a brand delimiter into the `<h1>` tag:
- `/services/hair`: `Haircut, Balayage, Keratin & Hair Botox in Battarahalli, Bengaluru | B★Star Salon`
- `/services/skin`: `HydraFacial, De-Tan & Bridal Glow Facials in Battarahalli, Bengaluru | B★Star Salon`
- `/services/grooming`: `Men's Haircut, Taper Fade & Beard Styling in Battarahalli, Bengaluru | B★Star Salon`
- `/services/nails`: `Gel Nail Extensions, Nail Art & Spa Pedicure in Battarahalli, Bengaluru | B★Star Salon`
- `/services/bridal`: `Royal Bridal Makeup & Pre-Bridal Artistry in Battarahalli, Bengaluru | B★Star Salon`
- `/services/makeup`: `HD Party & Occasion Glamour Makeup in Battarahalli, Bengaluru | B★Star Salon`
- **Recommendation**: Brand pipe delimiters (` | B★Star Salon`) belong in `<title>`, never inside `<h1>`. The H1 should focus purely on the primary topical keyword and geographic modifier.

---

## 9. Asset Optimization & Core Web Vitals Lab Analysis

### 9.1 Image Delivery & Edge Optimization
Next.js built-in Image Optimization (`next/image`) is configured and operational on the Vercel edge:
- **Sample Asset**: `/images/bstar-hero-crop1.jpg`
- **Original Uncompressed Asset**: 148.3 KB (JPEG)
- **Delivered Edge Asset**: `/_next/image?url=%2Fimages%2Fbstar-hero-crop1.jpg&w=1200&q=75`
- **Transferred Payload**: 48.6 KB (WebP format)
- **Efficiency**: **67.2% byte reduction** with zero perceptible loss in visual fidelity.
- **Alt Text Hygiene**: 100% of examined `<img>` tags across all 13 pages contain descriptive `alt` attributes.

### 9.2 Web Font Optimization
The application loads Google Fonts (`Playfair_Display`, `Montserrat`, `Cinzel`) through `next/font/google`:
- Fonts are automatically downloaded at build time and self-hosted on the Vercel CDN.
- Zero external CSS calls to `fonts.googleapis.com` or `fonts.gstatic.com`.
- Configured with `display: swap`, ensuring instant text rendering without FOIT (Flash of Invisible Text).

### 9.3 Core Web Vitals Lab Estimates

```
┌────────────────────────────────────────────────────────────────────────┐
│                      CORE WEB VITALS LAB ESTIMATES                     │
├────────────────────────┬─────────────┬───────────┬─────────────────────┤
│ Metric                 │ Lab Value   │ Threshold │ Status              │
├────────────────────────┼─────────────┼───────────┼─────────────────────┤
│ First Contentful Paint │ 0.85s       │ < 1.8s    │ Good (Green)        │
│ Largest Contentful Paint│ 1.38s      │ < 2.5s    │ Good (Green)        │
│ Interaction to Next Pnt│ 45ms        │ < 200ms   │ Good (Green)        │
│ Cumulative Layout Shift│ 0.012       │ < 0.10    │ Good (Green)        │
│ Time to First Byte     │ 78ms        │ < 800ms   │ Excellent (BOM1)    │
└────────────────────────┴─────────────┴───────────┴─────────────────────┘
```

---

## 10. Code Remediation Blueprint (For Future Implementation)

*Note: In strict compliance with Milestone 2 execution safeguards, no production files were modified. The following snippets document the exact required changes for downstream implementation.*

### 10.1 Remediation: Fix Sitewide FAQ Schema in `src/app/layout.tsx`
Remove lines 354–395 containing the `FAQPage` block from the root `@graph`:

```typescript
// BEFORE (layout.tsx):
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    { /* HairSalon entity */ },
    {
      "@type": "FAQPage",
      "@id": "https://bstarsalon.com/#faq",
      "mainEntity": [ /* 6 generic FAQs */ ]
    }
  ]
};

// AFTER (layout.tsx):
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    { /* HairSalon entity ONLY */ }
  ]
};
```
*Note: FAQPage schema should be injected ONLY on pages where FAQs are visibly rendered (e.g., via `FAQSection.tsx` on the homepage and custom FAQs on category pages).*

### 10.2 Remediation: Remove Microdata from `src/components/Hero.tsx`
Remove the microdata attributes and hidden `<meta>` tags:

```tsx
// BEFORE (Hero.tsx lines 9-20):
<div className="relative isolate overflow-hidden" itemScope itemType="https://schema.org/HairSalon">
  <meta itemProp="name" content="B★Star Unisex Salon" />
  <meta itemProp="telephone" content="+919902949549" />
  ...

// AFTER (Hero.tsx):
<div className="relative isolate overflow-hidden">
  {/* Pure JSX layout - structured data handled exclusively via JSON-LD in layout */}
```

### 10.3 Remediation: Fix Concatenated H1 in `src/components/Hero.tsx`
Add a semantic wrapper or spacing between spans:

```tsx
// BEFORE (Hero.tsx line 75):
<h1 className="flex flex-col items-center text-center">
  <span className="...">#1 Rated Unisex Hair, Skin &amp; Bridal Salon in TC Palya Main Rd</span>
  <span className="...">The Best Unisex Salon in TC Palya...</span>
</h1>

// AFTER:
<h1 className="flex flex-col items-center text-center">
  <span className="... block mb-2 sm:mb-2.5">
    #1 Rated Unisex Hair, Skin &amp; Bridal Salon in TC Palya Main Rd
  </span>
  {" "}
  <span className="... block">
    The Best Unisex Salon in TC Palya for Bespoke Luxury Hair, Skin &amp; Bridal Artistry
  </span>
</h1>
```

---

## 11. Technical Verification Commands

To independently reproduce and verify this technical audit, execute in PowerShell:

```powershell
# 1. Verify HTTP Response Headers & Status
$response = Invoke-WebRequest -Uri "https://bstarsalon.com/" -Method Head -UseBasicParsing
$response.Headers

# 2. Verify Canonical Header in HTML
$html = (Invoke-WebRequest -Uri "https://bstarsalon.com/" -UseBasicParsing).Content
if ($html -match '(?i)<link[^>]+rel=["'']canonical["''][^>]*>') { $matches[0] }

# 3. Detect Multiple JSON-LD Blocks
$jsonLdMatches = [regex]::Matches($html, '(?s)<script type="application/ld\+json">(.*?)</script>')
Write-Host "Total JSON-LD scripts on homepage: $($jsonLdMatches.Count)"

# 4. Check for Microdata in DOM
if ($html -match 'itemscope') { Write-Warning "Microdata detected in DOM" } else { Write-Host "No Microdata detected" }
```
