const CleanCSS = require('clean-css');

module.exports = function(eleventyConfig) {
  // Clean and minimize CSS
  eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Custom Interview Listing Sort Order
  eleventyConfig.addCollection('projectListing', function(collection) {
    return collection.getFilteredByTag('project').sort((a, b) => {
      return a.data.displayOrder - b.data.displayOrder;
    });
  });

  // Add CSS to template formats
  eleventyConfig.setTemplateFormats(['css']);

  /* To do:
  - Purge CSS
  - Add Babel for ES6
  - Compress JS
  - Inline JS
  - Image compression?
  */

  // Pass these assets through
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');

  // Basic config settings
  return {
    dir: {
      input: 'src',
      includes: 'includes',
      layouts: 'includes/layouts',
      markdownTemplateEngine: 'njk',
      output: 'dist',
      passthroughFileCopy: true
    }
  };
};
