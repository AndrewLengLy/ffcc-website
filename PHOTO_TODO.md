# Photos needed

Last updated 2026-09-19. Real FFCC photos only. No stock, no AI images.

Sources worked through so far: the church's website archive (2011-2024), its YouTube channel, its Givelify page and its Facebook page.

To fill a slot: save the photo in `public/images/church/`, then set that slot's `src` in `content/media.ts` (ministry cards are in `content/ministries.ts`). A slot with `src: null` renders a flat gray block (`#D9D9D9`) at the right aspect ratio with alt text naming the photo needed.

## Open slots (gray blocks)

| # | Page | Slot | Aspect | Ideal shot |
| --- | --- | --- | --- | --- |
| 1 | Home | Join Us (`homeJoinUs`) | 4:3 | Exterior of 5937 Watt Avenue with the entrance and sign visible |
| 2 | Home and /ministries | Children card | 3:2 and 4:3 | Children's Church activity time. Faces only with parent permission |
| 3 | Home and /ministries | Youth card | 3:2 and 4:3 | Teens in the Youth Training Class |
| 4 | Home and /ministries | Adults card | 3:2 and 4:3 | Adults in Bible study or a Koinonia Home Group |
| 5 | /about/our-history | History (`history`) | 16:9 | Archive photo from 2000 to 2003: first services at the North Highlands Community Center or the move into 5937 Watt Avenue |
| 6 | /about/times-directions | Building (`timesDirections`) | 4:3 | The building and parking area as seen from Watt Avenue |
| 7 | /next-steps | Orientation (`nextSteps`) | 4:3 | A New Disciples Orientation session |
| 8 | /about/leadership | Four portrait cards | 4:5 | Portraits of the pastor and ministry leaders, once leadership is confirmed |

**No photo of the outside of the building exists in any FFCC source.** Slots 1 and 6 both need one, and nothing in the church's website archive, YouTube channel or Givelify page shows the exterior. A phone photo taken from the Watt Avenue sidewalk on a clear morning would fill both. Google Street View shows the building but its imagery is Google's and cannot be copied onto the site.

## Slots filled with real FFCC images (replace when better ones arrive)

| Page | Slot | File | Source and note |
| --- | --- | --- | --- |
| Home hero | `homeHero` | `ffcc-worship-wide-2020-11-01.jpg` | Frame from FFCC's Communion & Worship Service of Nov 1, 2020 on their YouTube channel. Wide view of the praise team, the lighted cross and the sanctuary. **1280x720, below the 2400px the hero wants**, so it is upscaled. The hero's dark gradient hides most of the softness. Replace with a real wide photo when one arrives |
| Home Serve | `homeServe` | `ffcc-mens-chorus-2023-09-17.jpg` | Frame from FFCC's Sunday Morning Worship of Sept 17, 2023. The men's chorus in matching shirts ministering in song. Cropped to 4:3 (960x720) |
| /about/what-to-expect | `whatToExpect` | `ffcc-service-congregation.jpg` | **From FFCC's Facebook page.** The congregation seated during a service, with the platform and the media team's camera monitor. At 1536x1152 it is the largest real photo found anywhere. It shows a service, **not** the welcome at the door, so a greeters photo is still wanted |
| /events | `events` | `ffcc-praise-dance.jpg` | **From FFCC's Facebook cover photo.** The praise dance ministry with hands raised. The cover is a three-photo collage with the church's tagline baked across the middle, so this is the left panel cropped above the text: 735x388, and that is all of it that is clean |
| /contact | `rentals` | `ffcc-sanctuary-chairs.jpg` | Cropped from `KeepSanctuaryClean` (2023), a housekeeping notice FFCC published on its own site. The notice text was cropped away, leaving a clean 713x535 view of the sanctuary seating. Small: a proper photo of a room set up for an event is still wanted |
| /about/who-we-are | `whoWeAre` | `ffcc-sanctuary-givelify-cover.png` | The cover photo from FFCC's Givelify page: the congregation standing in worship. Only 625x350, so it is soft on large screens. Ask the church for the original or a new group photo |
| Home and /watch | Video poster | `ffcc-service-2026-09-13-poster.jpg` | 1280x720 frame of the September 13, 2026 service, from the thumbnail on FFCC's YouTube channel. Replace it whenever `FB_VIDEO_URL` changes, or set `VIDEO_POSTER` to `null` for a gray poster |

## Open Graph image

`app/opengraph-image.tsx` builds a 1200x630 image from FFCC's copper with the mark and the church name. Swap in a real photo once a large one exists.

## Where the search has already been

The church's own website archive (2011 to 2024), its YouTube channel and its Givelify page have all been worked through. What is above is everything usable they contain.

- **Website archive (Wayback Machine, 312 archived images).** Only two real photographs in the whole archive: the `KeepSanctuaryClean` notice (used above) and a 1024x768 congregation shot with a "Ministries" title bar and a gold wash baked over the lower two thirds, which leaves too little clean image to crop. Everything else is stock art or text: the large page banners (`Banner-History`, `Banner-Photos`, `Banner-Statement-of-Faith`, `Banner-Order-Worship` and the rest, all 2358 to 2768 px wide) are stock illustrations of clocks, photo piles and silhouettes, and the 2023 announcement slides (`ChurchPicnic`, `VBS-2023`, `HourofPowerPrayer`) are clip art.
- **YouTube channel (30 videos checked).** Around 25 of the 30 thumbnails are pulpit close-ups of Pastor Rosalee Charley. None are used: leadership is unconfirmed, Pastor Charley has since died, and no tribute has been agreed (see `CONTENT_TODO.md`). The four group shots are the ones used above. One further frame, a soloist with the congregation seated behind her (Worship Service of Dec 17, 2023, `Yf53WZLPk-k`), was left out because no slot calls for it.
- **Facebook page (checked 2026-09-19).** Logged out, Facebook shows the cover photo and roughly the newest 45 pictures before the login wall stops it. Almost all of those are Bible-trivia graphics and announcement slides. Two real photographs came out of it, both used above. The cover collage's other two panels were left alone: the middle one has the tagline written straight across it, and the right one is clean only in a 498px strip. **Someone signed in should look at the albums properly** — the page has more than is public, and it is the likeliest place to find the exterior shot, a Children's Church photo and a greeters photo.
- **Not reachable.** The Yelp visitor photo. Yelp blocks automated access.

## Permission

The brief asks the church for permission to use its photos. Everything used above comes from FFCC's own public pages: its website, its YouTube channel and its Givelify page. Three of them show members' faces clearly. Please confirm the church is happy with each one, and that the people shown are happy to appear on the site. Any of them can be pulled in one line by setting that slot's `src` back to `null`.
