// Giving content. Blurb, scripture and fund descriptions are verbatim from
// FFCC's Online Giving page (archived 2025-10-06).

import { site } from "./site";

export const giving = {
  blurb:
    "Your liberal seed enables us to minister the gospel of Jesus Christ at home and abroad. We thank you for your generosity.",
  scripture: {
    text: "“And God is able to make all grace abound toward you, that you, always having all sufficiency in all things, may have an abundance for every good work.”",
    reference: "2 Corinthians 9:8",
  },
  givelify: site.giving.givelify,

  // Ways to give, from FFCC's FAQ and 2024 to 2025 bulletins.
  ways: [
    {
      title: "Online",
      body: "Give through Givelify, FFCC’s online giving page.",
      action: "givelify" as const,
    },
    {
      title: "By mail",
      body: "Mail tithes and offerings to the Church Office at the address below.",
      action: "mail" as const,
    },
    {
      title: "In person",
      body: "Deliver tithes and offerings by hand during a service or at the Church Office.",
      action: null,
    },
    {
      title: "QR code at service",
      body: "Scan the QR code shown on the screen or printed in the bulletin with your phone camera. Follow the prompts to give.",
      action: null,
    },
    {
      title: "Mobile app",
      // CONFIRM the app name the church points members to.
      body: "FFCC also accepts tithes and offerings through its mobile app. Ask the church office which app to use.",
      action: null,
    },
  ],

  // Verbatim fund descriptions from FFCC's Online Giving page.
  funds: [
    {
      name: "Tithe",
      body: "The tithe is the first ten (10%) percent of our income. It is holy to the Lord, is not discretionary, and should not be tampered with. In Leviticus 27:30, the Bible says: “And all the tithe of the land, whether of the seed of the land or of the fruit of the tree, is the Lord’s. It is holy to the Lord.” The tithe does not belong to us. It belongs to the Lord. Any time we neglect to tithe, it is considered “robbery” to God. In Malachi 3:8, the Lord asks, “Will a man rob God? Yet you have robbed Me! But you say, ‘In what way have we robbed You?’ In tithes and offerings.” The tithe should go to the local church where you are a member. If you do not attend any particular church on a regular basis, you can send your tithe to any ministry where you receive spiritual nourishment, including Faith Fellowship Community Church.",
    },
    {
      name: "Sacrificial Offering",
      body: "A sacrificial offering, or general offering, is a contribution that goes beyond the tithe. Sacrificial offerings are presentations that we make to God through the Church, as a means of expressing our gratitude to and love for the Lord. Sacrificial offerings are primarily used to finance the Gospel and minister to the needy. Making contributions, donations, giving, and sowing are all interchangeable terms for sacrificial offerings. It is important to understand that God views our sacrifice as “sowing seed,” and has promised to reward our sowing, indicating, “whatever a man sows, that he will also reap.” Galatians 6:7.",
    },
    {
      name: "Building Fund",
      body: "A building fund offering is an offering that is designated specifically for maintenance and/or improvement of existing property, or for purchase of new property.",
    },
    {
      name: "Other Designated Offering",
      body: "A designated offering is an offering that is assigned for a specific purpose that the Giver has in mind, i.e. Benevolence, Outreach, Christian Education, Youth Ministry, etc.",
    },
  ],

  // IRS data from GuideStar. Flip `approved` to true only after the church says yes.
  ein: { value: "68-0466856", rulingYear: 2003, approved: false },
} as const;
