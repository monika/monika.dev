---
title: Salesforce
thumbnail: img-salesforce
thumbnailAlt: A screenshot of a Salesforce ebook, featuring Cody the bear and Astro holding laboratory equipment.
intro: A browser-based eBook for Salesforce, full of industry insights, and complete with joyful character animations, charts, and graphs.
role: Front-end Development
displayOrder: 3
---

### The Project

_A fresh, exciting, and friendly new eBook from Salesforce that provides industry data for the health and sciences fields._

Folks are hungry for business insight and Salesforce provides that insight in many forms, one of which is their eBooks. Salesforce needed to bring their latest eBook, beautifully designed by the team at IRON Creative, into the browser.

I pushed the edges of technology and centered the animations on our eBook in a new video format, which is set to gracefully downgrade for older browsers. Fun illustrations and iconography are presented as scalable and small vector files, keeping the loading speed quick, the rendering time fast, and the site responsive for various browser sizes and devices - getting people to the insight they want to see as efficiently as possible.

[Visit Salesforce eBook &#10132; (Dev URL)](https://gallant-liskov-7a6a1b.netlify.com/)

### Responsibilities

- Building semantic HTML, responsive CSS, presentational JS
- Speed optimization
- Video support and graceful degradation
- Responsive browser and device testing
- Accessibility testing

### Visuals

<div class="visuals">

{%- for figure in figures -%}
{% include modules/figure.njk %}
{%- endfor -%}

</div>

<div class="code">

### Code Example: Solution Module

#### Browser Rendering

{% codeExample "salesforce-code-example", "A series of accordion items for different solutions." %}

<div class="code__html language-html">

#### HTML

```html
<div class="solution">

    <div class="wrapper">

        <h3 class="solution__title">Intelligent Sales</h3>

        <div class="solution__info">

            <p class="solution__intro">Salesforce gives you the perspective you need to understand where your sales are succeeding, but, more importantly, where they can improve and what next steps to take.</p>

            <img class="solution__icon" src="/images/icon-intelligent-sales.svg" alt="An ID card.">

        </div>

        <div class="solution__solutions accordion">

            <h4 class="solution__subtitle">Field Force Management</h4>

            <ul>
            <li>Enable greater field collaboration and communication</li>
            <li>Forecast your pipeline more accurately</li>
            <li>Improve territory management by combining forecast and industry data for real-time insights</li>
            <li>Deliver more efficient field training by providing standardized sales and enablement in a single, central location</li>
            </ul>

            <h4 class="solution__subtitle">Intelligent Account Management</h4>

            <ul>
            <li>View a detailed account history to inform forecasts</li>
            <li>Get next-best actions and recommended email responses</li>
            </ul>

            <h4 class="solution__subtitle">Order Management</h4>

            <ul>
            <li>Receive data-driven intelligence recommendations</li>
            </ul>

            <h4 class="solution__subtitle">Sales Reporting</h4>

            <ul>
            <li>Drive actionable insights through flexible dashboards leveraging CRM data analytics</li>
            <li>Increase the reach and frequency of your sales efforts</li>
            <li>Improve the performance of key accounts and territories</li>
            <li>Assess effectiveness and optimize your Salesforce tools</li>
            <li>Easily identify top performers and coach your team</li>
            </ul>

        </div>
    </div>
</div>
```

</div>

<div class="code__sass language-css language-scss">

#### SCSS

```scss
.class {
  property: 1px solid #f00;
}
```

</div>

</div>

### Co-credits

- Design: [IRON Creative](https://ironcreative.com/)
- Character Animation: Trey Simmons
