---
title: "Speaking the LLM's Language: A GEO Authority Pilot Program"
intro: Testing whether structured data and verified authorship change how AI trusts a site's content — a 24.1% organic lift over 30 days, with average search position moving from 24.27 to 18.43.
role: Technical SEO, Content Strategy, Web Development
context: AdRoll
order: 2
draft: false
about:
  - Answer engine optimization
  - Generative engine optimization
  - Entity disambiguation
  - Structured data
cardDescription: Applied structured entity data (Schema.org) alongside hub-and-spoke-style topic cluster, validated against a control group with a Difference-in-Differences framework.
cardResult: "Pilot program result: +11.75% organic lift from internal linking alone, +24.1% organic lift with verified SME authorship added; average search position for pilot URLs moved from 24.27 to 18.43."
cardTags:
  - Answer engine optimization
  - Structured data
  - Entity authorship
  - Technical SEO
eleventyNavigation:
  key: geo-aeo-authority-pilot
  order: 2
---

## Overview

**The Challenge:** As LLM traffic to AdRoll’s marketing site increased, and human visibility decreased, I wanted to find out if we could become more legible to AI systems by providing additional structured metadata.

**The Strategy:** I implemented a two-phased GEO pilot:
 - Hub-and-Spoke Linking: A structured content map to consolidate authority.
 - Author Disambiguation: Using JSON-LD schema to verify SME authority and trust.

**The Outcome:** Structural linking alone drove an 11.75% organic lift over 15 days. Adding verified authorship pushed that to a 24.1% organic lift over 30 days, alongside a separate, real shift in average search ranking position for the pilot group of URLs, from 24.27 to 18.43.


## The story

### The context

