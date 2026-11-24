# Technical & On-Page SEO Audit Template — `https://www.funngro.com/`

> **Audit Integrity Notice:** This document is a structured technical SEO audit template for the live production website (`https://www.funngro.com/`). No Lighthouse scores, crawl findings, or Core Web Vitals metrics have been fabricated or assumed. All unmeasured checks are explicitly marked **`[Pending Verification]`** until executed against the live domain with real browser and crawler tooling.

---

## 1. Audit Metadata & Tooling Checklist

- **Target Domain:** `https://www.funngro.com/`
- **Key Landing Paths to Inspect:** `/`, `/company`, `/teen` (plus active production equivalents)
- **Audit Status:** `[Pending Verification]`
- **Recommended Verification Tools:**
  - Google Lighthouse (Desktop & Mobile presets, Incognito)
  - PageSpeed Insights / CrUX field data (if available)
  - Screaming Frog SEO Spider or Sitebulb (HTML crawl & JS-rendered crawl comparison)
  - Google Rich Results Test & Schema Markup Validator
  - axe DevTools / WAVE / Keyboard-only navigation inspection

---

## 2. On-Page SEO Review (`[Pending Verification]`)

| Check | Scope / Question | Status | Notes / Findings |
| :--- | :--- | :--- | :--- |
| **Title Tags** | Unique `<title>` per page (30–60 chars), clear brand + intent separation between Company and Teen audiences | `[Pending Verification]` | Measure exact character count and truncation in SERP preview |
| **Meta Descriptions** | Unique compelling summary (120–160 chars) per route with clear call to action | `[Pending Verification]` | Verify absence of duplicate or missing descriptions |
| **Heading Hierarchy (`H1`–`H3`)** | Single semantic `<h1>` per page; sequential `<h2>`/`<h3>` nesting without skipped levels | `[Pending Verification]` | Inspect DOM heading outline on `/` and subpages |
| **Keyword & Intent Alignment** | Clear separation between B2B hiring intent (Company) and student project/earning intent (Teen) | `[Pending Verification]` | Check cannibalisation risk across overlapping pages |
| **Internal Linking & Anchor Text** | Descriptive anchor text connecting Company, Teen, FAQ, and app download pages | `[Pending Verification]` | Audit navigation menus, footer links, and contextual CTAs |
| **Image `alt` Attributes** | Descriptive, non-empty `alt` text on informative graphics; `alt=""` on decorative assets | `[Pending Verification]` | Crawl all `<img>` elements via Screaming Frog / DOM check |

---

## 3. Technical SEO Review (`[Pending Verification]`)

| Check | Scope / Question | Status | Notes / Findings |
| :--- | :--- | :--- | :--- |
| **Indexability & `robots.txt`** | Valid `/robots.txt` without unintended `Disallow` rules blocking JS/CSS or primary routes | `[Pending Verification]` | Inspect `https://www.funngro.com/robots.txt` directly |
| **XML Sitemap** | Clean `sitemap.xml` returning HTTP `200`, listing canonical `200` URLs only | `[Pending Verification]` | Verify presence and `<lastmod>` / canonical parity |
| **Canonical Tags** | Self-referencing `<link rel="canonical">` tags on each indexable route; consistent `www` vs apex handling | `[Pending Verification]` | Check HTTP redirects (`301` vs `302` chains) |
| **Rendering & Crawlability** | Critical copy and links present in initial HTML response (SSR/SSG/prerender) vs client-only JS hydration | `[Pending Verification]` | Compare `curl` raw HTML against rendered DOM |
| **Structured Data (JSON-LD)** | Valid `Organization`, `Service`, `MobileApplication`, and `FAQPage` schemas without validation errors | `[Pending Verification]` | Test routes in Google Rich Results Test |
| **Open Graph & Twitter Cards** | Complete `og:title`, `og:description`, `og:image`, `og:url`, and `twitter:card` tags per route | `[Pending Verification]` | Validate social previews |
| **Broken Links & Status Codes** | Zero internal `404` / `5xx` responses; external store links return valid `200` | `[Pending Verification]` | Full spider crawl required |

---

## 4. Mobile Responsiveness & UX (`[Pending Verification]`)

