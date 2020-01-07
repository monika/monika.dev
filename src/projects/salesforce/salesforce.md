---
title: Salesforce
thumbnail: images/img-salesforce.jpg
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

![A series of accordion items for different solutions.](/images/img-salesforce-code-example.gif)

<div class="code__html language-html">

#### HTML

````html
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

``` scss

.solution {
  padding: 60px 0 100px;

  &:last-of-type {
    padding-bottom: 50px;

    @media #{$media-small} {
      padding-bottom: 100px;
    }
  }

  &:nth-child(odd) {
    background-color: $light-grey;
  }

  .wrapper {
    display: grid;

    grid-template-columns: 26% 10% 64%;
    grid-template-rows: auto auto;

    @media #{$media-small} {
      display: flex;
      flex-direction: column;
    }
  }

  &__title {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;

    margin: 0 0 30px;

    font-size: 1.3rem;
    line-height: 1;
    font-family: $heading-font-stack;
    color: $teal;
  }

  &__info {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;

    @media #{$media-small} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
    }
  }

  &__intro {
    margin: 0;
  }

  &__icon {
    display: block;
    padding-top: 40%;

    @media #{$media-small} {
      padding: 0 0 0 5%;
      max-width: 140px;
    }
  }

  &__solutions {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes reverse-spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }

  &__subtitle {
    margin: 0;
    padding: 15px 35px 15px 0;
    position: relative;

    border-top: 1px solid $grey;

    text-transform: uppercase;
    color: $teal;
    font-family: $body-font-stack;
    font-weight: $body-font-weight;
    line-height: 1.5;

    cursor: pointer;

    transition: color 0.125s ease-in;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 30px;
      background: url('../images/icon-plus.svg') no-repeat center center;

      animation-name: reverse-spin;
      animation-duration: 0.35s;
      animation-iteration-count: 1;
      animation-timing-function: ease;
    }

    &.ui-accordion-header-active {
      color: $blue;
      font-family: $sub-heading-font-stack;
      font-weight: $sub-heading-font-weight;
    }

    &:hover {
      color: $blue;
    }

    &:last-of-type {
      border-bottom: 1px solid $grey;
    }

    &.ui-state-active {
      &:after {
        background: url('../images/icon-minus.svg') no-repeat center center;

        animation-name: spin;
        animation-duration: 0.35s;
        animation-iteration-count: 1;
        animation-timing-function: ease;
      }

      &:last-of-type {
        border-bottom: 0;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0 50px 20px 30px;

    font-family: $highlight-font-stack;

    &:last-of-type {
      border-bottom: 1px solid $grey;
    }

    li {
      padding: 0 0 10px 10px;

      &:last-of-type {
        padding-bottom: 0;
      }
    }
  }
}
````

</div>

</div>

### Co-credits

- Design: [IRON Creative](https://ironcreative.com/)
- Character Animation: Trey Simmons
