# Funngro Website Redesign — Skill Assessment Submission

> **Disclaimer:** This is an **unofficial website redesign** of Funngro created solely as a frontend development, UI/UX design, and technical SEO skill assessment. All project cards on the `/teen` route are explicitly labelled as **Illustrative Examples**, and no fabricated testimonials, statistics, or earnings guarantees are included.

## Overview

A production-structured, two-page web application built with **React, Vite, Tailwind CSS, Framer Motion, Aceternity UI components, Lucide React, and React Router**, featuring static build-time prerendering for crawlable SEO.

### Primary Routes

- **`/company` (`CompanyPage`)**:
  - Hero section presenting supervised youth talent for digital sprints
  - Asymmetric Bento Grid highlighting business benefits (`01.`–`04.`)
  - Interactive capability tabs across Web & App Development, Content & Video Creation, Digital Marketing & Social, and Software Testing & Research
  - Step-by-step hiring workflow and business campaign opportunities
  - Accessible interactive FAQ accordion
  - Client-side validated project brief inquiry form
- **`/teen` (`TeenPage`)**:
  - Hero section introducing real-world project tracks without fabricated earnings claims
  - Four-step "How Funngro Works" sequence
  - Interactive category filter across Website Development, App Development, Content Creation, Software Testing, and Marketing
  - Clearly labelled **Illustrative Example** project cards
  - Real-world project benefits, Teen/Parent FAQ accordion, and verified official Funngro Google Play / Apple App Store links

## Technical SEO & Prerendering Architecture

- **Build-Time Static Prerendering**: `npm run build` executes Vite client bundling followed by a lightweight React `renderToString` pass (`src/entry-server.tsx` + `scripts/prerender.mjs`) to output complete crawlable HTML at `dist/index.html`, `dist/company/index.html`, and `dist/teen/index.html`.
- **Dynamic Route Metadata (`src/components/SeoHead.tsx` & `src/lib/seo.ts`)**: Updates `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph, Twitter cards, and Schema.org JSON-LD (`Organization`, `Service`, `MobileApplication`, `FAQPage`).
- **Crawler Files**: `/public/robots.txt` and `/public/sitemap.xml`.
- **Vercel Routing**: `/vercel.json` configures SPA fallback rewrites alongside static security and asset cache headers.

## Project Structure

```text
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── prerender.mjs
├── src/
│   ├── assets/images/          # Optimised local visual assets
│   ├── components/
│   │   ├── aceternity/         # BackgroundBeams, BentoGrid, CardSpotlight, Spotlight
│   │   ├── FaqAccordion.tsx
│   │   ├── Footer.tsx
│   │   ├── MediaFrame.tsx
│   │   ├── Navbar.tsx
│   │   └── SeoHead.tsx
│   ├── data/
│   │   ├── companyData.ts
│   │   └── teenData.ts
│   ├── lib/
│   │   ├── filters.ts          # Project filter & form validation logic
│   │   ├── rules.test.ts       # Unit tests (node:test)
│   │   ├── seo.ts              # Route metadata & JSON-LD builders
│   │   └── utils.ts
│   ├── pages/
│   │   ├── CompanyPage.tsx
│   │   └── TeenPage.tsx
│   ├── App.tsx
│   ├── entry-server.tsx
│   ├── index.css
│   └── main.tsx
├── SEO-AUDIT.md
├── vercel.json
└── vite.config.ts
```

## Local Setup & Commands

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start development server** (port `3000`):
   ```bash
   npm run dev
   ```
3. **Run unit tests**:
   ```bash
   npx tsx --test src/lib/rules.test.ts
   ```
4. **Type-check & production build (with static prerendering)**:
   ```bash
   npm run lint
   npm run build
   npm run preview
   ```

## Deploying to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket, or deploy directly with the Vercel CLI (`vercel --prod`).
2. Vercel automatically detects Vite (`Build Command: npm run build`, `Output Directory: dist`).
3. `vercel.json` handles route rewrites so `/company`, `/teen`, and prerendered HTML files resolve cleanly without 404 errors.
4. Update the canonical domain in `public/robots.txt`, `public/sitemap.xml`, `src/lib/seo.ts`, and `src/entry-server.tsx` to match your deployed domain before final indexing.
