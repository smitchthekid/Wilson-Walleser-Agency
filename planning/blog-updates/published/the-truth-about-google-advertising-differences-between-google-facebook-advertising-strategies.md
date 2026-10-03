# Plan: The Truth About Google Advertising Strategies (Google vs Facebook)

File: content/blog/the-truth-about-google-advertising-differences-between-google-facebook-advertising-strategies.md
Status: `publish`. Dated 2020-02-19, modified 2020-04-16. Listed in `relatedPosts` for /services/paid-advertising in src/content.ts, so the slug must be preserved.

## (a) Summary and verdict
Explains how Google and Facebook make money, then contrasts "impression-based" Facebook ads (pay per view, CPM) with Google "pay-per-click" search ads (auction, max bid, budget caps, click price range). Conclusion: Google's advantage is you only pay for clicks.

Verdict: HEAVY REWRITE, same slug. Topic fits Pillar 2 (Paid Acquisition) and the Paid Advertising service well and has search demand, but the core framing (two simple pricing models) is outdated and partly wrong for 2026.

## (b) Old-brand references and dated claims to fix
- Frontmatter: `wp_guid: "http://diyhive.com/?p=213"`, `source_file: "Please_cart_blog_export_test_1_..."`, `source_database: xpaocwyi_staging`, tag `import:test-1`. Old brand/staging leakage; remove.
- Title in frontmatter and H1 "The Truth About Google Advertising Strategies" does not match slug/topic (Google vs Facebook) and "The Truth About" is clickbait.
- Excerpt: "...without a deep understanding of who is clicking your ads and why, you'll fail." Fear-based, absolute.
- "Well Senator, advertising, of course." (Vox link on 2018 Zuckerberg testimony). Dated meme.
- "Advertising revenue is by far the single most lucrative income stream" linking a 2017 Motley Fool article. Dated source.
- "(Facebook, Twitter)" : Twitter is now X; Facebook ads are Meta Ads (Facebook, Instagram, Messenger, Threads, Audience Network).
- "Google and Bing, which make up the overwhelming number of online searches": needs verification and now ignores AI search surfaces.
- "Because each search results page only has a max of 3 - 4 ads at most": outdated; ad placement, Shopping, AI Overviews/AI Mode ads, and PMax change this.
- "The lowest possible ad click on Google Ads is $0.05 cents" (also "$0.05 cents" is wrong wording) and "upwards of $100 per click" / "$60 million dollar mega yachts": needs verification; remove or replace with sourced benchmark ranges.
- "Statistically, your CPM is how much you paid for 1000 clicks." Factually wrong: CPM is cost per 1,000 impressions ("mille", not "mile").
- "Cost Per Mile (CPM)": wrong; "cost per mille".
- "you're ads better be" typo; "much much money"; "your wallet"; "Facebook serves ads to Billions of Users Each Day" (unverified).
- "Frankly, I try to avoid throwing around acronyms" first-person singular; agency voice should be "we".
- Heading hierarchy: "Facebook Advertising Cost Structure" is H3 then H2 "Advantages" etc. Needs cleanup.

## (c) Outdated facts and 2026 reality
- Pricing models: Facebook is not "pay per impression only, flat rate". Meta runs an auction; you choose an objective and optimization event, and billing is mostly per impression (CPM) though link-click/CPC bidding and cost-cap/bid-cap strategies exist. Google search is auction-based with Quality/Ad Rank, but manual "max bid / first position bid" has largely given way to Smart Bidding (Target CPA, Target ROAS, Maximize Conversions/Conversion Value). Also Google bills CPM/vCPM on Display, YouTube, and Demand Gen. The "two basic models" frame should be replaced by "intent vs interest" (search captures demand; social creates demand).
- "Impression share" is misdefined: it is the share of eligible impressions you received, not a pricing model.
- Google Ads in 2026: Performance Max, Demand Gen, AI Max for Search, broad match + Smart Bidding, responsive search ads, AI Overviews/AI Mode ad placements, Merchant Center feeds. Verify current feature names and rollout status before publishing (this changes quickly).
- Meta in 2026: Advantage+ campaigns (sales, app, leads), Advantage+ audience, broad targeting, creative-led optimization, Conversions API plus Pixel, lead ads/Instant Forms. Needs verification of current naming.
- Detailed targeting is much narrower after iOS App Tracking Transparency and Meta's removal of many interest/sensitive targeting options: needs verification of current list.
- Other platforms absent: Microsoft Advertising (matches the Paid Advertising service page), TikTok, LinkedIn, YouTube, Reddit, Amazon Ads. Mention briefly with a "when to use" row; do not invent benchmarks.
- No stats on CPC/CPM benchmarks should be published without a cited, dated source (WordStream/LocaliQ, Meta/Google published benchmarks, or W+W client averages with permission). Mark "needs verification".

## (d) Modernization of practice (add as sections)
- Intent vs interest: search = people asking; social = people scrolling. Choose by funnel stage and offer.
- Measurement: GA4 (Universal Analytics sunset July 2023, so any UA reference is dead), GA4 key events imported to Google Ads, Google Tag Manager, server-side tagging, Meta Conversions API, Enhanced Conversions, UTM standard from seo_infrastructure_master.md section 03.
- Privacy/consent: Consent Mode v2 (required for EEA/UK audience features), cookie banners, ATT, state privacy laws (needs verification of which states and thresholds), first-party data (email lists, CRM, offline conversion uploads, Customer Match / Meta custom audiences from lists).
- Attribution reality: platform-reported vs GA4 vs CRM revenue; incrementality and holdout tests, blended CAC/MER for e-commerce, lead quality for B2B.
- AI-assisted workflow (human-led): AI for RSA/creative variants, search-term mining, negative keyword review, reporting drafts; humans own strategy, budgets, claims, and compliance. Fits the "senior, founders on every account" value.
- Budgeting: replace the rent analogy with a simple test-budget framework (budget needed to exit learning phase; needs verification of current platform thresholds). Tie to contact.budgets tiers ($2.5k to $10k+/month) without promising results.
- Landing page and CRO: ad quality is half the result; link to /services/websites.
- GEO angle: paid + organic in AI answers; Google ads now appear in AI Overviews/AI Mode (verify).

