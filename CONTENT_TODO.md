# Content to confirm with the church

Last updated 2026-09-19. Everything marked CONFIRM is live on the site as written and waits for a yes or a correction from FFCC. Most edits are one line in `content/`.

## Questions for the church

1. Who is the current pastor, and who leads each ministry? Please send names, titles and portraits. `/about/leadership` shows gray placeholder cards until then, and the site names no one as pastor. **A "2023 Ministry Leaders" sheet was found on FFCC's own former website** ([archived copy](https://web.archive.org/web/20240224021735id_/https://faithfellowshiplive.org/wp-content/uploads/2023/06/%E2%80%8EMinistry-Heads-Sheet-2023.%E2%80%8E1.jpeg)). It names Pastor Rosalee Charley as Senior Pastor and lists roughly fifty people across some twenty ministries, including the Board of Directors, Deacon, Usher, Creative Arts and Ministerial Staff. It dates from 2023 and predates Pastor Charley's death, so **none of it has been copied onto the site or into this repository**: it names private individuals and is certainly out of date. Use it as a starting point for confirming who serves today.
2. What is the current Sunday and weekday schedule? See the CONFIRM list below for what the site shows today.
3. Would the church like a tribute to Pastor Charley? No memorial section was built. **FFCC announced her death on its own Facebook page**, in a post reading "Our Senior Pastor Rosalee Charley gained her wings July …", with a viewing on August 7 and a Celebration of Life at FFCC. Facebook serves that image cropped when logged out, so the year and the full dates could not be read. The church has therefore said this publicly while the site still says nothing at all, which is worth settling before launch.
4. Is Givelify still the giving platform? Which mobile app should members use to give? The Give page mentions an app without naming it.
5. May the EIN (68-0466856) appear on the Give page? It is stored with `approved: false` in `content/giving.ts`. Set it to `true` to show it.
6. Does the church still rent rooms and the sanctuary? How should renters book? The site repeats FFCC's FAQ answer (call the church office).
7. Which listed programs still run: nursery, adult education, community service, health ministry? None of them appear on the site.
8. May we use FFCC's photos, and is there a photo library? Six slots are now filled with photos taken from FFCC's own public pages: its website, YouTube channel, Givelify page and Facebook page. Most of them show members' faces clearly. Please confirm both that the church is happy with each photo and that the people in them are happy to appear on the site; any one can be pulled in a single line. **Still missing everywhere: a photo of the outside of the building**, which two slots need and no FFCC source has. Facebook's photo albums are the best remaining place to look and need someone signed in. See `PHOTO_TODO.md`.
9. Can the church send original logo artwork (vector or large PNG)? The largest mark found is 110 pixels wide.

## CONFIRM items that are live on the site

| Item | What the site says | Source | Where to edit |
| --- | --- | --- | --- |
| Sunday worship | Sundays at 10:00 AM, Main Sanctuary | FFCC FAQ, bulletin of Jan 12, 2025, YouTube streams starting about 9:55 AM in Sept 2026 | `content/site.ts` |
| Church office hours | Tuesday to Thursday, 9:30 AM to 4:00 PM | Bulletin of Jan 12, 2025 | `content/site.ts` |
| Listed hours | Sun 8:30 AM to 2 PM, Tue to Thu 9 AM to 5 PM, Fri 9 AM to 2 PM | Waze and Google (unclaimed listing) | `content/site.ts` |
| Worship style | Contemporary music and traditional hymns, along with praise and worship | FaithStreet, unclaimed, could not be re-read (HTTP 403) | `app/about/what-to-expect/page.tsx` |
| Youth Training Class | 2nd and 3rd Sundays, 10 AM, Sunday School Room | Bulletin of Feb 18, 2024 | `content/schedule.ts`, `content/ministries.ts` |
| Pastoral Bible Study | Tuesdays 7:00 PM by conference call, Thursdays 10:30 AM at FFCC and by conference call | Bulletin of Jan 12, 2025. The FAQ only says Pastoral Bible Studies are open to guests | `content/schedule.ts` |
| Adult Sunday School | Sundays 8:30 AM | Bulletin of Jan 12, 2025 and service times page | `content/schedule.ts` |
| Hour of Power Prayer Line | Wednesdays 7:00 PM by conference call | Same | `content/schedule.ts` |
| Monthly Corporate Prayer | 1st Saturday, 8:30 AM, Main Sanctuary | Service times page only | `content/schedule.ts` |
| New Disciples Orientation | 2nd Saturday, 10 AM, Main Sanctuary | FFCC FAQ | `content/schedule.ts` |
| Google Place ID | `ChIJ-QCgVpPYmoARLONFl94qPrE` | Verified twice: it resolves to 5937 Watt Ave in Google Maps, and it decodes to the same place FFCC embeds on its own Location page | `content/site.ts` |
| Givelify link | Active and accepting gifts on 2026-09-19. Same organization ID as the embed on FFCC's giving page | Givelify, FFCC site | `content/site.ts` |
| YouTube channel | `@faithfellowshipsac` is linked in the utility bar, footer, Watch page and JSON-LD | Strong evidence it is FFCC's, but its About tab shows no address. Set `social.youtube` to `""` to remove it | `content/site.ts` |
| Latest video | Sunday service of September 13, 2026 | Newest video on FFCC's Facebook page at build time. **Update `FB_VIDEO_URL` whenever a newer service should show** | `content/media.ts` |
| Privacy page | Short draft written for the build | Needs church review | `app/privacy/page.tsx` |
| Site URL | `https://faithfellowshiplive.org` | Used for canonical links, sitemap and JSON-LD. Change if the new site launches on another domain | `content/site.ts` |

