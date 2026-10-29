---
title: "Sitewide Search: Learning What Visitors Couldn't Find"
metaTitle: "Sitewide Search: Learning What Visitors Couldn't Find"
intro: "A self-initiated sitewide search for AdRoll.com, built on the CMS's native Algolia integration and designed around what visitors see before they type. It gave the company its first first-party record of what people came looking for, and what they couldn't find."
description: "Designed and launched sitewide search for AdRoll.com, then ran the weekly reporting around it. 9,706 searches in 13 weeks, 95% of default-state clicks landing in six curated links."
role: Web Design & Development
context: AdRoll
order: 3
draft: false
about:
  - Site search
  - Interface design
  - Search analytics
  - Information architecture
  - Front-end development
cardDescription: "Saw that adroll.com had no sitewide search and no record of what visitors were looking for. Launched Algolia search through the CMS's native integration, designed its three interface states, and ran the weekly reporting that turned search logs into content briefs."
cardResult: "9,706 searches in 13 weeks, giving the company first-party intent data it didn't have before. 95% of clicks from the default, pre-typing state landed in six curated links."
cardTags:
  - Site search
  - Interface design
  - Search analytics
  - Information architecture
  - Front-end development
eleventyNavigation:
  key: site-search
  order: 3
---

## The challenge

adroll.com had no sitewide search. That left two problems: visitors who knew what they wanted but not where it lived had only the navigation (and on mobile, search is how many people navigate), and we had no way to see what visitors looked for and found, looked for and didn't find, or found and didn't click.

Every failed search is a visitor telling you, in their own words, what you haven't published or can't be found by. That information was never being collected.

Nobody asked me to fix this. I spotted it while working on other marketing site needs, and I had to hold time for it against a full production queue.

## The approach

**Start with what already worked.** Our CMS had a native Algolia integration, and it was already performing well on the blog. Expanding it was the lowest-risk way to get sitewide search before committing real resources.

**Index what people look for.** I audited the site and mapped in blog posts, resource hubs, product pages, news, webinars, case studies, and the glossary. I left out landing pages and SEM-specific tracks, which are built for campaigns and would have crowded results. Inclusion is managed entry by entry in the CMS, so the content and SEO teams can run it without a developer.

**Design every state.** The search interface has three, and I designed the layout of each.

{% browserFrame "img-search-default", "The AdRoll site header with the search field focused and a panel open below it. A Popular Searches column lists retargeting, testing, holiday, magic, and dooh. A Popular Search Results grid shows six curated links: Pricing, Managed Services, Connected TV Advertising, Account-based Marketing, a Snowflake customer story, and the State of Digital Advertising Report.", "Default: before anyone types, six curated links to high-intent pages." %}

The default state is the most-seen screen in any search interface, so I treated it as a design decision instead of leftover space. Curating it also gave us a way to point traffic at a new page or case study.

{% browserFrame "img-search-results", "The search panel after typing ctv. Suggested searches (ctv measurement, ctv full funnel, ctv best) sit beside results for ctv, each labeled by content type: blog posts and news items, with matches highlighted, and a See All Results button below.", "Results: suggested searches and labeled results, with a link to the full results page." %}

{% browserFrame "img-search-empty", "The search panel after typing asdf. It reads No results for asdf, lists tips (check spelling, use fewer words, search for a less specific term), and links to popular terms: Retargeting, Programmatic advertising, and Display advertising.", "No results: tips and evergreen topics instead of a dead end." %}

**Read the logs every week.** Search only pays off if someone reads what comes in. I analyzed the Algolia data weekly and reported it to the content, revenue marketing, and product marketing teams, turning recurring failed searches into content briefs for the editorial team.

## The result

Thirteen weeks in spring 2026 (late March to late June), from the raw Algolia exports:

* **9,706** searches, giving the company first-party intent data it didn't have before.
* **46%** of them (4,500) were empty queries, the default state. Nearly half of all search activity happened on the screen I designed before anyone typed.
* **95%** of the tracked clicks from that state landed in the six curated links (137 of 144).
* **133** searches (about 1.4%) returned no results.
* **753** distinct queries returned results but got no clicks. That's the content-gap signal.

A query that's searched often and never clicked is demand already proven against content that's missing or can't be found. Counts per query were modest, so I read them for patterns:

* **Brand unification:** 78 searches for the exact phrase, 377 results, zero clicks, and no dedicated page.
* **Programmatic spend forecasts:** repeated searches across several phrasings, 77 results, no clicks. Visitors wanted a forecast we didn't have.
* **Developers:** "developers" and "tech.adroll.com" returned nothing, and "api" returned three results for 24 searches. I escalated it to engineering.
* **Intent mismatches:** "D2C" returned 157 results and no clicks, because the acronym didn't match how our content was written. A customer case study returned 567 results for its own name and no clicks.

It also pointed the other way. Nine queries with at least five searches had a 100% click-through rate, including "contextual ad targeting" and "demand side platform", which marked content strong enough to promote elsewhere.

The deadline slid while I supported the production queue, and I learned to speak up for the time to do work I knew mattered. That is what made the GEO/AEO pilot possible next. What I'd do differently is have the plan for sharing and acting on search insights ready before launch, instead of building it as I went. I'd started sending Algolia analytics to the marketing team's Slack channels, and that automation wasn't finished when my role ended in June 2026.
