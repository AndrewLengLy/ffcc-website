# Template design notes (layout reference: hilltopcc.net)

Purpose: record layout patterns and measured values only. No copy, markup, CSS, photos, logo, or event names from the reference site are reproduced here. Everything gets rebuilt from scratch in Next.js + Tailwind with our own content and brand colors.

Sources studied: homepage, what-to-expect, who-we-are, watch-live, ministries, plus the theme global variables, child theme stylesheets, platform stylesheets, the events plugin stylesheet, the page banner plugin stylesheet, and the live-stream widget frame. Values are confirmed from CSS unless marked "estimated".

Platform context: WordPress, Kadence theme with a child theme, Kadence Blocks rows for inner pages, Bulma columns for some grids, Smart Slider for the hero, a custom events plugin, and a third party live-stream widget.

---

## 1. Fonts and type scale

### Families

| Family | Loaded | Actually used for |
| --- | --- | --- |
| Poppins | yes (300, 500, 600) | Everything that matters: body, all headings, nav, buttons, hero text, footer. Set once as the global body family; headings and nav inherit it. |
| Roboto | yes | Only breadcrumb / search text inside the theme's default page hero, which is hidden on this site. Also a few platform admin modules. Effectively unused on public pages. |
| Open Sans | yes | Platform-level system modules (calendar list titles, legacy sermon accordion, admin bars). Not part of the visible design language. |
| Roboto Condensed | yes | No rule references it. Dead weight. |
| Playfair Display | NOT loaded | Referenced for one italic accent line in the hero and a couple of legacy blocks, so it falls back to a default serif. Treat as "optional italic serif accent". |
| Font Awesome | yes | Icons (utility bar, footer social, buttons with leading icons). |

Takeaway for rebuild: one sans family (Poppins or our equivalent) at weights 300 / 400 / 500 / 600, plus an optional italic serif accent. Do not load the other three.

### Base

- Body: 17px, weight 300, line-height 1.5, black text on white.
- `b` / `strong` are softened to weight 500 (not 700).
- Lists: margin about 1.4em top, 1.5em sides and bottom.

### Headings (global theme settings)

| Level | Desktop | Tablet (<=1024px) | Weight | Line-height | Color role |
| --- | --- | --- | --- | --- | --- |
| h1 | 45px | 40px (line-height 0.96) | 600 | 1.1 | accent |
| h2 | 45px | 33px | 600 | 1.1 | primary |
| h3 | 37px | 33px | 600 | 1.1 | accent |
| h4 | 29px | 26px | 600 | 1.0 | primary |
| h5 | 29px | 21px | 500 | 1.3 | accent |
| h6 | 20px | 19px | 500 | 1.16 | black |

Heading colors alternate between the primary brand color (dark) and the accent brand color (bright) by level.

### Display text

- Hero line 1: 64px (400% of 16px), weight 600, uppercase, line-height 0.9, white, 1px hard text shadow. A smaller span inside it sits at 32px.
- Hero line 2: 54px, weight 600, uppercase, line-height 1.2.
- Hero line 3 (accent): 33px, italic serif, weight 500, letter-spacing 1px, not uppercase.
- Hero text scales down at 890px and 590px (roughly 40 / 28 / 23px on phones).
- Homepage section title: 62px, weight 500, uppercase, line-height 1.0. Part of the title is wrapped in bold and recolored with the primary color (two-tone heading). 48px at <=1100px, 37px and weight 200 at <=670px.
- Under each section title: a small accent rule, 150px wide x 5px tall, centered, 10px vertical margin.
- Small label above a section title ("eyebrow"): 22px, uppercase in places, letter-spacing about 1.1pt (about 1.5px).
- Section subtitle under the title: 17px to 19px, weight 300 to 500.
- Welcome panel big headline: 4.1rem, weight 600, uppercase, line-height 1.0 (3.4rem <=800px). Sub headline: 1.8rem, weight 300, uppercase, letter-spacing 1px (1.5rem <=800px).
- Tabs block title: 3.4rem; its eyebrow 22px uppercase, letter-spacing 1px.
- Inner page banner title: 65px, uppercase, weight 700 from the banner plugin (theme setting says 500), line-height 1.05, fluid via clamp(18px, 6vw, 65px), white with a soft text shadow.

### Navigation and UI text

