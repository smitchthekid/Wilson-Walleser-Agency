# Rewrite brief (read fully before editing)

You are rewriting ONE blog post for Wilson-Walleser Agency. Inputs: this brief, your plan file in `planning/blog-updates/published/<slug>.md`, and the article `content/blog/<slug>.md`. Also read `src/content.ts` for brand voice, services and founders. Do not read other articles or plans.

## Rules
- Edit `content/blog/<slug>.md` in place. Keep `slug`, `status: "publish"`, `date`, `modified` exactly as they are. Update `title` only if the plan says so; write a real `excerpt` (max 160 chars) and 3-5 lowercase `tags`. Keep the frontmatter flat (`key: "value"` lines plus a `tags:` list); no nested blocks.
- Body starts with `# <title>` matching the frontmatter title exactly (the site strips it). Use `##`/`###` below that.
- Voice: match src/content.ts - plain, direct, small-business friendly, no hype or jargon. Written as "we" (Wilson-Walleser Agency). 2026-current: the old post is from 2019-2020, so remove or replace anything dated.
- Services: link only to live service pages using these slugs from src/content.ts: brand-strategy, websites, paid-advertising, seo-content, social-media, email-analytics (check how the site routes services and match it). Link to other blog posts only if the slug exists in content/blog/.
- CTA: end with a short call to action pointing to the contact form. Contact email, if shown, is info@wilson-walleser.com. No other email addresses, phone numbers or external contact links.
- No dollar prices, rate cards, "free audit/review" or other offers. Use "request a quote" language. Qualitative cost drivers are fine.
- No invented statistics, studies, quotes, or client results. Keep a stat only if it is evergreen and you are confident; otherwise drop it. Every remaining factual claim about a platform, product, law, or number goes in the claims list (below).
- Remove all pleasecart.com / mitchleemarketing / diyhive references and old image links that no longer make sense.
- Preserve the article's core topic and search intent; this is a heavy rewrite, not a new subject. Follow the plan's outline and effort level.
- Keep length comparable to or better than the original; no filler.

## Deliverables
1. The rewritten article file.
2. `planning/blog-updates/claims/<slug>.md`: a bullet list of every platform/product/law/number claim in the new article for a separate fact-checker (one line each, with the exact sentence).
3. Reply with ONE line: slug, word count before/after, any blocker. Nothing else.

## Added after pilot
- Do not invent service commitments, deliverables, response times, guarantees or turnaround promises. Only describe what src/content.ts says a service does. Otherwise say "ask about it when you request a quote".
- Contact link is `/#contact`; services are `/services/<slug>`; posts are `/blog/<slug>`.
