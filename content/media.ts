// Video and photo slots.
//
// VIDEO: paste the link to FFCC's newest Facebook video between the quotes.
// Example: "https://www.facebook.com/faithfellowshiplive/videos/1234567890/"
// While this is empty every player shows a gray 16:9 block that links to
// FFCC's Facebook videos page.
// Current value: FFCC's Sunday service of September 13, 2026, the newest
// video on their Facebook page when the site was built (2026-09-19).
export const FB_VIDEO_URL: string = "https://www.facebook.com/faithfellowshiplive/videos/1417968073768014/";

// Optional poster for the video player. Must be a real FFCC image saved in
// public/images/church/. Leave null for a gray poster.
// Current value: a frame of the same September 13, 2026 service, taken from
// the thumbnail on FFCC's YouTube channel.
export const VIDEO_POSTER: string | null = "/images/church/ffcc-service-2026-09-13-poster.jpg";

// PHOTOS: real FFCC photos only. Save the file in public/images/church/ and
// set `src` to its path (for example "/images/church/sanctuary.jpg").
// A slot with src: null renders a flat gray block (#D9D9D9) with alt text
// naming the photo needed. Every open slot is listed in PHOTO_TODO.md.
export type PhotoSlot = {
  src: string | null;
  alt: string;
  needed: string;
};

// Keeps the slot names for autocomplete while typing every slot as a PhotoSlot.
const defineSlots = <T extends Record<string, PhotoSlot>>(slots: T): Record<keyof T, PhotoSlot> => slots;

export const photos = defineSlots({
  homeHero: {
    // Frame from FFCC's own Communion & Worship Service of November 1, 2020 on
    // their YouTube channel. Only 1280x720, so it is upscaled behind the hero's
    // dark gradient. Replace with a 2400px original when the church sends one.
    src: "/images/church/ffcc-worship-wide-2020-11-01.jpg",
    alt: "The praise team leading worship on the platform of the FFCC Main Sanctuary beneath the lighted cross",
    needed: "Still wanted: a wide shot of Sunday worship in the Main Sanctuary, horizontal, 2400px wide or larger",
  },
  homeJoinUs: {
    src: null,
    alt: "Photo needed: the front of the FFCC building at 5937 Watt Avenue",
    needed: "Exterior of the building with the entrance and sign visible",
  },
  homeServe: {
    // Frame from FFCC's Sunday Morning Worship of September 17, 2023 on their
    // YouTube channel: the men's chorus in matching shirts ministering in song.
    src: "/images/church/ffcc-mens-chorus-2023-09-17.jpg",
    alt: "The FFCC men’s chorus in matching shirts ministering in song at the pulpit",
    needed: "Still wanted: volunteers serving, such as ushers or greeters or an outreach event",
  },
  whatToExpect: {
    // From FFCC's own Facebook page. The clearest picture of what a Sunday
    // actually looks like: the congregation seated, the platform, and the
    // media team's camera monitor. 1536x1152, the largest real photo found.
    src: "/images/church/ffcc-service-congregation.jpg",
    alt: "The FFCC congregation seated in the Main Sanctuary during a service, with the media team’s camera monitor in the foreground",
    needed: "Still wanted: greeters welcoming guests at the entrance on a Sunday",
  },
  whoWeAre: {
    // Cover image from FFCC's Givelify page (625x350). Small, so a larger
    // original is requested in PHOTO_TODO.md.
    src: "/images/church/ffcc-sanctuary-givelify-cover.png",
    alt: "The FFCC congregation standing in worship in the Main Sanctuary",
    needed: "A larger original of this sanctuary photo, or a new group photo of the congregation",
  },
  history: {
    src: null,
    alt: "Photo needed: a historic photo from FFCC’s early years",
    needed: "Archive photo from 2000 to 2003, such as the first services or the move into 5937 Watt Avenue",
  },
  timesDirections: {
    src: null,
    alt: "Photo needed: the FFCC building and parking area seen from Watt Avenue",
    needed: "Street view of the building that helps a first-time guest find the entrance",
  },
  nextSteps: {
    src: null,
    alt: "Photo needed: a New Disciples Orientation session at FFCC",
    needed: "New disciples in an orientation session",
  },
  events: {
    // Left panel of FFCC's own Facebook cover collage, cropped away from the
    // tagline text baked across the middle of it. The praise dance ministry.
    src: "/images/church/ffcc-praise-dance.jpg",
    alt: "The FFCC praise dance ministry with hands raised on the sanctuary platform",
    needed: "Still wanted: a photo from a dated church event, such as the Church Picnic or Vacation Bible School",
  },
  rentals: {
    // Cropped from a housekeeping notice FFCC published on its own site in 2023
    // (KeepSanctuaryClean). The notice text was cropped away, leaving a clean
    // 713x535 view of the sanctuary seating. Small, so a better one is wanted.
    src: "/images/church/ffcc-sanctuary-chairs.jpg",
    alt: "Rows of purple chairs set up in the FFCC Main Sanctuary",
    needed: "Still wanted: a larger photo of the sanctuary or a meeting room set up for an event",
  },
});
