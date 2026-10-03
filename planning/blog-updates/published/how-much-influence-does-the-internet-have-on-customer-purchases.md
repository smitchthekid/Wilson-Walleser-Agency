# Update plan: how-much-influence-does-the-internet-have-on-customer-purchases

File: content/blog/how-much-influence-does-the-internet-have-on-customer-purchases.md (published 2019-11-15, modified 2020-08-03)

## (a) Summary and verdict
Current: a short, unfinished piece. Opens with "A lot.", lists unsourced B2C/B2B online-research stats, then drifts into marketing-spend validation and "lean campaigns" without finishing. Several paragraphs are broken mid-sentence (see b). It ends on a cliffhanger ("But first, what are we trying to catch?") that never resolves.

Verdict: **HEAVY REWRITE** (keep slug since the Websites service already lists it in relatedPosts; reposition as a modern "how customers research and buy online" piece tied to measurement). If founders prefer, **merge** its measurement/validation thesis into a measurement article (Email & Analytics cluster) and 301 this slug there; recommended default is rewrite because the title is a decent search/AI-answer query.

## (b) Old-brand and dated references to fix (quoted)
- "We build lean marketing and advertising campaigns that connect ideal customers..." and "leave the junk trophies for my competitors" (mixes "we" and "my"; old solo voice; fishing metaphor unfinished)
- "then you've come to the right place" / "burning through your budget faster than you can say 'advertising agency'" (jabs at agencies, off-brand for an agency; also generic)
- Broken text, must be rewritten, not patched:
  - "In that same scenario, if you spent $1000 per each $1 of generated revenue, you'll of those online transactions attributed"
  - "One of the biggest differences in overhead websites costs is whether or not your require the infrastructure"
  - "It certainly doesn't mean they'll buy it. Not even if the want it."
  - "Everyone loves data that supports their inner-narrative."
- "Validation: the action of checking or proving the validity or accuracy of something." (dictionary-definition filler)
- "For every 100 people that find your product online, if 1 of them buys something (1%) you're doing something right." (presented as benchmark with no source; conversion benchmarks vary by industry, **needs verification** or remove)
- "For 99.9% of sites, that rate is probably closer to 0%." (unsupported)
- Frontmatter: `wp_guid: https://mitchleemarketing.wordpress.com/?p=82`, `import:` block, tag `import:test-1`. Excerpt ("If you're reading this, it's probably because you're looking for your customers online...") is serviceable but dated in framing.

## (c) Outdated facts and 2026 reality
All stats below are unsourced and ~7+ years old. Replace with cited, current figures from named sources, or remove:
- "90% of shoppers are not absolutely certain of the brand they want before they begin searching online." -> needs verification, no source.
- "Over 50% of consumers state that reading blogs has an influence on whether they make a purchase." -> needs verification; likely a content-marketing vendor survey.
- "61% of consumers say they are more likely to buy from a company that provides custom content." -> a widely recycled, much older figure (Content Marketing Institute-era); needs verification of origin and date.
- "89% of B2B researchers use the internet..." / "90% ... use search specifically" / "71% start with a generic search" -> traced to older Google/Forrester-style B2B studies; **needs verification**. Current alternatives to look for: Gartner buyer journey research, Forrester B2B buyer surveys, 6sense B2B buyer experience report, Think with Google, Pew. Do not invent replacements; pull and cite, or drop the stat list.
- 2026 reality of the journey (qualitative, safe to state): buyers research across search, YouTube/TikTok/Reddit/social, reviews, marketplaces (Amazon), and increasingly AI assistants (ChatGPT, Gemini, Perplexity, Google AI Overviews / AI Mode) before visiting any site; B2B buying is committee-driven and mostly self-directed before talking to sales. State directional claims and cite sources for any number.
- "Reading blogs" as the key influence is narrow; reviews, video, social proof, and AI-summarized answers matter more now.

