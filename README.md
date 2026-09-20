# Faith Fellowship Community Church website

Multi-page site for Faith Fellowship Community Church (FFCC), 5937 Watt Avenue, North Highlands, CA 95660.

Next.js App Router, TypeScript, Tailwind CSS v4. Every page is statically rendered. The only server code is the contact form route handler.

## Run it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

Node 20 or newer.

## Deploy to Vercel

Import the folder as a Vercel project. No build settings are needed. Set the environment variables below if the contact form should store submissions. Update `url` in `content/site.ts` if the site launches on a domain other than faithfellowshiplive.org.

## Going live (search indexing)

The site ships with `noindex` and a `robots.txt` that blocks crawlers, so a review deployment never competes with the church's real domain. At launch, add the environment variable `ALLOW_INDEXING=true` to the Vercel project (Production) and redeploy. Lighthouse SEO reads 100 with indexing on. With it off, Lighthouse flags the page as blocked from indexing, which is expected.

## Editing content

All church content lives in `content/` as typed objects.

| File | Holds |
| --- | --- |
| `content/site.ts` | Name, tagline, address, phone, emails, social links, Place ID and map links, Givelify link, service time, hours |
| `content/media.ts` | `FB_VIDEO_URL`, the video poster, and every photo slot |
| `content/schedule.ts` | Recurring schedule, homepage event cards, the Classes and Groups tabs, dated events |
| `content/ministries.ts` | Children, Youth, Adults |
| `content/identity.ts` | Mission, Vision, Identity, welcome text, Inreach and Outreach text (FFCC's words, verbatim) |
| `content/beliefs.ts` | Statement of Faith (verbatim) |
| `content/history.ts` | History (verbatim) |
| `content/faq.ts` | FAQ answers (verbatim) |
| `content/giving.ts` | Giving blurb, scripture, ways to give, fund descriptions, EIN flag |
| `content/navigation.ts` | Menus, footer links, sitemap routes |

Common edits:

- **New service video.** Paste the Facebook video link into `FB_VIDEO_URL` in `content/media.ts`. Leave it as `""` to show a gray 16:9 block that links to FFCC's Facebook videos.
- **New photo.** Save it in `public/images/church/` and set the slot's `src` in `content/media.ts`. See `PHOTO_TODO.md`.
- **Show the EIN on /give.** Set `ein.approved` to `true` in `content/giving.ts` after the church approves.
- **Add a dated event.** Add it to `datedEvents` in `content/schedule.ts`. It appears on `/events` and leads the homepage cards.

## Contact form

`/contact` posts to `app/api/contact/route.ts`.

- **With** `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` set, each submission is inserted into the `contact_submissions` table through the Supabase REST API. No Supabase SDK is installed.
- **Without** those variables, the handler logs the payload to the server console and returns success. The form works locally and on a fresh deploy, but nothing is stored. Set the variables before launch.

Table:

```sql
create table contact_submissions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  reason text not null,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  heard text,
  user_agent text
);
alter table contact_submissions enable row level security;
```

Row level security stays on with no policies. Only the service role key, which lives on the server, can insert or read.

Spam protection is a honeypot field. A filled honeypot gets a success response and is dropped. The success message says the church office will follow up and promises no response time.

## Measurement

Vercel Analytics (`@vercel/analytics`). Custom events: `form_submit`, `phone_click`, `email_click`, `give_click`, `directions_click`, `video_play`. Links carry `data-track` attributes and one delegated listener (`components/layout/TrackClicks.tsx`) reports them. Enable Analytics in the Vercel project to see them.

## SEO

- Per-page titles and descriptions through `pageMeta()` in `lib/seo.ts`
- JSON-LD `Church` schema in the root layout (name, address, phone, url, geo, `hasMap` from the Place ID, `sameAs`). Service times are left out until the church confirms them
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, favicon set, generated 1200x630 Open Graph image

## Motion

Parabox motion system at Momentum scope. CSS handles hover states, the one scroll reveal pattern, the hero entrance and the event dialog. The `motion` package (LazyMotion, `domAnimation`) handles the mobile drawer. No GSAP. All timing values come from the token set in `app/globals.css`. Reduced motion removes travel and keeps short fades. Content stays visible with JavaScript off.

## Dev scripts

- `node scripts/brand-colors.mjs [files]` prints dominant colors of the logo files (dev only, `sharp`)
- `node scripts/make-icons.mjs` rebuilds the header mark and the icon set from FFCC's own mark

## Project docs

- `docs/template-notes.md` layout patterns studied on the reference site
- `docs/brand.md` colors, roles, sources, contrast
- `docs/sources.md` every source, what was taken, date checked
- `CONTENT_TODO.md` questions for the church, CONFIRM items, conflicts, gaps
- `PHOTO_TODO.md` photo slots still gray