## Conflicts found (FFCC's own and newest source won)

| Topic | Conflict | What the site uses |
| --- | --- | --- |
| Tuesday Bible Study time | Service times page says 6:45 PM. Bulletin of Jan 12, 2025 says 7:00 PM | 7:00 PM (newer) |
| New Disciples Orientation | FAQ: 2nd Saturday, 10 AM, Main Sanctuary. Bulletin of Jan 12, 2025: a "New Member's Orientation" on Saturday Jan 25 (a 4th Saturday), 10 AM to 12 PM, Joyful Noise Media Center, registration by phone | 2nd Saturday per the FAQ and the brief. Please confirm the current day and room |
| Children's Church ages | Service times page: ages 3 to 15, with a High School Fellowship for ages 16 to 18 in the Annex. Bulletins 2024 and 2025: ages 3 and up, plus a Youth Training Class for teens | Bulletins (dated, newer) |
| Office hours | Google and Waze: Tue to Thu 9 to 5, Fri 9 to 2, Sun 8:30 to 2. Bulletin: office answers Tue to Thu 9:30 AM to 4:00 PM | Both are shown, labeled "Church office" and "Listed hours" |
| Tagline | Website and bulletins: "Embracing One Church, One Mind, One Christ". YouTube banner: "Empowering One Church, One Mind, One Christ". 2016 era: "The Ultimate Worship Experience!" | "Embracing", with The Ultimate Worship Experience! kept as the name of Sunday worship |
| Logo colors | Copper and white on the website, favicon, bulletins and Givelify QR code. Gold and purple on the YouTube and Facebook avatar | Copper. See `docs/brand.md` |
| Leadership | Givelify and the 2024 to 2025 bulletins name Rev. Rosalee G. Charley as Senior Pastor. The history page ends with Dr. Melvin G. Barney (2016). The Observer obituary names no successor | No one is named |
| Sunday schedule | A 2014 listing (Sac Cultural Hub) gives 9:30 / 10:00 / 10:30 | Ignored per the brief |
| Denomination label | Nondenominational (FFCC, Sacramento365, The Word), Evangelical (ChurchFinder), Protestant (IRS category) | Nondenominational |
| Map pin | Google pin 38.6751705, -121.3842416. FFCC's own embed centers on 38.6746757, -121.3830963 (about 110 m apart, same property) | FFCC's own value in JSON-LD. Links use the Place ID |

## Gaps

- **faithfellowshiplive.org is down.** Every page returns HTTP 500 (WordPress critical error) as of 2026-09-19. The church may not know. All wording was taken from Wayback Machine captures dated 2023 to 2025.
- **History stops at 2016.** FFCC's published history ends with the January 2016 installation of Dr. Barney and reads as if that were the present. The page carries a note that the text covers 2000 to 2016. The church should supply the years since, including Pastor Charley's later service.
- **Possible typos in FFCC's published text, kept verbatim.** Statement of Faith, Daily Christian Living: "individuals stumble and of the Church fails from time to time". FAQ, offerings: "can delivered by hand". History: "El Doret, Kenya" (the city is Eldoret). Tell us if the church wants them corrected.
- **Dial-in numbers are not published.** The bulletins print conference call numbers and access codes. The site says to call the office for them, since codes may have changed. Say the word and they can be added to `content/schedule.ts`.
- **People named in bulletins are not on the site.** The 2024 bulletin names the Youth Training Class teacher. Leadership is unconfirmed, so no individual is named anywhere except inside FFCC's own history text.
- **Dated events.** None of FFCC's pages list an upcoming dated event, so `/events` shows the recurring schedule only. Add dated events to `datedEvents` in `content/schedule.ts`.
- **Inreach and Outreach.** `/ministries` carries FFCC's two program descriptions verbatim. The section of that page that names a former pastor was left out.
- **FFCC mobile app.** An app was announced on the old site in 2016. It is not linked because its status is unknown.
- **Blocked sources.** FaithStreet, Yelp, Yellow Pages and Sac Cultural Hub refused automated access (HTTP 403) and were not bypassed.
- **Google Business Profile is unclaimed.** Worth claiming so the church controls its hours and photos.
