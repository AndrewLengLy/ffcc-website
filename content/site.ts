// Core church facts. Edit here and every page updates.
// Items marked CONFIRM are also tracked in CONTENT_TODO.md.

const PLACE_ID = "ChIJ-QCgVpPYmoARLONFl94qPrE";

export const site = {
  name: "Faith Fellowship Community Church",
  shortName: "FFCC",
  familyName: "the Faith Fellowship Family",
  tagline: "Embracing One Church, One Mind, One Christ",
  worshipPhrase: "The Ultimate Worship Experience!",
  type: "Nondenominational church",
  // Production URL. Update when the final domain is set.
  url: "https://faithfellowshiplive.org",

  address: {
    street: "5937 Watt Avenue",
    city: "North Highlands",
    state: "CA",
    zip: "95660",
    // Map center taken from FFCC's own Google Maps embed.
    geo: { lat: 38.6746757, lng: -121.3830963 },
    crossStreets: "Near Watt Avenue and Freedom Park Drive",
    freeways: "Close to I-80 and Business 80",
  },

  phone: { display: "916.339.9156", href: "tel:+19163399156" },
  fax: "916.339.9005",
  email: "info@faithfellowshiplive.org",
  newDisciplesEmail: "newdisciples@faithfellowshiplive.org",

  social: {
    facebook: "https://www.facebook.com/faithfellowshiplive",
    facebookVideos: "https://www.facebook.com/faithfellowshiplive/videos",
    // FFCC's channel. It streamed the Sunday service on 2026-09-13, so it is
    // active. Set to "" to hide the YouTube icon. See docs/sources.md.
    youtube: "https://www.youtube.com/@faithfellowshipsac" as string,
  },

  maps: {
    placeId: PLACE_ID,
    place: `https://www.google.com/maps/search/?api=1&query=Faith%20Fellowship%20Community%20Church%2C%205937%20Watt%20Ave%2C%20North%20Highlands%2C%20CA&query_place_id=${PLACE_ID}`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=Faith%20Fellowship%20Community%20Church%2C%205937%20Watt%20Ave%2C%20North%20Highlands%2C%20CA&destination_place_id=${PLACE_ID}`,
    // Same Google place (CID) that FFCC embeds on its own Location page.
    embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3114.8778290817513!2d-121.3830963!3d38.6746757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad89356a000f9%3A0xb13e2ade9745e32c!2sFaith+Fellowship+Community+Church!5e0!3m2!1sen!2sus",
  },

  giving: {
    givelify:
      "https://www.givelify.com/donate/faith-fellowship-community-church-north-highlands-ca-2j7wy5OTc2NQ==/donation/amount",
  },

  // CONFIRM. Sunday 10:00 AM appears in FFCC's FAQ and in the newest bulletin found (Jan 12, 2025).
  sundayWorship: { day: "Sundays", time: "10:00 AM", place: "Main Sanctuary" },

  // CONFIRM. Office hours as printed in FFCC's Jan 12, 2025 bulletin.
  officeHours: "Tuesday to Thursday, 9:30 AM to 4:00 PM",

  // CONFIRM. Hours shown on third-party map listings (Waze, Yellow Pages).
  listedHours: [
    { days: "Sunday", hours: "8:30 AM to 2:00 PM" },
    { days: "Tuesday to Thursday", hours: "9:00 AM to 5:00 PM" },
    { days: "Friday", hours: "9:00 AM to 2:00 PM" },
  ],

  directions:
    "From I-80 or Business 80, take the Watt Avenue exit and head north on Watt Avenue.",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
