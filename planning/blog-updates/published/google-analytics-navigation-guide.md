# Plan: google-analytics-navigation-guide

Source: content/blog/google-analytics-navigation-guide.md (published 2020-04-16, wp_id 1027)

## (a) Summary and verdict
Click-by-click walkthrough for finding ecommerce transactions, revenue, channels, email revenue, referrals, product performance, regex page filters, and social/new-vs-returning in Google Analytics. Every menu path is Universal Analytics (UA). UA stopped processing data July 1, 2023 (UA 360 later; confirm exact date), so none of the navigation exists in a live property.
Verdict: HEAVY REWRITE (same slug, new GA4 content). Do not retire: the slug is already linked from `email-analytics` service `relatedPosts`, and the topic ("find sales data in GA4") is a real long-tail query. Keep the "click-by-click" format and the regex section idea.

## (b) Old-brand references and dated claims
- `Cart/pleasecart` brand: `Bad: https://pleasecart.com/get-a-quote OR www.pleasecart.com/marketing-services/`; `Good: Page > containing > /get-a-quote/` (replace with neutral example paths such as `/services/websites/`).
- `Acquisition tab: Find all info related to how users landed on PAC pages`, `Search Keywords for PAC Traffic` (PAC = old brand; remove).
- Self-reference `(/google-analytics-navigation-guide/)` used as an example regex (fine to keep as real path `/blog/...` but not the old trailing-slash form).
- Frontmatter: `wp_guid: https://pleasecart.com/?p=1027`, `source_database: xpaocwyi_staging`, `tags: import:test-1`.
- External links to dead/old sources: `support.google.com/analytics/answer/6175970` (UA secondary dimensions), `megalytic.com/blog/understanding-google-analytics-channels`, `andygibson.us/2013/...` regex, `webapps.stackexchange.com/questions/27714`. Replace with current GA4 help-center links (needs verification before linking).

## (c) Outdated facts, tools, platforms
| Old | 2026 reality |
|---|---|
| Whole guide is Universal Analytics | UA is sunset (July 1, 2023). Everything is GA4. |
| `Conversions > Ecommerce > Transactions / Sales Performance / Product Performance` | GA4: Reports > Monetization > Ecommerce purchases (items by name/ID/category), Purchase journey, Checkout journey; Reports > Monetization > Overview. Menu names shift; verify in a live property before publishing. |
| `Acquisition > All Traffic > Channels / Source Medium / Referrals / Campaigns` | GA4: Reports > Acquisition > Traffic acquisition (session-scoped) and User acquisition (first-touch). Default channel group still exists; add a secondary dimension via the "+" next to the first column. |
| `Behavior > Site Content > All Pages`; "Landing page" | GA4: Reports > Engagement > Pages and screens; Landing page report (Engagement > Landing page). |
| `Acquisition > Search Console > Queries` | GA4: Search Console collection must be linked and published in Library; then Reports > Search Console > Queries. Needs a verified link. |
| `Acquisition > Social` | No dedicated report; filter Traffic acquisition by Session default channel group = Organic Social / Paid Social. |
| `New vs Returning` | GA4 has this under Reports > Retention (New vs returning users) and in Explorations. |
| Advanced Search with "Include / Matching RegExp" and `( A | B ) -- no spaces` | GA4 table search is a simple "contains"; for regex use a report filter / comparison ("matches regex", "contains") or Explorations segments. Rewrite regex section accordingly. Also note the old example text contradicts itself (shows spaces in the pattern while saying "no spaces"). |
| Data sampling, 14-month retention not covered | GA4 event data retention defaults to 2 months, extend to 14 in Admin > Data settings > Data retention. High-value tip; verify current limits. |
| Revenue shown only in GA | Ecommerce data is only as good as the `purchase` event and `items` array being sent; include a "if your numbers are blank, check this" box. |

Do not state numeric stats in the rewrite unless sourced. Flag every menu label as "needs verification against a live GA4 property"; Google renames reports frequently.

## (d) Modernization for 2026 agency practice
- Frame as "where to find revenue in GA4" with a short "UA vs GA4 translation" table (reader intent: people migrating from habits).
- Add a "Why numbers don't match" section: GA4 vs Shopify/WooCommerce/Stripe/ad platforms (consent loss, ad blockers, attribution model differences, data-driven attribution, session vs user scope).
- Consent and privacy: Consent Mode v2 (required for EEA ad personalization from March 2024), cookie banners cause modeled/missing data; behavioral modeling, thresholding. Link to a privacy/consent note, do not give legal advice.
- First-party data and server-side tagging: GTM server container, Measurement Protocol, enhanced conversions; mention as "when you outgrow client-side".
- BigQuery export (free daily export) and Looker Studio for reporting beyond the UI. Optionally mention AI summaries/Insights inside GA4 (verify current feature names).
- Agency workflow: provide a short "monthly revenue check" checklist matching the "Plain-English reporting" service.
- Ecommerce tracking validation: GTM preview/DebugView.

