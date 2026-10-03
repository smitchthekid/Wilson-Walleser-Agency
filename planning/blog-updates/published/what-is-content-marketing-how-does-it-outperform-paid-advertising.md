# Plan: "What is Content Marketing? And How Does it Outperform Paid Advertising?"

Slug: `what-is-content-marketing-how-does-it-outperform-paid-advertising`
Linked from: `seo-content` and `social-media` service relatedPosts in `src/content.ts`. Keep the slug.

## (a) Summary and verdict
About 900 words. Defines content marketing via a Content Marketing Institute quote, frames it as "owned vs. rented media," then runs a list of benefits (inbound leads, shareable content, lower CAC, buyer journey, B2B justification, lower retention costs, owning your data, "sell more by selling less," belief systems). Strong core idea (owned vs. rented), but it is repetitive, asserts rather than demonstrates, and contains filler sections and a claim ("outperforms paid") it never proves. Several headings do not match their content.

**Verdict: HEAVY REWRITE (keep slug, keep owned-vs-rented frame).** Reposition as the SEO & Content pillar's anchor/explainer: "Content marketing vs. paid advertising: when each wins." Honest comparison, not "outperforms." Target 1,500 to 1,900 words.

## (b) Old-brand references and dated claims
- `wp_guid: "https://pleasecart.com/?p=989"` and `review_notes: "2 link(s) to pleasecart.com pages; update after migration"` (old brand/domain).
- Body links to old brand URLs, auto-rewritten by `blog.ts` only if the slug exists locally:
  - `https://pleasecart.com/2020/02/19/advertising/the-truth-about-google-advertising-...` -> resolves to `/blog/the-truth-about-google-advertising-differences-between-google-facebook-advertising-strategies` (OK, confirm file exists and is published).
  - `https://pleasecart.com/2019/11/15/seo-product-marketing/how-much-influence-does-the-internet-have-on-customer-purchases/` -> `/blog/how-much-influence-does-the-internet-have-on-customer-purchases` (confirm).
  - Replace these with hand-written relative links so the plan does not depend on the regex.
- Dates: `date: "2020-04-16 ..."`; "in 3 - 6 months" promise written as agency fact: "we can help businesses rank their websites ... start delivering results in 3 - 6 months" (unsupported guarantee; see (c)).
- Unprofessional lines: "Every golf course has 'that guy' with a $700 driver who can't putt for shit?" (profanity; cut), "steal it", "juggling knives", "Look at me, I'm awesome", "move mountains within the hearts and minds".
- Errors: "business-to-consumer (B2B)" should be B2C; "It's an semi-autonomous process"; "That' guy"; "its the deep"; "trouble shooting"; "sing-along'" mismatched quotes.
- Junk structure: H1 `# **56 words 376 characters**` and "Here are 56 words and 376 characters that won't help you understand..." is a gimmick that wastes the opening; the second `#` renders as an extra h2.
- Misleading headings: "Content Marketing Is A Spectator Sport" (content is about participation, section never explains the title); "Content Builds Customer Belief Systems" (overwrought); "The difference between renting houses and cars versus paid media... Results are guaranteed" (paid media results are NOT guaranteed; this contradicts itself).
- "a single article may have a lifetime of up to 10 years" and "deliver results for well over a decade": needs verification / soften to "can keep earning for years when maintained."
- "Despite the marketing differences..." paragraph and John/Software A example are fine ideas but generic.

