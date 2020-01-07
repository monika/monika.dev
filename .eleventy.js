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

  // Add syntax highlighting via prism.js
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['md', 'njk', 'html', 'css']
  });

  // Pass these assets through
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/favicon.png');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');

  eleventyConfig.setTemplateFormats([
    'njk',
    'md',
    'html',
    'jpg',
    'gif',
    'webp',
    'svg',
    'css'
  ]);

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
