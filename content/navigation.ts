export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about/who-we-are",
    children: [
      { label: "What to Expect", href: "/about/what-to-expect" },
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "What We Believe", href: "/about/what-we-believe" },
      { label: "Our History", href: "/about/our-history" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Times and Directions", href: "/about/times-directions" },
    ],
  },
  { label: "Next Steps", href: "/next-steps" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Watch", href: "/watch" },
];

export const utilityNav = [
  { label: "Give", href: "/give" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerQuickLinks = [
  { label: "What to Expect", href: "/about/what-to-expect" },
  { label: "What We Believe", href: "/about/what-we-believe" },
  { label: "Next Steps", href: "/next-steps" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact" },
] as const;

// Every indexable route, used by app/sitemap.ts.
export const allRoutes = [
  "/",
  "/about/what-to-expect",
  "/about/who-we-are",
  "/about/what-we-believe",
  "/about/our-history",
  "/about/leadership",
  "/about/times-directions",
  "/next-steps",
  "/ministries",
  "/events",
  "/watch",
  "/give",
  "/contact",
  "/privacy",
] as const;