## (d) Modernization
- AI search / GEO: more answers happen without a click; being cited in AI Overviews and assistants is a new visibility goal. Explain what to do: clear entity info, schema.org, authoritative content, reviews, and Google Business Profile for local. Be honest that measurement of AI referrals is immature.
- Measurement: GA4 (UA sunset July 2023), GTM, server-side tagging, first-party data, CRM-tied conversions; privacy-driven signal loss (Safari ITP, third-party cookie phase-out status **needs verification**: Google changed course on Chrome cookie deprecation in 2024-2025), consent mode v2. This replaces the vague "validation" ramble with a concrete point: attribution is harder, so track leads and revenue, not clicks.
- Attribution: data-driven attribution, incrementality/holdout tests, "how did you hear about us" self-reported attribution, blended CAC/MER.
- Ad platforms: Google Performance Max / AI Max, Meta Advantage+, TikTok; automation means inputs (creative, feeds, first-party conversions) matter most. Keep light; link out to the paid-advertising cluster.
- Reviews and local: Google reviews and Business Profile as purchase drivers.
- AI-assisted workflows: mention briefly that we use AI for research and drafting with founder review, if founders agree (policy decision).
- Reframe thesis: "The internet influences nearly every purchase; the useful question is which touchpoints influence YOUR customers and whether you can prove it." This resolves the existing validation theme coherently.

## (e) Voice and tone
Match brand: plain, honest, numbers tied to goals, no jargon, founder-led. Keep the punchy "A lot." opener idea but earn it. Drop agency-bashing and fishing metaphor, or use it once, fully. Use "we/you". Short paragraphs, no dictionary definitions, no AI filler.

## (f) SEO
- Primary keyword: "how does the internet influence customer purchases" / "online influence on buying decisions" (low volume, likely informational; **needs verification** in Serpstat). Better supporting target: "customer buying journey online" or "how customers research purchases online" (**needs verification**).
- Title: "How the Internet Shapes What Customers Buy (2026)" (49) -- confirm final length against target keyword choice.
- Meta (140-160): "Customers research online before they buy. Here is how search, reviews, social, and AI answers shape purchases, and how to measure what drives yours."
- Pillar-cluster fit: Cluster for Pillar 1 (Organic Growth) and measurement; secondary tie to Pillar 2. Serves as top-of-funnel awareness article.
- Internal links: one contextual link to /services/seo-content ("search and content strategy"); also /services/email-analytics (measurement), /services/paid-advertising; two related posts (how-humans-search-for-things-online-if-that-then-this, google-analytics-metrics-for-beginners, what-is-content-marketing-how-does-it-outperform-paid-advertising); closing CTA to contact.
- Add 3-5 question H2s (e.g. "Where do customers research before buying?", "Does AI search change this?") for featured snippets / AI citations; add FAQPage schema.
- Keep slug; BlogPosting schema with real dateModified.

## (g) Frontmatter and structure
- Remove `import:` block, `wp_guid`, tag `import:test-1`; add tags such as "customer journey", "analytics", "seo".
- Update `modified` to rewrite date; keep `date: 2019-11-15` (or founder call on republish date); rewrite `excerpt` (~150 chars).
- Single H1 (title) then H2/H3 only. Remove the stray `---` horizontal rules used as dividers and the `###` headings that skip levels.
- Outline: Short answer / How customers research now (B2C, B2B, with cited stats) / AI answers and zero-click / Why proving influence is hard / How to measure (GA4, CRM, self-reported attribution) / What to do first (checklist) / FAQ / CTA.

## (h) CTA
"Not sure which channels actually bring you customers? We will look at your current tracking and show you what to fix first." Primary link to contact with service interest Email & Analytics (or SEO & Content); secondary link to /services/email-analytics. Track `service_cta_click` and `article_to_service_click`.

## (i) Effort and tasks
Effort: **M** (short source, but all stats need fresh sourcing and the argument must be rebuilt).
1. Decide with founders: rewrite in place (recommended) vs merge into a measurement post with 301.
2. Source 4-6 current, citable stats (Gartner, Forrester, Think with Google, Pew, 6sense, etc.); mark anything unverifiable and omit it.
3. Draft per (g) outline in agency voice; resolve every broken sentence in (b).
4. Add AI search and measurement/privacy sections.
5. Add internal links and CTA per (f)/(h); add FAQ.
6. Clean frontmatter; write excerpt, title, meta.
7. Editorial plus stop-slop pass; founder review.
8. Publish; submit in Search Console; confirm service page relatedPosts still correct.