- Primary nav links: 17px, weight 400, uppercase, letter-spacing 0, white over the hero. Hover shifts to a pale tint of the brand color.
- Dropdown links: about 15.5px (11.6pt), weight 400, capitalize (not uppercase), line-height 1.3, dark text on white. Hover goes grey / brand color, no background change.
- Utility bar links: 15px; social icons in that bar 20px.
- Mobile drawer: top level 18px to 20px, sub items 15px weight 300 with a ">" prefix; current parent bold 23px.
- Buttons: 15px to 18px, weight 400 to 600 (see section 4).
- Card titles: ministries grid 32px weight 500 line-height 1.0; event image card title 16px weight 600; compact event card title 14px weight 600 (line-height 19px) with 13px schedule line.
- Date badge in compact event cards: month 13px, day 20px, weight 700, uppercase, letter-spacing 0.03em.
- Modal field labels: 0.65rem, uppercase, weight 700, letter-spacing 0.05em, grey.
- Footer column headings: h6 (20px, weight 500).

---

## 2. Spacing rhythm

### Containers

- Global content width: 1200px max. Wide variant 1430px. Narrow variant 825px.
- Header rows: 1249px max.
- Edge padding (gutter): 1.5rem each side. Platform `.container` fallback: 15px each side.
- Special inner widths: tabs block 1110px, text-over-photo band content 507px (left aligned box), generic full-bleed cover content 1005px, inner page banner content 1300px.

### Section vertical padding

Homepage (custom sections):
- Events section: 87px top, 17px bottom, then the card grid carries 30px top / 70px bottom margin.
- Dark "ministries tiles" section: 117px top (69px <=800px); tiles sit flush at the bottom.
- Tabs section: 86px top margin, 79px bottom margin.
- Text-over-photo band: 78px top, 77px bottom, 64px to 81px sides (collapses to 65px top / bottom and 23px sides on phones).
- Welcome / video panel band: only 27px top, 24px bottom, because the video pane is pulled up 49px to overlap the hero.
- Footer: 60px top, 66px bottom.

Inner pages (Kadence rows use a spacing scale):
- Scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 5rem, 8rem.
- Most common row padding: 5rem top and 5rem bottom (80px). Secondary: 4rem, 3rem. One feature band on who-we-are uses 8rem top and bottom.
- Default content area margin: 4.11rem top and bottom desktop, 3rem tablet, 2rem mobile.
- Generic column blocks get 60px top and bottom margin.
- Helper spacing classes: 50px and 75px vertical margins.

Rule of thumb for rebuild: sections at 80px vertical on desktop, 48px on mobile; feature bands at 112px to 128px.

### Grid gaps

- Two column text / media rows: 4rem column gap and 4rem row gap.
- Three column link tiles on what-to-expect: 17px gap.
- Bulma style columns (ministries grid): 0.75rem padding per column, so 24px gutters; 17px extra bottom margin per card. The homepage photo tiles use the same columns but paint the photo on the column itself, so they read as gapless.
- Event image cards: flex row, 20px gap.
- Compact event cards: grid, 16px gap, 3 columns, then 2, then 1.
- Tabs item grid: 2 columns, 20px gap, 1 column <=1000px.
- Footer grid: 100px gap desktop, 30px on tablet and mobile.
- Watch page split: 12px gap between player and side list, 10px between side cards.

### Card padding

- Ministries card: image flush to the edges; title 36px top, 20px sides, 14px bottom; description 9px top, 23px sides and bottom; button row 21px side margin, 37px bottom margin.
- Compact event card: 16px all around; date block 56 x 56px; 12px gap between date block and text.
- Grey callout box (service times) and translucent box (values): 27px top, 33px right, 31px bottom, 36px left.
- Event detail modal body: 25px (image card modal) and 1.5rem x 1.9rem (compact card modal).
- Welcome / video pane: 12px white frame padding around the player.
- Accordion: summary 9px x 18px; open panel 30px.
- Media + text block: text side 30px vertical, 40px to 50px horizontal.

---

## 3. Corner radius and shadows

The overall look is square. Radius is the exception, not the rule.

| Element | Radius |
| --- | --- |
| Buttons (all custom and block buttons) | 0 |
| Theme default button (rarely visible) | 3px |
| Cards (ministries, events, tiles, callout boxes) | 0 |
| Images and gallery items | 0 |
| Video player frame and watch page cards | 0 |
| Event image-card modal | 0 |
| Compact event detail modal | 12px (8px on small screens) |
| Newsletter popup | 8px |
| Event hover tooltip | 12px |
| Accordion items | 4px |
| Footer social icons | 50% (39px circles, 2px outline) |
| Video lightbox | 0 |

