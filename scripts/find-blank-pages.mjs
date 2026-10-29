/* Finds page exports with long empty bands — modules that hadn't rendered when
   the page was captured (scroll-reveal animations that never fired, mostly).

   A row counts as empty when every pixel across it is nearly the same colour, and
   a page is flagged when it has a run of those rows at least MINIMUM tall. Pages
   that are known to be clean never run past about 220px, which is why that's the
   floor. The check only sees bands that span the full width, so a module missing
   from one column of a two-column layout won't be caught.

   Usage: node scripts/find-blank-pages.mjs "<Pages folder>" */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const source = process.argv[2];
if (!source || !fs.existsSync(source)) {
  console.error('Usage: node scripts/find-blank-pages.mjs "<Pages folder>"');
  process.exit(1);
}

const MINIMUM = 220;
const BROKEN = 500;
// Pixels, in a page 1920 wide. Wider captures are scaled down to match.
const PAGE_WIDTH = 1920;
const SAMPLE_WIDTH = 480;
const TOLERANCE = 6;

function listPages(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return listPages(path.join(dir, entry.name), `${prefix}${entry.name}/`);
    return entry.name.endsWith('.png') ? [`${prefix}${entry.name}`] : [];
  });
}

async function emptyBands(file) {
  const { data, info } = await sharp(file, { limitInputPixels: false })
    .flatten({ background: '#ffffff' })
    .resize({ width: SAMPLE_WIDTH })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rowsToPixels = PAGE_WIDTH / SAMPLE_WIDTH;
  const bands = [];
  let start = 0;
  let length = 0;

  const close = () => {
    if (length * rowsToPixels >= MINIMUM) {
      bands.push({ at: Math.round(start * rowsToPixels), height: Math.round(length * rowsToPixels) });
    }
    length = 0;
  };

  for (let y = 0; y < info.height; y++) {
    const offset = y * info.width * 3;
    const [r, g, b] = [data[offset], data[offset + 1], data[offset + 2]];
    let empty = true;

    for (let x = 1; x < info.width; x++) {
      const i = offset + x * 3;
      if (
        Math.abs(data[i] - r) > TOLERANCE ||
        Math.abs(data[i + 1] - g) > TOLERANCE ||
        Math.abs(data[i + 2] - b) > TOLERANCE
      ) {
        empty = false;
        break;
      }
    }

    if (empty) {
      if (length === 0) start = y;
      length++;
    } else {
      close();
    }
  }
  close();

  return bands;
}

const broken = [];
const possible = [];
const clean = [];

for (const file of listPages(source).sort()) {
  const bands = await emptyBands(path.join(source, file));
  const worst = Math.max(0, ...bands.map((band) => band.height));
  const line = `${file.padEnd(58)} ${bands.map((b) => `${b.height}px @${b.at}`).join(', ')}`;

  if (worst >= BROKEN) broken.push(line);
  else if (worst >= MINIMUM) possible.push(line);
  else clean.push(file);
}

console.log(`\nLONG GAPS (${BROKEN}px+), clearly broken: ${broken.length}`);
broken.forEach((line) => console.log(`  ${line}`));
console.log(`\nSMALLER GAPS (${MINIMUM}-${BROKEN - 1}px), possibly missing modules: ${possible.length}`);
possible.forEach((line) => console.log(`  ${line}`));
console.log(`\nNo long gaps: ${clean.length}`);
