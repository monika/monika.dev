---
title: "Sitewide Search: Analytics & Content Insight"
intro: Conceived, built, and owned AdRoll.com's Algolia sitewide search and the weekly reporting program around it — turning search logs into a standing read on what the site's audience came looking for and couldn't find.
role: Web Design & Development
context: AdRoll
order: 3
draft: true
about:
  - Site search
  - Interface design
  - Search analytics
  - Information architecture
  - Front-end development
eleventyNavigation:
  key: site-search
  order: 3
---

## The Problem

A marketing site accumulates content faster than it accumulates ways to find it. AdRoll.com spanned five distinct content types — blog, resource library, knowledge center, marketing platform pages, and news — across more than one platform, and nothing tied them together for someone who arrived knowing what they wanted but not where it lived.

The second problem was quieter and more interesting: nobody knew what visitors were looking for. Every unanswered search is a person telling you, in their own words, what you failed to publish. That signal was being thrown away.

## What I Built

**The search itself.** Configured and launched Algolia across adroll.com, mapping five content types into a single index.

**The interface.** I designed the layout of the search panel states — including what the panel shows before anyone types — and the results page. The empty state isn't dead space; it's the most-seen screen in any search UI, so I curated its default menu to route people toward high-intent pages. It worked: **95% of empty-state clicks land in the top six results.**

**The reporting program.** Search is only half the value if the logs go unread, so I built a weekly analytics dashboard as a single self-contained HTML/CSV file — no API dependency, no credentials, no developer in the loop. Non-technical stakeholders could open it and answer their own questions. That fed a weekly reporting cadence to the content, revenue marketing, and product marketing teams.

## By the Numbers

Data period: 27 March – 24 June 2026, thirteen weeks.

- **9,400+** searches analyzed
- **800–1,700** typical weekly search volume, noise and empty queries excluded
- **5** content types indexed
- **6+** persistent content gaps identified — recurring zero-click queries with verified, sustained demand
- **95%** of empty-state clicks landing in the top six curated results

## What It Surfaced

The gaps were the point. A query with high volume and zero clicks is the most actionable thing in a search log — demand that's already been proven, against content that doesn't exist or can't be found.

- A **brand unification** gap that grew from four searches a week to **180+ in a single week** after an announcement, with zero clicks and no dedicated landing page. Search caught the demand spike within days of it appearing.
- A **developer audience** with nowhere to go — queries for "api", "developer", and "developer portal" returning zero useful results. Escalated to engineering.
- A high-frequency query tracked across **four consecutive weeks** — 70+ searches, one result returned, zero clicks every week — escalated as a priority content brief.
- **Intent mismatches** where the content existed but couldn't be found by the words people actually used: acronyms routing to the wrong content types, a case study unfindable by its own name.

It also worked in the other direction, identifying which content was performing well enough to amplify elsewhere — several queries converting at 100% click-through, and a long tail in the 60–90% range worth promoting through other channels.

## Why It Matters

Search analytics is the cheapest user research a marketing site has. It's unprompted, it's in the user's own language, it arrives continuously, and it costs nothing to collect once the plumbing is in place. Every other method — interviews, surveys, usability sessions — requires asking. This one only requires listening, and then building the habit of reading what came in.

The design work and the analytics work aren't separate here either. Curating the empty state is a design decision that only pays off because the logs said what people wanted; the logs are only legible because the index was mapped deliberately. Same question underneath both: does this serve the user?

## Responsibilities

- Algolia index configuration and content-type mapping across five content types
- Interface design for the search panel states and the results page
- Front-end build
- Weekly analytics dashboard, built for non-technical self-service
- Established and ran the weekly reporting cadence for three marketing teams
- Translated search behavior into content briefs for the editorial team

<small>Tools: Algolia, Google Search Console, HTML/CSV reporting. Figures self-measured from Algolia export data, March–June 2026.</small>
