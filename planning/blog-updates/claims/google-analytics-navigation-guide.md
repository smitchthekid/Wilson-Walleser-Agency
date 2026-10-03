# Fact-check log: google-analytics-navigation-guide (2026-10-03, live lookups)

Live lookups: 8 successful (WebFetch x6, WebSearch x2); 3 firecrawl attempts rate-limited.

VERIFIED: Traffic acquisition path Reports > Acquisition > Traffic acquisition; Session default channel group is default dimension; User vs Traffic acquisition distinction (https://support.google.com/analytics/answer/12923437)
VERIFIED: Engagement > Landing page; Engagement > Pages and screens; search bar/filter use (https://support.google.com/analytics/answer/12931766, /12926732 via WebSearch)
VERIFIED: Ecommerce purchases report exists, default Item name dimension; Item ID and Item category dimensions available to Editors (https://support.google.com/analytics/answer/12924131)
VERIFIED: Data retention path Admin > Data settings > Data retention; standard properties 2 or 14 months (https://support.google.com/analytics/answer/7667196)
VERIFIED: purchase event needs value/items, DebugView and GTM check (https://support.google.com/analytics/answer/13800978)
VERIFIED: Monetization overview report exists (https://support.google.com/analytics/answer/13409465 via WebSearch)
FIXED: "check that purchase event is marked as key event" as cause of missing revenue -> now says check the purchase event fires and sends a value (source lists value/items, not key event, as the cause)
FIXED: retention "default is short" -> states standard properties choose 2 or 14 months (source gives options, not a default)
UNVERIFIED (left as general/soft): exact "Reports > Monetization > Ecommerce purchases" nesting (source page only says Reports, then Ecommerce purchases); Retention report for new vs returning; consent reducing tracked data (hedged with "may"); key event naming/marking menu (page gave no path, article gives none); UTM-less email landing in Direct; UA no longer collecting data; BigQuery/Looker Studio mention; email-analytics service link (internal)

- Email without UTM lands in Direct: PARTLY VERIFIED 2026-10-03 (https://support.google.com/analytics/answer/9756891 Direct = source "(direct)" with medium "(not set)"/"(none)"; Direct is the catch-all channel; tagging guidance https://support.google.com/analytics/answer/14847402). Wording hedged.
