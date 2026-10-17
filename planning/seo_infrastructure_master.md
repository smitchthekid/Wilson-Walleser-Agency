# Wilson + Walleser Agency SEO and Infrastructure Master Plan

## 00. Index and Overview

This document adapts and establishes the production SEO, crawlability, indexing, analytics, and deployment infrastructure plan for the Wilson + Walleser Digital Marketing Agency website.

### Core Ecosystem
- Canonical Domain: Production agency domain (e.g., `wilson-walleser.com` or configured custom domain).
- Hosting: Cloudflare Pages / Cloudflare Assets via Wrangler.
- Tech Stack: Vite + React 18 + TypeScript (Single-Page App with static markdown blog ingestion).
- Lead Conversion Model: Agency consultation requests, service inquiries, direct contact clicks, and thought-leadership subscribers.

### Module Breakdown
1. 01_TECHNICAL_SEO_CHECKLIST: Crawlability, indexability, metadata, redirects, structured data, and sitemap hygiene.
2. 02_INFRASTRUCTURE_AND_HOSTING_PLAN: Cloudflare Pages DNS, SSL/TLS Full (Strict), host normalization, and security headers.
3. 03_ANALYTICS_AND_CONVERSION_TAGGING_PLAN: GA4, GTM, lead event schemas, conversion hierarchy, and UTM tracking standards.
4. 04_SEARCH_CONSOLE_AND_INDEXING_OPERATIONS: Property setup, verification, sitemap submission, noindex controls, and monitoring routines.
5. 05_SITE_ARCHITECTURE_AND_CONTENT_PILLARS: Service silos, blog topic clusters, internal linking blueprint, and commercial conversion paths.
6. 06_90_DAY_IMPLEMENTATION_ROADMAP: Phased execution plan from pre-launch foundation through ongoing monthly optimization.

---

## 01. Technical SEO Checklist

### Primary Objective
Ensure all public agency pages are fully discoverable, crawlable, quickly rendered, and semantically unambiguous to search engines while driving qualified lead inquiries.

### Domain and Protocol Normalization
- [ ] Root canonical URL returns HTTP 200 over HTTPS.
- [ ] Insecure HTTP requests redirect to HTTPS using HTTP 301.
- [ ] Non-canonical hostname (www vs apex) redirects to the canonical host using HTTP 301.
- [ ] Redirects are single-hop with zero redirect loops.
- [ ] Trailing slash convention is standardized (consistently non-trailing slash across internal links and canonical tags).

### Rendering and Prerendering Architecture
- [ ] Address client-side SPA rendering limitation: Ensure search bots do not receive a blank `<div id="root"></div>` shell without metadata or body copy.
- [ ] Evaluate and implement static HTML prerendering or SSG (Static Site Generation) at build time for `/`, `/services`, `/services/:slug`, `/blog`, and `/blog/:slug`.
- [ ] Rendered source contains the primary H1, critical descriptive copy, self-referencing canonical tag, and Open Graph tags before client-side JavaScript executes.
- [ ] Internal links use standard HTML anchor tags (`<a href="...">`) rather than JavaScript-only onClick handlers.

### Metadata Standardization
Every public indexable page must contain:
- [ ] Unique, descriptive `<title>` tag (50-60 characters, brand suffix included).
- [ ] Unique `<meta name="description">` (140-160 characters, clear value proposition and CTA).
- [ ] Self-referencing `<link rel="canonical">` tag using the absolute HTTPS canonical URL.
- [ ] Open Graph metadata: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`.
- [ ] Twitter card metadata: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`.
- [ ] Viewport declaration: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- [ ] HTML language declaration: `<html lang="en">`.

### Canonicalization and URL Hygiene
- [ ] Clean URLs without hash fragments (`/#/services` must not be used for indexable routes).
- [ ] Old WordPress URLs from migrated content retain slugs or have explicit 301 redirect rules mapped in `_redirects` or Cloudflare Pages configuration.
- [ ] Parameterized query strings (tracking codes, filters) canonicalize to clean paths.

### Crawl and Sitemap Controls
- [ ] `robots.txt` exists at `/robots.txt` with sitemap reference.
- [ ] API, preview, admin, and staging routes are disallowed in `robots.txt`.
- [ ] Utility pages (e.g., submission confirmation/thank-you pages) use `<meta name="robots" content="noindex, follow">`.
- [ ] XML sitemap (`/sitemap.xml`) is generated dynamically or at build time.
- [ ] Sitemap contains only canonical, HTTP 200, published pages.
- [ ] Sitemap excludes drafts (`status: draft`), 404 pages, utility routes, and redirect targets.

### Structured Data (JSON-LD)
- [ ] Homepage: `ProfessionalService` or `Organization`, `WebSite`, with founder profiles, service areas, and contact endpoints.
- [ ] Service Detail Pages: `Service` schema linking to the provider `Organization`, including name, description, and service category.
- [ ] Blog Post Pages: `Article` or `BlogPosting` schema including headline, image, datePublished, dateModified, author, and publisher.
- [ ] Breadcrumb Lists: `BreadcrumbList` schema on nested pages (`/services/:slug` and `/blog/:slug`).
- [ ] FAQ Sections: `FAQPage` schema on services or homepage where question-answer blocks are present.

