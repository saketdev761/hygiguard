# AGENTS.md — HygiGuard Solutions

This file is the source of truth for any AI agent (Claude, Cursor, Copilot, etc.) working on this codebase.
Read this fully before making any changes.

---

## Project Overview

**Business:** HygiGuard Solutions — Professional doorstep cleaning services in Lucknow, UP, India.
**Website:** https://hygiguardsolutions.com
**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Vercel
**Purpose:** Lead generation website — primary CTAs are WhatsApp and phone calls.

---

## Folder Structure

```
app/
  layout.tsx              # Root layout — metadata, schemas, GA, WhatsApp float
  page.tsx                # Homepage
  sitemap.ts              # Auto-generates /sitemap.xml
  robots.ts               # Crawl rules for Google
  about/
    page.tsx              # About page — GEO entity description
  services/
    page.tsx              # All services listing
    [slug]/
      page.tsx            # Dynamic service page — handles both:
                          #   /services/sofa-cleaning (default)
                          #   /services/sofa-cleaning-lucknow (city variant)
  contact/
    page.tsx

components/
  ui/                     # Reusable UI primitives (Button, Card, etc.)
  FAQSchema.tsx           # Injects FAQPage JSON-LD schema
  ServiceSchema.tsx       # Injects Service JSON-LD schema
  WhatsAppFloat.tsx       # Fixed floating WhatsApp button

lib/
  site.ts                 # ⭐ SINGLE SOURCE OF TRUTH — all business data lives here
  cities.ts               # City list + parseServiceAndCity() helper

public/
  logo.svg
  og-image.jpg            # 1200x630px — used for Open Graph
```

---

## Source of Truth — `lib/site.ts`

**Never hardcode business data in components.** Everything comes from `lib/site.ts`:

|

## Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

---

## Environment Variables

```env
# .env.local
RESEND_API_KEY=your_resend_api_key       # Email sending via Resend
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           # Google Analytics
```

Never commit `.env.local` to git.
Rotate `RESEND_API_KEY` if it has ever been exposed in code or chat.

---

## Done Checklist (Before Launch)

- [ ] `RESEND_API_KEY` rotated and stored in Vercel environment variables
- [ ] Domain `hygiguardsolutions.com` verified in Resend
- [ ] `og-image.jpg` created (1200x630px)
- [ ] Google Search Console — domain added and verified
- [ ] `sitemap.xml` submitted to Search Console
- [ ] Google Business Profile created and verified
- [ ] All service pages rendering `FAQSchema` and `ServiceSchema`
- [ ] All images have descriptive `alt` text from `site.ts`
- [ ] `robots.ts` deployed and accessible at `/robots.txt`
- [ ] GA4 property created and `G-XXXXXXXXXX` replaced in layout
