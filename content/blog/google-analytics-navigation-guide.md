---
title: "Find Sales and Revenue in GA4: A Click-by-Click Guide"
slug: "google-analytics-navigation-guide"
status: "publish"
date: "2026-04-16"
modified: "2026-10-03"
excerpt: "Where to find revenue, transactions, channels and product sales in Google Analytics 4, plus how to filter pages and fix missing ecommerce data."
tags:
  - analytics
  - ga4
  - ecommerce
  - reporting
---

# Find Sales and Revenue in GA4: A Click-by-Click Guide

This guide shows you where to find sales, transactions and revenue in Google Analytics 4 (GA4), step by step. It covers revenue by channel, email and referral sales, product performance, and how to filter reports down to specific pages or products.

An earlier version of this guide covered Universal Analytics, the older version of Google Analytics. That version no longer collects data, so everything below is for GA4. Google renames reports now and then. If a menu label differs from what you see, look for the closest match in the same section.

## What you need before you start

- A GA4 property with ecommerce events set up. The report below only shows revenue if your site sends a `purchase` event with the order details.
- Viewer access or higher to the property.
- A date range that actually contains orders.

## Old Analytics menus and where they went

If you learned the old version, this table maps the habits to GA4.

| Old Universal Analytics path | Where to look in GA4 |
|---|---|
| Conversions > Ecommerce > Transactions | Reports > Ecommerce purchases (under Monetization in most properties) |
| Conversions > Ecommerce > Product Performance | Reports > Ecommerce purchases (item views and purchases by product) |
| Acquisition > All Traffic > Channels | Reports > Acquisition > Traffic acquisition |
| Behavior > Site Content > All Pages | Reports > Engagement > Pages and screens |
| Acquisition > Social | Traffic acquisition, filtered to social channels |
| New vs Returning | Reports > Retention, or an Exploration |

## Find revenue and transactions

### Overall revenue and purchases

1. Open **Reports > Monetization > Overview**.
2. Set the date range in the top right corner.
3. Turn on **Compare** to see the previous period or the same period last year.

### Revenue by channel

Channels are groups like Organic Search, Paid Search, Direct, Referral, Email and Social.

1. Open **Reports > Acquisition > Traffic acquisition**.
2. Look at the **Session default channel group** column for each channel.
3. Scroll to the right for conversions and revenue columns. If revenue isn't showing, check that your purchase event is firing and sends a value (see the troubleshooting section below).

Note that **User acquisition** shows how someone first arrived. **Traffic acquisition** shows how each visit arrived. For sales, Traffic acquisition is usually what you want.

### Revenue by landing page

1. Open **Reports > Engagement > Landing page**.
2. Look at the conversions and revenue columns for each page where visits started.

### Email revenue

1. Open **Reports > Acquisition > Traffic acquisition**.
2. Change the first column to **Session source / medium** using the dropdown above the table.
3. Search for `email` to see sales from your newsletters and automated emails.

This only works if your email links carry campaign tags (UTM parameters). Without them, email clicks often land in Direct.

### Referral revenue

Referral traffic is visitors who arrive from links on other sites, including partners, directories and blogs.

1. Open **Reports > Acquisition > Traffic acquisition**.
2. Filter the table to **Session default channel group** equals **Referral**.
3. Switch the first column to **Session source / medium** to see which sites send sales.

### Revenue by product

1. Open **Reports > Ecommerce purchases** (listed under Monetization in most properties).
2. Use the search box to find a product by name.
3. Change the dimension to item name, item ID or item category to group results the way you think about your catalog.

## Filter to specific pages or products

Most GA4 report tables have a search box. It matches text that contains what you type, which is enough for one page or one product.

For example, to look at one page, type a short path such as `/services/websites` rather than the full web address with the domain. The report stores paths, not full URLs.

To look at several pages or products at once, you have two options:

1. **Add a filter or comparison.** Use a condition such as "page path matches regex" and enter several values separated by a pipe, like `/services/websites|/services/seo-content`. Do not add spaces around the pipe.
2. **Build an Exploration.** Open **Explore** from the left menu, create a Free form report, and add a segment or filter on page path, item name or item ID.

If the filter returns nothing, check that you are filtering on the right field. Searching a page title when the filter is set to a page path is the most common reason for an empty table.

## Social traffic and new versus returning users

GA4 has no single social report. Open **Traffic acquisition** and filter to the Organic Social and Paid Social channel groups.

For new versus returning users, look in **Reports > Retention**, or use an Exploration to split any report by user type.

## If your revenue is blank or looks wrong

Blank revenue almost always means a tracking problem, not a reporting problem. Work through these in order:

1. **Is the purchase event firing?** Complete a test order with Google Tag Manager preview or GA4 DebugView open, and confirm a `purchase` event appears.
2. **Does the event carry the details?** Revenue comes from the order value and item list sent with the event. If they're missing, GA4 has nothing to report.
3. **Is it marked as a key event?** Conversion columns only count events you've flagged.
4. **Is consent getting in the way?** Visitors who decline cookies may not be tracked, so GA4 can show fewer orders than your store does.

GA4 and your store will rarely match exactly. Ad blockers, declined cookies, different attribution rules and the way each tool counts a sale all cause small gaps. Treat your store as the source of truth for order totals and GA4 as the source for where those orders came from.

One more setting worth checking: GA4 keeps detailed event data for a limited time, and standard properties can choose 2 or 14 months. Look at **Admin > Data settings > Data retention** and choose the longer option so your Explorations can look back further.

## A monthly revenue check

Once a month, spend 15 minutes on this:

1. Compare total revenue in GA4 against your store for the same dates.
2. Check revenue by channel and note which channels moved up or down.
3. Check your top products and top landing pages.
4. Confirm email and referral sales are still showing under the right sources.
5. Write down one thing to change next month.

## Where to go from here

If you want to go further than the built-in reports, GA4 can export data to BigQuery, and Looker Studio can turn it into dashboards. Those are worth looking at once the basics are in place.

New to the terms in these reports? Our guide to [Google Analytics metrics for beginners](/blog/google-analytics-metrics-for-beginners) explains them in plain English. If you're weighing how much your website drives sales, see [how much influence the internet has on customer purchases](/blog/how-much-influence-does-the-internet-have-on-customer-purchases).

## Numbers don't line up?

If revenue shows blank, or GA4 and your store disagree by a lot, the fix is usually in the tracking. We handle [tracking setup and reporting](/services/email-analytics), and explain the results in plain English. [Request a quote through our contact form](/#contact) and tell us what you're seeing, or email info@wilson-walleser.com.
