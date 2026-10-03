# Plan: "Why Scaling Revenue for Small Businesses is So Hard"

Slug: `theres-a-gap-between-digital-the-corner-store-asking-the-right-questions`
Linked from: `brand-strategy` service relatedPosts in `src/content.ts`. Keep the slug (old inbound links, existing relatedPosts reference).

## (a) Summary and verdict
About 450 words of rhetorical questions. Thesis: small businesses burn time and money on marketing activity (emails, social, coupons) that is not tied to revenue; "what's hard is predictable, scalable advertising models." It has no steps, no framework, no examples beyond one email stat block, and ends without a conclusion or CTA. Reads as a rough draft.

**Verdict: HEAVY REWRITE (keep slug, keep the core idea).** Reframe as "marketing activity vs. marketing that pays: how to tell the difference," a measurement-first piece that fits Brand & Strategy and Email & Analytics. Target 1,000 to 1,400 words.

## (b) Old-brand references and dated claims
- Frontmatter `wp_guid: "https://mitchleemarketing.wordpress.com/?p=94"` (old brand/domain; remove from published frontmatter).
- Frontmatter `date: "2020-01-17 10:53:04"` / `modified: "2020-04-05 ..."`. Set modified to the rewrite date; keep original date only if you want "originally published" honesty (recommend: new `date`, note "Updated 2026" in intro or leave original date and set `modified`).
- No explicit old brand name in body, but voice is first-person-plural generic and the "we" is ambiguous. Replace with W+W founders' voice.
- Dated/odd lines to cut or fix:
  - "responding to emails written by cave dwellers" (insulting, off-brand).
  - "Is this thing even on?" (filler).
  - "the real cost of digital advertising is sublime" (wrong word; "sublime" misused).
  - "reach 99% of drivers over 35 by running radio ads" / "It's really easy to make up statistics in hypothetical scenarios" (invented stat, self-undermining).
  - "Facebook post" / "Instagram photo" as the social examples (platform framing is 2020).
  - "blow billions of dollars each year" (unsourced; cut or mark needs verification).
- Typos: "Do you realize how time you spend" (missing "much").

## (c) Outdated facts and 2026 reality
- Email sample "Delivered 15,465 / Opened 592 / Clicks 71" (3.8% open, 12% click-to-open): illustrative only, and the open metric is unreliable since Apple Mail Privacy Protection (2021) pre-fetches opens and inflates them; Gmail/Yahoo bulk-sender rules (2024) now require authentication and low spam rates. Reframe: judge email by clicks, replies, and revenue, not opens. Label the numbers "an example, not a benchmark" or replace with a clearly hypothetical table.
- "Pay for only the clicks that make money": still sound, but 2026 reality is that platforms (Google PMax/Demand Gen, Meta Advantage+) automate targeting, so the lever is conversion-signal quality, not manual click-picking. Needs verification of any claim about current platform names/features before publishing.
- Coupon/incrementality point is good and still valid; modernize with "holdout test / geo test / incrementality" language.
- Third-party cookie situation: Google kept cookies in Chrome (reversed deprecation plan in 2024-2025); verify current status before mentioning. Safer to say "tracking is patchier than it used to be (consent rules, iOS limits, ad blockers)."
- No stats to invent: any statistic added must be sourced or marked needs verification.

## (d) Modernization
- GA4: key events (not "goals"), tie to revenue, GA4 vs. CRM reconciliation; Consent Mode v2 and cookie banner implications for measurement gaps.
- First-party data: capture lead source in forms (hidden UTM fields), push to CRM so revenue can be tied back to the channel. Mitch's bio emphasizes broken tracking and attribution pipelines, so lean into that.
- Blended metrics: MER / blended CAC and payback period alongside platform ROAS, since platform-reported numbers over-claim.
- AI-assisted workflows: time sink point (answering emails/comments) can mention AI-drafted replies and triage with human review; keep it one short paragraph, no hype.
- Local/brick-and-mortar: Google Business Profile calls and direction requests as measurable offline-ish signals; call tracking; "how did you hear about us" at the register (cheap and effective).
- GEO/AI search: customers "just looking for our phone number or store location" now ask AI assistants; point is that accurate GBP, schema, and clear contact pages reduce wasted inquiries. Link to SEO & Content.

## (e) Voice and tone
Target voice from `content.ts`: plain, direct, owner-to-owner, "without the jargon," honest about money ("treats your budget like our own," "grows your business, not your agency bill"). Current piece is sarcastic and meandering. Rewrite: short paragraphs, first person plural = the two founders, concrete questions the reader can answer, one worked example. Remove insults, profanity-adjacent humor, and rhetorical filler. Run `avoid-ai-writing` pass after drafting.

