const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

  // Clean and minimize CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  /* To do:
  - Purge CSS
  - Add Babel for ES6
  - Compress JS
  - Inline JS
  - Image compression?
  */

  // Pass these assets through
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy("src/android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("src/android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');

  // Basic config settings
  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "includes/layouts",
      markdownTemplateEngine: "njk",
      output: "dist",
      passthroughFileCopy: true
    }
  };

};