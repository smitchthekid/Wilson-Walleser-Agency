# Fact-check brief (read fully)

You audit ONE rewritten blog post. Inputs: `content/blog/<slug>.md` and `planning/blog-updates/claims/<slug>.md`. Do not read other articles.

## Steps
1. For each claim in the claims file (and any factual claim in the article the writer missed), verify it against current official sources (Google Analytics/Ads help, Meta business help, vendor sites, legal/regulator pages) using WebSearch / WebFetch / firecrawl. Today is 2026-10-03.
2. Fix the article in place:
   - Wrong or outdated claim: correct it to what the source says.
   - Unverifiable claim, or a statistic with no reliable source: remove it or reword it to a safe, general statement.
   - GA4/Ads/Meta UI menu paths and feature names: confirm; if unsure, describe the task without exact menu paths.
   - Legal/privacy statements: keep them general and add "talk to a lawyer" framing where specific.
3. Do not change structure, voice, links, frontmatter or length beyond what a fix needs. Do not add dollar prices, offers, or service promises.
4. Overwrite `planning/blog-updates/claims/<slug>.md` as a log: each claim marked VERIFIED (source URL), FIXED (what changed), or REMOVED (why).
5. Reply with ONE line: slug, counts of verified/fixed/removed, and any claim still needing the owner's decision.

## Hard requirement (added)
- VERIFIED means you opened a live source this run (WebFetch, WebSearch or firecrawl) and it supports the claim. Memory does not count. Record the URL you actually opened.
- If you cannot open a live source for a claim, mark it UNVERIFIED and either reword it to something general or remove it. Never mark it VERIFIED.
- In your one-line reply, state how many live lookups you made.
