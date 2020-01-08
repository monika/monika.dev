const cleanCSS = require('clean-css');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
  // Clean and minimize CSS
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleanCSS({}).minify(code).styles;
  });

  // Custom Project Listing Sort Order
  eleventyConfig.addCollection('projectListing', function(collection) {
    return collection.getFilteredByTag('project').sort((a, b) => {
      return a.data.displayOrder - b.data.displayOrder;
    });
  });

  // Code Example Image Nunjucks shortcode
  eleventyConfig.addShortcode("codeExample", function(imgFileName, imgAlt){
    return `<picture>
    <source
        type="image/webp"
        srcset="/images/img-${imgFileName}-large.webp"
        media="(min-width: 401px)"
    />
    <source
        type="image/webp"
        srcset="/images/img-${imgFileName}-medium.webp, /images/img-${imgFileName}-medium@2x.webp 2x"
        media="(max-width: 400px)"
    />
    <source
        type="image/webp"
        srcset="/images/img-${imgFileName}-small.webp, /images/img-${imgFileName}-small@2x.webp 2x"
        media="(max-width: 200px)"
    />
    <!-- jpg images -->
    <source
        srcset="/images/img-${imgFileName}-large.jpg"
        media="(max-width: 401px)"
    />
    <source
        srcset="/images/img-${imgFileName}-medium.jpg, /images/img-${imgFileName}-medium@2x.jpg 2x"
        media="(max-width: 400px)"
    />
    <source
        srcset="/images/img-${imgFileName}-small.jpg, /images/img-${imgFileName}-small@2x.jpg 2x"
        media="(max-width: 200px)"
    />
    <img
        src="/images/img-${imgFileName}.png"
        alt="${imgAlt}"
    />
  </picture>`;
  })

  // Add syntax highlighting via prism.js
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['md', 'njk', 'html', 'css']
  });

  eleventyConfig.setTemplateFormats(['njk', 'md', 'html']);

  // Pass these assets through
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/favicon.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy({'src/images-resized': 'images'});
  eleventyConfig.addPassthroughCopy('src/images');

  // Basic config settings
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'includes/layouts',
      markdownTemplateEngine: 'njk',
      passthroughFileCopy: true
    }
  };
};
