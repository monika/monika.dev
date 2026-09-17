/* Directory defaults for case studies.

   `draft: true` keeps a case study that's still full of TODOs out of the
   build entirely — no page written, not listed in any collection. Everything
   else builds and is indexed like any other page on the site.

   The caseStudyListing collection in eleventy.config.mjs orders these by
   `order`. */
module.exports = {
  layout: 'case-study.njk',
  tags: 'caseStudy',
  templateEngineOverride: 'njk,md',
  eleventyComputed: {
    permalink: (data) => (data.draft ? false : data.permalink),
    eleventyExcludeFromCollections: (data) => !!data.draft
  }
};
