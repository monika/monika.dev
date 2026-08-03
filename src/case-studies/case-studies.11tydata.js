/* Directory defaults for case studies.

   `availability` is the gate, and it defaults to the most private state so a
   draft has to be opted *in* to the site rather than out of it:

     hidden (default) — not listed anywhere, no page written. Where drafts sit
                        while they're still full of TODOs.
     gated            — the summary card appears on the homepage with a request
                        line instead of a link. Still no page written, so
                        material that hasn't been cleared for publication never
                        exists at a guessable URL.
     full             — the page builds, the card links to it, and it's indexed
                        like any other page on the site.

   A case study also needs a `summary` before it will list — see the
   caseStudySummaries collection in .eleventy.js. */
module.exports = {
  layout: 'case-study.njk',
  tags: 'caseStudy',
  templateEngineOverride: 'njk,md',
  availability: 'hidden',
  eleventyComputed: {
    permalink: (data) => (data.availability === 'full' ? data.permalink : false),
    noindex: (data) => data.availability !== 'full',
    sitemapIgnore: (data) => data.availability !== 'full'
  }
};
