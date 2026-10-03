# Plan: The Digital Divide of Country and Electronic Dance Music

File: content/blog/the-digital-divide-of-country-and-electronic-dance-music.md
Current status: `draft` (not published, not in sitemap). Dated 2019-12-09, modified 2020-04-05.

## (a) Summary and verdict
A music-industry opinion essay, originally written in 2013 for Do Androids Dance (Complex), comparing country and EDM on distribution, success metrics, and business model. It is not a marketing article. It uses 2013-era data (Luke Bryan's first-week sales, 2013 CD sales low, SoundCloud, Pretty Lights free downloads, "Harlem Shake"). Only the closing section ("A Marketer's Field of Dreams") touches marketing.

Verdict: RETIRE as-is (keep as draft, do not publish). Optional: salvage one idea into a short new post (see Option B). Do not heavy-rewrite; the thesis is a 2013 music-industry take and no rewrite would make it a credible 2026 agency post without becoming a different article.

## (b) Old-brand references and dated claims
- Provenance: "The content herein is a modified version of an article I originally published in 2013 on the music culture website Do Androids Dance (DAD)." Third-party publication, first person "I", not agency voice.
- Frontmatter: `wp_guid: "https://mitchleemarketing.wordpress.com/?p=110"`, `source_file: "Please_cart_blog_export_test_1_..."`, `source_database: xpaocwyi_staging`, tag `import:test-1`. Old-brand/staging leakage; strip before any publish.
- "\*2019 Update\*: Can somebody please explain to me why Trader Joe's has a podcast?" Dated and off-topic.
- Wikipedia blockquote on Complex (2013/2014 stats). Dated.
- "some random white dude" link to Diplo; "mindlessly not-so-creative", "tyranny of the public eye", "regurgitated cookie cutter acts who just happen to be really, really, really, really good looking". Snide tone; does not fit a professional agency voice and may offend (country artists, Luke Bryan, Zac Brown quote "the worst song I've ever heard").
- Typos/format glitches: "C*omplex*", `as**"...the worst song I've ever heard."**If`, trailing comma ending "illusion,".
- Likely dead links (Complex, DAD, CMT, Facebook photo.php video, Engadget 2011, westword). Needs verification; assume many are broken.

## (c) Outdated facts and 2026 reality
- "2013 was the worst year ever [for CD sales]": superseded. Streaming now dominates recorded-music revenue (needs verification of current RIAA/IFPI figures before citing anything).
- "EDM listeners have little interest in American broadcast radio... SoundCloud, Spotify": platform landscape changed (TikTok-driven discovery, Spotify/Apple/YouTube Music, Bandcamp ownership changes). Needs verification before restating.
- "Country WAS built to last. Is it still built to last?": the later-2020s country boom/crossover trend contradicts the 2013 "identity crisis" framing. Needs verification; do not assert.
- "EDM is the pinnacle of lean business", "future of musical movements" prediction: unsupported, untestable.
- Pretty Lights free-download model, Skrillex/Harlem Shake as examples: nostalgic, not 2026 evidence.

## (d) Modernization
Nothing to modernize without replacing the content. If salvaged (Option B), the modern angles are: short-form video discovery, first-party audience ownership (email/SMS lists vs platform algorithms), creator-owned distribution, AI-generated music and platform policy, consent/privacy for fan data.

## (e) Voice and tone alignment
Agency voice (content.ts): plain, direct, senior, "without the jargon", no hype. This post is long, rhetorical, polemical, first-person singular for a different publication. Mismatch is high. Any salvaged piece should use "we", short sentences, concrete advice, no insults.

## (f) SEO
- Target keyword: none credible. A "country vs EDM" query is outside the agency's service pillars and would attract the wrong audience and no leads.
- Pillar-cluster fit: none of the three pillars (Organic/Technical SEO, Paid, CRO/Web). Weakest tie is the Social Media service ("Creators and musicians building an audience" in idealFor) but that is not a pillar in seo_infrastructure_master.md.
- Not listed in any service `relatedPosts`. Do not add.
- Keep out of sitemap. Because status is `draft`, blog.ts already filters it out. Do not give it a redirect.
- If Option B is built: new slug, e.g. `how-independent-musicians-build-an-audience-without-a-label`, target "how musicians promote music online" (needs keyword research in SerpStat; unverified volume), title <=60 chars + brand suffix, meta 140-160 chars, link to /services/social-media and one to /services/email-analytics.

## (g) Frontmatter and structure changes
- Keep `status: "draft"` (or move file to `content/blog-archive/`; blog.ts glob only reads `/content/blog/*.md`, so moving it out also guarantees it never ships).
- Remove `tags: import:test-1`, `wp_guid` (mitchleemarketing), `source_database`, and `source_file` if the file ever becomes a publish candidate. Add `excerpt` (currently empty; blog.ts falls back to first paragraph, which is the Complex provenance note and would be a bad excerpt).
- If retiring: add one line in a changelog/planning note; no redirect required since never published.

## (h) CTA
None on retired draft. For Option B: close with "Building an audience as a creator? Our social media team plans, films, and edits short-form content for you" linking /services/social-media and /contact.

## (i) Effort and task checklist
Effort: S (retire) or M (Option B new post, treat as new article).
1. Confirm with founders that the Do Androids Dance/Complex piece has no ongoing rights or attribution obligations (needs verification) .
2. Move file to `content/blog-archive/` (or leave as draft). Confirm blog.ts excludes it and sitemap generation skips it.
3. Confirm no internal link points to this slug (grep content/ and src/).
4. Optional Option B: decide whether a creator-audience post helps the social-media service; if yes, brief a new article from scratch (keyword research, 2026 sources, agency voice), citing nothing from the 2013 text unverified.
5. If Option B ships, add its slug to `relatedPosts` for `social-media` in src/content.ts.
