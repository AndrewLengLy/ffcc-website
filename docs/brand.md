# FFCC brand notes

Checked 2026-09-19. Tokens live in `app/globals.css` under `@theme`.

## Where the colors came from

| Source | What it showed | Verdict |
| --- | --- | --- |
| Logo inside FFCC's weekly bulletin PDF (Feb 18, 2024), saved as `public/brand/ffcc-logo-bulletin.png` | Copper and white split square with a stylized figure. Dominant color `#CD853F` (33.7% of pixels, the rest white) | Verified brand color |
| Square mark from FFCC's old custom theme folder, saved as `public/brand/ffcc-mark-original.jpg` | Same mark. Dominant color `#C7854A` (JPEG, so slightly muddier) | Verified, matches the bulletin logo |
| FFCC favicon and apple touch icon (`/wp-content/uploads/fbrfg/`) | Same mark at small size. Dominant color `#B9723A` | Verified darker copper |
| Wordmark from the old theme folder, `public/brand/ffcc-wordmark-original.png` | Gold `#F6B80C` "Faith Fellowship" over gray `#8A8A8A` "Community Church" | Verified, not used in the UI (gold fails contrast on white) |
| Theme CSS of faithfellowshiplive.org (Bravada theme, Wayback capture 2025-10-06) | `#E9B44C`, `#0F8B8D`, `#162521`, `#08415C` | These are the Bravada theme's stock defaults, so they are not FFCC brand colors. Ignored |
| YouTube channel avatar (`@faithfellowshipsac`) | The same mark recolored gold and purple | Conflict. Logged in `CONTENT_TODO.md`. Copper wins because it appears on FFCC's own site, favicon, bulletins and Givelify QR code |

The dominant-color pass is `node scripts/brand-colors.mjs [files]` (dev only, uses `sharp`).

## Tokens

| Token | Hex | Role | Source | Status |
| --- | --- | --- | --- | --- |
| `copper-500` | `#CD853F` | Accent rules under titles, eyebrow text and accents on dark bands | Bulletin logo | Verified |
| `copper-600` | `#B9723A` | Focus ring, card hover border | Favicon | Verified |
| `copper-700` | `#9A5A26` | Primary buttons, links, icons on light backgrounds | Darkened from the logo copper so white text passes AA | Estimated |
| `copper-800` | `#7A441B` | Button hover, link hover, OG image background | Darkened from the logo copper | Estimated |
| `copper-900` | `#5C3314` | Link hover on tinted backgrounds | Darkened from the logo copper | Estimated |
| `copper-300` | `#E6C29F` | Link hover and focus ring on dark bands | Anti-alias tint sampled from the bulletin logo | Verified |
| `copper-100` | `#F2E0CF` | Text selection, hover on white buttons | Anti-alias tint sampled from the bulletin logo | Verified |
| `copper-50` | `#FBF6F0` | Tinted callouts and the Facebook band | Lightened from the favicon background `#FAF5EA` | Estimated |
| `ink` | `#1C1815` | Body text, dark bands, utility bar | Neutral chosen for the build | Estimated |
| `ink-soft` | `#4A433E` | Secondary text | Neutral | Estimated |
| `ink-muted` | `#6B635D` | Small labels | Neutral | Estimated |
| `mist` | `#F5F4F2` | Alternate section background, footer | Neutral | Estimated |
| `line` | `#DCDAD6` | Borders | Neutral | Estimated |
| `slot` | `#D9D9D9` | Flat gray block for every photo slot without a real FFCC photo | Build brief | Fixed value |

Pages stay neutral (white, mist, ink). Copper only appears on buttons, links, icons and the short accent rule.

## Contrast (WCAG AA)

| Pair | Ratio | Passes |
| --- | --- | --- |
| ink on white | 17.63 | AA and AAA |
| ink on mist | 16.04 | AA and AAA |
| ink on slot gray (hero without a photo) | 12.49 | AA and AAA |
| ink-soft on white / mist / copper-50 | 9.71 / 8.83 / 9.03 | AA and AAA |
| ink-muted on white / mist | 5.89 / 5.35 | AA |
| white on copper-700 (primary button) | 5.43 | AA |
| white on copper-800 (button hover) | 7.86 | AA and AAA |
| copper-700 on white / mist / copper-50 (links, eyebrows) | 5.43 / 4.94 / 5.06 | AA |
| copper-800 on copper-50 | 7.32 | AA and AAA |
| copper-500 on ink (eyebrows on dark bands) | 5.90 | AA |
| copper-300 on ink (hover on dark bands) | 10.57 | AA and AAA |
| white at 85% on ink | 12.89 | AA and AAA |
| white at 70% on ink (logo sub line, dark tone) | 9.10 | AA and AAA |
| red-700 error text on white | 6.47 | AA |

`copper-500` and `copper-600` are never used for text on light backgrounds. `#CD853F` on white is 2.99 and `#B9723A` on white is 3.80, so both fail for body text.

## Logo files

No vector or high resolution logo is reachable. The largest copies found:

| File | Size | Use |
| --- | --- | --- |
| `public/brand/ffcc-mark-original.jpg` | 110x108 | Source for the header mark and the favicon set |
| `public/brand/ffcc-mark.png` | 112x112 | Header and footer mark, built by `scripts/make-icons.mjs` (trim, square, resize only) |
| `public/brand/ffcc-logo-bulletin.png` | 189x190 | Full lockup with the name, kept for reference |
| `public/brand/ffcc-wordmark-original.png` and `-white-` | 450x99 | Old wordmark, kept for reference |
| `public/brand/ffcc-mstile-original.png`, `ffcc-apple-touch-icon-original.png`, `ffcc-favicon-original.ico` | 236x236, 76x76, ico | FFCC's own favicon files |
| `public/brand/ffcc-sacramento365-listing.jpg` | 360x106 | Old site header lockup from the Sacramento365 listing |

The header pairs FFCC's real mark with a type-only wordmark set in Poppins. Nothing was redrawn. Ask the church for original artwork (see `CONTENT_TODO.md`).

## Type

- Poppins 400, 500, 600 for everything (matches the template's single-family approach).
- Playfair Display italic 500 for the tagline and the scripture quote only.
- Both load through `next/font/google`, self-hosted at build time, `display: swap`.
