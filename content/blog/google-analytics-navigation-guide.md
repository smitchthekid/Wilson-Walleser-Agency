---
title: "Google analytics navigation guide"
slug: "google-analytics-navigation-guide"
status: "publish"
date: "2020-04-16 01:22:15"
modified: "2020-04-16 02:30:54"
excerpt: "How do I find sales, checkouts, and revenue data in Google analytics? A click by click guide."
tags:
  - "import:test-1"
import:
  batch: "test-1"
  source_file: "Please_cart_blog_export_test_1_R0noh_posts.sql"
  source_database: "xpaocwyi_staging"
  source_table: "R0noh_posts"
  dump_generated: "Sep 26, 2026 at 12:30 AM"
  wp_id: 1027
  wp_author_id: 2
  wp_guid: "https://pleasecart.com/?p=1027"
  editor: "gutenberg"
  content_sha256: "29703c7325e4ced3"
  revisions_in_dump: 8
  review_notes: []
---

# Google analytics navigation guide

This is a click by click, step by step walkthrough for checking transaction revenue in Google analytics. You'll learn how to view purchases, checkouts, revenue, and transactions through various menus within the Google analytics platform. You'll also learn how to use advanced search features such as regex to search for specific products from your e-Commerce store.

Navigation guide:

1. Master Google Analytics category > parent category > sub-category
2. [Secondary dimension](https://support.google.com/analytics/answer/6175970?hl=en): Secondary dimensions are located above the data table in the drop-down menu. Use the search feature to find dimensions faster

## **How to View Transactions in Google Analytics**

### Transactions by Landing Page

1. Conversions > Ecommerce > Transactions:
2. Set secondary dimension > Landing page (Where they entered the site)

### Transactions by Channel

1. Conversions > Ecommerce > Sales Performance >
2. Set secondary dimension: Default Channel Group

### Transactions by Date - Daily, Weekly, and Monthly

1. Conversions > Ecommerce > Sales Performance
2. Set date range in the top right corner
3. Set compare data to custom period or previous period (matches same number of days but includes holidays and weekends )
4. (Use Total Revenue, Conversion Rate, Average Order Value tabs toward the top)

## **How to Find Sales Data in Google Analytics**

### Sales: Transactions by Channel

**(Organic, Paid, Direct, Referral, Email)**

[UNDERSTANDING GOOGLE ANALYTICS CHANNELS](https://www.megalytic.com/blog/understanding-google-analytics-channels)

1. Acquisition > Overview.
2. Make sure the “Conversion” dropdown is set to eCommerce.
   **OR**

1. Acquisition > All Traffic > Channels
2. Sort dimension for additional data: Full Referrer, Campaign, Language, Mobile

## **Sales: Email Marketing Revenue**

1. Acquisition > Campaigns > All Campaigns
2. Search 'email'

There are many ways to look at this data,

3. Acquisition> All Traffic> Source Medium>
4. Click “Marketing List/email”
5. Set Secondary Dimension > Campaign

### Sales: Referral Revenue Sources

**(Traffic linked from the blog & 3****rd** **party link sharing around the internet)**

1. Acquisition > All Traffic > Referrals

## Sales: By Product

**Quantity, Unique Purchases, Revenue, AVG Price, Avg Quantity**

1. Conversions > Ecommerce > Product Performance

Choose your Primary Dimension (Product, Product SKU, or Product Category)

·         Use the search bar to quickly find a product by name/brand

## Regex: **How to Search Products in Google Analytics**

Advanced Search > Include > **Page** > RegEx Contains

(**3rd Value** should be whatever you selected as your **secondary dimension** if you chose one other than the default "**page**")

2. ( BRAND A | BRAND B ) -- \*with no spaces\*
3. ( URL page | URL page 2 ) -- \*with no spaces\*
4. ( SKU A | SKU B ) -- \*with no spaces\*

·         For advanced searches, see [Reg. Expressions](http://andygibson.us/2013/10/helpful-regular-expressions-for-google-analytics/)

## **How to View Revenue and Transactions by Page in Google analytics**

### Search for a Page

Common mistakes:

Bad A) Take the full page URL and copy it into the analytics search bar.

Bad B) Forget to ensure that the default search is set to the proper dimension. (Must be set to appropriate search - for pages use Landing Page URL, Page, Full Referrer.

If you try to search for a page title when the advance search function is set to "Source" this isn't going to work. Depending on which Google analytics tab you're in, the default 'advanced search' will change and you have to change it to your desired search category.

\*clicks [advanced search](https://webapps.stackexchange.com/questions/27714/advanced-filtering-in-google-analytics-using-or-statements) settings next to search tab\*

Navigation:

1. Behavior > Site Content > All Pages
2. Use a short URL without domain:
3. **Good**: Page > containing > /get-a-quote/
4. **Bad**: https://pleasecart.com/get-a-quote OR www.pleasecart.com/marketing-services/

## **How to Include Multiple Pages in Google Analytics Data**

2. Set advanced search to "Include" "Page" "**Matching RegExp**"
3. To show combined metrics of multiple pages search = (URL|URL)
4. In search bar: (/google-analytics-navigation-guide/)
5. ( URL page | URL page 2 ) -- \*with no spaces\*

## **Sources: How to View Social Media and New Users in Google Analytics**

**Acquisition Tab**: Find all info related to how users landed on PAC pages

**Search Keywords for PAC Traffic (Google Traffic Only)**

1. Acquisition > Search Console > Queries

### Source: Social Media Traffic

1. Acquisition > Social

### Source: New VS Returning User

1. Acquisition > Behavior > New VS Returning

---