## (e) Brand voice alignment
Current voice is conversational but snarky, absolute ("you'll fail", "Google doesn't care if you spend $10 to make $1"), first person "I". Target: plain, honest, practical, "we" voice, no jargon (define CPC/CPM once), numbers tied to business goals, no doom language. Keep the retail-rent analogy only if shortened. Remove "Frankly," and meme links. No guarantees of ROI.

## (f) SEO
- Primary keyword: "Google Ads vs Facebook Ads" (variant "Google Ads vs Meta Ads"). Needs volume/difficulty check in SerpStat before locking; do not assume.
- Secondary: "Google Ads vs Meta Ads for small business", "how much does Google Ads cost", "CPC vs CPM", "which is better Google or Facebook ads".
- Suggested title (<=60 chars): "Google Ads vs Meta Ads: Which Is Right for You?" + brand suffix handled by template. Meta description 140-160 chars, e.g. "Google Ads captures people searching; Meta Ads reaches people scrolling. Here is how costs, targeting, and tracking compare in 2026, and how to choose."
- Pillar-cluster: Pillar 2 (Paid Acquisition and Performance Marketing). Cluster siblings per content.ts: `strategies-for-product-advertising-campaigns`. Consider spin-offs: "how much does Google Ads cost" and "Meta Ads conversion tracking setup" (cluster topic in the SEO plan). This post becomes the cluster overview.
- Internal links (editorial formula): 1 contextual link to /services/paid-advertising (anchor "paid advertising management"); 2 related posts: `strategies-for-product-advertising-campaigns`, `google-analytics-metrics-for-beginners`; optionally /services/email-analytics for tracking and /services/websites for landing pages; 1 closing CTA to /contact.
- Add FAQ block (4-6 Qs) with FAQPage schema: "Is Google or Facebook advertising cheaper?", "What is the difference between CPC and CPM?", "How much should a small business spend?", "Do I need both?"
- Add dateModified (e.g., 2026) and visible "Updated" line; schema BlogPosting with author Mitch Walleser (paid search/analytics specialist per founder bio).
- Preserve slug; add alt text to any images; fix heading hierarchy (single H1 via title, H2/H3 logical).

## (g) Frontmatter and structure changes
- title: "Google Ads vs Meta Ads: How to Choose in 2026" (align H1 and frontmatter title; blog.ts drops a leading H1 only if it matches title exactly).
- slug: keep unchanged (service relatedPosts reference it; avoids a redirect). Optionally accept slug change only with a 301 and updating content.ts.
- status: publish. date: keep original or set new; modified: 2026 date. Note blog.ts only reads date, so use `date` as the displayed date; decide whether to show republished date (recommend update `date` to the rewrite date and note original in text, or add `updated` field in blog.ts if desired).
- excerpt: write explicit 150-180 char excerpt (blog.ts truncates at 180).
- tags: replace `import:test-1` with `paid-advertising`, `google-ads`, `meta-ads` (blog.ts reads tags).
- Remove the whole `import:` block (wp_guid diyhive.com, source_file, source_database).
- Proposed outline: TL;DR table (Google vs Meta: intent, formats, billing, targeting, best for) > How each platform makes money (short) > How billing and bidding work now > Costs (sourced) > Targeting and tracking in a privacy-first world > Which to choose by goal > Mistakes we see > FAQ > CTA.

## (h) CTA
Close: "Not sure where your first ad dollar should go? We will review your current accounts or goals and recommend a channel mix. Founders on every account." Button to /contact with `service_interest=PPC` param; secondary link /services/paid-advertising. Offer "Paid Media Account Review" (the Pillar 2 conversion goal in the SEO plan). Track as `article_to_service_click`.

## (i) Effort and checklist
Effort: L (near full rewrite; fact verification is the long part).
1. Keyword check in SerpStat (Google Ads vs Meta Ads, CPC vs CPM, cost queries).
2. Review SERP top 5 for current angle; note AI Overview presence.
3. Verify every 2026 platform claim against Google Ads Help and Meta Business Help (PMax, AI Max, Demand Gen, Advantage+, bidding, Consent Mode v2, CAPI); mark unverified items before drafting.
4. Gather sourced, dated cost benchmarks or use client-approved W+W figures; otherwise omit numbers.
5. Draft new body per outline in "we" voice; correct CPM definition; remove meme/Senator, $0.05, $100/mega-yacht, 3-4 ads claims.
6. Add measurement/privacy/first-party data and human-led AI sections.
7. Add FAQ + FAQPage schema, comparison table, internal links (service, 2 posts, CTA).
8. Clean frontmatter (remove import block and diyhive/staging refs, new tags, excerpt, modified date).
9. Founder review (Mitch for accuracy, Katelyn for CTA/offer).
10. Run editorial/avoid-ai-writing pass, then publish and confirm sitemap, canonical, and GA4 event tracking; submit in GSC.
11. Re-verify claims quarterly (platform features change fast).