Most recently, I was the principal web designer and developer in AdRoll’s marketing department, as a member of the creative team. Like many other marketing departments, we were seeing an overall drop in organic search traffic and a rise in LLM traffic for our domain, [adroll.com](http://adroll.com).

My thinking at the beginning of December 2025, based on our own analytics, was that users were increasingly reaching for LLMs as a means of researching us as a platform, instead of coming to our marketing site directly, whatever stage of the funnel they were at. This change wasn’t happening in isolation, and it’s not done yet. On June 3, 2026, Cloudflare CEO Matthew Prince posted that "bots have now passed human traffic online for the first time in the Internet's history,"<sup><a href="#ref-prince-tweet">1</a></sup> pointing to Cloudflare Radar's own data.<sup><a href="#ref-cloudflare-radar">2</a></sup> Reported figures put the split at roughly 57.5% bots to 42.5% humans.

If LLMs are built to favor content they can trace back to a real, verifiable source, and to discount or hallucinate around content they can't, could we provide any type of validation? Could we make ourselves more trusted and usable by LLMs in general? By extension, do the LLMs speaking for us know the correct things about us?

### The problem

After learning that LLMs interface with online content using the same assistive technology that people do, I suspected that the LLMs were having as difficult a time as people were. Our marketing site already delivered accessible, semantic HTML, but semantic HTML tells a machine what the content is (a heading, a summary, a list) but not who is saying it and whether they can be trusted. Were there other methods of communicating this kind of metatextual information to LLMs? Could I improve how our content is found and understood by LLMs? Could I improve how our content is trusted by LLMs?

This turns out to be a facet of AEO/GEO (Answer Engine Optimization / Generative Engine Optimization): optimizing content to be found and cited by AI systems the way traditional SEO optimizes for search engines.

### The solution

I drafted, collaborated, and executed on a pilot program built to concentrate link equity in a hub-and-spoke internal linking plan and authority onto a valuable organic search topic, backed by disambiguated human authorship, in order to find out whether authority and authenticity positively affects usage in LLMs and search engines.

I conceptualized this pilot program to be low risk, easy to implement, and nominal to maintain. As a more visual metaphor, I pictured this system providing a map for any LLMs looking for relevant topical content on our marketing site based on metadata we’ve systematically included in our site markup. The overall production system was also designed to be low lift and easily repeatable in our CMS so it was accessible by our content team, uncoupling it from my bandwidth outside of updates or improvements.

#### Phase One

I drafted up an internal hub-and-spoke linking plan centered around a topic that directly related to a recent GTM and shared it with the marketing team’s SEO manager and Content manager, along with two other topic options for GTMs that would be continuing through the end of the year. We decided to move forward with the initially proposed topic.

The hub-and-spoke system would be centered around a topic related to a recent go-to-market (GTM) motion on the AdRoll platform. In-depth, data-rich topical content had been created and I wanted to methodically link a select subset of that content together to build our authority in the topic while providing important context for LLMs around our GTM offering.

The hub itself automatically gathered *all* topically related content available on the marketing site. From that larger list of content, a specific subsection of spoke articles linked to a separate analysis with link text specifying the technical nature of the report.

<figure>
{% image "diagram-link_authority_flow", "Diagram of the hub-and-spoke structure: a starred, highly cited topical data-driven report links via a CTA link to the central Topic Hub, which fans out CTA and direct links to five spoke content types — topical webinars, blog posts, whitepapers, case studies, and a related product page — each paired with its own related-resources or FAQ module, with dashed contextual text links tying the report, hub, and spokes together.", "(max-width: 648px) 80vw, 70vw" %}
<figcaption>Link equity chart outlining the flow of equity from a highly cited data-rich article to specifically chosen articles and the overall topical hub.</figcaption>
</figure>

#### Phase Two

Phase one ran for two weeks and proved positive with an initial difference-in-difference (DiD) report, so our hub-and-spoke plan was resonating with LLMs. Could I continue to define and validate our authority within this topic space? Could we validate our content as vetted, quality information? Yes, I could specify the industry experience of the author of these new articles.

Our GTM motions included identifying a Subject Matter Expert (SME) as the author for key campaign content. To establish clear trust signals for AI search engines, I enriched the SME's on-site profile with structured metadata covering industry awards, professional credentials, and verified career history within JSON-LD schema.

This structured format explicitly communicated author credentials to LLMs, verifying that the SME publishing on our site was the same recognized industry professional featured in major industry conferences and publications.

By disambiguating the author and providing more validation signals, we gave LLMs more reasons to trust us. In theory, this activates the same latent authority signals in a site's logic layer that Princeton's foundational GEO study<sup><a href="#ref-geo-study">3</a></sup> points to. Their research found that signals like citations, statistics, and authoritative sourcing could meaningfully boost a source's visibility and citation frequency in AI-generated responses. (Could this also be a form of brand awareness?)

## The results

I was able to create a difference-in-difference report comparing the pilot program’s articles to articles with the same topic that weren’t part of the pilot; the results were reviewed internally by our SEO manager, Content manager, and Marketing strategist. I didn't have a direct way to measure whether LLMs specifically were citing this content more, so these search-side numbers were an available proxy signal.

"Organic lift" used here is a DiD-isolated effect: the pilot program's growth in non-branded search impressions, minus however much the control group moved over that same window. It's not raw growth alone, it's growth specifically attributable to the pilot, with general market and seasonal movement filtered out.

| Phase | What changed? | Timeframe | Result |
| :---- | :---- | :---- | :---- |
| Phase 1 | Structural linking only (hub-and-spoke) | 15 Days | \+11.75% organic lift |
| Phase 1 | Daily impression volume | 15 Days | \~+6.4% |
| Phase 2 | Author disambiguation (SME schema) | 30 Days | \+24.1% organic lift |
| Phase 2 | Average search position, treated cluster | 30 Days | 24.27 → 18.43 |

Beyond the headline figures, the DiD model isolated four separate metrics for the treatment group, each measured against how the control group moved over the same window:

* added ~605 daily impressions
* roughly one additional daily click
* 0.04 percentage point lift in CTR
* average position improvement of 2.31 spots

The control group declined, averaging a 2.9% drop in visibility over the same time period. This trend ruled out the topic itself gaining general interest since only the pages that received the internal linking and structured authorship saw the organic lift.

Individual search query rankings inside the topic told a similar story, each a jump from page-two obscurity into a top-3 or page-one placement:

* Our primary term climbed from position 8.9 to 2.9
* a secondary broad-category term moved from 15.3 to 10.5
* a related product term went from 4.7 to 2.6

*A follow-up check across a longer window through March showed that most treatment pages maintained or improved their gains. Our primary term's position climbed further from 11.75 to 9.93, and one landing page jumped from 25.22 to 16.29. While one of the six pages regressed and another dropped out of visibility, the core mechanism expressed durability for the majority of the content over time.*

## The judgement

I didn't design this pilot as high-risk, and that was deliberate. I wasn’t setting up proprietary information similar to the use of IE conditional comments back in Aughts. Or browser detection after that. This was all handled with default web architecture, schema.org and JSON-LD, public information, and applied deliberately to our site markup. Worst case, I spent a week finding out that schema enrichment doesn't move the needle in terms of building trust with LLMs in the short-term.

## The reflection

This pilot confirmed something I'd suspected: the same principles that make a site legible to a screen reader make it legible to an LLM. We have the ability to make ourselves more usable to LLMs by guiding with metadata information similar to ARIA for screen readers. It also proved that the system to accomplish this was inexpensive and repeatable: one developer using tools that already existed, to surface information that already exists, and incorporated the workflow into our CMS to enable content authors to maintain any updates going forward as needed. Keeping it small wasn't just caution, it was the point: prove the mechanism works before committing to something bigger, like full entity disambiguation across the site.

Did I answer my original question? Partially. We can influence how search engines treat and rank structured, verified content. At the time, I didn't have the tools to directly track LLM citation behavior, so I'm inferring positive LLM results based on these positive search results. Both systems are built to favor content they can trace to a real, verifiable source, a positive search-side signal gives me reason to believe the same held for LLMs, even without being able to confirm it directly.

It was a positive enough signal, though, that I kept going, and on two tracks at once: shipping a rolling series of updates that extended this same method — author disambiguation and hub-and-spoke plan with upcoming GTM topics — while also starting the broader retrofit work for evergreen topics and the wider disambiguation groundwork for the marketing site.

I wasn't the only one in marketing pulling on this thread, either. A small working group was building direct AI crawler and citation tracking from our server logs. I also proposed Wikidata entries as the natural next point of collaboration, a shared source of truth the team could build from together. If I pitched this again today, I’d also position it as a form of brand safety.

## The next steps

### Done:

* Deployed authenticated SME author profiles across remaining 2026 GTM campaigns

### In Progress:

* Architecting hub-and-spoke content structures for active GTM initiatives
* Expanding authenticated SME profiles to cover core evergreen topics
* Retrofitting high-intent evergreen assets into structured hub-and-spoke networks

### Drafted:

* Establish AEO/GEO strategic frameworks within standard GTM campaign planning workflows
* Integrate Google Search Console and GA4 data directly into cross-functional marketing AI dashboards
* Enable content teams to independently manage and implement schema and topic structures in the CMS
* Drive site-wide entity disambiguation initiatives
  * Partner with SEO and Content leads on strategic topic prioritization
  * Design comprehensive internal linking templates and technical documentation
  * Standardize corporate Wikidata records following recent brand consolidation
  * Target high-intent topic clusters for systematic disambiguation
  * Manage updates to official Wikidata entries to safeguard brand authority
  * Identify high-impact disambiguation roadmap opportunities based on resource bandwidth through Q4

## Appendix

### Credits

**Rochelle Burnside** \- Content Marketing Manager  
**Shae Henrie** \- Brand Marketing Manager, Lead Content & Social Strategist  
**Tejasvini Karunakarbabu** \- Marketing Strategist  
**Wilson Lau** \- Lead Marketing Manager, SEO & Customer Intelligence

### References

<ol class="references">
<li id="ref-prince-tweet">Prince, Matthew [@eastdakota]. (2026, June 3). "Welp, that happened faster than I predicted..." X (formerly Twitter). <a href="https://x.com/eastdakota/status/2062212701414187452">https://x.com/eastdakota/status/2062212701414187452</a></li>
<li id="ref-cloudflare-radar">Cloudflare Radar. (2026). "Global Traffic Trends &amp; Agentic Bot Data." Cloudflare. <a href="https://radar.cloudflare.com/traffic">https://radar.cloudflare.com/traffic</a></li>
<li id="ref-geo-study">Aggarwal, Pranjal, et al. (2023). "GEO: Generative Engine Optimization." Princeton University. <a href="https://arxiv.org/abs/2311.09735">https://arxiv.org/abs/2311.09735</a></li>
</ol>
