# Fact-check log: google-analytics-metrics-for-beginners (2026-10-03, live lookups)

12 live lookups (firecrawl scrape/search) this run.

- VERIFIED: Engaged session (10 seconds, key event, 2+ views), engagement rate, bounce rate as inverse, bounce differs from UA definition: https://support.google.com/analytics/answer/12195621 and https://support.google.com/analytics/answer/9143382 (page wording varies slightly: "longer than" vs "10 seconds or longer"; article wording left).
- VERIFIED: Views, average engagement time (foreground), total/new users: https://support.google.com/analytics/answer/9143382
- VERIFIED: 30-minute default session timeout: https://support.google.com/analytics/answer/9191807
- VERIFIED: Key event definition and marking an event: https://support.google.com/analytics/answer/9355848
- VERIFIED: Google Ads still uses "conversion": https://support.google.com/analytics/answer/13965727
- VERIFIED: Direct, Organic Search, Referral, Email channels; Direct = saved link or typed URL: https://support.google.com/analytics/answer/9756891
- FIXED: AI assistant traffic claim. GA4 now has an "AI Assistant" default channel (ChatGPT, Gemini, Copilot etc.); AI Overviews/AI Mode count as Organic Search. Article reworded, with hedge that some AI traffic may still be Referral/Direct (same source).
- VERIFIED: Universal Analytics stopped processing data July 1, 2023: https://blog.google/products/ads-commerce/upgrade-to-google-analytics-4-before-july-1/ and https://support.google.com/google-ads/answer/13272017
- VERIFIED: Data retention for Explorations is adjustable (2 or 14 months standard): https://support.google.com/analytics/answer/7667196
- VERIFIED: Data thresholds withhold data for privacy: https://support.google.com/analytics/answer/9383630
- VERIFIED: Modeled data for users who decline consent: https://support.google.com/analytics/answer/11161109
- VERIFIED: "Traffic acquisition" and "Pages and screens" report names appear in Google's help (the latter in 12195621); Traffic acquisition not opened directly, so UNVERIFIED as exact name but kept as generic.
- UNVERIFIED (general, kept): GTM optional, Search Console/Ads linking, ad blockers undercount, key event rate formula (no Google page opened defining it; arithmetic 25/1,000 = 2.5% is correct).

Owner decision needed: none.