## (e) Voice and tone
Brand voice: plain-English, founder-led, "without the jargon", "Numbers that tie back to your goals". Current piece is terse and fragmentary (clean up "·" bullets, `\*with no spaces\*` artifacts, broken numbering, "\*clicks advanced search settings\*" stage direction). Use second person, short steps, one-sentence "why you care" under each H2. Mitch's byline/voice (analytics/attribution specialist) fits: "We see this broken on most accounts we audit" only if true; do not invent claims.

## (f) SEO
- Target keyword: "how to find sales data in Google Analytics 4" (secondary: "GA4 ecommerce revenue report", "GA4 transactions by channel", "GA4 regex filter"). Validate volume in the keyword-agent tool; needs verification.
- Title (<=60): "Find Sales and Revenue in GA4: A Click-by-Click Guide" (~52 chars + brand suffix per master plan, trim if over).
- Meta (140-160): "Where to find revenue, transactions, channels and product sales in Google Analytics 4, with menu paths, filters and fixes for missing ecommerce data."
- Pillar fit: Measurement/analytics cluster supporting Pillar 2 (conversion tracking setup) and the `email-analytics` service. Sibling cluster page: `google-analytics-metrics-for-beginners` (cross-link both ways; plan that file separately).
- Internal links (formula from master plan: 1 service, 2 related posts, 1 CTA): service `/services/email-analytics` (anchor "tracking setup and reporting"); related posts: `google-analytics-metrics-for-beginners`, `how-much-influence-does-the-internet-have-on-customer-purchases`, optionally `find-the-right-seo-tool`; CTA to contact.
- Add `FAQPage`-style Q&A block (3-4 questions) and HowTo-style numbered steps; BlogPosting JSON-LD via template with dateModified.

## (g) Frontmatter and structure
- Keep `slug`. Set `title`, add real `excerpt` (blog.ts uses it directly, else the first paragraph).
- `date`: keep original 2020-04-16 only if you want the "updated" signal; blog.ts sorts by `date` and ignores `modified`. Recommended: set `date` to the republish date (2026) and keep original in `original_date`. Needs owner decision; honesty note: avoid implying it was written in 2026 if only lightly edited, add "Updated <date>" line in body.
- Replace `tags` `import:test-1` with `analytics`, `ga4`, `ecommerce`, `reporting`.
- Remove the `import:` block (wp_guid, source_database etc.) from published frontmatter or move to an unpublished provenance file; it leaks `pleasecart.com` and staging DB name. Parser ignores nested keys so it is harmless to rendering, but clean for the repo.
- Body: single H1 equal to title (blog.ts drops it and shifts headings down; it matches only `# ` exactly equal to title, so keep title text identical). Structure: Intro/what you need > UA to GA4 translation table > 6 task sections (transactions by landing page, by channel, by date range, email revenue, referrals, by product) > filtering/regex > troubleshooting missing data > monthly checklist > CTA. Add screenshots (alt text) of GA4 reports using a demo property; do not use client data.
- Remove external links to dead pages (megalytic, andygibson, stackexchange).

## (h) CTA
End with: "Numbers don't line up, or revenue shows blank? We set up and audit GA4 tracking, then explain the results in plain English." Button to `/services/email-analytics` plus contact; secondary offer of a tracking audit (confirm offer exists, `contact.budgets` form is the only intake today).

## (i) Effort: M (L if screenshots and live GA4 verification are done)
Checklist:
1. Verify current GA4 report names/paths in a demo property (blocker for accuracy).
2. Draft UA-to-GA4 translation table and new section outline.
3. Rewrite each task section with GA4 steps; rewrite regex section for GA4 filters/Explorations.
4. Add troubleshooting (missing purchases, consent, mismatches with store) and monthly checklist.
5. Add data retention, BigQuery, Looker Studio, Consent Mode v2 notes (sourced).
6. Replace old-brand references and dead links; add internal links and CTA.
7. Fix frontmatter (title, excerpt, tags, date policy, strip import block).
8. Run a human-voice edit pass (stop-slop) and a final test build; check `/blog/google-analytics-navigation-guide` renders and service page link still works.
9. Coordinate with the `google-analytics-metrics-for-beginners` plan so the two do not overlap.
