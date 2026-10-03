# Update plan: how-much-does-a-website-cost

File: content/blog/how-much-does-a-website-cost.md (published 2019-11-19, modified 2020-04-06)

## (a) Summary and verdict
Current: a solo-freelancer explainer on the *running cost* of a site (domain ~$12/yr, hosting $8-20/mo, "value-added" bundles, updates, ecommerce fees, maintenance from ~$100/mo). It never answers the title question (what a website costs to build). It is first-person singular and sells one person's hosting arrangement.

Verdict: **HEAVY REWRITE** (keep slug and URL; the topic is a high-intent commercial query and `websites` service already lists it in relatedPosts). Position as the cluster article for Pillar 3 (Web Experience) and the cost-transparency entry point to the Websites & Landing Pages service.

## (b) Old-brand and dated references to fix (quoted)
- "I wrote the body of this article ~3 months ago and I can already tell you my server costs have already gone up." (solo, dated, pointless)
- "over here we like fast, responsive internet experiences" / "that's because I don't use the cheapest, slowest servers" / "for my average customer" (first-person singular; the agency is two founders, say "we")
- "Personally, I've been working with Rochen for roughly the last 10 years" (old vendor endorsement; "Rochen" and "Hostgear" look like typos/obscure hosts; remove all named-host endorsements or any affiliate-like claim)
- "[Search for a domain that isn't taken >> I prefer Namecheap]" (personal affiliate-style link; replace with neutral guidance)
- "My customers enjoy me handling all of their mission-critical recurring payments ... I just pass along the invoice." (reposition: we manage renewals in the client's own registrar account, client owns the domain)
- "I only do maintenance plans for websites I've built personally ... my plans start around $100 a month per-site" (old pricing; replace with Wilson + Walleser care plan language, price marked needs-confirmation by founders)
- "Europe's new privacy requirements" Wired link (2018 GDPR coverage, stale)
- "Adding checkout options for new payment technologies (Bitcoin, Apple Pay, ect)" (Bitcoin framing dated)
- Typos throughout: "ect.", "incrues", "subscription free", "Hostgear", "business-orientated", "saves a lot of costs".
- Frontmatter: `wp_guid: https://mitchleemarketing.wordpress.com/?p=129` and `import.*` block, tag `import:test-1` (old brand and import residue).

## (c) Outdated facts and 2026 reality
- ".com ~$12/yr" -> .com wholesale has risen in recent years; typical registrar retail now roughly $13-20/yr with higher renewals. **Needs verification** against current registrar pricing before stating a range.
- "Hosting $8-15/mo for 1-3 domains, 100K visitors" -> unverifiable and misleading. 2026 reality: shared hosting, managed WordPress, and edge/static hosts (Cloudflare Pages, Netlify, Vercel) have very different cost models; many static or JAMstack sites host for little or free. Give categories and ranges marked **needs verification**, not a single number.
- "Wix, Squarespace, WordPress.org = taxed in perpetuity, mediocre performance" -> overbroad and inaccurate (Squarespace/Shopify/Webflow perform adequately; WordPress.org is free software, the cost is hosting). Rewrite fairly: tradeoffs of platform subscription vs. self-hosted vs. custom.
- "99% of websites fall within that data tier" -> unsupported; drop.
- "Ecommerce 1-3% per transaction" -> card processing is typically ~2.9% + fixed fee per transaction on major processors, plus platform fees on Shopify. **Needs verification** per provider.
- Missing entirely: the cost to BUILD a site (design, dev, content, photography, copy), CMS/theme/plugin licenses, SSL (now free, included by most hosts), email (Google Workspace/Microsoft 365 per-seat), analytics and consent tooling, accessibility compliance, SEO setup, and ongoing content.
- Google domain anecdote ($10K for google.com, 2016) -> fun but off-point and old; replace with plain advice: auto-renew, registrar lock, client owns account.

## (d) Modernization
- Build cost tiers: template/DIY, template plus agency setup, custom design and build, ecommerce, and enterprise. Give pricing as ranges only after founders confirm; contact form budgets already use $2,500+/mo tiers, so do not contradict them. Flag all dollar figures **needs verification / founder sign-off**.
- Performance and Core Web Vitals (LCP, INP, CLS) as a cost driver and ranking input; cheap hosting costs revenue.
- Accessibility (WCAG 2.1/2.2 AA; ADA demand-letter exposure in the US) as a standard line item.
- Privacy and consent: cookie/consent banner, Google Consent Mode v2, state privacy laws (CCPA/CPRA and others), GDPR for EU traffic; replaces the stale Wired link. Cite official sources.
- Analytics: GA4 + GTM setup is standard (Universal Analytics is gone, sunset July 2023).
- AI-era: structured data (schema.org), clean crawlable HTML, llms.txt (optional, unproven benefit; say so), so AI answer engines can cite the site. Note AI-assisted build workflows lower some design/copy costs but do not remove strategy, QA, and ownership costs.
- Maintenance in 2026: backups, uptime monitoring, plugin/dependency patching, security headers, SSL, form spam, content edits, uptime SLA. Compare "care plan" vs. pay-as-you-go.
- Ownership: you own domain, hosting account, code, and content; no lock-in. This is a differentiator.
- Add a "what drives the price" checklist and a "red flags in quotes" section; optionally a simple cost-estimator table.

## (e) Voice and tone
Brand voice: plain, direct, jargon-free, "the people you actually talk to", founder-led, budget-respectful ("treats your budget like our own"). Switch "I/my" to "we/our". Remove sniping at Wix/Squarespace and name-dropping vendors. Keep the honest opening ("there is no single answer") but then give a real answer. Avoid AI-sounding filler; keep paragraphs short.

## (f) SEO
- Primary keyword: "how much does a website cost" (secondary: "website cost for small business", "website maintenance cost", "ongoing website costs"). **Needs verification** of volume/difficulty in Serpstat (keyword-agent repo available).
- Title (50-60 chars): "How Much Does a Website Cost in 2026? A Plain Guide" (51)
- Meta (140-160): "What a small-business website really costs in 2026: build, domain, hosting, maintenance, and ecommerce fees, with ranges and what drives the price." (confirm length)
- Pillar-cluster: Pillar 3 (CRO and Web Experience), conversion goal Strategy Call. Link up to the Websites pillar/service.
- Internal links: 1 contextual link to /services/websites ("website design and build"); 2 related posts (e.g. find-the-right-seo-tool, google-analytics-metrics-for-beginners, how-much-influence-does-the-internet-have-on-customer-purchases); closing CTA to contact. Add link to /services/email-analytics for tracking and /services/seo-content for SEO setup.
- Add FAQ block (4-6 Qs) with FAQPage schema: "How much does a small business website cost?", "Why is hosting so cheap/expensive?", "Do I need a maintenance plan?", "Who should own my domain?".
- Keep slug; no redirect needed. Add BlogPosting schema with datePublished 2019-11-19 and a real dateModified.

## (g) Frontmatter and structure
- Remove `import:` block, `wp_guid`, and tag `import:test-1`; add `tags: ["websites", "pricing", "small business"]`.
- Set `modified` to the rewrite date (2026) and write an explicit `excerpt` (~150 chars; currently empty so blog.ts would fall back to the first paragraph).
- Keep original `date` (2019-11-19) for URL/history, or consider republish-date policy decision for founders. Note blog.ts does not read `modified`; recommend adding it (feeds dateModified schema and a "Updated" label).
- Structure: one H1 (title only, blog.ts strips a duplicate leading H1). Use H2/H3 only; current doc has multiple H1s ("# **Initial Website Costs**", "# **Website Administrative Costs**") that blog.ts will shift, but clean them.
- Outline: Short answer (ranges table) / What drives the price / Build costs / Recurring costs (domain, hosting, email, maintenance) / Ecommerce costs / Hidden costs (consent, accessibility, SEO) / DIY vs agency / Red flags / FAQ / CTA.

## (h) CTA
Closing block: "Want a fixed-scope quote for your site? Tell us about your business and we will reply within one business day." Link to contact (service interest preset to Websites & Landing Pages), plus secondary link to /services/websites. Track as `article_to_service_click` and `service_cta_click`.

## (i) Effort and tasks
Effort: **L** (near-full rewrite plus fact verification and founder pricing input).
1. Get founder sign-off on price ranges and care-plan terms (blocks everything).
2. Verify domain, hosting, processor, and tool pricing from current official pages; mark unverified items or omit.
3. Outline per (g); draft in we/our voice.
4. Remove vendor endorsements, personal affiliate links, Google anecdote, stale Wired link.
5. Add 2026 sections: performance, accessibility, privacy/consent, GA4, AI search readiness.
6. Add internal links per (f) and the CTA.
7. Add FAQ block (and schema, if site supports it).
8. Clean frontmatter; write excerpt, title, meta (note: meta/title need a place in frontmatter or the SEO layer).
9. Proofread (typos), run editorial/stop-slop pass, founders review.
10. Publish, submit URL in Search Console.
