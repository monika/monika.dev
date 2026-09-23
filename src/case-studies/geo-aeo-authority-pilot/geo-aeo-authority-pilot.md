---
title: "Speaking the LLM's Language: A GEO Authority Pilot Program"
intro: Testing whether structured data and verified authorship change how AI trusts a site's content — a 24.1% incremental search lift over 30 days, with average search position moving from 24.27 to 18.43.
role: Technical SEO, Content Strategy, Web Development
order: 2
draft: false
about:
  - Answer engine optimization
  - Generative engine optimization
  - Entity disambiguation
  - Structured data
cardDescription: Applied the same thinking behind web accessibility to LLMs, giving machines more context about our content and who wrote it through schema.org structured data and a hub-and-spoke internal linking system, scoped as a small pilot before committing to a site-wide rollout.
cardResult: "A solid technical SEO update with a GEO bet on top: the SME author resolved into a verified Knowledge Graph entity, and search rankings for the pilot pages moved from position 24.27 to 18.43, validated against a control group."
cardTags:
  - Answer engine optimization
  - Generative engine optimization
  - Entity disambiguation
  - Structured data
eleventyNavigation:
  key: geo-aeo-authority-pilot
  order: 2
---

## Overview

**The Challenge:** Our analytics suggested more people were researching AdRoll through LLMs instead of visiting our site directly. Our site was already accessible to people, but semantic HTML tells a machine what content is, not who's saying it or why it can be trusted. I wanted to know if we could give LLMs that missing context.

**The Strategy:** Treat LLMs like any other user relying on assistive technology, and give them more to work with using tools we already had:
 - Hub-and-Spoke Linking: A structured internal linking map to consolidate topical authority.
 - Author Disambiguation: JSON-LD schema to verify who wrote our content.

 **The Thinking:** Rather than commit to a full entity disambiguation rollout with no evidence it would pay off, I scoped a low-risk, low-cost pilot around a recent GTM topic. It was built as a solid technical SEO update first, with LLM legibility as the bet on top. Worst case, I'd spend a week learning that schema enrichment doesn't move the needle.

**The Outcome:** Our SME resolved into a verified Knowledge Graph entity, and search rankings for the pilot pages moved from 24.27 to 18.43, validated against a control group.


## The story

### The context

Most recently, I was the principal web designer and developer in AdRoll's marketing department, as a member of the creative team. Like many other marketing departments, we were seeing a rise in LLM traffic for our domain, adroll.com.

My thinking at the end of 2025, based on our own analytics, was that users were increasingly reaching for LLMs as a means of researching us as a platform, instead of coming to our marketing site directly, in whatever stage of the funnel they were at, and that usage was steadily increasing.

<aside>On June 3, 2026, Cloudflare CEO Matthew Prince posted that "bots have now passed human traffic online for the first time in the Internet's history,"<sup><a href="#ref-prince-tweet">1</a></sup> pointing to Cloudflare Radar's own data.<sup><a href="#ref-cloudflare-radar">2</a></sup> Reported figures put the split at roughly 57.5% bots to 42.5% humans.</aside>

I don't expect the number to decline, but the case for these updates doesn't depend on that, either. I wanted our offerings and expertise to be as accessible to LLMs as they were to people, by actually giving both more contextual data to work with through structured data and intentional topical internal linking.

### The problem

In researching how LLMs interface with content online, I learned that they interface with content using similar assistive technology that people do. I suspected that the LLMs were having as difficult a time as people were, given that fewer than 5% of the top million home pages pass automated accessibility checks, according to WebAIM's annual audit.<sup><a href="#ref-webaim">3</a></sup>

Our marketing site delivered accessible, semantic HTML, but semantic HTML tells a machine what the content is (a heading, a paragraph, a list) but not who is saying it and whether it can be trusted. Were there signals we could include or other methods of communicating this kind of contextual information to LLMs, like ARIA tags for screen readers? Could I accommodate the LLM crawlers any better than we already were? Could I do that easily and systematically, exposing the most amount of valuable information possible with the least amount of effort for the marketing team?

### The solution

I drafted, collaborated, and executed on a pilot program built to concentrate topical equity in a hub-and-spoke internal linking plan, backed by disambiguated human authorship. I wanted our offerings and expertise to be accessible to LLMs the same systematic way we'd already made them accessible to people, through structured data, not by hoping it worked, but by actually giving the systems more to work with.

I conceptualized this pilot program to have a solid technical SEO update at its core, while attempting to move the needle one way or another on LLM legibility. The pilot was low risk, easy to implement within our CMS, and nominal to maintain by our content team, uncoupling the system from my bandwidth so it could expand as fast as new entries could be filled out with vetted information.

#### Phase One

I drafted an internal hub-and-spoke linking plan centered around a topic that directly related to a recent go-to-market (GTM) motion and shared it with the marketing team's SEO manager and Content manager, along with two other topic options for GTMs that would be continuing through the end of the year. We decided to move forward with the initially proposed topic.

Because of the recent GTM, in-depth, data-rich topical content had been created and I wanted to methodically link a select subset of that content together to purposefully build our authority in the topic while providing important context around our GTM offering.

The hub itself was built to automatically gather all topically related content available on the marketing site. From that larger list of topical content, a specific subsection of data-rich articles was decided on. Those specific articles linked to a new analysis with link text specifying the technical nature of the report.

