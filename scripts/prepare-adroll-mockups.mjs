/* Prepares the AdRoll 3.0 case study's mockups from the full-size exports.

   The exports are full-height page screenshots (tens of MB for the set), too
   large to commit or to hand to the image pipeline, so this does the heavy
   lifting once:

   - FEATURED pages are resized and written to src/images as JPEG, for the three
     browser frames at the top of the case study.
   - Everything else in the folder is packed into one tall masonry image for the
     wide frame under them. It's deliberately low-detail — it's there to show the
     breadth of the work — so one image beats dozens of requests.

   Usage: node scripts/prepare-adroll-mockups.mjs "<Pages folder>"

   Re-run it whenever the set changes; both outputs are overwritten. */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const source = process.argv[2];
if (!source || !fs.existsSync(source)) {
  console.error('Usage: node scripts/prepare-adroll-mockups.mjs "<Pages folder>"');
  process.exit(1);
}

const OUT = 'src/images';

// Path within the folder (without .png) → output basename.
const FEATURED = {
  'Desktop - Homepage (1920w)': 'img-adroll-3-home',
  'Desktop - Customer Stories (live)': 'img-adroll-3-customers',
  'Desktop - Discount Calculator - Subscription': 'img-adroll-3-calculator'
};
const FEATURED_WIDTH = 1200;

/* Left out of the masonry: a hero-only crop of the homepage, which isn't a
   page, the placeholder Customer Stories mockup, which the "(live)" capture
   replaces, and the One-time calculator, a near-copy of the Subscription page
   that's featured above.

   Pages whose export has empty bands where modules didn't render are included
   on purpose, so the gaps show up in the finished image. The list of them lives
   in pages-needing-reexport.txt, next to the mockups. */
const EXCLUDED = new Set([
  'Desktop - Homepage (1920w)-1',
  'Desktop - Customer Stories',
  'Desktop - Discount Calculator - One-time'
]);

const MASONRY = {
  name: 'img-adroll-3-masonry',
  /* Four columns keeps each page big enough to make out its layout. The width
     is sized for the frame at its widest (1200px) on a 2x screen, which needs
     2400px; anything less is stretched by the browser and looks soft. The
     composite also has to stay under WebP's 16,383px height limit, which caps
     how big it can go for a larger set of pages. */
  width: 2400,
  columns: 4,
  gutter: 32,
  /* Only this share of the stitched height is kept, and the image just ends in
     the middle of the pages at that point. It's a taste of the system across
     many pages, not an inventory of every page. */
  keep: 0.5,
  /* The cut edge fades into the gutter colour over this many px, so the image
     reads as trailing off on purpose rather than as a broken or cropped file.
     It's baked in because a CSS overlay would sit on the frame's bottom edge
     for the whole scroll instead of only at the end. */
  fade: 700,
  // Shows between and around the pages, which are mostly white.
  background: '#dadada'
};

// Exports carry an alpha channel; flatten onto white so any transparent edge
// matches the page rather than turning black in JPEG.
const open = (file) =>
  sharp(file, { limitInputPixels: false }).flatten({ background: '#ffffff' });

/* Every PNG under the folder, as a path without the extension, so the
   Promotions subfolder is picked up too. */
function listPages(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return listPages(path.join(dir, entry.name), `${prefix}${entry.name}/`);
    return entry.name.endsWith('.png') ? [`${prefix}${path.basename(entry.name, '.png')}`] : [];
  });
}

const files = listPages(source).sort();

for (const [name, basename] of Object.entries(FEATURED)) {
  if (!files.includes(name)) throw new Error(`Featured page "${name}" not found in ${source}`);

  const output = path.join(OUT, `${basename}.jpg`);
  const resized = await open(path.join(source, `${name}.png`))
    .resize({ width: FEATURED_WIDTH })
    .png()
    .toBuffer();

  /* Some exports are padded with blank white below the footer. Cut the image
     where the last non-white row ends; pages that already end in content
     (a dark footer, or a page that fills the frame) come through unchanged. */
  const { data, info } = await sharp(resized).raw().toBuffer({ resolveWithObject: true });
  let contentHeight = info.height;
  while (contentHeight > 1) {
    const row = data.subarray((contentHeight - 1) * info.width * info.channels, contentHeight * info.width * info.channels);
    if (row.some((value) => value < 245)) break;
    contentHeight -= 1;
  }

  await sharp(resized)
    .extract({ left: 0, top: 0, width: info.width, height: contentHeight })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);
  console.log(`featured  ${output}`);
}

const { width, columns, gutter, background } = MASONRY;
const columnWidth = Math.floor((width - gutter * (columns + 1)) / columns);
const columnHeights = Array(columns).fill(gutter);
const placed = [];

/* Alphabetical order would put every Capabilities and Channels page up top and
   leave the other sections in the part that gets cut, so pages are dealt out one
   section at a time instead. Sections are the middle part of "Desktop - Section
   - Page"; a page with no second dash is a section on its own. */
function interleaveBySection(names) {
  const sections = new Map();
  for (const name of names) {
    const section = name.split(' - ')[1] ?? name;
    sections.set(section, [...(sections.get(section) ?? []), name]);
  }

  const queues = [...sections.values()];
  const dealt = [];
  while (queues.some((queue) => queue.length)) {
    for (const queue of queues) if (queue.length) dealt.push(queue.shift());
  }
  return dealt;
}

for (const name of interleaveBySection(files.filter((file) => !EXCLUDED.has(file)))) {
  const buffer = await open(path.join(source, `${name}.png`))
    .resize({ width: columnWidth })
    .png()
    .toBuffer();
  const { height } = await sharp(buffer).metadata();

  // Each page goes in whichever column is currently shortest, which is what
  // keeps the bottom edge even.
  const column = columnHeights.indexOf(Math.min(...columnHeights));
  placed.push({
    input: buffer,
    left: gutter + column * (columnWidth + gutter),
    top: columnHeights[column]
  });
  columnHeights[column] += height + gutter;
}

/* Columns end wherever their last page does, which leaves a ragged bottom edge.
   The image is cut at a straight line instead: the shortest column's end, scaled
   down by `keep`. The cut lands mid-page, which reads as the pages continuing
   past the edge. */
const fullHeight = Math.max(...columnHeights);
const cutHeight = Math.floor((Math.min(...columnHeights) - gutter) * MASONRY.keep);

// Composited at full height first: Sharp refuses overlays taller than the base.
const stitched = await sharp({
  create: { width, height: fullHeight, channels: 3, background }
})
  .composite(placed)
  .png()
  .toBuffer();

const output = path.join(OUT, `${MASONRY.name}.jpg`);
const fadeOverlay = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${MASONRY.fade}">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${background}" stop-opacity="0"/>
        <stop offset="1" stop-color="${background}" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#fade)"/>
  </svg>`
);

const trimmed = await sharp(stitched)
  .extract({ left: 0, top: 0, width, height: cutHeight })
  .png()
  .toBuffer();

await sharp(trimmed)
  .composite([{ input: fadeOverlay, left: 0, top: cutHeight - MASONRY.fade }])
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(output);

console.log(`masonry   ${output}  (${placed.length} pages stitched, ${width}×${cutHeight} kept)`);
