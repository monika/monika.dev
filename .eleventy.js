const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

  // Clean and minimize CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Basic config settings
  return {
    dir: {
      markdownTemplateEngine: "njk",
      input: "src",
      includes: "includes",
      layouts: "includes/layouts",
      output: "dist"
    }
  };

};