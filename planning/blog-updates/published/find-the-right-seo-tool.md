# Plan: find-the-right-seo-tool

File: content/blog/find-the-right-seo-tool.md (published 2019-12-09, modified 2020-04-05)

## (a) Summary and verdict
Short, first-person, rough post recommending free keyword tools (Keywords Everywhere, Serpstat) and arguing premium tools are unnecessary. Many typos, a sponsored-post joke, and a tool list that is largely obsolete.
**Verdict: heavy rewrite** (keep slug, new body). Related service in `src/content.ts`: `seo-content` (already lists this slug in `relatedPosts`).

## (b) Old-brand references and dated claims
- Frontmatter `wp_guid: "https://mitchleemarketing.wordpress.com/?p=180"` (previous personal brand). Strip the whole `import:` block and the `tags: import:test-1` tag.
- "99% of you want a free SEO tool one. Gotchu." / "The first ting\*:" (typo, slang, unverifiable stat).
- "My competitors don't know about it" and "This post is not sponsored by Serp Stat, but — it could be — wink wink" (no FTC-style disclosure, solo voice; the site voice is "we", two founders).
- "the most powerful premium SERP platform on the market for the money" (unsupported superlative).
- "($20 a month)" Serpstat price: dated, needs verification.
- "Why is internet marketing so hard? It's not; I just gave you all the tools you need." (flippant, contradicts agency value proposition).
- Dates 2019/2020; no visible date issue in body but `modified` is stale.

## (c) Outdated facts and the 2026 reality
- Keywords Everywhere "- Free": it moved to a paid credit model in 2019; free tier no longer accurate. Needs verification of current pricing. Also a stray backtick in the heading markup.
- "Ad Planner": retired by Google years ago; the current tool is Google Keyword Planner inside Google Ads (free, requires an Ads account; volume ranges shown without active spend).
- Ubersuggest and Keyword.io: pricing/free limits changed, needs verification; Keyword.io status needs verification.
- Moz "unreliable Google AdWords keyword volume" link is old; needs verification that it resolves, and the claim should be softened (Keyword Planner buckets volumes, it is not "wildly unreliable").
- "Google data covers only native advertising and search engine data... Gives your competitors the same data" is oversimplified/misleading. Serpstat does not have a non-Google data source for search volume; it also models Google data.
- Missing from the landscape (verify current plans/pricing before naming): Google Search Console (free, first-party, the best free source), Google Trends, Bing Webmaster Tools, Semrush, Ahrefs, Screaming Frog (crawler), AnswerThePublic-style tools, and AI visibility trackers (needs verification of which are credible).
- "You'll just spend 30 minutes vs 10 minutes" is unsourced; remove.

## (d) Modernization
- Reframe from "which tool" to "which job": keyword research, rank tracking, technical crawling, backlinks, AI-search visibility.
- GEO/AI search: add a section on checking whether the brand appears in Google AI Overviews/AI Mode, ChatGPT, Perplexity, and how to track it manually (prompt set, logged monthly) versus with tools. Do not state tool capabilities without verification.
- First-party data first: Search Console queries, GA4 organic landing pages, Google Business Profile insights, sales-call language.
- AI-assisted workflow: using an LLM to cluster keywords, draft briefs, and map intent, with human review; mention verifying volumes in a real tool.
- Stack by budget (free / small-business / agency), with "what we use and why" kept honest; disclose any affiliate or sponsorship relationship, or state there is none.

## (e) Voice alignment
Site voice: plain-English, honest, "we/our", no jargon, treats the reader's budget like ours (see `values` and `about` in `src/content.ts`). Drop slang, winks, and bravado. Tone: "Here is what we would use at each budget and why."

## (f) SEO
- Target keyword: "best SEO tools for small business" (primary candidate) or "free SEO tools" (needs keyword volume validation in Serpstat/Search Console; do not assume).
- Title (<=60): "Best SEO Tools for Small Business in 2026 | Wilson + Walleser"
- Meta (140-160): "Free and paid SEO tools we actually use for keyword research, tracking, and AI search visibility, and which ones fit your budget."
- Pillar fit: Pillar 1 (Organic Growth and Technical SEO), cluster article. Pillar page target: `/services/seo-content` (note: master plan lists `/services/search-engine-optimization`, but live slugs in `src/content.ts` are `seo-content`; reconcile).
- Internal links (editorial formula): 1 contextual link to `/services/seo-content` ("SEO and content services"); 2 related posts: `how-humans-search-for-things-online-if-that-then-this`, `what-is-content-marketing-how-does-it-outperform-paid-advertising`; add link to `google-analytics-metrics-for-beginners` (measurement). Closing CTA to contact.
- Add `dateModified` honesty: set new date/modified on rewrite; add "Last reviewed" line.

## (g) Frontmatter and structure
- Remove `import:` block, `modified` wp stuff, and `tags: import:test-1`; replace with `tags: ["SEO", "Keyword research", "Tools"]`.
- Fill `excerpt` (currently empty; first paragraph is used otherwise).
- Update `date` (or add original date in text) and `modified`. Keep `slug`, `status: "publish"`.
- Delete the duplicate leading `## Find the Right SEO Tool:` (the title is already the page h1; `renderBody` strips only an exact `#` match).
- Structure: intro (what to look for) / free first-party stack / keyword research tools / crawling / rank + AI visibility tracking / comparison table by budget / our recommendation / CTA. Use real H2/H3, fix typos, remove stray backtick.

## (h) CTA
End with: "Want us to run the research and hand you a prioritized plan? Request a free SEO review" linking to the contact form, with `service_interest=SEO` per the analytics schema; mention you work directly with the founders. Also fire `article_to_service_click` on the services link.

## (i) Effort: M
Checklist:
1. Verify current pricing/free tiers and existence of every named tool (Keywords Everywhere, Serpstat, Ubersuggest, Keyword.io, Moz link).
2. Validate target keyword with Serpstat / Search Console.
3. Decide the honest disclosure statement on any tool relationships.
4. Draft new outline and body in the W+W voice; remove all personal-brand and joke lines.
5. Add AI/GEO visibility section and first-party-data section.
6. Write title, meta, excerpt; set tags, date, modified.
7. Strip `import:` frontmatter and duplicate heading.
8. Add internal links and closing CTA.
9. Run an AI-writing/editorial pass; QA build and slug redirect (slug unchanged).
