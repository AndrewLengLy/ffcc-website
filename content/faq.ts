// FFCC FAQ answers, verbatim from faithfellowshiplive.org/about/faqs/
// (archived 2025-10-06). Do not reword.

export type Faq = { id: string; question: string; answer: string[] };

export const faqs: Faq[] = [
  {
    id: "services",
    question: "When and where are services held?",
    answer: [
      "Sundays at 10:00 AM – “The Ultimate Worship Experience!” – Main Sanctuary",
      "Weekdays at Various Times  – Small Groups (“Koinonia Home Groups” or “KHGs”)  – Various Locations",
    ],
  },
  {
    id: "children",
    question: "Are there accommodations available for children?",
    answer: [
      "Yes. Children’s Church meets on the 2nd and 3rd Sundays of the month.",
    ],
  },
  {
    id: "location",
    question: "Where is Faith Fellowship located?",
    answer: [
      "Faith Fellowship Community Church is located at 5937 Watt Avenue, in the city of North Highlands, near the I-80 and Business-80 freeways. From either of those freeways, just take the Watt Avenue exit, and travel northbound on Watt Avenue. Click here for driving directions.",
    ],
  },
  {
    id: "dress",
    question: "What should I wear?",
    answer: [
      "We do not have a dress code at Faith Fellowship. You will see people dressed in suits, dresses, business casual wear, athletic gear, non-business fashions, and casual attire at our services. We encourage you to dress comfortably, but ask that your attire is appropriate for worship, that hem and top lines maintain modesty, and that those who worship with us avoid wearing tank tops and shorts above the knees.",
    ],
  },
  {
    id: "events",
    question: "What events are scheduled on your campus?",
    answer: [
      "There is always something going on at Faith Fellowship Community Church. Classes, Bible Studies, meetings, rehearsals, small group sessions, conferences, concerts, and other events are scheduled at our Main Facility. Our weekly events are made available online in our weekly bulletins, in the events tab of our website, and on our online calendar.",
    ],
  },
  {
    id: "membership",
    question: "How do I become a member?",
    answer: [
      "We are glad you asked! At Faith Fellowship, we recognize members of the church as disciples, and request that everyone who is interested in becoming a disciple of Faith Fellowship make it known, either by responding to a call to discipleship, which takes place at the end of every worship service, or by contacting the Church Office, at 916.339.9156.",
      "Upon being received as a new disciple of Faith Fellowship Community Church, we ask that you participate in our New Disciples Orientation. The purpose of the New Disciples Orientation is to acquaint you with Faith Fellowship, introduce you to what we believe, and prepare you to be dispatched into ministry. Although completion of the New Disciples Orientation is not required for discipleship, it is a prerequisite to participation in a ministry and to voting in any Church election.",
      "New Disciples Orientation sessions are scheduled for the 2nd Saturday of every month, at 10:00 AM in the Main Sanctuary. In the alternative, personalized orientation sessions can be scheduled to accommodate New Disciples on an as needed basis. For more information, please call 916.339.9156, or e-mail us at newdisciples@faithfellowshiplive.org.",
    ],
  },
  {
    id: "offering",
    question: "Where can I send an offering?",
    answer: [
      "Tithes and offerings can delivered by hand or mailed to the Church Office:",
      "Faith Fellowship Community Church",
      "5937 Watt Avenue",
      "North Highlands, California 95660",
      "Additionally, tithes and offerings can be donated on our website and on our mobile app. Click here for online giving.",
    ],
  },
  {
    id: "rentals",
    question: "Can I rent the Church or a room for an event?",
    answer: [
      "For those individuals, businesses, schools, or other community-related organizations interested in leasing or renting a room, space, or the sanctuary for a class, gathering, meeting, conference, concert, funeral, wedding, or other event, please call the Church Office, at 916.339.9156.",
    ],
  },
];

export const faqById = (id: string) => faqs.find((f) => f.id === id);
