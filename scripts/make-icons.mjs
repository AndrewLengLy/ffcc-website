// Dev-only: builds the header mark and the favicon set from FFCC's own mark.
// Source: public/brand/ffcc-mark-original.jpg (110x108, from FFCC's old theme folder).
// Nothing is redrawn. The file is only trimmed, squared and resized.
// Run: node scripts/make-icons.mjs
import sharp from "sharp";

const src = "public/brand/ffcc-mark-original.jpg";
const white = { r: 255, g: 255, b: 255, alpha: 1 };

const trimmed = await sharp(src).trim({ threshold: 12 }).toBuffer();
const meta = await sharp(trimmed).metadata();
const side = Math.max(meta.width, meta.height);

const square = await sharp(trimmed)
  .resize(side, side, { fit: "contain", background: white })
  .png()
  .toBuffer();

// Header and footer mark (displayed at 44 to 48px, so 2x is covered).
await sharp(square).resize(112, 112, { kernel: "lanczos3" }).png().toFile("public/brand/ffcc-mark.png");

// Icons with a little white padding so the mark is not cropped by rounded masks.
const padded = (size, pad) =>
  sharp(square)
    .resize(size - pad * 2, size - pad * 2, { kernel: "lanczos3" })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: white })
    .png();

await padded(192, 16).toFile("app/icon.png");
await padded(180, 18).toFile("app/apple-icon.png");
await padded(512, 48).toFile("public/brand/icon-512.png");
await padded(192, 16).toFile("public/brand/icon-192.png");
console.log("icons written");
