# Sources

Every source was checked on 2026-09-19. FFCC's own pages win any conflict, and newer beats older. Conflicts are logged in `CONTENT_TODO.md`. Facts were taken from third-party sites. Their wording was not.

## FFCC-run sources

| Source | Status | What was taken |
| --- | --- | --- |
| https://faithfellowshiplive.org/ (live) | DOWN. Every page returns HTTP 500 ("There has been a critical error on this website"). Static files under `/wp-content/themes/` and `/wp-content/uploads/fbrfg/` and the bulletin PDFs still load | Favicon files, old theme logo files, bulletin PDFs |
| Wayback Machine capture of the homepage, 2025-10-06 | Loaded | Tagline "Embracing One Church, One Mind, One Christ", site menu, giving blurb, theme CSS colors (found to be theme defaults) |
| Wayback: /about/our-identity/our-mission/ (2023-06-05) | Loaded | Mission, Vision and Identity statements, verbatim in `content/identity.ts` |
| Wayback: /about/our-identity/our-statement-of-faith/ (2025-10-06) | Loaded | All eight belief statements with scripture references, verbatim in `content/beliefs.ts` |
| Wayback: /about/our-identity/our-history/ (2024-06-16; the 2025 capture is a bot-check page) | Loaded | Full history text, verbatim in `content/history.ts` |
| Wayback: /about/faqs/ (2025-10-06) | Loaded | All eight FAQ answers plus the welcome paragraph, verbatim in `content/faq.ts` and `content/identity.ts` |
| Wayback: /about/contact-us/ (2025-10-06) | Loaded | Address, phone 916.339.9156, fax 916.339.9005 |
| Wayback: /about/our-service-times/ (2025-10-06) | Loaded | Sunday School 8:30 AM, worship 10:00 AM, Tuesday and Thursday Bible study, Wednesday prayer line, 1st Saturday Corporate Prayer. Children's Church ages 3 to 15 and High School Fellowship ages 16 to 18 (conflicts with the bulletins, see `CONTENT_TODO.md`) |
| Wayback: /about/our-identity/our-directives/ (2025-10-06) | Loaded | Enrichment and Inreach, Evangelism and Outreach program text, verbatim on /ministries. The opening section names a former pastor and was left out |
| Wayback: /give-2/give/ (2025-10-06) | Loaded | Giving blurb, 2 Corinthians 9:8, fund descriptions, confirmation that the site embeds Givelify organization `OTc2NQ==` (same ID as the Givelify link in the brief) |
| Wayback: /visit/directions/ (2025-10-06) | Loaded | Google Maps embed. Its place CID `0x809ad89356a000f9:0xb13e2ade9745e32c` decodes to the same value as Place ID `ChIJ-QCgVpPYmoARLONFl94qPrE`, which verifies the Place ID |
| Wayback: /resources/ffcc-mobile-app/ (2025-02-16) | Loaded | FFCC has (or had) a mobile app listed as "Faith Fellowship Community Church" in the app stores. Not linked until confirmed |
| Wayback: /media/ (2018-09-03) | Loaded | Nothing used. Header names a former pastor |
| Weekly bulletins, `/wp-content/uploads/YYYY/MM/Bulletin-Month-D-YYYY.pdf` | Every Sunday from 2024-02-11 to 2026-09-20 was probed. Thirteen were found. Newest is **January 12, 2025** | Sunday worship 10:00 AM, Adult Sunday School 8:30 AM, Tuesday Bible Study 7:00 PM, Wednesday prayer line 7:00 PM, Thursday Bible Study 10:30 AM at FFCC and by phone, office hours Tue to Thu 9:30 AM to 4:00 PM, Children's Church ages 3 and up on the 2nd and 3rd Sundays, giving options (in person, mail, Givelify, QR code), ZIP+4 95660-4755, the logo image. Prayer lists and bereavement notices name private individuals and were not used |
| Facebook page https://www.facebook.com/faithfellowshiplive | Partly loaded (login wall after the first post) | Page is active. Newest video: Sunday service of September 13, 2026, https://www.facebook.com/faithfellowshiplive/videos/1417968073768014/ (set as `FB_VIDEO_URL`). Intro matches the Identity statement |
| YouTube channel https://www.youtube.com/@faithfellowshipsac | Loaded | FFCC's channel with high confidence: avatar is the FFCC mark, it streamed the August 8, 2026 homegoing service, and its videos match the Facebook page. The About tab shows no address, so this is logged as CONFIRM. Last upload was the September 13, 2026 Sunday stream, so the channel is active and the YouTube icon is on. The thumbnail of that stream is the video poster (`public/images/church/ffcc-service-2026-09-13-poster.jpg`). Streams start about 9:55 AM Pacific, which supports the 10:00 AM worship time. Banner reads "Empowering One Church..." (conflict) |
| Givelify page (link in the brief) | Loaded | Active and accepting gifts. Profile still names Pastor Charley, so none of its text is used. Cover photo saved as `public/images/church/ffcc-sanctuary-givelify-cover.png` (625x350) |

## Third-party sources

| Source | Status | What was taken |
| --- | --- | --- |
| Sacramento Observer obituary for Pastor Charley (published 2026-08-07, updated 2026-08-10) | Loaded | Context only. She died 2026-07-21 at 88, had resigned as senior pastor effective Aug 1, and no successor is named. Nothing from it appears on the site. Family names were not recorded |
| GuideStar profile 68-0466856 | Loaded | EIN, ruling year 2003, IRS church status. Held in `content/giving.ts` with `approved: false`, so it is not shown |
| Sacramento365 listing | Loaded | Self-description (nondenominational, contemporary creative church), listing image saved to `public/brand/`. Its second phone number is FFCC's fax line and was ignored |
| Waze listing (Google Places data) | Loaded | Listed hours, Place ID, coordinates 38.6751705, -121.3842416 |
| Google Maps Place ID lookup | Loaded | Resolves to Faith Fellowship Community Church, 5937 Watt Ave. The Google Business Profile shows as unclaimed |
| Yahoo Local | Loaded | Cross streets: Watt Ave and Freedom Park Dr |
| The Word Sacramento | Loaded | ZIP+4 95660-4755, nondenominational label |
| ChurchFinder | Loaded | Address and phone match. Listing is unclaimed |
| Sacramento Top 10 | Loaded | Address and phone match |
| FaithStreet | BLOCKED (HTTP 403). Not bypassed | Nothing. Worship style text ships from the brief and is marked CONFIRM |
| Yelp | BLOCKED (HTTP 403). Not bypassed | Nothing. The visitor photo was not downloaded |
| Yellow Pages | BLOCKED (HTTP 403). Not bypassed | Nothing beyond the brief |
| Sac Cultural Hub | BLOCKED (HTTP 403). Not bypassed | Nothing. Its 2014 schedule is ignored per the brief |
| Amazon author bio, Dr. Ronn Elmore | Not fetched | Not needed. The history page uses FFCC's own text only |
| Web search for other mentions of 5937 Watt Avenue or faithfellowshiplive.org | Done | No further news, event calendars or listings. Results for other "Faith Fellowship" churches were discarded |

## Template

hilltopcc.net (home, what-to-expect, who-we-are, watch-live, ministries) was studied for layout patterns only. See `docs/template-notes.md`. No markup, CSS, text, events, photos or logo from that site is in this project.

## Skipped on purpose

People-data sites, job-review sites, and every site for an unrelated "Faith Fellowship" church.
