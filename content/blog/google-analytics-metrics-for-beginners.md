---
title: "GA4 metrics for beginners: what to track"
slug: "google-analytics-metrics-for-beginners"
status: "publish"
date: "2026-04-16"
modified: "2026-10-03"
excerpt: "A plain-English guide to the Google Analytics 4 metrics that matter: users, sessions, engagement, sources and key events, and how to read them."
tags:
  - google analytics
  - ga4
  - analytics
  - reporting
---

# GA4 metrics for beginners: what to track

Google Analytics has changed a lot since the older version most guides were written for. That version, Universal Analytics, has been retired. Google Analytics 4 (GA4) is what you use now, and several familiar terms mean something different or have been replaced.

This guide covers the handful of GA4 metrics that matter for a small business, what each one tells you, and what to do with it.

## What changed from the old version

If you learned analytics a few years ago, this table maps the old terms to the new ones.

| Old term | In GA4 |
| --- | --- |
| Pageviews | Views (counted from the page_view event) |
| Goals | Key events (any event you mark as important) |
| Conversions | Key events (Google Ads still uses "conversion") |
| Bounce rate | Engagement rate, with bounce rate as its opposite |
| Goal completion location | Not needed; you track the event itself |

The biggest shift is that GA4 records everything as an event: a page view, a click, a form submission. A key event is just an event you tell Google matters to your business.

## Traffic: users, sessions and views

**Users** are the people (or really, browsers and devices) visiting your site. GA4 reports total users and active users. Active users are the ones who actually engaged with the site, and it is the number most reports lead with.

**New users** are people visiting for the first time. A healthy mix of new and returning users usually means you are both reaching fresh people and giving old ones a reason to come back.

**Sessions** are visits. One person can have several sessions. A session ends after a period of inactivity, 30 minutes by default.

**Views** count each time a page loads. Use the "Pages and screens" report to see which pages get the most views. That tells you what your audience actually cares about.

## Sources and channels: where visitors come from

The "Traffic acquisition" report shows how people found you. Two ideas matter here.

**Source / medium** pairs where the visitor came from (the source) with how they got there (the medium). Common pairings:

- google / organic: unpaid search results
- google / cpc: paid search ads
- (direct) / (none): typed your address, used a bookmark, or the source could not be identified
- another site / referral: a link from another website
- email: clicks from an email you sent, when the links are tagged

**Default channel group** rolls these up into broad buckets like Organic Search, Paid Search, Direct, Referral and Email. Start here for a quick view of what is driving traffic.

If you see "(not set)" or a lot of Direct traffic, tracking links are often missing or the source is hidden. It is worth checking before drawing conclusions. GA4's default channel group now includes an "AI Assistant" channel for visits from tools like ChatGPT, Gemini and Copilot, but some AI traffic can still land in Referral or Direct, so check your referral sources instead of assuming. Visits from Google's AI Overviews and AI Mode count as Organic Search.

## Engagement: is anyone paying attention?

**Engaged sessions** are visits that lasted at least 10 seconds, included a key event, or had at least two page or screen views.

**Engagement rate** is engaged sessions divided by total sessions. A higher number generally means visitors found what they expected.

**Bounce rate** is the opposite: the share of sessions that were not engaged. It is not the same as the old single-page definition, so do not compare it to numbers from older reports.

**Average engagement time** shows how long your site was actually in the foreground for visitors.

A low engagement rate on a page that should hold attention, like a service page, is a sign the message, the page speed or the traffic source needs a closer look. If your pages are slow or confusing, our [websites](/services/websites) work focuses on that.

## Key events and conversion rate

Key events are the actions that matter to your bottom line. Examples:

- A contact or quote form submission
- A phone number click
- A completed purchase
- A newsletter signup
- A booking or consultation request

You set these up by tracking the event, then marking it as a key event in GA4. Name them clearly, such as `contact_form_submit` or `phone_click`, so reports stay readable.

**Conversion rate** (or key event rate) is the number of sessions or users who completed a key event, divided by total sessions or users. If 1,000 sessions led to 25 form submissions, the rate is 2.5 percent. Many older guides, including an earlier version of this one, flipped that formula, so check the denominator in any report you read.

Look at key event rate by source. A channel with modest traffic but a high rate may deserve more of your budget than one that sends a crowd that never acts.

## A starter dashboard: five numbers

If you only watch five things each month, make it these:

1. **Active users**: are you reaching people?
2. **Sessions by channel**: which sources bring them?
3. **Engagement rate**: do they stay and explore?
4. **Key events**: are they taking the actions you want?
5. **Key event rate by channel**: which sources actually produce results?

Compare against the previous month and the same month last year, since most businesses have seasonal swings.

## Know the limits of your data

GA4 is useful, but it is not a perfect count.

- **Privacy settings and consent.** Visitors who decline cookies may not be tracked, and consent rules vary by region. Talk to whoever manages your site and legal needs.
- **Ad blockers and browser limits.** Some visits never get recorded, so GA4 tends to undercount.
- **Thresholding and modeled data.** In some reports, Google hides or estimates numbers to protect privacy, so small segments can look incomplete.
- **Data retention.** Detailed event-level data in Explorations is kept for a limited time, and the setting is adjustable. Check yours so you do not lose history you need.

Treat the numbers as a reliable direction, not an exact tally.

## Common questions

**What replaced bounce rate in GA4?** Engagement rate is the main measure, and bounce rate is available as its inverse.

**Are conversions and key events the same?** In GA4 reports, key events is the current term for what used to be called conversions. Google Ads still uses "conversion" for actions it counts.

**Do I need Google Tag Manager?** Not for basic tracking, but it makes custom events like button clicks and form submissions much easier to add and manage.

**Can I connect GA4 to other tools?** Yes. Linking it to Google Search Console and Google Ads helps you see search and ad performance alongside site behavior.

## Where to go next

If you want a tour of the interface, read our [Google Analytics navigation guide](/blog/google-analytics-navigation-guide). If you are comparing tools to go with your reporting, see [how to find the right SEO tool](/blog/find-the-right-seo-tool). Our [email and analytics](/services/email-analytics) work covers tracking setup and plain-English reporting.

## Not sure your tracking is right?

If your reports do not match what you see in your business, or you are not sure which numbers to trust, tell us about your setup through the [contact form](/#contact). You will talk directly with the founders. You can also reach us at info@wilson-walleser.com.
