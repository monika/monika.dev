---
title: "Speaking the LLM's Language: Accessibility for a New Kind of User"
metaTitle: "Speaking the LLM's Language"
intro: "A low-risk pilot to make our marketing site legible to LLMs and prove our content came from real people with real expertise, using structured data and internal linking we already had the tools for. Search rankings moved; whether LLMs understood us better, I didn't have a way to measure at the time."
description: "A low-risk pilot that treated LLMs like users of assistive technology and verified our author's expertise. Pilot pages moved from 24.27 to 18.43."
role: Technical SEO, Content Strategy, Web Development
order: 2
draft: false
about:
  - Answer engine optimization
  - Generative engine optimization
  - Technical SEO
  - Entity disambiguation
  - Structured data
  - Internal linking
  - Web accessibility
cardDescription: "Treated LLMs like any other user relying on assistive technology, giving them the context to understand our site and verify who wrote it, through JSON-LD structured data and a hub-and-spoke internal linking system, scoped as a low-risk pilot."
cardResult: "Our author disambiguated into a verified Knowledge Graph entity, and search rankings for the pilot pages moved from 24.27 to 18.43, validated against a control group within the same topic."
cardTags:
  - Answer engine optimization
  - Generative engine optimization
  - Technical SEO
  - Entity disambiguation
  - Structured data
  - Internal linking
  - Web accessibility
eleventyNavigation:
  key: geo-aeo-authority-pilot
  order: 2
---

## Overview

**The Challenge:** Organic search traffic to our marketing site was declining and AI-generated answers in search engines were reducing click-through rates across the industry. With so much content being AI-generated, could we stand out by proving we were real people with real expertise?

**The Approach:** Treat large language models (LLMs) like any other user who relies on assistive technology, and give them the context to understand our site and the ability to verify who we are:
 - Hub-and-Spoke Linking: An intentional internal linking map to consolidate topical authority.
 - Author Disambiguation: JSON-LD schema (machine-readable structured data) to confirm that our content came from a real person with verifiable credentials.

**The Thinking:** Rather than commit to a full entity disambiguation rollout before understanding the risks and benefits, I scoped a low-risk pilot program focused on a search topic related to a recent go-to-market (GTM) motion for the AdRoll platform.

**The Outcome:** Our author disambiguated into a verified entity in Google's Knowledge Graph (a database of real-world people and things), and search rankings for the pilot pages moved from 24.27 to 18.43, validated against a control group within the same topic. Whether LLMs understood us better, I didn't have a way to measure at the time, but it's a question I want to answer in my next role. I'm available for full-time, remote roles in the US.

## The context

Most recently, I was the principal web designer and developer in AdRoll's marketing department, as a member of the creative team. Like many marketing departments, we were seeing a rise in LLM traffic to [adroll.com](https://www.adroll.com), and by late 2025 I suspected people were researching us through LLMs instead of visiting our site, at whatever stage of the funnel they were in.

Cloudflare CEO Matthew Prince posted in June 2026 that "bots have now passed human traffic online for the first time in the Internet's history,"<sup><a href="#ref-prince-tweet">1</a></sup> pointing to Cloudflare Radar's own data.<sup><a href="#ref-cloudflare-radar">2</a></sup> Pew Research found that Google users clicked through to a website about half as often when an AI summary appeared.<sup><a href="#ref-pew">3</a></sup> I didn't see these trends declining, so I wanted to make sure LLMs had the same access to our site's content as human users did.

In researching how LLMs interface with content online, I learned that they use assistive technology similar to what people use. Given that fewer than 5% of the top million home pages pass automated accessibility checks, according to WebAIM's annual audit,<sup><a href="#ref-webaim">4</a></sup> I suspected LLMs were having as difficult a time as people were.

Our marketing site delivered accessible, semantic HTML, but that only tells a machine what the content is (a heading, a paragraph, a list), and not who is saying it and, by extension, whether it can be trusted. Were there signals, similar to what ARIA tags provide for screen readers, available for LLMs? Could I expose these signals easily and systematically, sharing the most valuable information with the least oversight by the marketing team?

## The solution

I drafted, collaborated on, and executed a two-phase pilot: a hub-and-spoke internal linking plan backed by disambiguated human authorship, easy to implement within our CMS (content management system) and nominal for our content team to maintain.

### Phase One

<figure>
{% image "diagram-link_authority_flow", "Diagram of the hub-and-spoke structure: a starred, highly cited topical data-driven report links via a CTA link to the central Topic Hub, which fans out CTA and direct links to five spoke content types (topical webinars, blog posts, whitepapers, case studies, and a related product page), each paired with its own related-resources or FAQ module, with dashed contextual text links tying the report, hub, and spokes together.", "(max-width: 648px) 80vw, 70vw" %}
<figcaption>Link equity chart outlining the flow of topical equity from a highly cited data-rich article to specifically chosen articles and the overall topical hub.</figcaption>
</figure>

Because of the recent GTM motion, we had in-depth, topical content already published across our marketing site. The hub automatically gathered all of it onto one page for users to browse. From that larger list, I identified a subsection of data-rich articles that could link to a new in-depth topical report, using link text specifying its technical nature, in an effort to build link equity (the ranking value links pass between pages) around our topic.

### Phase Two

Phase One ran for two weeks and saw positive results in an initial difference-in-differences (DiD) report, which compares how much treated pages change against similar untreated pages over the same period. Was there further context I could surface that could validate our authority within this topic? Yes, I could specify the industry experience of the author of these identified articles.

Our GTM motions included identifying an SME (subject matter expert) as an author of the articles released during this time, so I enriched the SME's JSON-LD author schema with their industry awards, professional directory listings, and job experience.

