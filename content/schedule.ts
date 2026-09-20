// Recurring schedule. Facts come from FFCC's FAQ page, service times page
// and the newest bulletin found (Jan 12, 2025). Items with confirm: true
// are listed in CONTENT_TODO.md for the church to verify.
//
// Add dated events to `datedEvents` only when they appear on FFCC's own pages.

import { site } from "./site";

// Which days an item lands on, in a form the calendar can compute.
// weekday: 0 = Sunday ... 6 = Saturday.
// "monthly" means the nth occurrence of that weekday in the month, so
// nth: [2, 3] with weekday: 0 is the 2nd and 3rd Sundays.
// "varies" items have no fixed day and are left off the calendar.
export type Recurrence =
  | { kind: "weekly"; weekday: number }
  | { kind: "monthly"; weekday: number; nth: number[] }
  | { kind: "varies" };

export type ScheduleItem = {
  id: string;
  title: string;
  when: string;
  where: string;
  summary: string;
  // Drives the calendar on /events. Must agree with `when`.
  recurrence: Recurrence;
  // Paragraphs shown in the detail modal. Quoted FFCC text is kept verbatim.
  details: string[];
  // Shown as a card on the homepage.
  featured: boolean;
  confirm?: boolean;
  cta?: { label: string; href: string };
};

export const schedule: ScheduleItem[] = [
  {
    id: "sunday-worship",
    recurrence: { kind: "weekly", weekday: 0 },
    title: "Sunday Worship",
    when: "Sundays at 10:00 AM",
    where: "Main Sanctuary",
    summary: "“The Ultimate Worship Experience!” Guests are welcome every Sunday.",
    details: [
      "Sundays at 10:00 AM in the Main Sanctuary at 5937 Watt Avenue.",
      "A call to discipleship takes place at the end of every worship service.",
      "We do not have a dress code at Faith Fellowship. We encourage you to dress comfortably, but ask that your attire is appropriate for worship.",
    ],
    featured: true,
    confirm: true,
    cta: { label: "Times and directions", href: "/about/times-directions" },
  },
  {
    id: "new-disciples-orientation",
    recurrence: { kind: "monthly", weekday: 6, nth: [2] },
    title: "New Disciples Orientation",
    when: "2nd Saturday of each month, 10:00 AM",
    where: "Main Sanctuary",
    summary: "An introduction to Faith Fellowship for new disciples.",
    details: [
      "The purpose of the New Disciples Orientation is to acquaint you with Faith Fellowship, introduce you to what we believe, and prepare you to be dispatched into ministry.",
      "Although completion of the New Disciples Orientation is not required for discipleship, it is a prerequisite to participation in a ministry and to voting in any Church election.",
      "Personalized orientation sessions can be scheduled on an as needed basis.",
      `Call ${site.phone.display} or email ${site.newDisciplesEmail}.`,
    ],
    featured: true,
    confirm: true,
    cta: { label: "See next steps", href: "/next-steps#orientation" },
  },
  {
    id: "childrens-church",
    recurrence: { kind: "monthly", weekday: 0, nth: [2, 3] },
    title: "Children’s Church",
    when: "2nd and 3rd Sundays",
    where: "Main Campus",
    summary: "For children ages 3 and up, during Sunday worship.",
    details: [
      "Children’s Church meets on the 2nd and 3rd Sundays of the month.",
      "It is open to children ages 3 and up. FFCC bulletins mention activity time and snacks.",
    ],
    featured: true,
    cta: { label: "Children’s ministry", href: "/ministries#children" },
  },
  {
    id: "koinonia-home-groups",
    recurrence: { kind: "varies" },
    title: "Koinonia Home Groups",
    when: "Weekdays at various times",
    where: "Various locations",
    summary: "Small groups, also called KHGs, that meet during the week.",
    details: [
      "Koinonia Home Groups (KHGs) are FFCC’s small groups. They meet on weekdays at various times and locations.",
      `Call the church office at ${site.phone.display} to find a group.`,
    ],
    featured: true,
    cta: { label: "Ask about a group", href: "/contact" },
  },
  {
    id: "adult-sunday-school",
    recurrence: { kind: "weekly", weekday: 0 },
    title: "Adult Sunday School",
    when: "Sundays at 8:30 AM",
    where: "Main Sanctuary",
    summary: "A class for adults before Sunday worship.",
    details: ["Adult Sunday School meets every Sunday at 8:30 AM, before the 10:00 AM worship service."],
    featured: false,
    confirm: true,
  },
  {
    id: "youth-training-class",
    recurrence: { kind: "monthly", weekday: 0, nth: [2, 3] },
    title: "Youth Training Class",
    when: "2nd and 3rd Sundays at 10:00 AM",
    where: "Sunday School Room",
    summary: "A class for teenagers on the foundations of spiritual life.",
    details: [
      "The Youth Training Class meets on the 2nd and 3rd Sundays at 10:00 AM in the Sunday School Room.",
      "Teens meet other teens and work through lessons on the basic foundation for spiritual life.",
    ],
    featured: false,
    confirm: true,
  },
  {
    id: "tuesday-bible-study",
    recurrence: { kind: "weekly", weekday: 2 },
    title: "Tuesday Bible Study",
    when: "Tuesdays at 7:00 PM",
    where: "By conference call",
    summary: "An evening Bible study class held by phone.",
    details: [
      "Bible Study Class meets every Tuesday at 7:00 PM by conference call.",
      `Call the church office at ${site.phone.display} for the dial-in number.`,
    ],
    featured: false,
    confirm: true,
  },
  {
    id: "hour-of-power-prayer-line",
    recurrence: { kind: "weekly", weekday: 3 },
    title: "Hour of Power Prayer Line",
    when: "Wednesdays at 7:00 PM",
    where: "By conference call",
    summary: "A weekly hour of prayer held by phone.",
    details: [
      "The Hour of Power Prayer Line meets every Wednesday at 7:00 PM by conference call.",
      `Call the church office at ${site.phone.display} for the dial-in number.`,
    ],
    featured: false,
    confirm: true,
  },
  {
    id: "thursday-bible-study",
    recurrence: { kind: "weekly", weekday: 4 },
    title: "Thursday Morning Bible Study",
    when: "Thursdays at 10:30 AM",
    where: "At FFCC and by conference call",
    summary: "A morning Bible study you can attend in person or by phone.",
    details: [
      "Thursday Morning Bible Study meets every Thursday at 10:30 AM at FFCC and by conference call.",
      `Call the church office at ${site.phone.display} for the dial-in number.`,
    ],
    featured: false,
    confirm: true,
  },
  {
    id: "corporate-prayer",
    recurrence: { kind: "monthly", weekday: 6, nth: [1] },
    title: "Monthly Corporate Prayer",
    when: "1st Saturday of each month, 8:30 AM",
    where: "Main Sanctuary",
    summary: "The church gathers to pray on the first Saturday of the month.",
    details: ["Corporate Prayer meets on the 1st Saturday of every month at 8:30 AM in the Main Sanctuary."],
    featured: false,
    confirm: true,
  },
];

