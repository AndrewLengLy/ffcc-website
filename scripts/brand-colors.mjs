// Dev-only: dominant-color pass on FFCC brand files. Run: node scripts/brand-colors.mjs [file ...]
import sharp from "sharp";

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["public/brand/ffcc-logo-bulletin.png"];

const hex = (r, g, b) =>
  "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();

for (const file of files) {
  const { data, info } = await sharp(file)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const buckets = new Map();
  for (let i = 0; i < data.length; i += info.channels) {
    // Quantize to 4 bits per channel so near-identical pixels group together.
    const key = `${data[i] >> 4},${data[i + 1] >> 4},${data[i + 2] >> 4}`;
    const b = buckets.get(key) ?? { n: 0, r: 0, g: 0, b: 0 };
    b.n++; b.r += data[i]; b.g += data[i + 1]; b.b += data[i + 2];
    buckets.set(key, b);
  }
  const total = info.width * info.height;
  const top = [...buckets.values()].sort((a, b) => b.n - a.n).slice(0, 6);
  console.log(`\n${file} (${info.width}x${info.height})`);
  for (const b of top) {
    const c = hex(Math.round(b.r / b.n), Math.round(b.g / b.n), Math.round(b.b / b.n));
    console.log(`  ${c}  ${((b.n / total) * 100).toFixed(1)}%`);
  }
}