## (c) Outdated facts and 2026 reality
- Content Marketing Institute definition: verify current wording at contentmarketinginstitute.com and quote exactly with attribution link; the shortened "focus on owning media, not renting it" attribution must match source. Needs verification.
- External links `forentrepreneurs.com/startup-killer/` and `kapost.com/b/6-different-types-of-buyer-journey-maps/`: check they still resolve (Kapost was acquired by Upland; URL likely dead). Replace with live, reputable sources or drop. Needs verification.
- "Rank in 3 to 6 months": SEO timelines vary by competition, domain authority, and publishing cadence; present as a range with conditions ("often 3 to 12 months; some topics longer"), no guarantee. Needs verification before any numeric claim.
- "Social media ... shareable content": platform landscape changed (X/Twitter, TikTok, LinkedIn video, Reels, Shorts, Threads/Bluesky). Use platform-neutral language or name current ones.
- "Owning your data": now relevant in context of ad targeting limits, iOS privacy, consent regimes (GDPR, state privacy laws in the US). Update.
- "Owned vs. rented" should now also cover a third category: platform-dependent organic (you own the content but not the algorithm/reach) and, new in 2026, AI answer engines that summarize your content (traffic can fall even when visibility rises). Do not invent click-through-loss statistics; cite studies (e.g., Pew, Ahrefs, Semrush) only after verification.
- Google Helpful Content / core updates (2023 onward): thin "SEO content" is penalized; E-E-A-T emphasis. Verify wording before citing named updates.

