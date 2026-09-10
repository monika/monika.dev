---
title: GEO / AEO Authority Pilot
intro: Structured entity data as a response to LLM-mediated search — a two-stage pilot testing whether making a subject-matter expert legible to machines measurably changed how a brand's content performed.
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
cardResult: "Pilot program result: +11.75% organic search lift from internal linking, +24.1% with verified SME authorship added; average search position improved from 24.27 to 18.43 for pilot URLs."
cardTags:
  - Answer engine optimization
  - Structured data
  - Entity authorship
  - Technical SEO
eleventyNavigation:
  key: geo-aeo-authority-pilot
  order: 2
---

## TL;DR:

**The Challenge:** As LLM traffic overtook human search traffic, AdRoll's marketing site faced decreasing visibility. We needed to understand if AI systems could "trust" our content if we provided better structured metadata.

**The Strategy:** I implemented a two-phased GEO pilot:
 - Hub-and-Spoke Linking: A structured content map to consolidate authority.
 - Author Disambiguation: Using JSON-LD schema to verify SME authority and trust.

**The Outcome:** We achieved a 24.1% lift in organic performance over 30 days and significantly improved average search rankings (from 24.27 to 18.43) in our pilot group of URLs by making our content more legible to machines.


## The Context

Most recently, I was the principal web designer and developer in AdRoll’s marketing department, as a member of the creative team. Like many other marketing departments, we were seeing an overall drop in organic search traffic and a rise in LLM traffic for our domain, [adroll.com](http://adroll.com).

My thinking at the beginning of December 2025, based on our own analytics, was that users were increasingly reaching for LLMs as a means of researching us as a platform, instead of coming to our marketing site directly, whatever stage of the funnel they were at. This change wasn’t happening in isolation, and it’s not done yet. On June 3, 2026, Cloudflare CEO Matthew Prince posted that "bots have now passed human traffic online for the first time in the Internet's history,"<sup><a href="#ref-prince-tweet">1</a></sup> pointing to Cloudflare Radar's own data.<sup><a href="#ref-cloudflare-radar">2</a></sup> Reported figures put the split at roughly 57.5% bots to 42.5% humans.

If LLMs are built to favor content they can trace back to a real, verifiable source, and to discount or hallucinate around content they can't, could we provide any type of validation? By extension, do the LLMs speaking for us know the correct things about us? Could we make ourselves more trusted and usable by LLMs in general?

## The problem

After learning that LLMs interface with online content using the same assistive technology that people do, I suspected that the LLMs were having as difficult a time as people were. Our marketing site already delivered accessible, semantic HTML, but semantic HTML tells a machine what the content is (a heading, a summary, a list) but not who is saying it and whether they can be trusted. Were there other methods of communicating metatextual information to LLMs? Could I improve how our content is found and understood by LLMs? Could I improve how our content is trusted by LLMs?

This turns out to be a facet of AEO/GEO (Answer Engine Optimization / Generative Engine Optimization): optimizing content to be found and cited by AI systems the way traditional SEO optimizes for search engines.

## The solution

I drafted, collaborated, and executed on a pilot program built to concentrate link equity in a hub-and-spoke internal linking plan and authority onto a valuable organic search topic, backed by disambiguated human authorship, in order to find out whether authority and authenticity positively affects usage in LLMs and search engines.

I conceptualized this pilot program to be low risk, easy to implement, and maintain. As a more visual metaphor, I pictured this system providing a map for any LLMs looking for relevant topical content on our marketing site based on metadata we’ve systematically included in our site markup. The overall system was also designed to be low lift and easily repeatable in our CMS so it was accessible by CMS content authors, bypassing my dev pipeline outside of debugging or improvements.

### Phase One

I drafted up an internal hub-and-spoke linking plan centered around a topic that directly related to a recent GTM and shared it with the marketing team’s SEO manager and Content manager, along with two other topic options for GTMs that would be continuing through the end of the year. We decided to move forward with the initially proposed topic.

The hub-and-spoke system would be centered around a topic related to a recent go-to-market (GTM) motion on the AdRoll platform. In-depth, data-rich topical content had been created and I wanted to methodically link a select subset of that content together to build our authority in the topic while providing important context for LLMs around our GTM offering.

The hub itself automatically gathered *all* topically related content available on the marketing site. From that larger list of content, a specific subsection of spoke articles linked to a separate analysis with link text specifying the technical nature of the report.

### Phase Two

Phase one ran for two weeks and proved positive with an initial difference-in-difference (DiD) report, so our hub-and-spoke plan was resonating with LLMs. Could I continue to define and validate our authority within this topic space? Could we validate our content as vetted, quality information? Yes, I could specify the industry experience of the author of these new articles.

Our GTM motions include identifying an SME (subject matter expert) as an author of some of the articles released during these motions. I wanted to enrich the SME’s on-site profile with metadata about their industry awards, professional profiles, and job experience inside the basic JSON-LD schema already present on their author profile, with the goal of clarifying for LLMs that the SME talking about this topic on our marketing site was the same industry professional discussing the same topic during an important conference or in an influential article. JSON-LD is a structured metadata format that tells machines specific facts about a page, like who wrote it.

By disambiguating the author and providing more validation signals, we gave LLMs more reasons to trust us. This aligns with findings from Princeton University's foundational Generative Engine Optimization (GEO) study,<sup><a href="#ref-geo-study">3</a></sup> which demonstrated that explicitly citing authoritative sources and providing verifiable expert credentials can boost a website's visibility and citation frequency in AI-generated responses by 30% to 40%. (Could this also be a form of brand awareness?)

## The results

I didn't have a direct way to measure whether LLMs specifically were citing this content more, but I was able to create a difference-in-difference (DiD) report comparing the pilot program’s articles to articles with the same topic that weren’t a part of the pilot. The results were reviewed internally by our SEO manager, Content manager, and Marketing strategist.

The DiD report showed real movement in the pilot. Over the first 15 days, treated pages saw an 11.75% lift in organic performance against the control group, along with a roughly 6.4% rise in daily impressions. Once the author disambiguation went live in phase two, that lift grew to 24.1% over the following 30 days, and average search position for the treated cluster moved from 24.27 to 18.43.

## The judgement

I didn't design this pilot as high-risk, and that was deliberate. I wasn’t setting up LLM-specific information similar to the use of IE conditional comments back in Aughts. Nothing brittle or proprietary. This was all handled with default web architecture, schema.org and JSON-LD, public information, and applied deliberately to our site markup. Worst case, I spent a week finding out that schema enrichment doesn't move the needle in terms of building trust with LLMs in the short-term.

## The reflection

This pilot confirmed something I'd suspected: the same principles that make a site legible to a screen reader make it legible to an LLM. We have the ability to make ourselves more usable to LLMs by guiding with metatextual information. It also proved that the system to accomplish this was inexpensive and repeatable: one developer using tools that already existed,to surface information that already exists, to enable content authors to maintain any updates going forward as needed. Keeping it small wasn't just caution, it was the point: prove the mechanism works before committing to something bigger, like full entity disambiguation across the site.

Did I answer my original question? Yes: we can communicate with LLMs through the structured data infrastructure beneath a page, built to be read by machines rather than people. To what degree, I can’t say (but I’d love to find out). 

It was a positive enough signal, though, that I kept going, and on two tracks at once: shipping a rolling series of updates that extended this same method, author disambiguation and hub-and-spoke plan with upcoming GTM topics, while also starting the broader retrofit work for evergreen topics and the wider disambiguation groundwork I'd been drafting.

I wasn't the only one pulling on this thread, either. At the same time, my co-workers were building their own AI citation dashboards, and I proposed Wikidata entries as the natural next point of collaboration, a shared source of truth the team could build from together. If I pitched this again today, I’d position it as a form of brand safety.

## The next steps

### Done:

* Launch two more authenticated SME author profiles related to remaining GTM campaigns for 2026

### Drafted:

* Launch new hub-and-spoke systems related to remaining GTM campaigns  
* Launch two additional SME profiles related for evergreen topics  
* Retrofit high-intent evergreen topics into new hub-and-spoke systems

### Planned:

* Draft process updates for GTM campaign planning to include AEO/GEO planning  
* Feed Google Search Console / Google Analytics 4 report data into marketing AI dashboards for teammembers  
* Update content team on how to edit, maintain, and implement new topics and SMEs via CMS  
* Continue disambiguation across the marketing site  
  * Aligning with SEO and Content managers on topic prioritization for roll-out  
  * Creating and maintaining internal linking system template and documentation  
  * Defining company history in wikidata because of recent brand consolidation  
  * Identifying high-intent topics to disambiguate  
  * Drafting updates to corporate Wikidata entries (brand safety)  
  * Identifying disambiguation opportunities based on priorities and resources thru the end of the year

## Credits

**Wilson Lau** \- Lead Marketing Manager, SEO & Customer Intelligence  
**Shae Henrie** \- Brand Marketing Manager, Lead Content & Social Strategist  
**Rochelle Burnside** \- Content Marketing Manager  
**Tejasvini Karunakarbabu** \- Marketing Strategist 

## References

<ol class="references">
<li id="ref-prince-tweet">Prince, Matthew [@eastdakota]. (2026, June 3). "Welp, that happened faster than I predicted..." X (formerly Twitter). <a href="https://x.com/eastdakota/status/2062212701414187452">https://x.com/eastdakota/status/2062212701414187452</a></li>
<li id="ref-cloudflare-radar">Cloudflare Radar. (2026). "Global Traffic Trends &amp; Agentic Bot Data." Cloudflare. <a href="https://radar.cloudflare.com/traffic">https://radar.cloudflare.com/traffic</a></li>
<li id="ref-geo-study">Aggarwal, Pranjal, et al. (2023). "GEO: Generative Engine Optimization." Princeton University. <a href="https://arxiv.org/abs/2311.09735">https://arxiv.org/abs/2311.09735</a></li>
</ol>