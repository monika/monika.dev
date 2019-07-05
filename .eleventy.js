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
  //eleventyConfig.addPassthroughCopy("images");

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