### Core Web Vitals and Performance
- [ ] Cloudflare caching headers configured for immutable assets (hashed JS, CSS, images).
- [ ] Images served in modern compressed formats (WebP/AVIF) with explicit width and height attributes to eliminate layout shift (CLS).
- [ ] Google Fonts and external resources loaded efficiently or self-hosted to minimize Largest Contentful Paint (LCP).
- [ ] Third-party scripts (GTM, analytics) deferred and non-blocking.

---

## 02. Infrastructure and Hosting Plan

### Hosting Environment
- Platform: Cloudflare Pages / Assets via Wrangler.
- Output Directory: `./dist`.
- Routing: Single-page application fallback configured via `wrangler.json` (`not_found_handling: "single-page-application"`).

### DNS and SSL/TLS Policy
- DNS Provider: Cloudflare.
- Proxy Status: Orange-cloud (proxied) to benefit from Cloudflare CDN caching, DDoS protection, edge redirects, and Web Analytics.
- SSL/TLS Encryption Mode: Full (Strict) ensuring end-to-end encrypted transit.
- Edge Rules: Enable "Always Use HTTPS" and automatic HTTPS rewrites.
- HTTP Strict Transport Security (HSTS): Enable once canonical domain routing is fully tested.

### Edge Redirect Rules
Configure via Cloudflare Page Rules or Cloudflare Redirect Rules:
- Apex to WWW (or WWW to Apex, selecting one canonical pattern):
  - Rule: `http://www.wilson-walleser.com/*` -> `https://wilson-walleser.com/$1` (HTTP 301)
  - Rule: `https://www.wilson-walleser.com/*` -> `https://wilson-walleser.com/$1` (HTTP 301)
- Legacy WordPress Redirects:
  - Any previous blog permalinks that changed format should map directly to `/blog/:slug` via HTTP 301.

### Security and Header Configuration
Add production response headers via `public/_headers`:
```text
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## 03. Analytics and Conversion Tagging Plan

### Measurement Strategy
An agency marketing site must prioritize high-intent lead conversion events over vanity engagement. Measurement is structured using Google Tag Manager (GTM) and Google Analytics 4 (GA4).

### Architecture
- Google Tag Manager Container: Centralized deployment across all site routes.
- GA4 Property: Dedicated stream for production agency domain.
- Optional: Direct integrations or webhooks for CRM intake (e.g., email notification, HubSpot, Formspree).

### Core Page Parameters
Every `page_view` event should carry:
- `page_location`: Full canonical URL.
- `page_path`: Clean route path.
- `site_section`: `home`, `services`, `blog`, `about`, `contact`.
- `page_type`: `homepage`, `service_directory`, `service_detail`, `blog_directory`, `blog_article`.
- `content_slug`: Slug identifier for dynamic pages.

### Conversion Hierarchy

#### Primary Conversions (Agency Revenue Drivers)
- `contact_form_submit`: User successfully submits the primary contact/consultation form.
- `service_inquiry_submit`: User submits an inquiry directly from a specific service page.
- `consultation_booking_click`: User clicks an external calendar booking link (e.g., Calendly/SavvyCal).

#### Secondary Conversions (High-Intent Engagement)
- `email_click`: User clicks a `mailto:` link for founder or general inboxes.
- `phone_click`: User clicks a `tel:` link.
- `service_cta_click`: User clicks a "Work with us" or "Get a proposal" button on a service or post page.
- `article_to_service_click`: User transitions from an editorial blog post to a related service page.
- `scroll_depth_75`: Reading engagement on long-form thought-leadership pieces.

### Event Parameter Schema
```text
event_name: contact_form_submit
  - form_id: string
  - service_interest: string (e.g., "SEO", "PPC", "Web Design", "General")
  - page_source: string

event_name: service_cta_click
  - cta_text: string
  - cta_location: header | footer | body | sidebar
  - target_service: string

event_name: article_to_service_click
  - source_article_slug: string
  - destination_service_slug: string
```

### UTM Standardization
Standard query parameters for incoming campaigns and partner referrals:
- `utm_source`: traffic source (e.g., `linkedin`, `google`, `newsletter`).
- `utm_medium`: marketing medium (e.g., `organic_social`, `cpc`, `referral`, `email`).
- `utm_campaign`: campaign identifier (e.g., `spring_agency_audit_2026`).
- `utm_content`: specific link or ad creative variant.

---

## 04. Search Console and Indexing Operations Plan

### Search Console Configuration
1. Create a Google Search Console Domain Property:
   - Covers all subdomains and protocol variants.
   - Verified via Cloudflare DNS TXT record.
2. Create a URL-Prefix Property for `https://wilson-walleser.com/` for granular URL inspection and sitemap submission.

