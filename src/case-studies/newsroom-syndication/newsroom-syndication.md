---
title: "Newsroom Syndication: Keeping Readers on Our Site"
intro: "While setting up sitewide search, I found the newsroom couldn't be indexed, and every news click sent readers off our site. Syndicating that content with the right canonical tags fixed both, without producing anything new."
role: Web Development
context: AdRoll
order: 4
draft: true
about:
  - Site search
  - Content syndication
  - Canonical tags
  - Structured data
  - Entity disambiguation
eleventyNavigation:
  key: newsroom-syndication
  order: 4
---

## The challenge

While setting up sitewide search, I found that the newsroom's implementation made it incompatible with search. News items had no set URL or detail page, so there was nothing to index and nothing for search results to point to.

The newsroom also sent readers off our site. Anyone who clicked a news story left. And it was managed and maintained by our brand director, so any fix had to work for readers and also be easy for the brand director to run.

## The approach

I syndicated the content from the links we'd been redirecting readers to, so each story lived on our site. Correct canonical tags credit the original source. We weren't taking credit for the content, only letting it work for us from inside the CMS.

Because every story now had its own page, I could pair it with the SME program from the GEO/AEO pilot, and systematically generate schema that references our subject matter experts.

## The result

* **Readers stay on our site** when they open a news story.
* **News is part of sitewide search**, so we can now see which kinds of news visitors interact with.
* **Our entities are richer.** The new pages add to our structured data and strengthen entity disambiguation.
* **The brand director can manage it** in the CMS.
