import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import { ALLOW_INDEXING, SITE_DESCRIPTION, SITE_TITLE, churchJsonLd } from "@/lib/seo";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrackClicks } from "@/components/layout/TrackClicks";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: SITE_TITLE, template: `%s | ${site.name}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  robots: ALLOW_INDEXING ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#1c1815" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds "js-motion" to this element before React hydrates.
    <html lang="en" className={`${poppins.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Marks the document before first paint so reveal states only apply when JavaScript runs. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-motion')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-5 focus:py-3 focus:font-semibold focus:text-ink focus:shadow-modal"
        >
          Skip to main content
        </a>
        <UtilityBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <TrackClicks />
        {/* The analytics script only exists on Vercel. Skipping it elsewhere avoids a 404 in local production runs. */}
        {process.env.VERCEL ? <Analytics /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd()).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
