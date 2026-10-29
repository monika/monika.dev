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

## Overview

**The Challenge:** adroll.com had no sitewide search, and no way to see what visitors were looking for, finding, failing to find, or finding and ignoring. That gap is largest on mobile, where search is how many people navigate. Nobody had asked me to close it, and I had a full production queue to support at the same time.

**The Approach:** Use the Algolia integration our CMS already had, which was already working on the blog, rather than build something new. Index the content visitors look for, design the search interface around what people see before they type, and own the weekly reporting that reads the logs.

**The Thinking:** Take the path of least resistance before committing real resources. Set it up so content and SEO teams could manage it themselves, so it didn't need a developer to keep running.

**The Outcome:** 9,706 searches over thirteen weeks in spring 2026, and a standing, first-party read on what visitors wanted that the company hadn't had before. The weekly reporting turned those searches into content briefs. The automated Slack version of that reporting wasn't finished when my role ended in June 2026.

## The context

The site had a blog search, and the blog's engagement was good. Everywhere else, a visitor who knew what they wanted but not where it lived had the navigation and nothing else.

The second gap was quieter. Without search, we couldn't see three things: what visitors looked for and found, what they looked for and didn't find, and what they found and didn't click. Every search that fails is a visitor telling you, in their own words, what you haven't published or can't be found by. That information was never being collected.

I identified this while working on other marketing site needs, and I made the case for holding time for it. The project's deadline slid as I worked through the production queue.

## The solution

### What gets indexed

Our CMS had a native Algolia integration, and we'd been using it on the blog with good results, so expanding it was the lowest-risk way to get sitewide search. I audited the site and mapped what to include: blog posts, resource hubs, product pages, news, webinars, case studies, and the glossary.

I left out landing pages and SEM-specific tracks. They're built for campaigns, not for browsing, and they would have crowded results.

Inclusion is controlled entry by entry in the CMS, so the content and SEO teams could add, remove, and update what's searchable on their own.

### Three states, designed on purpose

I designed the layout for each state of the search interface:

1. **Default, before anyone types.** Recent and popular topics, plus six curated links to high-intent pages such as pricing, solution pages, a flagship report, and a customer case study. This is the most-seen screen in any search interface, so I treated it as a design decision and not as leftover space. Because the links are curated, they also let us point traffic at a new page or case study.
2. **Results.** The sitewide results page.
3. **No results.** Search tips and evergreen topic suggestions, such as retargeting, programmatic advertising, and display advertising, so a failed search doesn't end in a dead end.

### Weekly reporting

Search only pays off if someone reads the logs. I analyzed the Algolia data every week and reported it to the content, revenue marketing, and product marketing teams, turning recurring failed searches into content briefs for the editorial team.

I had started automating this by sending Algolia analytics into the marketing team's Slack channels. It was in progress when my role ended, and I'm counting it as unfinished.

## The results

The figures below cover thirteen weeks in spring 2026, from late March to late June, and come from the raw Algolia exports.

* **9,706** searches in total.
* **46%** (4,500) were empty queries, the default state. Nearly half of all search activity happened on the screen I designed before anyone typed anything.
* **95%** of the position-tracked clicks from that default state landed in the top six results, the curated links (137 of 144).
* **133** searches (98 distinct queries) returned no results, about 1.4% of all searches.
* **753** distinct queries returned results but got no clicks. Those are the content-gap signal.
* **9** queries with at least five searches had a 100% click-through rate.

### What search surfaced

A query that is searched often and never clicked is the most useful thing in a search log. It's demand that's already been proven, against content that is missing or can't be found. Counts per query were modest, so I read them for patterns rather than for volume. Some patterns that held up in the data:

* **Brand unification.** 78 searches for the exact phrase, 377 results returned, zero clicks, with variations on top of that. Results existed, but none of them was what visitors wanted, and there was no dedicated page.
* **Programmatic spend forecasts.** Repeated searches across several phrasings returned 77 results and no clicks. Visitors wanted a forecast, and our programmatic content didn't give them one.
* **Developers.** "developers" and "tech.adroll.com" returned nothing, and "api" returned three results for 24 searches. We had no developer entry point, and I escalated it to engineering.
* **Intent mismatches.** Content existed but couldn't be found by the words people used. "D2C" returned 157 results with no clicks because the acronym didn't match how our content was written. A specific customer case study returned 567 results for its own name with no clicks.

It also worked in the other direction. Queries like "contextual ad targeting," "demand side platform," and "ad gallery" had a 100% click-through rate, which pointed to content strong enough to promote elsewhere.

## The reflection

The most important thing this project proved was about how I work, not about search. The deadline slid because I was supporting the production queue. I learned to speak up for the time to do work I knew was valuable, and to hold that time. What I think is important is important to the business, and it's my job to make that case.

That is also what made the next project possible. Holding time for search set the precedent I used to run the GEO/AEO pilot.

The direct outcome was access to first-party user-intent data the company didn't have.

What I'd do differently: develop the next-steps roadmap before execution, not while building. By the time I reached launch, I wanted a more developed plan for sharing what search was telling us and for optimizing the search itself. I built that out reactively, and it would have been stronger if it had been ready first.

## The next steps

### In Progress:

* Automated Algolia analytics reporting into the marketing team's Slack channels

## Appendix

### Tools

Algolia, through the CMS's native integration. Figures are from Algolia analytics exports for the thirteen weeks above.