| Check | Scope / Question | Status | Notes / Findings |
| :--- | :--- | :--- | :--- |
| **Viewport Configuration** | `<meta name="viewport" content="width=device-width, initial-scale=1">` present without `user-scalable=no` | `[Pending Verification]` | Inspect `<head>` |
| **Horizontal Overflow** | Zero horizontal scrollbars at `360px` and `390px` mobile widths | `[Pending Verification]` | Test all sections, carousels, and tables |
| **Tap Target Sizing** | Interactive buttons, nav links, and store badges meet $\ge 44\times 44\text{px}$ spacing guidelines | `[Pending Verification]` | Audit mobile nav drawer and footer links |
| **Mobile Navigation Usability** | Drawer opens/closes cleanly via touch and keyboard with clear active route feedback | `[Pending Verification]` | Manual device + DevTools check |

---

## 5. Accessibility (WCAG 2.1 AA) (`[Pending Verification]`)

| Check | Scope / Question | Status | Notes / Findings |
| :--- | :--- | :--- | :--- |
| **Color Contrast** | Body text $\ge 4.5:1$ and large headings/UI controls $\ge 3:1$ across dark and light surfaces | `[Pending Verification]` | Run axe-core contrast scan |
| **Keyboard & Focus Order** | Visible `:focus-visible` outlines, logical Tab order, and functioning Skip-to-Content link | `[Pending Verification]` | Test full page keyboard traversal |
| **Semantic Landmarks & ARIA** | Proper `<header>`, `<nav>`, `<main>`, `<footer>`, `<button>` controls, and `aria-expanded` on FAQ accordions | `[Pending Verification]` | Audit accessibility tree |
| **Reduced Motion Support** | Animations respect `prefers-reduced-motion: reduce` | `[Pending Verification]` | Verify media query & motion config |

---

## 6. Performance & Core Web Vitals (`[Pending Verification]`)

> **Measured Scores:** `[Pending Verification — Run Lighthouse / PageSpeed Insights against live URL]`

| Metric | Target Threshold | Mobile Result | Desktop Result | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | $\le 2.5\text{s}$ | `[Pending Verification]` | `[Pending Verification]` | Inspect hero image priority & compression |
| **Interaction to Next Paint (INP)** | $\le 200\text{ms}$ | `[Pending Verification]` | `[Pending Verification]` | Profile main-thread JS & third-party scripts |
| **Cumulative Layout Shift (CLS)** | $\le 0.1$ | `[Pending Verification]` | `[Pending Verification]` | Check explicit dimensions/aspect ratios on images & embeds |
| **First Contentful Paint (FCP)** | $\le 1.8\text{s}$ | `[Pending Verification]` | `[Pending Verification]` | Review font loading (`font-display: swap`) & render-blocking CSS/JS |
| **Lighthouse Performance Score** | $\ge 90$ | `[Pending Verification]` | `[Pending Verification]` | Record 3-run median in clean browser session |

---

## 7. Identified Issues Template (To Populate During Live Audit)

Record verified observations only after running the tools above:

1. **`[Issue ID-01 — Pending Verification]`**: *[Describe exact URL, observed behaviour, and tool evidence here]*
2. **`[Issue ID-02 — Pending Verification]`**: *[Describe exact URL, observed behaviour, and tool evidence here]*
3. **`[Issue ID-03 — Pending Verification]`**: *[Describe exact URL, observed behaviour, and tool evidence here]*

---

## 8. Recommended Improvements (Applied in This Redesign)

Regardless of live baseline numbers, the following architectural best practices are implemented directly in this redesign codebase (`src/`):

1. **Prerendered Semantic HTML per Route:** Static build-time HTML generation for `/company` and `/teen` ensures search crawlers immediately receive full copy, headings, canonical links, and JSON-LD without waiting for client hydration.
2. **Strict Heading & Landmark Hierarchy:** One clear `<h1>` per route (`clamp(2.25rem, 4vw, 3.75rem)`), sequential `<h2>`/`<h3>` structure, `<header>`, `<nav>`, `<main>`, and `<footer>` landmarks.
3. **Distinct Audience Metadata & Structured Data:** Dedicated route titles, 120–160 character meta descriptions, Open Graph tags, and Schema.org `Organization`, `Service`, `MobileApplication`, and `FAQPage` blocks.
4. **Core Web Vitals Discipline:** Aspect-locked media containers (`MediaFrame`) preventing layout shifts, `loading="eager"` on above-the-fold hero imagery, `loading="lazy"` below the fold, `font-display: swap` web fonts, and GPU-composited animations respecting `prefers-reduced-motion`.
5. **Accessible Interactive Controls:** Native `<button>` controls with `aria-expanded` / `aria-pressed` states, validated form error associations (`aria-invalid` + `aria-describedby`), and $\ge 44\text{px}$ mobile touch targets.