export const featuredSchedule = schedule.filter((s) => s.featured);

export type DatedEvent = ScheduleItem & { date: string };

// None of FFCC's own pages list an upcoming dated event as of 2026-09-19.
export const datedEvents: DatedEvent[] = [];

// Homepage "Grow in Your Faith" tabs.
export const growTabs = {
  classes: [
    {
      id: "new-disciples-orientation",
      title: "New Disciples Orientation",
      meta: "2nd Saturday of each month, 10:00 AM, Main Sanctuary",
      body: "Learn what Faith Fellowship believes and get ready to serve. Personal sessions are available on request.",
    },
    {
      id: "youth-training-class",
      title: "Youth Training Class",
      meta: "2nd and 3rd Sundays, 10:00 AM, Sunday School Room",
      body: "A class for teenagers on the basic foundation for spiritual life.",
    },
    {
      id: "pastoral-bible-study",
      title: "Pastoral Bible Study",
      meta: "Tuesdays at 7:00 PM and Thursdays at 10:30 AM",
      body: "Open to guests. Tuesday meets by conference call. Thursday meets at FFCC and by conference call.",
    },
  ],
  groups: [
    {
      id: "koinonia-home-groups",
      title: "Koinonia Home Groups (KHGs)",
      meta: "Weekdays, various times and locations",
      body: "Small groups that meet in homes during the week. Call the church office to find one near you.",
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Calendar helpers
//
// Everything here works in whole local days. A Date is only ever used for its
// year, month and date, never its time of day, so there is no timezone drift
// between what the server renders and what the visitor's browser shows.

// "YYYY-MM-DD" for a local date, which is the format `DatedEvent.date` uses.
export function toDateKey(date: Date): string {
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${date.getFullYear()}-${m}-${d}`;
}

// Does a recurring item land on this day?
export function occursOn(item: ScheduleItem, date: Date): boolean {
  const r = item.recurrence;
  if (r.kind === "varies") return false;
  if (date.getDay() !== r.weekday) return false;
  if (r.kind === "weekly") return true;
  // Which occurrence of this weekday in the month the date is: days 1-7 are
  // the 1st, 8-14 the 2nd, and so on.
  const nth = Math.floor((date.getDate() - 1) / 7) + 1;
  return r.nth.includes(nth);
}

// Everything happening on one day: recurring items first, then dated events.
export function eventsOn(date: Date): (ScheduleItem | DatedEvent)[] {
  const key = toDateKey(date);
  return [...schedule.filter((item) => occursOn(item, date)), ...datedEvents.filter((e) => e.date === key)];
}

// Items with no fixed day, listed under the calendar so they are not lost.
export const unscheduled = schedule.filter((s) => s.recurrence.kind === "varies");
