---
title: GEO / AEO Authority Pilot
intro: Structured entity data as a response to LLM-mediated search — a two-stage pilot testing whether making a subject-matter expert legible to machines measurably changed how a brand's content performed.
role: Technical SEO, Content Strategy, Web Development
context: AdRoll
order: 2
availability: gated
about:
  - Answer engine optimization
  - Generative engine optimization
  - Entity disambiguation
  - Structured data
  - Technical SEO
eleventyNavigation:
  key: geo-aeo-authority-pilot
  order: 2
---

## The Insight

Organic search traffic was being replaced by LLM-mediated search. Bots were already parsing our content, not just crawling it for keywords, which raised a question nobody was asking yet: **was our content actually accessible to them?**

A background in accessibility is what surfaced the connection:

- AI crawlers and assistive technologies consume the same inputs — semantic HTML, ARIA, structured data.
- Accessibility tooling has always struggled to parse unstructured pages.
- If the site had gaps serving screen readers, it likely had the same gaps serving LLMs.
- That gap was fixable — and testable at pilot scale.

## The Approach

A two-stage "Build and Boost" pilot, validated against a control group.

**1. Structural feasibility.** Built a hub-and-spoke internal linking architecture across a topic cluster, establishing a clear neighborhood of expertise.

**2. Authority feasibility.** Enriched a subject-matter expert's author profile with Schema.org / JSON-LD data, disambiguated via `sameAs` links to verified professional sources.

**3. Statistical validation.** Measured impact with a Difference-in-Differences framework against a control group, sourced from Google Search Console and GA4.

Keeping the two stages separate is the point: structure makes an entity *resolvable*, authorship makes it *credible*. Disambiguation alone gets a machine to the right entity but gives it no reason to trust what that entity says.

_This site runs the same pattern — view source and look for the `application/ld+json` blocks tying this page's authorship back to a single, consistently-referenced identity._

## The Result

Self-measured via Google Search Console, validated with a DiD control-group framework:

- **+11.75%** organic search traffic lift from the structural changes alone
- **+24.1%** total organic search traffic lift with verified entity authorship added
- **24.27 → 18.43** average search position (baseline ranking floor)

Splitting the pilot in two is what makes the second number mean anything: roughly half the lift came from structure, and the rest arrived only once the claims were attached to a verifiable person.

## Why It Matters

**You dictate the source of truth for your brand.** Entity disambiguation isn't just technical SEO — it's brand infrastructure. The same structured data that helps search engines and LLMs cite a brand accurately also gives content and product marketing a single, verified source of truth to build from.

## Responsibilities

- Technical SEO strategy and structured data implementation
- Content architecture and internal linking design
- Front-end build
- Measurement design and statistical validation
- Cross-functional collaboration with the marketing and content teams

<small>Tools &amp; methods: Schema.org, JSON-LD, Google Search Console, Google Analytics 4, Difference-in-Differences (DiD) statistical framework.</small>
