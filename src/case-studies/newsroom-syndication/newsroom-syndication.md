---
title: "Newsroom Syndication: Turning Outbound Links into Authority"
metaTitle: "Newsroom Syndication: Turning Outbound Links into Authority"
intro: "An extension of the GEO/AEO pilot. AdRoll's newsroom sent readers off our site and gave search nothing to index. Syndicating each story onto its own page, with canonical tags crediting the original source, kept readers here and gave our disambiguated authors more pages to stand behind."
description: "Extended the GEO/AEO pilot to AdRoll's newsroom. Syndicated news stories onto our own pages with canonical tags crediting the source, then attached our disambiguated authors to each one."
role: Web Development & Workflow Design
context: AdRoll
order: 4
draft: false
about:
  - Content syndication
  - Canonical tags
  - Site search
  - Structured data
  - Entity disambiguation
cardDescription: "Found that the newsroom had no pages of its own and sent every reader off our site. Syndicated each story onto a page of its own with canonical tags crediting the source, and attached our disambiguated authors to every one."
cardResult: "Every past newsroom entry retrofitted, readers kept on our site, news searchable, and a publishing workflow the Brand Director runs without a developer."
cardTags:
  - Content syndication
  - Canonical tags
  - Structured data
  - Entity disambiguation
eleventyNavigation:
  key: newsroom-syndication
  order: 4
---

## The challenge

While setting up [sitewide search](/case-studies/site-search/), I found that the newsroom couldn't be indexed. News items had no URL or detail page of their own, so there was nothing for search to index and nothing for results to point to. Every news click also sent the reader to another site.

The demand was already there. Google Search Console showed people searching for "adroll news", just over a thousand impressions at a 1.4% click-through rate between January 2025 and June 2026, with nothing on our site to answer them. It was a signal that people wanted to see our news, and that meeting it would be easy to do.

It was an extension of the [GEO/AEO pilot](/case-studies/geo-aeo-authority-pilot/) waiting to happen. That work was about proving our content came from real people with real expertise, and the newsroom was a section of the site where we couldn't do that at all. Every story was a missed chance to build traffic, and to attach our disambiguated authors to more pages.

The newsroom was also managed and maintained by our Brand Director, Courtney Herb, so any fix had to work for readers and be easy for her to run without a developer.

## The approach

**Syndicate it, credit the source.** I built a CMS entry type that gives each story a page on our site. For coverage published elsewhere, the page routes the reader through to the original press link, and a canonical tag credits the original source. We weren't taking credit for the content, only letting it work for us from inside the CMS, without a duplicate-content penalty.

**Make it the home for our own news, too.** The same structure holds the news and series content we published ourselves, so it wasn't only a wrapper for links to other sites.

**Attach the authors.** Because every story now had its own page, I could pair it with the SME program from the GEO/AEO pilot. When a story is written by or references one of our leaders, the page generates schema that points to the same disambiguated author, so the credibility we'd built carried over to news instead of stopping at the blog.

<div class="browser-frames">

{% browserFrame "img-newsroom-listing", "The AdRoll newsroom listing, headed What's New with AdRoll, with illustrated faces beside the title. Filter buttons for All Articles, Media Coverage and Press Releases sit above a grid of story cards, each with its publication, headline, date and a Read Article link, followed by page navigation and the site footer.", "The newsroom listing." %}

{% browserFrame "img-newsroom-story", "A news story page for a Forbes article, labeled Media Coverage, with its headline, a byline naming the author and their role at AdRoll, and the date. The excerpted article follows in sections, ending with a line crediting the original coverage on Forbes and linking to it, above a Latest Coverage row of AdRoll in the News cards and the site footer.", "A syndicated story page." %}

</div>

Both pages are designs of mine: a listing that filters between media coverage and press releases, and a story page that carries the author's byline and links back to the original coverage.

**Audit before migrating.** Before backfilling anything, I audited the archive with Courtney and filtered out obsolete coverage, so we only carried forward what was still worth a page.

**Build it for the person running it.** I worked with Courtney to design a publishing workflow around how she actually works, and she tested and approved it before it went live. Adding a story means pasting in the article entry and providing the canonical URL. Everything else, including the schema, is generated, so it doesn't need a developer.

## The result

* **Every past newsroom entry retrofitted.** The full archive was backfilled into pages that are searchable and indexable.
* **Readers stay on our site** when they open a news story.
* **News is part of sitewide search**, so we can now see which kinds of news visitors interact with.
* **More pages carry our authors.** Each story is another page where the disambiguated author's credentials reach machines, strengthening our entities.
* **Courtney owns it.** Publishing and managing news in the CMS is hers to run, with no developer needed.

## The next steps

Where I planned to take it:

* **Disambiguate leadership.** Many stories are by or about our leaders, and there are plenty of third-party profiles to verify their identities. I started with our new CEO, Vibhor Kapoor: I collected his bio information and had it approved, but it wasn't set up on the site before my role ended. It was explicit schema definition and nothing that could break existing pages, which made it low risk for what the pilot results suggested would be high reward.
* **Keep the cycle of authority turning.** Each new story reinforces the entities already defined, at the cost of pasting in an entry and a canonical URL.

One idea I've had since: this workflow could grow into an agentic one, with the entry, canonical URL and entity references prepared for review instead of entered by hand.