Proposed structure (H2s):
1. The gap: activity is easy to count, revenue is hard to trace
2. Three costs most owners don't count (media spend, time spent, opportunity cost)
3. Five questions to ask about any marketing activity (did it make money, would they have bought anyway, what did it cost in hours, can we trace it, what would we do with that money instead)
4. Online vs. in-store: how to measure each (UTMs/GA4 key events/call tracking; coupon codes, "how did you hear about us," holdout test)
5. A simple scorecard (cost, hours, leads, revenue, payback)
6. Where to start this month
7. CTA

## (f) SEO
- Target keyword (needs verification in Serpstat/keyword tool): "how to measure marketing ROI for small business" (primary); secondary "small business marketing not working," "marketing ROI small business." Do not claim volumes.
- Title (<=60): "Small Business Marketing ROI: Questions to Ask First | W+W" (~55 chars; check).
- Meta (140-160): "Likes and clicks are not revenue. Five questions to find out which of your marketing actually pays, from the founders at Wilson + Walleser."
- Pillar-cluster fit: SEO master plan pillars are Organic, Paid, CRO. This post is a top-of-funnel cluster article supporting Pillar 2 (Paid: conversion tracking setup, ROAS) and the measurement theme. Note the master plan lists service URLs (`search-engine-optimization`, `paid-media-management`...) that do NOT match `content.ts` slugs (`brand-strategy`, `paid-advertising`, `email-analytics`...). Link using the real `content.ts` slugs and flag the mismatch to the team.
- Internal links (per Editorial Linking Formula: 1 service, 2 related articles, 1 CTA):
  - Service: `/services/email-analytics` (anchor: "tracking setup and plain-English reporting"); secondary `/services/brand-strategy`.
  - Articles: `/blog/google-analytics-metrics-for-beginners`, `/blog/the-truth-about-google-advertising-differences-between-google-facebook-advertising-strategies`, optionally `/blog/breaking-through-saturated-markets-and-modeling-data-that-matters`.
  - CTA: contact form.
- Schema: BlogPosting with dateModified; consider a small FAQPage block for the five questions (only if the Q/A is visible on page).

## (g) Frontmatter and structure
- Add real `excerpt` (currently empty, so card text is auto-pulled from the first paragraph): 140-160 chars.
- Title: change to "Why Scaling Revenue Is So Hard for Small Businesses (and How to Tell What's Working)" or similar; if title changes, the leading `# H1` must match exactly for `renderBody` to strip it, otherwise remove the H1 from the body.
- Tags: replace `import:test-1` with real tags (e.g. `measurement`, `small business`, `strategy`).
- Delete the entire `import:` block (source file, wp_guid, sha, etc.) once review is complete; `blog.ts` ignores it but it leaks old source/brand into the repo.
- Update `date`/`modified`; add `author: Mitch Walleser` only if the schema/page supports it (blog.ts currently ignores unknown keys).
- Body headings: existing `**bold**` inside H2s; use clean H2/H3. blog.ts shifts headings down one level automatically.
- Add one simple table (scorecard) in Markdown; check that BlogPost styles render tables.

## (h) CTA
Closing block: "Not sure which of your marketing is actually paying? We'll review your tracking and tell you what we'd keep, fix, or stop. Talk to the two founders." Link to contact page; mention one-business-day reply. Offer a free "marketing scorecard" or tracking review (confirm with founders that this is a real offer before publishing).

## (i) Effort: M (3 to 4 hours drafting + review)
Checklist:
1. [ ] Founders confirm the thesis and whether to republish under a new date.
2. [ ] Pull keyword data (Serpstat) to confirm primary keyword.
3. [ ] Draft new outline per (e); write 1,000-1,400 words.
4. [ ] Replace email example with a labeled hypothetical; add the measurement caveat about open rates.
5. [ ] Add scorecard table and online/in-store measurement steps.
6. [ ] Remove cave dwellers, 99% drivers, "sublime," and other flagged lines.
7. [ ] Add internal links (1 service, 2 articles, 1 CTA) using real slugs.
8. [ ] Fix frontmatter (title, excerpt, tags, dates), delete `import:` block and old wp_guid.
9. [ ] Add CTA block and tracking events (`article_to_service_click`).
10. [ ] Run stop-slop / avoid-ai-writing and editorial passes; verify build renders (`npm run build`).