### XML Sitemap Submission
- Publish sitemap at `https://wilson-walleser.com/sitemap.xml`.
- Submit primary sitemap in GSC immediately following deployment.
- Maintain dedicated child sitemaps if content volume grows:
  - `sitemap-pages.xml` (Core marketing and service pages)
  - `sitemap-blog.xml` (Published articles)

### Recommended robots.txt Configuration
```txt
User-agent: *
Allow: /

Disallow: /api/
Disallow: /dist/

Sitemap: https://wilson-walleser.com/sitemap.xml
```

### Ongoing Indexing Maintenance Routines

#### Weekly Checks
- Verify zero unintended 404 errors or crawl failures.
- Check "Pages" indexing report for "Crawled - currently not indexed" or "Discovered - currently not indexed".
- Verify that newly published blog posts are submitted and picked up by Googlebot.

#### Monthly Reviews
- Analyze impressions vs. clicks to identify high-potential queries in positions 8-20.
- Update page title tags and meta descriptions for pages with low CTR despite strong rankings.
- Ensure all published articles have internal links passing equity to core service landing pages.

---

## 05. Site Architecture and Content Pillars

### Information Architecture
```text
/ (Homepage)
├── /services (Services Directory)
│   ├── /services/search-engine-optimization
│   ├── /services/paid-media-management
│   ├── /services/content-strategy
│   └── /services/conversion-rate-optimization
├── /blog (Blog Hub with Search)
│   ├── /blog/post-1 (Migrated WordPress post)
│   ├── /blog/post-2
│   └── /blog/:slug
└── /contact (or Homepage #contact section)
```

### Pillar-Cluster Content Strategy
To establish agency authority and drive high-intent inquiries, content is structured around core commercial capabilities:

#### Pillar 1: Organic Growth and Technical SEO
- Target Core Service: SEO Strategy and Technical Execution.
- Cluster Topics: Technical site audits, Core Web Vitals optimization, local SEO for multi-location brands, semantic structured data.
- Conversion Goal: Organic Audit Request.

#### Pillar 2: Paid Acquisition and Performance Marketing
- Target Core Service: Paid Media Management (Google Ads, Meta Ads).
- Cluster Topics: ROAS optimization, conversion tracking setup, creative testing frameworks, retargeting funnels.
- Conversion Goal: Paid Media Account Review.

#### Pillar 3: Conversion Rate Optimization and Web Experience
- Target Core Service: Web Design, Strategy, and Conversion Optimization.
- Cluster Topics: Friction reduction, checkout optimization, high-converting landing page layouts, value proposition messaging.
- Conversion Goal: Strategy Call.

### Editorial Linking Formula
Every blog post must follow an internal linking standard:
1. One contextual link to the most relevant `/services/:slug` page with actionable anchor text.
2. Two links to related educational or case study articles.
3. One closing CTA linking to the consultation form.

---

## 06. 90-Day Implementation Roadmap

### Phase 1: Technical SEO and Foundation (Weeks 1-2)
- [ ] Audit SPA rendering and verify Googlebot renders content without JS execution issues or implement build-time HTML prerender for routes.
- [ ] Configure `public/robots.txt` and generate production `public/sitemap.xml`.
- [ ] Add canonical tags and Open Graph meta tags to all page templates.
- [ ] Verify Cloudflare DNS, SSL/TLS Full (Strict), and www-to-apex redirect rules.
- [ ] Implement `ProfessionalService` and `Article` JSON-LD schemas.
- [ ] Configure GSC domain verification and submit XML sitemap.
- [ ] Setup GTM container and GA4 property with custom conversion events.

### Phase 2: Core Page and Service Optimization (Weeks 3-4)
- [ ] Complete all service detail copy in `src/content.ts` (replacing placeholders).
- [ ] Optimize title tags and meta descriptions for all service detail pages.
- [ ] Audit mobile responsiveness and layout shift across all viewport sizes.
- [ ] Implement event tracking on contact form submissions and direct email/phone clicks.
- [ ] Run Core Web Vitals audit (Lighthouse / PageSpeed Insights) on desktop and mobile.

### Phase 3: Content Production and Internal Linking (Weeks 5-8)
- [ ] Review 11 published WordPress blog posts in `content/blog/` for on-page SEO and internal link equity.
- [ ] Ensure all published blog posts link to their corresponding commercial service landing page.
- [ ] Establish editorial calendar for new agency case studies and thought-leadership articles (1-2 posts per week).
- [ ] Implement BreadcrumbList schema on blog and service subpages.

### Phase 4: Measurement, Refinement, and Scale (Weeks 9-12)
- [ ] Conduct first monthly Search Console performance audit.
- [ ] Identify top query impressions and optimize subheadings (H2/H3) for target keywords.
- [ ] Review lead generation funnel and CTA click-through rates in GA4.
- [ ] Evaluate backlink acquisition and digital PR opportunities for the agency brand.
