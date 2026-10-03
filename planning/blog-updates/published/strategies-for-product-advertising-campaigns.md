# Plan: strategies-for-product-advertising-campaigns

File: content/blog/strategies-for-product-advertising-campaigns.md (status: publish, dated 2020-03-22)

## (a) Summary and verdict
Short opinion piece on PPC strategy by competition level: high-competition and branded terms, low-competition searches, platform policy limits, and how small brands win against big ones by targeting long-tail and competitor-adjacent intent. The core idea (intent over volume, pick fights you can afford) still holds. The execution is rough: incomplete sentences, tangents, and a swaggering tone.
Verdict: HEAVY REWRITE, keep the slug (it is already linked from services/paid-advertising relatedPosts and may have inbound links). Reuse the skeleton, rewrite nearly every sentence.

## (b) Old-brand references and dated claims to fix
- Frontmatter: `import: ...` block (batch, source_file "Please_cart_blog_export_test_1_R0noh_posts.sql", wp_guid "https://pleasecart.com/?p=680", etc.) and `tags: - "import:test-1"`. Remove the import block and the import tag; replace with real tags.
- `date: "2020-03-22 08:38:11"` and `modified: "2020-04-05 ..."`: set a new publish date and add a real `modified`.
- No explicit "Please Cart" mentions in the body, but voice is first-person-singular and gruff ("I don't know how to explain this more simply", "From experience, Google uses an algorithm to vette...") which conflicts with the "we" of a two-founder agency.
- "In the midwest, we don't call paper for blowing your nose 'tissue paper', we call it Kleenex": personal anecdote from the old author; cut or replace with a neutral example.
- "Most companies between $1 million to $10 million will outsource their advertising strategies": unsourced claim. Cut or mark needs verification.

## (c) Outdated or unverifiable facts and 2026 reality
- "Search volume is the most indicative metric for online competition": oversimplified. Competition is better read from auction insights, CPC, impression share, and who owns the SERP (AI Overviews, Shopping units). Rewrite.
- "Google refuses to serve ads for certain items such as cannabis, CBD, and many nicotine products": CBD has nuanced, country-specific, certification-dependent rules; cannabis remains prohibited. Needs verification against current Google Ads policy pages before restating. Link to official policy rather than paraphrase.
- "Google uses an algorithm to vette and filter eligible ads" / "fight with Google": update to current appeal process (policy manager, appeals, certification) and note that Meta/TikTok/Microsoft have their own review. Needs verification of current appeal steps.
- "Searches with spelling errors" as a tactic: largely obsolete. Google's exact/phrase match now includes close variants and misspellings, and broad match plus smart bidding handle this. Replace with current match-type guidance.
- "Start bidding wars" and "target competitor brand names": reframe. Competitor-name bidding is legal in most cases but ad copy cannot use others' trademarks in ways platforms prohibit; trademark complaint policies vary. Needs verification; present as an option with risks, not a trick.
- Missing entirely: Performance Max, Shopping and Merchant Center feeds, Demand Gen, Microsoft Ads, Meta Advantage+, TikTok Shop, Amazon Ads/retail media. Amazon is mentioned only as a competitor to avoid; in 2026 it is also an ad channel.
- Free shipping/2-day Amazon benchmark: directionally true, but exact consumer expectations are unverified. Phrase qualitatively.
- No stats are cited in the original; do not invent new ones. Any benchmark CPC/ROAS number added must carry a source or be omitted.

## (d) Modernization
- Replace "high/mid/low-end products" framing (intro promises it but never delivers) with: margin and AOV-driven strategy, break-even and target ROAS, contribution-margin bidding.
- Product feed quality (titles, GTINs, images, custom labels) as the real lever in Shopping/PMax. Ties to the "Shopping feeds" item on the paid-advertising service page.
- Smart bidding and signal quality: first-party data, Enhanced Conversions, offline conversion import, consent mode v2 and consent-aware measurement.
- AI-assisted workflows: creative variants, query mining, and search-term review with human review; Google AI Max/AI Overviews affecting ad placement (needs verification of current naming and features).
- Measurement: GA4 and platform attribution disagree; recommend incrementality or geo holdout tests for larger budgets; MER/blended ROAS over platform-reported ROAS.
- Privacy: cookie and consent changes, iOS tracking limits, server-side tagging. Keep to one section.
- Policy compliance as a section: restricted categories, health/finance ad rules, and certification, with links to official docs.
- GEO angle: product pages and feeds also feed AI shopping surfaces; structured data and clean feeds help both.

