---
layout: project.njk
tags: project
displayOrder: 1
title: OLIPOP
thumbnail: images/img-olipop-full.jpg
thumbnailAlt: The homepage of DrinkOlipop.com.
intro: An e-commerce site for groundbreaking pre-biotic sparkling tonic company OLIPOP, built around their fresh new brand.
role: Front-end Development, Technical Advising
---

### The Project

_A healthful and delicious pre-biotic sparkling tonic drink that needed a site as fresh and invigorating as its new branding._

In the summer of 2018, the co-founders of OLIPOP, Ben Goodwin and David Lester, needed some help: they had a beautiful, delicious, pre-biotic tonic ready to take to market but nowhere to sell it online and were overwhelmed with the e-commerce options available to them.

Based on their needs, budget, and timeline, I guided the co-founders towards Shopify. I set them up with a new theme that reflected the gorgeous visual design their product designers, Break Maiden, produced for them. We also dedicated time towards informational pages that educated consumers on the unique position of OLIPOP as a sparkling tonic drink.

Filled with luscious photography, joyful illustrations, and engaging typography, the store has helped OLIPOP spread into markets across California.

<small>(A secondary phase of the store included active e-commerce and subscription purchasing launched August 2019 in cooperation with Creatix Marketing).</small>

[Visit DrinkOlipop.com &#10132;](https://drinkolipop.com/)

<aside>

### Responsibilities

- Platform research
- Brand integration
- Theme customization
- Accessibility testing
- Responsive browser and device testing
- Site maintenance and updates

</aside>

<div class="visuals">

### Visuals

![Ben Goodwin and David Lester, Co-founders of OLIPOP.](/images/img-olipop-ben-david.jpg)
![Some of the stores OLIPOP is available in Northern California.](/images/img-olipop-map.jpg)
![A colorful banner for the Digestive Health page.](/images/img-olipop-digestive-health.jpg)

</div>

<div class="code">

### Example: Excerpt Module

#### Rendered Module

![A textured illustration of a water can next to a block of green text.](/images/img-olipop-code-example.gif)

<div class="code__html language-html">

#### HTML

    <section class="module-excerpt good-bacteria">
      <div class="container module-excerpt__container">
          <div class="module-excerpt__image-wrapper">
              <img src="illustration-watering-can.svg" alt="A watering can full of green leaves and bugs." class="module-excerpt__image">
          </div>
          <div class="module-excerpt__text">
              <h2 class="h2 module-excerpt__heading">Feed your good bacteria</h2>
              <div class="module-excerpt__subtext">
                  <p>That’s right! These allies in our gut need a meal too, and their favorite foods are fiber and prebiotics. Researchers have identified a correlation between digestive health and a hunter gatherer style diet. That is a diet high in nutrient diversity (different types of foods) and fruits and vegetables that are a natural source of fiber and prebiotics.</p>
              </div>
          </div>
      </div>
    </section>

</div>

<div class="code__sass language-css language-scss">

#### SCSS

    .module-excerpt {
      padding: $grid-gutter 0;

      @include media-query($medium-up) {
        padding: $grid-gutter * 2 0;
      }

      &__container {
        display: flex;
        width: 100%;
        align-items: center;
        max-width: $container-small;
        margin: 0 auto;

        flex-direction: column;
        padding-bottom: $grid-gutter;

        &--full {
          .module-excerpt__text {
            width: 100%;
            padding-left: 0;
          }
        }

        @include media-query($medium-up) {
          flex-direction: row;
          padding-bottom: 0;

          &--flip {
            flex-direction: row-reverse;
          }
        }
      }

      &__text {
        font-size: 1rem;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        text-align: center;

        @include media-query($medium-up) {
          width: 60%;
          padding-bottom: 0;
          text-align: left;
          padding-left: $grid-gutter * 3;

          &--flip {
            padding-left: 0;
            padding-right: $grid-gutter * 3;
          }

          &--center {
            text-align: center;
          }
        }
      }

      .module-excerpt__image-wrapper {
        width: 100%;
        padding-left: $grid-gutter * 2;
        padding-right: $grid-gutter * 2;

        @include media-query($medium-up) {
          width: 40%;
          padding: 0;
        }
      }

      .module-excerpt__image {
        display: block;
        max-height: none;
        max-width: 100%;
        padding-bottom: $grid-gutter;

        @include media-query($medium-up) {
          max-height: 350px;
          max-width: none;
          margin: 0 auto;
          padding-bottom: 0;
        }

        @include media-query($large-up) {
          max-height: 420px;
        }
      }

      .btn {
        margin: 0 auto;
      }

    }

</div>

</div>

### Co-credit

- Design: [Break Maiden](https://www.breakmaiden.co/olipop)
- E-Commerce Support: [Creatix Marketing](http://creatix.io/)
