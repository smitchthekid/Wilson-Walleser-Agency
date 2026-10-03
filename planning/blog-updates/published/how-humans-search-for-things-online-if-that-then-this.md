# Plan: how-humans-search-for-things-online-if-that-then-this

Source: content/blog/how-humans-search-for-things-online-if-that-then-this.md (published 2020-02-19, modified 2020-08-03, wp_id 211, guid `diyhive.com`)

## (a) Summary and verdict
Short (~450 words) opinion piece: humans are "if that, then this" thinkers, search engines infer intent from clicks and follow-up searches, "robots" only find what humans define. Loosely about search intent and behavioral signals. It is conversational, has a hammer/nails anecdote, no actionable advice, no examples, and contains inaccuracies and profanity.
Verdict: HEAVY REWRITE as "search intent" explainer, with a 2026 angle (how people search across Google, AI Overviews, ChatGPT/Perplexity-style assistants, TikTok/YouTube). Keep the "if that, then this" hook and the hammer story. Not a merge candidate on its own, but check overlap with `what-is-content-marketing...` and `find-the-right-seo-tool` (planned by other reviewers) to avoid duplicating intent content. Already listed in `seo-content` service `relatedPosts`.

## (b) Old-brand references and dated claims
- Frontmatter `wp_guid: "http://diyhive.com/?p=211"` (a third legacy brand), `source_database: xpaocwyi_staging`, `tags: import:test-1`, `excerpt: ""` (empty, so blog.ts falls back to the first paragraph, which is weak).
- No explicit brand name in body, but old-brand voice: `sure as shit, if it exists, Google can find it`, `get me the hell out of here`; "Robots" framing and "Yeah, robots are still a bit awkward and clumsy -- they were trained by the best.." (unfinished closing). Profanity does not fit "Wilson + Walleser" professional-but-human voice.
- Typos: `thing through scenarios` (think), `The downside, is`, `Google bots don't understand what you're asking them` (see accuracy below), `where, when why and how`.
- Heading level: file opens with `## How Humans Search...` (H2) duplicating the title. blog.ts only strips a matching `# ` H1, so this renders a duplicate heading under the page title.
- `For now, robots think harder instead of smarter.` and `Google makes its money in gold by understanding what happened after the click` date the piece to pre-LLM search.

## (c) Outdated or unverifiable claims
- "Bots don't know how to answer a question, they just know how to find the answer to a question someone else has already answered": outdated. Since BERT (2019), MUM, and generative features (AI Overviews, AI Mode, Gemini) plus ChatGPT search, systems do synthesize answers. Reframe: engines now both retrieve and generate. Needs verification of current Google feature names/availability in the US before naming.
- "If 99/100 users click the back button... Google bots know": presents click-signal ranking as fact. Google has historically denied using individual-user click metrics (e.g., bounce/pogo) directly in ranking, though the 2024 Google API/antitrust documents discussed Navboost/click data. Treat as "needs verification"; soften to "engines appear to use engagement signals; Google has been inconsistent in public statements". Do not assert specifics or percentages.
- "Google not only knows what you click on... next... after that": no source; rewrite as general principle of query reformulation/session context, flagged with citation to Google documentation (needs verification).
- "billions of search queries a day": Google has cited "billions" and an often-quoted ~8.5B/day figure; unverified, either cite a source or say "billions".
- Missing 2026 reality: zero-click results, AI Overviews reducing clicks (studies exist, verify before citing), Search Console now showing AI features within overall Web search performance (verify), social/video search (TikTok, YouTube, Reddit), voice and multimodal (Lens, Circle to Search).