JSON-LD is a structured metadata format that tells machines specific facts about a page, like who wrote it, when it was updated, and how they relate to other entities.

This structured format explicitly communicated author credentials to machines, verifying that the SME on our site was the same industry professional featured at conferences and in publications. Our SME successfully disambiguated into a verified Knowledge Graph entity.

## The results

I set up the DiD report through Gemini, comparing the pilot pages against untreated pages on the same topic, and had it reviewed internally by our SEO manager, content manager, and marketing strategist. The gap between the two groups is the "incremental organic lift." I didn't have a way to measure LLM usage directly, so search results were my proxy.

| Phase | What changed | Timeframe | Result |
| :---- | :---- | :---- | :---- |
| Phase 1 | Structural linking only (hub-and-spoke) | 15 Days | \+11.75% incremental organic lift |
| Phase 1 | Daily impression volume | 15 Days | \~+6.4% |
| Phase 2 | Author disambiguation (SME schema) | 30 Days | \+24.1% incremental organic lift |
| Phase 2 | Average search position, treated cluster | 30 Days | 24.27 → 18.43 |

Beyond the headline figures, the DiD report isolated four metrics for the treatment group, measured against the control group over the same window:

* Added ~605 daily impressions
* Roughly one additional daily click
* 0.04 percentage point lift in CTR (click-through rate)
* Average position improvement of 2.31 spots

The control group declined, averaging a 2.9% drop in visibility over the same period. That ruled out an alternative explanation: that the topic itself was just gaining general interest. If it were, the untreated content would have risen too. Instead, only the pages that received the internal linking and structured authorship moved.

Individual query rankings inside the topic told the same story:

* Primary term climbed from position 8.9 to 2.9
* Secondary broad-category term moved from 15.3 to 10.5
* Related product term went from 4.7 to 2.6

## The reflection

Whatever this pilot ultimately did or didn't do for how LLMs represent us, it stands on its own as a legitimate technical SEO investment. I didn't design this pilot to be high-risk. I didn't survive the browser wars of the early Aughts just to set up brittle, proprietary solutions to temporary problems. This was all handled with standardized web architecture like schema.org (the shared vocabulary for structured data) and JSON-LD, plus public information.

Did I answer my original question? Partially. We can influence how search engines treat and rank structured, verified content. Based on the same reasoning behind screen readers also struggling to find contextual data, I theorized that the same structured data and linking system now benefiting our search rankings was equally available to any LLM reading those pages.

It was a positive enough signal, though, that I kept the train going, and on two tracks at once: shipping a rolling series of updates that extended this same method (author disambiguation and hub-and-spoke plans for upcoming GTM topics) while also starting the broader retrofit work for evergreen topics and the wider disambiguation groundwork for the marketing site.

I proposed Wikidata entries (the Wikimedia Foundation's open, structured knowledge base) as the next point of collaboration for the marketing team, a shared source of truth the team should build from. If I pitched this again today, I'd also position this specifically as a form of brand safety.

I also wasn't the only member of the marketing team pulling on this thread. An internal working group was building AI crawler tracking and citation analytics dashboards. With those tools, I believe I could've gathered data on the effects for LLMs specifically, and tailored this approach.

## The next steps

### Done:

* Deployed authenticated SME author profiles across remaining 2026 GTM campaigns

### In Progress:

* Architecting hub-and-spoke content structures for active GTM initiatives
* Expanding authenticated SME profiles to cover core evergreen topics
* Retrofitting high-intent evergreen assets into structured hub-and-spoke networks

### Drafted:

* Establish AEO/GEO (SEO for AI systems) strategic frameworks within standard GTM campaign planning workflows
* Standardize corporate Wikidata records following recent brand consolidation
* Train the content team on how to edit, maintain, and implement new topics and SMEs in the CMS, with supporting documentation
* Drive site-wide entity disambiguation initiatives, partnering with SEO and content leads on strategic topic prioritization
* Integrate Google Search Console and Google Analytics 4 (GA4) data directly into cross-functional marketing AI dashboards

## Appendix

### Team credits

Rochelle Burnside \- *Content Marketing Manager*  
Shae Henrie \- *Brand Marketing Manager, Lead Content & Social Strategist*  
Tejasvini Karunakarbabu \- *Marketing Strategist*  
Wilson Lau \- *Lead Marketing Manager, SEO & Customer Intelligence*

### Awards

2026 OMMA Award, Excellence in Search Marketing: SEO Campaign [(MediaPost)](https://www.mediapost.com/ommaawards/winners/), awarded to the AdRoll Organic Team. The hub-and-spoke internal linking and author disambiguation work described in this case study contributed to that campaign.

### References

<ol class="references">
<li id="ref-prince-tweet">Prince, Matthew [@eastdakota]. (2026, June 3). "Welp, that happened faster than I predicted..." X (formerly Twitter). <a href="https://x.com/eastdakota/status/2062212701414187452">https://x.com/eastdakota/status/2062212701414187452</a></li>
<li id="ref-cloudflare-radar">Cloudflare Radar. (2026). "Global Traffic Trends &amp; Agentic Bot Data." Cloudflare. <a href="https://radar.cloudflare.com/traffic">https://radar.cloudflare.com/traffic</a></li>
<li id="ref-pew">Pew Research Center. (2025, July 22). "Google users are less likely to click on links when an AI summary appears in the results." <a href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/">https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/</a></li>
<li id="ref-webaim">WebAIM. (2026). "The WebAIM Million: The 2026 report on the accessibility of the top 1,000,000 home pages." <a href="https://webaim.org/projects/million/">https://webaim.org/projects/million/</a></li>
</ol>
