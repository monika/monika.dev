---
title: "Sitewide Search: Learning What Visitors Couldn't Find"
metaTitle: "Sitewide Search: Learning What Visitors Couldn't Find"
intro: "A self-initiated sitewide search for AdRoll.com, built on the CMS's native Algolia integration and designed around what visitors see before they type. It gave the company its first first-party record of what people came looking for, and what they couldn't find."
description: "Designed and launched sitewide search for AdRoll.com, then drafted the reporting schedule around it. 9,706 searches in 13 weeks, 95% of default-state clicks landing in six curated links."
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
cardDescription: "Saw that adroll.com had no sitewide search and no record of what visitors were looking for. Launched Algolia search through the CMS's native integration, designed its three interface states, and drafted the reporting schedule meant to turn search logs into content briefs."
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

Nobody asked me to fix this. I spotted it while working on other marketing site needs. My time was committed first to the marketing team's production queue, so I had to deliberately hold time for it.

## The approach

**Start with what already worked.** Our CMS had a native Algolia integration, and it was already performing well on the blog. Expanding it was the lowest-risk way to get sitewide search before committing real resources.

**Index what people look for.** I audited the site and mapped in blog posts, resource hubs, product pages, news, webinars, case studies, and the glossary. I left out landing pages and SEM-specific tracks, which are built for campaigns and would have crowded results. Inclusion is managed entry by entry in the CMS, so the content and SEO teams can run it without a developer.

**Design every state.** The search interface has three, and I designed the layout of each.

{% uiState "img-search-default", "The AdRoll site header with the search field focused and a panel open below it. A Recent Searches list (what is d2c, retargeting) and a Popular Searches list (dooh, testing, lifetime) sit beside Popular Search Results: six curated links to Pricing, Managed Services, Connected TV Advertising, Account-based Marketing, a Snowflake customer story, and the State of Digital Advertising Report.", "Default, before anyone types: recent and popular searches beside six curated links to high-intent pages. It's the most-seen screen in any search interface, so I designed it as a routing tool, and curating it also let us point traffic at a new page or case study." %}

{% uiState "img-search-results", "The search panel after typing what is d2c. A Recent Searches list shows what is d2c beside Results for what is d2c: six blog posts with matches highlighted and a See All Results button below.", "Results: searches are saved to Recent Searches, and results are labeled by content type with matches highlighted, plus a link to the full results page." %}

{% uiState "img-search-empty", "The search panel after typing developers. It reads No results for developers, lists tips (double-check the spelling, use fewer words, search for a less specific term), and links to popular terms: Retargeting, Programmatic advertising, and Display advertising.", "No results: tips and evergreen topics, so a failed search doesn't end in a dead end." %}

**Check the logs.** Analytics only work if someone is reading them. I drafted a report schedule to inform the content, revenue, and product marketing teams, in an effort to turn failed searches into content briefs. I planned to automate it, sending Algolia analytics into the marketing team's Slack channels, but my role ended in June 2026 before the schedule or the automation was in place.

Reading the logs also turned up a bug. The search input was appending a trailing space to over 90% of queries, so Algolia treated "remarketing " and "remarketing" as different searches: the clean term returned 515 hits and the spaced one only 21, which also broke our synonyms and split the analytics. I wrote it up in a January 2026 report, and with Gemini's help fixed it by trimming the query before it reaches Algolia.

## The result

Thirteen weeks, March 31 to June 28, 2026, from the raw Algolia exports:

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

The deadline slid because the marketing team's production queue came first, and I learned to speak up for the time to do work I knew mattered. That is what made the GEO/AEO pilot possible next. What I'd do differently is have the plan for sharing and acting on search insights ready before launch, instead of building it as I went.
