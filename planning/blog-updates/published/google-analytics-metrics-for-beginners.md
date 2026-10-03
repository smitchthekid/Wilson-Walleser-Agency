# Plan: google-analytics-metrics-for-beginners

File: content/blog/google-analytics-metrics-for-beginners.md (published 2020-04-16)

## (a) Summary and verdict
A glossary of Universal Analytics (UA) concepts: source/medium, pageview, session, bounce rate, exit rate, goals, conversions, conversion rate. It is written entirely for UA, which Google shut down (standard UA stopped processing July 1, 2023; historical data later removed, verify exact dates). The post is now factually wrong in key places.
**Verdict: heavy rewrite** as "GA4 metrics for beginners" (keep slug to preserve URL, or 301 to a new slug; recommend keeping the slug). Consider merging with `google-analytics-navigation-guide` (same service `email-analytics` `relatedPosts`) as a two-part series rather than merging into one; flag for the cross-article reviewer.

## (b) Old-brand references and dated claims
- "CPC (cost-per-click model from PAC advertisements)" (typo, "PPC"; unclear).
- "email (clicks from our email list)" (written as a company's own list, not the agency).
- "We set our most important goals to record as conversions" (old-brand voice, "we" refers to previous business).
- "Goal 1: Lead | Request for Quote = RFQ | Request for Pricing = RFP)" (unbalanced paren; RFP normally means Request for Proposal).
- "**Conversion rate**: The total number of people who visited the page divided by the number of people who completed a goal." (inverted formula, wrong).
- "Exit Rate = Total Number of Exits / Total Number of Page Views" (fine in UA, no longer a GA4 standard metric).
- Frontmatter `wp_guid: "https://pleasecart.com/?p=1022"`, `import:` block, tag `import:test-1`: remove (old brand).
- Link to Google support `answer/1009409` is UA bounce rate documentation: replace.

## (c) Outdated facts and 2026 reality
- Universal Analytics is gone; GA4 is the only Google Analytics. Entire framing needs rebuilding (confirm sunset dates).
- Goals: GA4 has no Goals/"goal completion location" or destination goals. It uses events; any event can be marked a **key event** (Google renamed "conversions" to "key events" in 2024, verify; Google Ads conversions still use the term "conversion").
- Sessions: still defined by 30-minute inactivity by default (adjustable); sessions are event-based (`session_start`), no longer hit-based.
- Pageviews: GA4 reports Views (`page_view` event); "Pages and screens" report.
- Bounce rate: the UA definition (single-request session) is obsolete. GA4 defines engagement rate (session lasting 10+ seconds, 2+ page/screen views, or a key event) and bounce rate as its inverse. Bounce rate was reintroduced to GA4 in 2022 after launch without it.
- Exit rate: not a native GA4 standard metric; explain alternatives (Explorations, funnel exploration), needs verification before stating.
- Source/Medium: still exists, plus Default Channel Group; "(not set)" and "(direct)/(none)" still occur. Medium examples should include `organic`, `cpc`, `referral`, `email`, and newer realities like AI assistant referrals (e.g., chatgpt.com as referral; needs verification of how it shows up).
- "Users" now includes Active users, New users; Total users vs Active users distinction matters.
- Data retention default is 2 months for event-level exploration data (can set to 14 months); verify.
- Missing metrics a 2026 beginner needs: engaged sessions, average engagement time, key events, key event rate, session key event rate vs user key event rate, event count.

## (d) Modernization
- GA4 setup basics: data streams, enhanced measurement, GTM for custom events (`contact_form_submit`, `phone_click`; align naming with `planning/seo_infrastructure_master.md` section 03).
- Privacy/consent: Consent Mode v2 (required for EEA/UK ad personalization features, verify specifics), cookie banner, GDPR/CCPA/state privacy laws, data thresholding, modeled data.
- First-party data and server-side tagging (sGTM) as a mid-level option; ad-blocker and ITP loss means GA4 undercounts.
- Linking GA4 with Search Console and Google Ads; importing key events to ads.
- AI/GEO: where AI-assistant traffic shows up in Source/Medium; build a custom channel group (needs verification).
- AI-assisted workflow: using Looker Studio dashboards and LLMs to summarize reports, with a human checking numbers (and GA4's built-in insights/Analytics Advisor, verify availability).
- BigQuery export (free daily export) for agencies; do not over-explain for beginners.

## (e) Voice alignment
Keep the glossary format but turn it into plain-English "what it means for your business" explanations, matching the "Clear, honest reporting... without the jargon" value in `src/content.ts`. Use "we" as W+W; examples from service clients (lead-gen form, checkout). Remove copied Google definitions where possible; paraphrase and cite.

## (f) SEO
- Target keyword: "GA4 metrics explained" / "Google Analytics 4 metrics for beginners" (validate volume, do not assume).
- Title (<=60): "GA4 Metrics for Beginners: What to Track | Wilson + Walleser" (adjust to length)
- Meta (140-160): "Plain-English guide to the Google Analytics 4 metrics that matter: sessions, engagement rate, key events, and sources, and how to read them."
- Pillar fit: measurement cluster supporting Pillar 2 (Paid Acquisition: conversion tracking setup) and the `email-analytics` service. Pillar page: `/services/email-analytics`.
- Internal links: 1 contextual to `/services/email-analytics` ("tracking setup and reporting"); 2 to `google-analytics-navigation-guide` and `how-much-does-a-website-cost` or `find-the-right-seo-tool`; closing CTA to contact. Consider adding FAQ block with `FAQPage` schema (e.g., "What replaced bounce rate in GA4?").

## (g) Frontmatter and structure
- Remove `import:` block and tag `import:test-1`; tags: `["Google Analytics", "GA4", "Analytics"]`.
- Rewrite `excerpt` (current is generic: "How do I get started with Google Analytics and web data?"); update `date`/`modified`.
- Structure: What changed (UA to GA4) / Traffic: users, sessions, views / Sources and channels / Engagement (engagement rate, bounce) / Key events and conversion rate (correct formula: conversions divided by sessions or users) / A starter dashboard of 5 metrics / Privacy and accuracy caveats / FAQ / CTA. Add a small table mapping UA term to GA4 term.
- Remove duplicate leading heading handling is fine (h1 matches title and is stripped); fix bold-as-heading ("**Key Metrics**" to real H2).

## (h) CTA
"Not sure your tracking is set up right? Request a free tracking audit": we check GA4, key events, and consent, and give you a plain-English dashboard. Link to contact with `service_interest=Analytics`; mention founder-led audit.

## (i) Effort: M
Checklist:
1. Verify UA sunset dates, key event rename, GA4 engagement/bounce definitions, retention limits, Consent Mode v2 requirements against current Google docs.
2. Decide: keep slug and retitle to GA4 (recommended); coordinate with `google-analytics-navigation-guide` plan (series, no duplicate content).
3. Validate target keyword.
4. Write UA-to-GA4 mapping table and new glossary with correct conversion rate formula.
5. Add privacy/consent, data accuracy, AI-referral sections (mark unverified items).
6. Add starter dashboard (screenshot or Looker Studio template; use W+W-owned or demo property).
7. Write title, meta, excerpt, tags; strip `import:` frontmatter.
8. Add internal links, FAQ schema candidate, CTA.
9. Editorial and AI-writing pass; build QA.