Shadows:
- Homepage tile row: large soft halo, 0 0 27px 12px rgba(0,0,0,0.28).
- Dropdown menus: 0 2px 13px rgba(0,0,0,0.10).
- Sticky header when stuck: wide soft shadow, about 0 -40px 23px 54px rgba(0,0,0,0.09).
- Buttons: none at rest; theme default hover 0 15px 25px -7px rgba(0,0,0,0.10).
- Generic content cards (theme default): 0 15px 15px -10px rgba(0,0,0,0.05).
- Event detail modal: 0 20px 25px -5px rgba(0,0,0,0.10) plus 0 10px 10px -5px rgba(0,0,0,0.04).
- Newsletter popup: 0 10px 40px rgba(0,0,0,0.30).
- Video lightbox: 0 24px 70px rgba(0,0,0,0.35).
- Event tooltip: 0 12px 28px rgba(0,0,0,0.17).
- Text on photos: 1px 1px 1px black (hero), 0 0 4px black (image card captions), 0 1px 6px rgba(0,0,0,0.4) (page banner).
- Most cards use a 1px light grey border (#DCDCDC to #EEE range) instead of a shadow.

---

## 4. Button styles

Shape: rectangular, 0 radius, fairly compact. Borders are 2px solid in most places (1px in a few small ones).

Variants found:
1. Outline dark (most common on light backgrounds): 2px black border, black text, white or very light grey fill. Padding ranges 6px x 12px (small) to 10px x 21px (large); typical 8px x 17px to 8px x 23px. Weight 400, some 600 or bold. Used for the calendar link, secondary section links, and the ministries card button (full width inside the card, 7px x 18px, 16px, weight 600).
2. Outline on dark / photo: 2px border in the accent color, white text, transparent fill, uppercase, bold, padding 10px 30px 8px. Used as the main CTA in the welcome panel. It has a lighter colored prefix word followed by the main label.
3. Solid brand fill: primary color fill, white text, 1px dark border. Footer contact button. Solid accent fill with a translucent white 2px border for the utility bar giving button (padding 4px 10px 4px 16px, 15px text).
4. Utility bar outline: 2px white border, white text, transparent, 15px, padding 3px 10px 4px 16px, line-height 1.4.
5. Block editor buttons on inner pages: 0 radius, 18px, weight 400, padding 7px 30px 6px (fill style 8px 30px), 10px margins, 20px top margin on the wrapper.
6. Modal register button: solid green fill, white text, 8px x 18px, weight 600, no border; hover swaps to a blue fill.
7. Two up hero buttons (legacy pattern): 2px black border, uppercase, bold, 17px, padding 8px 23px 8px 26px, light grey fill.

Text case: mixed. Uppercase for primary CTAs on dark / photo backgrounds and for nav; sentence or title case for secondary outline buttons.

Icons: several buttons lead with an icon (calendar, TV, envelope, file) with about 8px to 11px gap.

Hover behavior:
- Theme default: background changes from primary to accent color, text stays white, shadow lifts in (0.2s ease on all).
- Custom outline buttons: no explicit hover rule in most cases (estimated: only the inherited link color change). Rebuild should add a proper hover: invert fill or tint.
- Image tiles and image cards: opacity drops to 0.67 over 0.25s; event image cards in the grid variant zoom the image to 1.03 over 240ms.
- Text links in the welcome panel: color shift to a mid blue, 0.2s.

---

## 5. Video slots (all five pages)

| # | Page | Position | Type | Aspect ratio | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | Homepage | Second section, directly under the hero. Left pane of a two pane band; pane is a white framed box (12px frame) pulled up 49px so it overlaps the bottom of the hero. | Inline embed. A script injects an auto-resizing iframe that contains a single YouTube player showing the current live stream or the latest video. Countdown disabled here. | 16:9 (56.25% padding box). Wrapper min width 350px, injected frame min height 420px. | Below the player: a row of two text links with icons (past messages, weekly bulletin popup). Not a background loop, no autoplay. |
| 2 | Watch-live | The only content block on the page, under the page banner, inside the 1200px container. | Inline embed plus feed list ("split" layout): countdown bar on top, then a 2fr / 1fr grid with the main player on the left and a vertical list of 4 recent video cards on the right. | Main player 16:9. Side thumbnails 120 x 68px (16:9), 96 x 54px <=980px. | Countdown bar: label on the left, large numerals (34px, weight 900) with tiny uppercase unit labels on the right. When not live, the player area can show a "waiting" card with a countdown in place of the iframe. Below 980px the grid stacks to one column (estimated from the breakpoint rule). |
| 3 | Watch-live | Triggered from the side list cards in slot 2. | Lightbox. Clicking a recent video card opens a modal player. | 16:9, width min(980px, 96vw), black card, no radius. | Overlay rgba(15,23,42,0.72), fade 0.18s, square close button 34px top right, YouTube autoplay on open. The same lightbox pattern exists in the homepage widget script. |

Pages with no video slot:
- What-to-expect: no video. Only iframe besides the newsletter is a Google Maps embed.
- Who-we-are: no video.
- Ministries: no video.

Things that look like video but are not:
- Hero on the homepage: a Smart Slider with one static slide, a still photo background with a top to bottom brand color gradient overlay (about 76% opacity at top fading to transparent). No background video layer, autoplay off. Slider canvas 1500 x 650 (about 2.3:1), full width; content padding 160px top / 140px bottom desktop, 90px / 45px on small screens.
- Mailchimp iframe: present in the footer of every page inside a hidden popup. It is a newsletter signup form, not a video.
- YouTube feed plugin (sby) stylesheet is loaded site wide, but there is no feed container in the markup of any of the five pages. Legacy rules for a "sermons" section with a feed grid exist in the stylesheet but that section is not on the current homepage.
- Fancybox is loaded but only used for a people / bio popup script, not for video.
- Inner page banners are still images with a gradient, no video.

---

## 6. Header and navigation

Structure (desktop, >1024px): two stacked rows, both transparent and absolutely positioned over the hero or page banner (transparent header mode).

Utility bar (top row):
- Left side empty. Everything is right aligned.
- Contents in order: three social icon links (20px icons, about 19px apart), a solid giving button, an outlined live stream button, a plain contact text link, then a search icon button.
- Row has 15px top margin and sits tight against the main row. Text 15px, white.
- Search icon opens a full width overlay search drawer (about 97% white background), not an inline field.

Main row:
- Min height 80px. Logo on the left, primary nav on the right, no centered element.
- Logo max width 193px, pulled up 60px so it spans both rows visually. On tablet / mobile it is capped at 100px and gets a drop shadow for contrast.
- Nav items: uppercase, 17px, weight 400, white, about 30px left and 12px right padding per link.
- The home item exists in the menu but is hidden on desktop.

Dropdowns:
- Open on hover (theme "hover to open" mode, also opens on keyboard focus). Reveal animation: fade down.
- Parent items with children are not clickable themselves (pointer events disabled); only the submenu links navigate.
- Each parent shows a small caret (chevron down) after the label.
- Panel: white, 252px wide links, 11px padding, 0 radius, shadow 0 2px 13px rgba(0,0,0,0.1), no dividers between items. Links are capitalized, about 15.5px, dark. Last menu item's dropdown is aligned to the right edge so it does not overflow.
- Single level only on these pages (no mega menu, no nested flyouts).

Sticky behavior:
- Only the main row is sticky. The utility bar scrolls away.
- When stuck: background switches from transparent to solid primary color, row shrinks to 60px height, logo shrinks to about 157px wide and re-centers in the row, a wide soft shadow appears.
- Always visible while stuck (no hide on scroll down / reveal on scroll up).
- Mobile header is not sticky.

Mobile / tablet (<=1024px):
- Single transparent row over the hero: small logo left, bordered hamburger button right (solid primary fill, 1px translucent white border, 20px icon).
- Drawer: slides in as a side panel from the right, max width 360px, white background, dark overlay behind, fade animation. Close "X" at the top of the panel (bars forced to a high contrast color); clicking the overlay also closes.
- Drawer content order: search toggle, a row of utility actions (give button, calendar outline button, contact link), then the menu.
- Menu: top level items 18px to 20px, dark text. Items with children have a separate toggle button (chevron) to the right of the label; tapping it expands the submenu inline (accordion / collapse). Sub items are indented, 15px, weight 300, prefixed with ">".
- The live stream link inside the drawer is restyled as a red outlined button.

---

## 7. Tabs and modals

### Tabs (homepage classes / groups block)

- Layout: two columns inside an 1110px container. Left: a tall cover photo (flex 1, object-fit cover). Right: fixed 650px content column with 50px left padding: eyebrow, large two-tone title, short centered description, tab bar, tab panels.
- Tab bar: two equal width buttons in a flex row (each flex 1), 15px padding, 1.1rem bold text, no border, no gap, 30px margin below.
- Active tab: solid dark brand fill, white text, and a 10px downward triangle centered under it (speech bubble pointer). Inactive: light grey fill (#F0F0F0), dark text; hover darkens to #DCDCDC. Transition 0.3s.
- Behavior: click only. Clicking a tab removes the active state from all tabs and panels, then activates the matching panel. Panels are display none / block with a 0.5s fade-in keyframe. No URL hash, no keyboard arrow handling, no ARIA roles (we should add role tablist / tab / tabpanel and arrow keys).
- Panel 1 content: compact event cards in a grid (date block left, title and schedule right, 1px border, 16px padding, square corners). 3 columns that fall to 2 then 1.
- Panel 2 content: an injected groups widget: 2 column grid of small horizontal cards (80px square thumb, uppercase 0.9rem title, grey 0.85rem meta line), 1 column on small screens.
- <=1000px: columns stack; the photo becomes a 345px tall banner above the content; content padding 30px 20px.

### Modal A: event image cards (homepage events section)

- Trigger: clicking anywhere on an event card (image with a 16px weight 600 title under it). Cards sit in a flex row with 20px gap, equal widths, stacking on mobile at 250px max width each.
- Each card has its own pre-rendered hidden modal, matched by id.
- Overlay: fixed full screen, rgba(0,0,0,0.6), centered content, opacity fade 0.3s.
- Dialog: white, 95% width up to 900px, max height 90vh with internal scroll, 0 radius, enters with scale 0.95 to 1 and a 10px upward slide over 0.3s.
- Content order: full width image on top, then a 25px padded body: title (h2), date line (weight 600, grey), rich text description, optional register button (solid fill).
- Close controls: clicking the dark backdrop only. There is no X button and no Escape key handler. Rebuild should add both, plus focus trap and scroll lock.

### Modal B: compact event cards (inside the tabs panel)

- Trigger: clicking a compact card (role button). Hovering or focusing a card also shows a tooltip to its right (white, 12px radius, 220px to 300px wide) with a short summary.
- Overlay rgba(0,0,0,0.72). Card dialog: white, max width 800px, 12px radius, max height about viewport minus 70px, body scrolls, 0.2s entrance animation.
- Content: header row with optional category badge and a text style "close" link on the right; optional featured image; title with an optional register button beside it; optional recurrence / contact line; a two box grid for date and time with tiny uppercase labels; optional location pill with map link; description.
- Close controls: the close link in the header and clicking the overlay (Escape handling estimated, not confirmed).

### Modal C: newsletter popup (footer, every page)

- Trigger: clicking the full width newsletter bar at the top of the footer.
- Overlay rgba(0,0,0,0.6); dialog 90% width up to 700px, 80% viewport height, 8px radius, contains the Mailchimp form iframe.
- Close: click on the backdrop only.

### Accordion (who-we-are)

- Native details / summary. Two columns of 5 items each.
- Item: 1px grey border, 4px radius, 9px bottom margin. Summary: light grey fill, 20px text (16px on mobile), weight 600, 9px x 18px padding, flex row with a 28px bordered square "+" indicator on the right that becomes a minus when open.
- Panel: 30px padding, top border, height and opacity transition about 0.35s. Optional inline image at 35% width beside the text.

---

## 8. Homepage section order

1. Header overlay: transparent utility bar and main nav sitting on top of the hero.
2. Hero: full width still photo, about 2.3:1 on desktop, brand color gradient overlay from the top. Centered three line text stack (big uppercase line, second uppercase line, italic serif accent line). No buttons, no arrows, single slide. Image background.
3. Welcome / live video band: dark brand color background with a subtle photo texture. Two equal flex panes (min 350px each, stack <=800px). Left: white framed 16:9 video player overlapping the hero by 49px, with two icon text links under it. Right: centered text stack: huge uppercase headline, light uppercase sub headline, service times line with highlighted times, italic address, map link, outlined uppercase CTA. Dark.
4. Events section: white background, centered. Two-tone uppercase section title, 150 x 5px accent rule, one line subtitle, outlined calendar button with a leading icon, then a row of event image cards (2 to 4 across, 20px gap) that open Modal A. Light.
5. Ministries by age band: dark brand color with a photo background, centered eyebrow label, two-tone title (light tint + white), accent rule, paragraph up to 957px wide. Below it a row of three equal photo tiles with no gaps between them inside the container, each with 341px of image space above a white title (37px) and short description (18px, weight 300); whole tile is a link; hover fades to 67% opacity; big soft shadow around the row. On phones the three tiles stay side by side and shrink (title 18px to 22px). Image / dark.
6. Classes / groups tabs block: white background with a faint decorative graphic. Left cover photo, right content column with eyebrow, two-tone title, description, two tabs, and card grids (see section 7). Light.
7. Ministries teaser band: full width photo background (subject on the right), content box floated left at 507px max width, centered text inside: eyebrow label, two-tone title (54px), accent rule, short paragraph, outlined button. Below 1355px the box gets a solid light grey panel; below 950px a white wash (about 74% to 81%) covers the photo for legibility. Image / light.
8. Footer (see section 9). Light grey.
9. Bottom bar: thin strip with a staff login trigger and the platform credit.

Defined in the stylesheet but not present on the live homepage (legacy, ignore unless wanted): a service times photo band with a half width text box, a latest sermon / video feed section on light grey, and a centered "who we are" statement band.

---

## 9. Footer structure

- Background light grey (#F2F2F2), 60px top / 66px bottom padding, content inside the standard container.
- Row 0 (above the columns): a full width white newsletter bar, flex with space-between, 14px x 20px padding, 57px bottom margin. Left: envelope icon plus a 32px uppercase two-tone title. Center: a small decorative image. Right: a small outlined button. The entire bar is one click target that opens the newsletter popup. Stacks and centers <=700px.
- Row 1: three column grid at 25% / 20% / 50% with a 100px gap.
  1. Service times: heading, day and time lines, short note about children's programs with a two item list.
  2. Quick links and actions: heading, vertical list of 5 links with no bullets, the last one styled as an outlined button with a user icon (member login to an external portal); then a solid giving button (171px wide); then a row of three circular outlined social icons (39px, 2px border).
  3. Location and contact (wide column): heading, then a flex row of a 120 x 120px map thumbnail and a text block with name, address, phone, and a solid contact button.
- Responsive: 2 columns with 30px gap <=900px (third column spans both); 1 column <=600px.
- Bottom bar under the footer: small login link and platform credit.
- No multi-column sitemap, no copyright row inside the main footer grid.

---

## 10. Inner page patterns

### Shared page banner

- Every inner page starts with a full width banner directly under (and behind) the transparent header.
- With photo: 350px top padding, 270px bottom padding, cover image with adjustable vertical focal point, top to bottom gradient from the primary color to transparent. Title centered, 65px uppercase white, soft text shadow. Content max width 1300px. Optional subtitle 18px and optional underline bar (5px tall, 30% width).
- Without photo (ministries, watch-live): solid primary color, 220px top, 70px bottom padding.
- On tablet / mobile the gradient is removed and paddings drop to device specific values (estimated: roughly 120px base top offset to clear the header).
- The theme's own page title area is hidden; no breadcrumbs.

### Shared content shell

- No sidebars on any of the four pages. Content style is "unboxed" on white.
- Content container 1200px; most rows are full bleed backgrounds with a 1200px inner wrap and 1.5rem gutters.
- Default vertical margin around the content area 4.11rem (3rem tablet, 2rem mobile).

### What-to-expect

Row by row:
1. Intro row on a very light grey band: 2 equal columns with 4rem gap. Left: h2, h6 tagline, one or two buttons. Right: left aligned paragraphs.
2. Full bleed mosaic photo gallery: 4 images in a mixed wide / large / tall / small pattern, square corners, no captions.
3. Two equal columns, 4rem gap, 5rem vertical padding. Left: h2, paragraphs, then a grey callout box (centered h4 times, short lines, a small link with a video icon to the watch page). Right: h2, address with a map link, Google Maps embed.
4. Parallax photo band with a white overlay at about 65% opacity: a media + text block (photo left, text right with h2, a short bullet list, paragraphs).
5. Centered h2 plus intro line, then a 3 column grid (17px gap) of link tiles: linked image, h4 title, short text. Stacks to 1 column on mobile.
6. Closing single column row on the light grey band.

### Who-we-are

1. Two equal columns (4rem gap, small top padding, 4rem bottom): photo left, h3 plus paragraphs right.
2. Feature band with a photo background and a diagonal brand color gradient overlay (about 77% opacity), 8rem vertical padding. 65% / 35% column split. The wide column holds three stacked translucent boxes (tinted fill, 1px translucent white border, generous padding), each with a small left floated icon image, a heading, and text. The narrow column is left empty so the photo shows through.
3. Photo band with a 65% white overlay, 5rem padding: centered h2, then a nested 2 column row holding two accordions of 5 items each (see Accordion in section 7).

### Watch-live

- Solid color banner (no photo), then a single content block in the 1200px container: the live-stream widget in split layout (countdown bar, 16:9 player at two thirds width, 4 recent video cards at one third). Nothing else on the page. See section 5.

### Ministries

- Solid color banner (no photo).
- A short centered intro line (h6 size) with small top padding and 3rem bottom padding.
- Card grid: 3 columns (one third each) with 24px gutters, multi row, at least 6 cards. Falls to fewer columns on tablet / mobile via the column framework (estimated: 1 column below 769px).
- Card: very light grey fill (#F8F8F8), 1px #DCDCDC border, square corners, equal height. Image on top at 5:3 (500 x 300 crop) flush to the card edges and linked; centered 32px title; centered 17px description; full width outlined button pinned near the bottom. No shadow, no hover lift (only the image link).

---

## How we rebuild this

- UtilityBar: right aligned row with social icons, solid Give button, outlined Watch Live button, Contact link, search trigger. Hidden <=1024px (its actions move into the drawer).
- Header: transparent over hero / banner, logo left, uppercase nav right, hover + focus dropdowns with caret and fade-down, non-clickable parents. Sticky main row only: solid brand fill, shrink 80px to 60px, soft shadow.
- MobileDrawer: right side panel, 360px max, overlay click and X to close, utility actions on top, accordion submenus with separate chevron toggles. Add focus trap and Escape.
- Hero: full width still image (about 2.3:1), top gradient overlay, centered three line text stack (two uppercase lines plus italic serif accent).
- WelcomePanel (uses VideoLite): dark two pane band; left white framed 16:9 player overlapping the hero by about 48px with link row under it; right service times text stack with outlined CTA.
- VideoLite: 16:9 lite YouTube embed (poster + play button, loads iframe on click). Variants: single (homepage), split with countdown and recent list (watch page), and lightbox (980px max, 16:9, autoplay on open, X + overlay + Escape to close).
- SectionHeading: optional eyebrow, two-tone uppercase title (62px desktop), 150 x 5px accent rule, subtitle.
- EventCard + Modal: image card with title under it; click opens a centered dialog (900px max, image on top, title, date, body, optional register button), scale + fade in 0.3s. Add close button, Escape, focus trap, scroll lock. Compact variant: date block + title + schedule, 3 / 2 / 1 column grid.
- TileRow: three gapless photo tiles with overlaid title and blurb, opacity hover, large soft shadow.
- Tabs: photo left, content right; two equal tab buttons, active has solid fill and a pointer triangle; panels fade in. Add ARIA tablist semantics and arrow key support.
- PhotoBand: full width photo with a left aligned text box and outlined button; white wash overlay on small screens.
- PageBanner: photo + brand gradient (350px / 270px padding) or solid color (220px / 70px), centered 65px uppercase title.
- ContentRow: full bleed background, 1200px inner, 80px vertical padding, 2 column 64px gap option, overlay option for photo backgrounds.
- CalloutBox: grey or translucent box with about 28px to 36px padding, square corners.
- Accordion: details / summary, bordered items, plus / minus indicator, 2 column layout.
- MinistryCard + CardGrid: 3 column grid, 24px gutters, bordered light grey cards, 5:3 image, centered title and text, full width outlined button.
- Button: square corners, 2px border. Variants: outline dark, outline light (on dark / photo, uppercase bold), solid primary, solid accent. Optional leading icon. Add real hover states.
- NewsletterBar + Modal: full width clickable bar in the footer that opens a form dialog (700px max).
- Footer: newsletter bar, then 25 / 20 / 50 three column grid (service times, quick links + give + social, location + contact with map thumb), collapsing to 2 then 1 column; slim bottom bar.
