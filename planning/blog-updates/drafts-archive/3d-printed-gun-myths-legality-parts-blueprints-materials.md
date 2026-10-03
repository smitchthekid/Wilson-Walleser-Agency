# Plan: 3d-printed-gun-myths-legality-parts-blueprints-materials

## (a) Summary and verdict
Current: a 2019 explainer debunking "3D printed gun" myths (Liberator, Cody Wilson/Defense Distributed, ATF definition under 18 USC 921, ABS/thermoplastic limits, ghost guns/80% receivers, darknet/Bitcoin blueprint distribution). Frontmatter `status: "draft"`, so it is NOT currently published (filtered out in `src/blog.ts`). It is also unfinished (see truncated sentence at the end of the intro: "...the differences in 3D printed firearm design, components,").

**Verdict: RETIRE. Do not publish, do not rewrite for the agency.** Do not redirect to a similar topic either; the topic has no relationship to any service in `src/content.ts`.

## Brand and legal/brand-risk assessment
- Fit: none. Wilson + Walleser sells brand strategy, websites, paid ads, SEO/content, social, email/analytics. The post is a firearms-policy/technology piece from the previous brand's author (`wp_guid: mitchleemarketing.wordpress.com/?p=195`), with an accidental marketing link in a heading (the "Myth: 3D Printing a Safe & Functional Firearm is Easy" heading links to the website-cost post).
- Ad platform risk: firearms-related content on a domain can trigger Google Ads and Meta policy scrutiny (weapons / "dangerous products" policies cover instructions for making weapons), which directly conflicts with the agency's paid-advertising service and with client accounts the agency manages. Needs verification against current Google/Meta policy text before final call, but the risk is enough to retire.
- Legal/content risk: explains how untraceable firearms are obtained ("Method 1/2", ghost guns, distributing blueprints via VPN/P2P, darknet). Even framed as myth-busting, it reads as how-to-adjacent. Also contains legal statements that are now stale or wrong-in-context: it is a 2019 view of ATF rules and of the Defense Distributed injunction; federal rules on frames/receivers/ghost guns and the status of DD litigation changed after 2019 (ATF "frame or receiver" rule 2022 and the later Supreme Court case; needs verification). Publishing legal-sounding claims without counsel review is a liability.
- Risk of defamatory or uncheckable claims about named people ("was also not an engineer", "arguably violated federal firearm laws", Silk Road murder-for-hire).
- Reputation: a husband-and-wife "founders on every account" agency; clients in hospitality/automotive/manufacturing/AI startups would not expect this.
- Third-party/link rot: many external links (tumblr, gotopac blog, Wired, defcad.com, 2018 LA Times) are 7+ years old and one points to a former competitor/partner blog.
- Image rot: 5 `lh3.googleusercontent.com` hotlinked images that will break.

## (b) Old-brand references and dated claims (quotes)
- Frontmatter `wp_guid: "https://mitchleemarketing.wordpress.com/?p=195"`, `tags: import:test-1`, `source_database: xpaocwyi_staging`, `dump_generated: "Sep 26, 2026..."` (import metadata; remove from any retained record).
- `[## Myth: 3D Printing a Safe & Functional Firearm is Easy](https://mitchleemarketing.wordpress.com/2019/11/18/how-much-does-a-website-cost/)` (old-brand URL, mislinked heading).
- "It's been over 5 years since 3D printed guns first broke headlines." (dated; now ~14 years since 2012).
- "In August 2018 a district court judge extended a ban..." and "a $7 shipping fee" (2018 situation).
- "likely a decade away from consumer accessibility" (3D-printed metals; false by 2026, consumer and prosumer metal printing exists; needs verification of current specifics).
- "$40 a year, a dedicated VPN"; "$5k - $500k" printers; "$800 - $3,500" enclosed printers (all stale pricing).
- Related link to `blog.gotopac.com` (filament storage cabinets, 2018).

## (c) Outdated facts
All technical and legal claims should be treated as needs verification and are not worth verifying because the post is being retired. Highlights: 2019-era ATF/state ghost-gun law; later federal frame/receiver rule and litigation; consumer printers now routinely print engineering filaments (nylon, PC, carbon-fiber composites) and enclosed printers are mainstream and cheap; "100% thermoplastic guns have yet to be a fruitful technique" claim is dated; "Silk Road ... upwards of 100 million in yearly revenue" unverified.

## (d) Modernization
None applicable. Not an agency topic.

## (e) Voice/tone
Mismatch. Agency voice (see `brand.tagline`, `hero.subhead`) is plain, direct, business-owner oriented, no jargon. This post is editorial/political with snark ("savvy --- and the savage", "Ghosts Gun are Illegal").

## (f) SEO
- No target keyword worth owning. Any rankings it gathers would attract the wrong audience and dilute topical authority for the SEO/ads pillars in `planning/seo_infrastructure_master.md` (Pillars 1-3 are SEO, paid, CRO). It fits no pillar and no cluster.
- Currently not in sitemap or `posts` because `status: draft`. Keep it that way.
- Not linked from any service `relatedPosts` (verified in `src/content.ts`).
- If the old URL was ever live on a previous domain, there is nothing to redirect to on the new site; let `/blog/3d-printed-gun-myths-...` 404/410. If the old WordPress URL had inbound links worth keeping, 301 to `/blog` (not to an unrelated post).

## (g) Frontmatter/structure changes
- Preferred: delete the file from `content/blog/` and keep an archived copy outside the repo (or in git history). Alternative: leave as `status: "draft"` but move out of `content/blog/` so no future bulk status flip publishes it.
- Do NOT flip to `publish`.
- Update the "14 imported WordPress blog posts" count in `planning/seo_infrastructure_master.md` (Phase 3) to 13 after removal.

## (h) CTA
None. Do not attach an agency CTA to this content.

## (i) Effort and checklist: S
1. Confirm with the founders (Mitch/Katelyn) that retirement is acceptable (owner decision; Mitch may have authored it under the old brand).
2. Move the file out of `content/blog/` (or delete) and verify build with `npm run build`.
3. Confirm slug absent from `sitemap.xml`, search index and service `relatedPosts`.
4. Decide redirect policy (410/404 vs. 301 to `/blog`) in `_redirects`.
5. Update post count in the SEO master plan.
6. If the founders want a replacement piece on "avoiding brand-safety/ad-policy rejections," that is a new article, not an edit of this one.
