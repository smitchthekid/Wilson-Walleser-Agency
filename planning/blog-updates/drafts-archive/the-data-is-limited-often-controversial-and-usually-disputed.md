# Plan: the-data-is-limited-often-controversial-and-usually-disputed

File: content/blog/the-data-is-limited-often-controversial-and-usually-disputed.md (status: draft, dated 2020-03-22)

## (a) Summary and verdict
Title: "Clean energy: Controversial, Contentious, and Disputed". A political and policy analysis of the 2018-2019 EPA Affordable Clean Energy (ACE) rule, quoting EPA documents, a NYT article, and a Health Effects Institute study, concluding ACE is a fiscal proposal that extends coal plant life. It has nothing to do with digital marketing, the agency, or its services. It is also already status "draft", so it is not live.
Verdict: RETIRE (do not publish). Optionally salvage the one transferable idea (data is often polarized and misread) as a brand-new, short marketing article. The ACE content itself is also stale: the ACE rule was vacated by the D.C. Circuit in January 2021 and later replaced by other EPA rules (needs verification of exact current regulatory status), so the piece is factually obsolete as well as off-topic.

## (b) Old-brand references and dated claims to fix
Retiring means most of this is moot, but record it:
- Frontmatter `import:` block (source_file "Please_cart_blog_export_test_1_R0noh_posts.sql", wp_guid "https://pleasecart.com/?p=705", revisions_in_dump: 8) and tag "import:test-1".
- Slug/title mismatch: slug says "the-data-is-limited-often-controversial-and-usually-disputed" while title says "Clean energy: Controversial, Contentious, and Disputed". Neither indicates the topic.
- Dated claims: "In 2018, legislation coined the 'Affordable Clean Energy Act'" (it was an EPA rule proposal, not legislation); "A recent New York Times article" (2019); "Proponents suggest ... 10 years, as opposed to only 5"; "coming decades"; "in 2030 compared to no policy" projections tied to a rule that no longer exists.
- Factual looseness: "legislation"/"bill" used for a regulatory rule; "Clean Energy Act of 2009" appears to be a mislabel (likely the 2009 House-passed American Clean Energy and Security Act, which did not become law); "C02" for CO2. Needs verification if any text is ever reused.
- Contains a stance ("a fiscal proposal, not a clean energy plan") that is political opinion unrelated to the agency and risky for a client-facing brand.

## (c) Outdated facts and 2026 reality
- ACE rule: vacated Jan 2021 (American Lung Association v. EPA); Supreme Court's West Virginia v. EPA (2022) later limited EPA's Clean Air Act 111(d) approach; subsequent EPA power-plant rules have since been issued and revised (needs verification of 2025-2026 status). Do not state current policy without checking primary sources.
- No marketing-relevant facts, tools, or platforms appear in the article, so no marketing update applies.

## (d) Modernization
Not applicable to the clean-energy text. If salvaging the theme, a replacement article could address: "How to read marketing data without fooling yourself" (attribution disputes between GA4 and ad platforms, sampling and modeled conversions, consent-mode gaps, vanity metrics, source credibility). Topics for that new piece: GA4 vs platform-reported conversions, modeled data under consent, AI-search referral traffic being hard to attribute, first-party data, and a checklist for questioning any report (including ours). Ties to Mitch's attribution-pipeline background. This would be a NEW post, not a rewrite.

## (e) Voice and tone
Current text is political commentary in a detached editorial voice. The agency voice is plain-English, honest, client-focused ("Clear, honest reporting... without the jargon"). Political advocacy on coal and EPA policy should not appear on the agency blog. Any replacement article should be written in "we" voice with practical takeaways.

## (f) SEO
- Retire path: no target keyword; the page has no commercial value and no pillar fit. Pillars are SEO, Paid, and CRO/Web, and this fits none.
- Because status is draft, it is excluded from the sitemap per the SEO plan and has no ranking to protect. If it was ever indexed on the old pleasecart.com domain, that is the old site's concern; add a 301 only if the URL existed on a live domain being migrated (needs verification). Otherwise just remove.
- Replacement article (optional): target keyword "marketing attribution" or "GA4 vs Google Ads conversions" (needs keyword volume check). Pillar 2 or analytics cluster; link to /services/email-analytics (contextual), the posts `google-analytics-metrics-for-beginners` and `google-analytics-navigation-guide`, and a closing CTA.

## (g) Frontmatter and structure changes
- Recommended action: delete the file from content/blog/ (or move to an archive folder outside the glob `/content/blog/*.md`). Leaving it as `status: "draft"` is safe because blog.ts filters to `publish`, but it clutters the repo and inflates the "14 imported posts" count in the SEO plan Phase 3. Update that count after removal.
- If the replacement post is written: new filename and slug (e.g. `why-your-marketing-reports-disagree`), clean frontmatter (title, slug, status, date, modified, excerpt, tags), no `import:` block.

## (h) CTA
None for the ACE text. For the optional replacement post: "Not sure which numbers to trust? We will audit your tracking and show you what your reports actually mean," linking to /services/email-analytics and the contact form (`service_interest=Analytics`). Primary conversion: analytics/tracking audit request.

## (i) Effort: S to retire; M if the replacement article is written
Checklist:
1. Founders confirm retirement decision (the content is off-brand and obsolete).
2. Check whether the old URL is referenced anywhere (grep content/ and src/ for the slug; check relatedPosts in src/content.ts). Current scan: not listed in any service's relatedPosts.
3. Delete the file or move it out of content/blog/.
4. Update the SEO plan's imported-post count and any redirect map if needed.
5. (Optional) Outline and draft the "why your marketing reports disagree" post per (d) and (f); fact-check; stop-slop pass; founder review.
6. (Optional) Add internal links and CTA, publish, confirm in sitemap.