## (d) Modernization
- AI search / GEO: structure content for citation by Google AI Overviews, ChatGPT, Perplexity, Gemini: clear definitions, question-style H2s, concise answer-first paragraphs, original data/quotes, author bylines with credentials, Organization/Person/Article schema, accurate entity info (matches the W+W SEO plan's JSON-LD items). Add a short section "Content marketing in the age of AI answers."
- AI-assisted workflows: honest section on using AI for research, outlines, repurposing, and drafts with human editing, original experience, and fact-checking as the differentiator. Fits "founders on every account" positioning.
- Measurement: GA4 key events, Search Console, assisted conversions, CRM-tied lead source; replace vague "tracked by evaluating which sources drove calls/emails/RFQs" with an explicit setup (form source field, call tracking, GA4 key events). Link to `/services/email-analytics`.
- Paid + content together (not "vs."): use paid to test headlines/topics fast, retarget readers, and amplify winners; content lowers blended CAC over time. Name current platforms: Google Ads (Search, PMax, Demand Gen), Microsoft Ads, Meta, TikTok, LinkedIn. Verify any feature claims.
- Formats: video, short-form clips, podcasts, newsletters, case studies, original data, tools/calculators; repurposing workflow.
- First-party data: email newsletter and gated resources as owned audience; consent and preference management.
- Compare in a table: Owned (SEO content, email) vs. Rented (paid) vs. Earned (PR, partnerships): time to results, cost structure, control, risk, what happens when you stop.

## (e) Voice and tone
Move from sprawling, metaphor-heavy, occasionally crude to plain, confident, owner-friendly. Use "we" = Mitch and Katelyn; Mitch's technical-SEO/paid-search credibility goes in the "how we decide" section; Katelyn's B2B partnerships angle supports the "help B2B buyers justify purchases" section (could be a quote or sidebar if she agrees). Short paragraphs, specific examples, no profanity, no "power movers." Avoid absolute claims ("content is forever," "results guaranteed"). Run `avoid-ai-writing` after drafting since new copy is AI-assisted.

Suggested outline:
1. Short answer: what content marketing is (2 sentences, plain-language definition; CMI quote attributed)
2. Owned, rented, and earned media (table)
3. Content marketing vs. paid advertising: when each wins
4. How long it takes (honest range, what affects it)
5. What it does for you: leads, lower acquisition cost over time, shorter sales cycles, fewer support questions (merge old benefit sections; cut redundancy)
6. B2B buyers: content that justifies the purchase (keep John/Software A, tighten, or swap for a real anonymized client example if approved)
7. Content in the age of AI search (GEO)
8. How to measure it
9. A simple starter plan (first 90 days: pick 3 topics from customer questions, publish, measure)
10. CTA

Cut entirely: golf joke, "steal it", "Spectator Sport", "belief systems" (fold one sentence into trust paragraph), duplicate "not a short term approach" lines.

## (f) SEO
- Target keyword (confirm in Serpstat/Ahrefs; do not assume volume): "content marketing vs paid advertising" (primary comparison intent); also capture "what is content marketing." Consider whether to split into two URLs; recommendation: keep this one URL targeting the comparison and a definition lead so it wins both.
- Title (<=60): "Content Marketing vs Paid Ads: What Works Best in 2026 | W+W"
- Meta (140-160): "What content marketing is, how it compares to paid advertising, how long it takes, and how to measure it. A plain-English guide from Wilson + Walleser."
- Pillar-cluster fit: Pillar 1 (Organic Growth) anchor/supporting explainer with a bridge to Pillar 2 (Paid). Also feeds Social Media service. Consider making it the hub for a content cluster: keyword research for content, content briefs, repurposing, GEO.
- Internal links (Editorial Linking Formula):
  - Service: `/services/seo-content` (anchor: "SEO and content strategy") ; secondary `/services/paid-advertising`, `/services/social-media`.
  - Articles: `/blog/how-humans-search-for-things-online-if-that-then-this`, `/blog/find-the-right-seo-tool`, `/blog/the-truth-about-google-advertising-differences-between-google-facebook-advertising-strategies`, `/blog/how-much-influence-does-the-internet-have-on-customer-purchases`.
  - CTA: contact form.
- Note mismatch: SEO master plan names `/services/search-engine-optimization` and `/services/content-strategy`; actual route is `/services/seo-content`. Use the real one and flag to the team.
- Schema: BlogPosting + dateModified, Person author (Mitch), optional FAQPage ("How long does content marketing take?" "Is content marketing cheaper than ads?") if visible on page; BreadcrumbList.

## (g) Frontmatter and structure
- Keep `excerpt` but rewrite (currently "How can businesses use content marketing to grow online revenue in 3 - 6 months?" which makes the unsupported promise); new excerpt = meta description.
- Title: update to the comparison phrasing; if it changes, remove or match the leading `# H1` (blog.ts strips only an exact match). Delete the stray `# **56 words 376 characters**` H1.
- Tags: replace `import:test-1` with `content marketing`, `SEO`, `paid advertising`, `strategy`.
- Remove the `import:` block (wp_guid pleasecart.com, source_database, review_notes) after review.
- Update `date`/`modified`; show "Updated 2026" visibly.
- Replace bold-inside-H2 patterns; keep one H2 per section; add a Markdown comparison table (verify styling in BlogPost) and a key-takeaways list near top for AI/skimmers.
- Replace inline `pleasecart.com` links with relative `/blog/...` links.
- Add a "Sources" list for all outside claims.

## (h) CTA
End with: "Want to know whether content or ads should get your next dollar? We'll look at your site, search data, and tracking and give you a straight recommendation. Talk to the founders." Primary link: contact form; secondary link to `/services/seo-content`. Mid-article soft CTA after the comparison table. Confirm any "free audit" offer with founders (SEO plan lists "Organic Audit Request" as the pillar 1 conversion goal, so that wording fits).

## (i) Effort: L (6 to 8 hours: research, rewrite, source verification, table/schema)
Checklist:
1. [ ] Founders decide positioning: comparison guide vs. pure explainer (recommend comparison).
2. [ ] Keyword check in Serpstat; confirm primary keyword and competing SERP formats.
3. [ ] Verify CMI quote and replace/validate the Kapost and forentrepreneurs links; collect 3 to 5 current, reputable sources (mark unverifiable stats "needs verification" or omit).
4. [ ] Write new outline and draft 1,500-1,900 words per (e); cut flagged lines and sections.
5. [ ] Add owned/rented/earned table and "paid + content together" section.
6. [ ] Add GEO / AI answers section and AI-assisted workflow paragraph.
7. [ ] Add measurement section (GA4 key events, Search Console, CRM lead source).
8. [ ] Fix all typos (B2C, "an semi-autonomous," etc.) and remove profanity.
9. [ ] Replace old-brand links with relative links; add 1 service + 2 to 4 article links; add CTA blocks.
10. [ ] Update frontmatter (title, excerpt, tags, dates), delete `import:` block and stray H1.
11. [ ] Add BlogPosting/FAQ schema when the SEO infra lands.
12. [ ] Run avoid-ai-writing, editorial, and brand-review passes; verify `npm run build` and the rendered page.
