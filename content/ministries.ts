// Ministry cards for the homepage and /ministries.
// Programs seen only on third-party listings (nursery, adult education,
// community service, health ministry) stay off the site until the church
// confirms them. See CONTENT_TODO.md.

import type { PhotoSlot } from "./media";

export type Ministry = {
  id: string;
  name: string;
  summary: string;
  details: string[];
  photo: PhotoSlot;
  confirm?: boolean;
};

export const ministries: Ministry[] = [
  {
    id: "children",
    name: "Children",
    summary: "Children’s Church meets on the 2nd and 3rd Sundays for ages 3 and up.",
    details: [
      "Children’s Church meets on the 2nd and 3rd Sundays of the month, during the 10:00 AM worship service.",
      "It is open to children ages 3 and up. FFCC bulletins mention activity time and snacks.",
    ],
    photo: {
      src: null,
      alt: "Photo needed: children taking part in Children’s Church at FFCC",
      needed: "Children’s Church activity time, faces visible only with parent permission",
    },
  },
  {
    id: "youth",
    name: "Youth",
    summary: "The Youth Training Class meets on the 2nd and 3rd Sundays at 10:00 AM.",
    details: [
      "Teenagers meet in the Sunday School Room on the 2nd and 3rd Sundays at 10:00 AM.",
      "The class covers the basic foundation for spiritual life. It is a place to meet other teens.",
    ],
    photo: {
      src: null,
      alt: "Photo needed: teenagers in the Youth Training Class at FFCC",
      needed: "Teens in the Sunday School Room during the Youth Training Class",
    },
    confirm: true,
  },
  {
    id: "adults",
    name: "Adults",
    summary: "Adults meet for Sunday School and Bible study. Koinonia Home Groups meet during the week.",
    details: [
      "Adult Sunday School meets every Sunday at 8:30 AM.",
      "Bible study meets on Tuesdays at 7:00 PM by conference call and on Thursdays at 10:30 AM at FFCC and by conference call.",
      "Koinonia Home Groups (KHGs) meet on weekdays at various times and locations.",
    ],
    photo: {
      src: null,
      alt: "Photo needed: adults in a Bible study or home group at FFCC",
      needed: "Adults gathered for Bible study or a Koinonia Home Group",
    },
    confirm: true,
  },
];
