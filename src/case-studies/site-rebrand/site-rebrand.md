---
title: "AdRoll 3.0: Site-Wide Rebrand"
metaTitle: "AdRoll 3.0: Site-Wide Rebrand"
intro: "A full marketing site rebrand in a matter of weeks, for a firm launch date at Unbound, built on the site's existing modular foundation so one module change could reach every page that used it."
description: "A site-wide rebrand shipped on time for AdRoll's Unbound 2025 launch, using a modular foundation, batch stakeholder workflow, and Gemini-assisted pipeline."
role: Web Design & Development
context: AdRoll
order: 1
draft: false
about:
  - Rebrand
  - Design systems
  - Front-end development
  - Statamic
  - Workflow automation
cardDescription: "Rebuilt the AdRoll marketing site for a new brand and a firm launch date, using a modular foundation, a batch workflow for stakeholder feedback, and a Gemini-assisted pipeline to generate page code."
cardResult: "Launched on schedule with no switchover issues, with more pages updated than the launch required. 60 days later: +42% homepage traffic and +87% first-time visitors to core pages."
award: "Silver, Best Brand Consolidation, Transform Awards North America"
cardTags:
  - Rebrand
  - Design systems
  - Front-end development
  - Statamic
  - Workflow automation
eleventyNavigation:
  key: site-rebrand
  order: 1
---

## Overview

**The Challenge:** AdRoll folded its ABM products back into the core brand and began serving B2B buyers as well as D2C. The marketing site needed a full rebrand in a matter of weeks, for a firm launch date at Unbound on August 27, 2025.

**The Approach:** Rebuild the rebrand on the site's existing modular foundation, so one module change could reach every page that used it. Keep design conversations moving with stakeholders through defined deadlines.

**The Thinking:** A full rebuild was not possible in the time available. The modular foundation made targeted changes possible across more of our marketing pages at once.

**The Outcome:** The site launched on schedule with no switchover issues, and more pages were updated than the launch required. Navigation changes moved more traffic toward high-intent and product pages.

## The context

In August 2025, AdRoll announced that RollWorks would rejoin AdRoll as AdRoll ABM (account-based marketing). We were also moving upmarket and needed to speak with a new voice to both our B2B and D2C customers. In turn, our marketing site had to reflect both changes just before the brand merge was announced at Unbound 2025.

We faced an incredibly condensed timeline to integrate updated brand and creative guidelines across our entire web ecosystem. The challenge wasn't just a visual reskin; we had to scale changes across multiple internal stakeholder lines (including Product, Brand, Content, Lifecycle, Partnerships, Marketing Ops, Events, and ABM) while maintaining strict timelines and resource constraints.

Creative Director Jesse Vaughan led the brand refresh and provided guidelines. I was the principal designer and developer driving the update of the site based on our new branding.

## The solution

To execute quickly without sacrificing quality, I structured a production pipeline around a highly organized batch workflow that allowed me to maintain a steady development rhythm and feedback loop:

### Asynchronous batch management

I organized the site into thematic sections that mapped directly to internal stakeholder responsibilities and sign-off. I managed incoming visual updates and revision requests in discrete batches, keeping feedback isolated so it didn't derail the main development tracks.

### Automated development pipeline

I built a Gemini development pipeline to automate code production. I fed approved copy documents and web page outlines into a custom Gemini gem (a saved, reusable Gemini configuration), which mapped the content directly into custom semantic HTML modules that I created. This pipeline handled the bulk of structural generation, allowing me to focus on any active development requests while systematically working through stakeholder visual feedback loops in parallel.

### System engineering & core frameworks

* Created component-driven Figma modules for rapid layouts, mapping specific information types to exact structural modules.
* Built reusable HTML/CSS modules using BEM (Block, Element, Modifier) naming conventions and wholesale CSS Grid updates using Bulma for accelerated page generation.

## The results

We successfully launched on time for our firm Unbound deadline and added extra sections beyond our original scope. Navigation structure updates successfully redirected traffic to more high-intent pages, and the wholesale CSS grid update simplified the migration of content from the old site.

Jesse Vaughan's published case study reports a 42% increase in homepage traffic and an 87% increase in first-time visitors to core pages, 60 days after launch.<sup><a href="#ref-vaughan">1</a></sup>

## The next steps

Following the success of the project, I formulated a roadmap to continue refining platform stability and conversion metrics:

* **Performance tuning:** Tackle lingering Core Web Vitals (CWV) and JavaScript bloat issues stemming from Google Tag Manager and third-party tracking scripts.
* **Conversion optimization:** Coordinate with our A/B testing specialist to test layout effectiveness on sign-ups and integrate personalized web components.
* **Technical AEO/GEO audit:** Review the codebase for improvements.
* **System modernization:** Explore the integration of motion design as a native brand element to further modernize the web platform.

## Appendix

### Team credits

Raquel Addessi \- *Project Manager*  
Laura Barker \- *Copywriter*  
Jesse Vaughan \- *Creative Director*

### Awards

Silver, Best Brand Consolidation, Transform Awards North America ([Transform Magazine](https://www.transformmagazine.net/awards/north-america/the-winners/)), awarded to AdRoll. The site rebrand described in this case study was part of that work.

### References

<ol class="references">
<li id="ref-vaughan">Vaughan, Jesse. "AdRoll 3.0" case study.</li>
</ol>
