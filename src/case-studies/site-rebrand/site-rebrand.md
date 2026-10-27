---
title: "AdRoll 3.0: Site-Wide Rebrand"
metaTitle: "AdRoll 3.0: Site-Wide Rebrand"
intro: "A full marketing site rebrand in a matter of weeks, for a firm launch date at Unbound, built on the site's existing modular foundation so one module change could reach every page that used it."
description: "A site-wide rebrand shipped on time for AdRoll's Unbound 2025 launch, using a new design system, a batch stakeholder workflow, and a Gemini-assisted pipeline. Silver, Best Brand Consolidation."
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
cardDescription: "Rebuilt the AdRoll marketing site for a new brand and a firm launch date, with a center-anchored design system, a batch workflow for stakeholder feedback, and a Gemini-assisted pipeline to generate page code."
cardResult: "Launched on schedule with no switchover issues, and finished early enough to extend the rebrand to the events platform, email systems, and partner directories for launch day. Won Silver, Best Brand Consolidation, in the 2026 Transform Awards."
award: "2026, Silver, Best Brand Consolidation, Transform Awards North America"
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

**The Outcome:** The site launched on schedule with no switchover issues, and more pages were updated than the launch required.

## The context

In August 2025, AdRoll announced that RollWorks would rejoin AdRoll as AdRoll ABM (account-based marketing). We were also moving upmarket and needed to speak with a new voice to both our B2B and D2C customers. In turn, our marketing site had to reflect both changes just before the brand merge was announced at Unbound 2025.

We faced an incredibly condensed timeline to integrate updated brand and creative guidelines across our entire web ecosystem. The challenge wasn't just a visual reskin; we had to scale visual updates across multiple internal stakeholder lines (including Product, Brand, Content, Lifecycle, Partnerships, Marketing Ops, Events, and ABM) while maintaining strict timelines and resource constraints.

Creative Director Jesse Vaughan led the brand refresh and provided guidelines. I was the principal designer and developer driving the update of the site based on our new branding guidelines.

## The solution

Our brand was updating to focus on mid-sized marketing teams, and that needed to be reflected on our marketing site. A new set of brand guidelines emphasized the idea of Organic Intelligence:

> "Organic Intelligence, natural texture meeting digital depth." - Jesse Vaughan, Creative Director

The site ebbs along an invisible centerline in the browser as users scroll up and down each page. I created a design system featuring several center-anchored content modules whose content flows out from that center point, natural textures, familiar typefaces, illustrated iconography, and white space to emphasize our brand's new "trusty, clever mentor" voice.

Once I mocked up several types of pages and content modules, I converted them into Figma components in order to rapidly prototype remaining page updates.

In order to update our codebase efficiently without sacrificing quality, I structured a production pipeline around a highly organized batch workflow that allowed me to maintain a constant development rhythm and design feedback loop:

### Asynchronous batch management

I organized the site into thematic sections that mapped directly to stakeholder responsibilities and sign-off. I managed revisions in discrete batches, keeping feedback isolated so it didn't derail the main development tracks.

### Automated development pipeline

I created a Gemini development pipeline to automate code production. I fed approved copy documents and web page outlines into a custom Gemini gem (a saved, reusable Gemini configuration), which mapped the content directly into custom semantic HTML modules that I created. This pipeline handled the bulk of structural generation, allowing me to focus on any active development needs while working through visual feedback loops with stakeholders.

### System engineering & core frameworks

* I created Figma components in order to rapidly prototype page layouts, mapping specific content types to targeted components.
* I built and updated reusable HTML/CSS modules using BEM (Block, Element, Modifier) naming conventions and wholesale CSS Grid updates using Bulma for accelerated page generation.

## The results

Because of the automation I included in my workflow, I was able to work ahead of schedule and include further brand updates to our events platform, email systems, and partner directories for launch day. The updated site navigation successfully funneled more traffic to more high-intent pages, and the wholesale CSS grid update simplified the migration of content.

## The next steps

Following the success of the project, I formulated a roadmap to continue refining platform stability, replication, and conversion metrics:

* **Performance tuning:** Tackle lingering Core Web Vitals (CWV) and JavaScript bloat issues stemming from Google Tag Manager and third-party tracking scripts.
* **Design system documentation:** Document the design system in formats available for human and agentic understanding, unlocking it for broader development.
* **Conversion optimization:** Coordinate with our A/B testing specialist to test layout effectiveness on sign-ups and integrate personalized web components.
* **Technical AEO (answer engine optimization) and GEO (generative engine optimization) audit:** Review the codebase for improvements.
* **System modernization:** Explore the integration of motion design as a native brand element to further modernize the web platform.

## Appendix

### Team credits

Raquel Addessi \- *Project Manager*  
Laura Barker \- *Copywriter*  
Jesse Vaughan \- *Creative Director*

### Awards

2026, Silver, Best Brand Consolidation, Transform Awards North America ([Transform Magazine](https://www.transformmagazine.net/articles/2026/transform-awards-proud-to-announce-north-america-2026-winners/)).