## (d) Modernization (modern agency practice)
- Reframe as "search intent": informational / navigational / commercial / transactional, with a table mapping each to content type and service (e.g., transactional -> landing page; commercial -> comparison; informational -> guide).
- Add AI search/GEO: how assistants decide what to cite (clear answers, entities, structured data, brand mentions, authoritative sources), what "being the answer" looks like, and a short checklist (answer-first paragraphs, FAQ schema, author bios, crawlable pages, llms.txt is optional/unproven, needs verification).
- Real query examples: pick 3 service-business searches, show the "if that, then this" chain (e.g., "website won't load on mobile" -> "why is my site slow" -> "site speed audit near me"). Use illustrative, labelled-as-hypothetical examples, no invented stats.
- Tie to measurement: Search Console queries, GA4 landing page, site search; link to analytics post.
- Human-in-the-loop and AI-assisted workflows: how W+W uses AI for research/clustering queries while founders decide intent and strategy (only state this if true for the agency; confirm with founders). This reuses the original thesis ("robots find, humans define criteria") in a credible 2026 form.
- Privacy: personalization limits; brief note that logged-in/personalised results mean rank checks vary.

## (e) Voice and tone
Keep the playful "if that, then this" energy, drop profanity, and keep sentences short. Match brand: "Clear, honest reporting", "without the jargon", founder perspective (first-person plural "we"). Replace the robot-vs-human dichotomy with something accurate. Remove filler lines and fix fragments. Run through the stop-slop/avoid-ai-writing pass after drafting.

## (f) SEO
- Target keyword: "search intent" / "how people search online" (secondary: "types of search intent", "search intent for local business", "how AI search changes SEO"). Volume/difficulty needs verification via keyword-agent (SerpStat).
- Title (<=60): "Search Intent: How People Search and What They Want" (50 chars) or "How People Search in 2026: Intent, Not Just Keywords".
- Meta (140-160): "How people really search, from Google to AI assistants, and how to match each search intent with the right page. Practical examples for small businesses."
- Pillar fit: Pillar 1 (Organic Growth and Technical SEO), cluster topic: content strategy/semantic search. Service: `/services/seo-content`.
- Internal links (1 service, 2 related posts, 1 CTA): `/services/seo-content` (anchor "SEO and content strategy"); `what-is-content-marketing-how-does-it-outperform-paid-advertising`; `find-the-right-seo-tool`; optionally `google-analytics-navigation-guide` for measuring queries. CTA to contact.
- Add BlogPosting + FAQPage schema (3 Qs: What is search intent? How do AI assistants change search? How do I find what my customers search?).

## (g) Frontmatter and structure
- Keep slug (already linked in `seo-content`). Slug is long and has a whimsical suffix; renaming is optional but would need a 301 mapping in `_redirects` per master plan. Recommendation: keep slug, change title only (lowest risk).
- Write a real `excerpt` (about 150 chars). Replace tags with `seo`, `search-intent`, `content-strategy`, `ai-search`.
- Remove `import:` block (wp_guid diyhive, staging DB). Dates: decide republish policy (blog.ts sorts on `date` and ignores `modified`); add "Updated" line.
- Body structure: single `# Title` H1 (matches title so blog.ts drops it); intro with hammer story (2-3 sentences); H2 What search intent is; H2 The four intents (table); H2 What happens before, during, and after a search (retain original before/after structure); H2 How AI assistants change the picture; H2 What to do with this (checklist by service); H2 Next step. Target 900-1,200 words.

## (h) CTA
"Not sure what your customers are really searching for? We map the questions behind the clicks and build the content that answers them." Button: `/services/seo-content` plus contact. Secondary: audit of top 10 queries (confirm the offer exists).

## (i) Effort: M
Checklist:
1. Decide republish/date policy and slug policy with owners.
2. Pull keyword data (keyword-agent/Serpstat) and confirm target keyword.
3. Outline per (g); draft intro keeping the hammer story, remove profanity/typos.
4. Write intent table and 3 hypothetical examples (label as illustrative).
5. Write AI search/GEO section; verify any Google/AI feature claims and cite sources; mark unverified items.
6. Soften or remove unsupported click-signal claims.
7. Add internal links, CTA, FAQ block.
8. Fix frontmatter (title, excerpt, tags, remove import block).
9. Voice pass (stop-slop), build, and check rendering/H1 behavior.