<figure>
{% image "diagram-link_authority_flow", "Diagram of the hub-and-spoke structure: a starred, highly cited topical data-driven report links via a CTA link to the central Topic Hub, which fans out CTA and direct links to five spoke content types — topical webinars, blog posts, whitepapers, case studies, and a related product page — each paired with its own related-resources or FAQ module, with dashed contextual text links tying the report, hub, and spokes together.", "(max-width: 648px) 80vw, 70vw" %}
<figcaption>Link equity chart outlining the flow of equity from a highly cited data-rich article to specifically chosen articles and the overall topical hub.</figcaption>
</figure>

#### Phase Two

Phase one ran for two weeks and saw positive results with an initial difference-in-difference (DiD) report. Were there other levers to pull that could continue to define and validate our authority within this topic space? Yes, I could specify the identity and industry experience of the author of these new articles.

Our GTM motions include identifying an SME (subject matter expert) as an author of some of the articles released during these motions. I enriched the SME's on-site author profile with metadata about their industry awards, professional profiles, and job experience inside the basic JSON-LD schema already present on their author profile. JSON-LD is a structured metadata format that tells machines specific facts about a page, like who wrote it.

This structured format explicitly communicated author credentials to machines, in an effort to verify that the SME publishing on our site was the same recognized industry professional featured in major industry conferences and publications. Our SME successfully disambiguated into a verified Knowledge Graph entity, confirmed externally by Google's own systems as a distinct, notable person.

By disambiguating the author and providing more validation signals, we gave search engines, and potentially LLMs, more reasons to trust us, not to target inclusion in any one AI feature specifically, but to give any machine reading the page a real way to verify who was speaking.

## The results

I created a difference-in-difference report through Gemini comparing the pilot program's articles to articles within the same topic that weren't part of the pilot; the results were reviewed internally by our SEO manager, Content manager, and Marketing strategist. I didn't have a direct way to measure whether LLMs specifically were using this content more, an entire measurement category that didn't really exist yet. These search-side numbers are the real, standalone result. Whatever they suggest about LLMs is a bonus, not the point.

"Incremental organic lift" is the growth we can attribute to the pilot. I isolated this by comparing how much the treated pages grew measured against the untreated pages within the same time period. The gap is the incremental organic lift.

| Phase | What changed? | Timeframe | Result |
| :---- | :---- | :---- | :---- |
| Phase 1 | Structural linking only (hub-and-spoke) | 15 Days | \+11.75% incremental organic lift |
| Phase 1 | Daily impression volume | 15 Days | \~+6.4% |
| Phase 2 | Author disambiguation (SME schema) | 30 Days | \+24.1% incremental organic lift |
| Phase 2 | Average search position, treated cluster | 30 Days | 24.27 → 18.43 |

Beyond the headline figures, the DiD model isolated four separate metrics for the treatment group, each measured against how the control group moved over the same window:

* Added ~605 daily impressions
* Roughly one additional daily click
* 0.04 percentage point lift in CTR
* Average position improvement of 2.31 spots

The control group declined, averaging a 2.9% drop in visibility over the same period. That ruled out an alternative explanation, that the topic itself was just gaining general interest. If it were, the untreated content should have risen too. Instead, only the pages that received the internal linking and structured authorship moved.

Individual query rankings inside the topic told the same story, each a jump from page-two obscurity into a top-3 or page-one placement:

* Primary term climbed from position 8.9 to 2.9
* Secondary broad-category term moved from 15.3 to 10.5
* Related product term went from 4.7 to 2.6

<aside>A follow-up check across a longer window through March showed that most treatment pages maintained or improved their gains. Our primary term's position climbed further from 11.75 to 9.93, and one landing page jumped from 25.22 to 16.29. While one of the six pages regressed and another dropped out of visibility, the core mechanism expressed durability for the majority of the content over time.</aside>

Whatever this pilot ultimately did or didn't do for how LLMs represent us, a question I never had the tools to answer directly, it stands on its own as a legitimate technical SEO investment. Real internal linking architecture and structured, verified authorship data turned out to be valuable regardless of the LLM angle.

## The judgement

I didn't design this pilot to be high-risk, and that was deliberate. I wasn't setting up brittle, proprietary systems similar to the use of IE conditional comments for custom HTML and CSS back in the Aughts. This was all handled with default web architecture, schema.org and JSON-LD, public information, all applied deliberately to our site markup. If I learned nothing else, I would have a better idea of the impact that schema enrichment has on SEO (and AEO, once we had tracking set up) and be able to prioritize future updates.

## The reflection

Did I answer my original question? Partially. I can confirm we can influence how search engines treat and rank structured, verified content. I didn't have the tools to directly track LLM citation behavior at the time. Based on the same reasoning behind screen readers also struggling to find contextual data, I theorized that the same structural data and linking system now benefiting our search rankings was equally available to any LLM reading those pages.

It was a positive enough signal, though, that I kept the train going, and on two tracks at once: shipping a rolling series of updates that extended this same method — author disambiguation and hub-and-spoke plans for upcoming GTM topics — while also starting the broader retrofit work for evergreen topics and the wider disambiguation groundwork for the marketing site.

I wasn't the only one on the marketing team pulling on this thread, either. An internal working group was building direct AI bot tracking from our server logs. I also proposed Wikidata entries as the next point of collaboration, a shared source of truth the team should build from together. If I pitched this again today, I'd also position it as a form of brand safety.

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
<li id="ref-cloudflare-radar">Cloudflare Radar. (2026). "Global Traffic Trends &amp; Agentic Bot Data." Cloudflare. <a href="https://radar.cloudflare.com/traffic">https://radar.cloudflare.com/traffic</a></li> <li id="ref-webaim">WebAIM. (2026). "The WebAIM Million: The 2026 report on the accessibility of the top 1,000,000 home pages." <a href="https://webaim.org/projects/million/">https://webaim.org/projects/million/</a></li>
</ol>