## (e) Voice and tone
Brand voice: plain, direct, honest, no jargon, "we" (two founders), treat the client's budget like ours. Remove: "never estimate the stupidity of big box advertisers", "boogers/snot", "lunch money", "throwing money at the wall", "poking the bear". Keep the directness and the small-vs-big theme, expressed with calm confidence. Use second person for the reader and "we" for the agency; add "what we do on client accounts" sidebars drawn from Mitch's paid search and attribution background (no fabricated client names or results).

## (f) SEO
- Target keyword: "product advertising strategy" (secondary: "PPC strategy for small business", "Google Shopping campaign strategy"). Needs keyword volume check in Serpstat/keyword-agent; do not assume.
- Title (50-60 chars): "Product Advertising Strategy: Win Without Big-Brand Budgets | Wilson + Walleser" is too long; use "Product Advertising Strategy for Small Brands | W+W" (verify length).
- Meta (140-160): "How to plan product ad campaigns by competition level, margin, and intent, and how small brands compete with bigger budgets on Google and Meta."
- Pillar fit: Pillar 2 (Paid Acquisition and Performance Marketing). Cluster article supporting /services/paid-advertising.
- Internal links (editorial formula): 1 contextual link to /services/paid-advertising ("paid advertising management"); 2 links to related posts: `the-truth-about-google-advertising-differences-between-google-facebook-advertising-strategies` and `google-analytics-metrics-for-beginners` (or the tracking post); 1 closing CTA to contact. Optionally link /services/email-analytics for tracking.
- Add an FAQ block (3-4 Qs) for FAQPage schema and AI answer extraction; add BlogPosting schema with dateModified.

## (g) Frontmatter and structure changes
- Replace frontmatter with: title, slug (unchanged), status publish, date (new), modified, excerpt (write it; currently empty so blog.ts falls back to the first paragraph), tags (e.g. "Paid Advertising", "Google Ads", "E-commerce"). Delete the `import:` block.
- Note blog.ts parses only flat key lines and `tags:`; extra keys are ignored but pointless. blog.ts drops a leading H1 matching the title and shifts headings down, so keep a single H1 equal to the title.
- Proposed outline: 1) Start with margin and intent, not volume; 2) Read the auction (competition and brand terms); 3) High-competition markets; 4) Low-competition and new products; 5) Where small brands win (long-tail, local, feed quality, competitor-adjacent intent, with trademark caution); 6) Policy limits; 7) Measuring (first-party data, consent, incrementality); 8) FAQ; 9) CTA.
- Fix typos/broken fragments ("Branded searches speak  .", "ect.", "vette", stray "..") during rewrite.

## (h) CTA
Closing block: offer a free paid media account review (matches Pillar 2 conversion goal "Paid Media Account Review"). Copy direction: "Want a second opinion on your ad spend? Send us your account details and we will tell you where the money is going. You will talk to the founders, not a junior team." Link to /services/paid-advertising and contact form with `service_interest=PPC`.

## (i) Effort: M (rewrite plus fact-check)
Checklist:
1. Pull current Google Ads policy pages for restricted items and appeals; confirm facts.
2. Keyword research for target keyword; confirm.
3. Outline per (g); decide which Mitch-sourced insights to include.
4. Draft full rewrite in agency voice; remove all gruff/off-brand phrasing.
5. Verify each factual claim; mark or cut unverifiable ones.
6. Add FAQ block and internal links per (f).
7. Rewrite frontmatter; remove import block and tag; add excerpt, tags, dates.
8. Run stop-slop/editorial pass; check heading levels.
9. Founder review, then publish; confirm sitemap and relatedPosts link on paid-advertising still resolve.
