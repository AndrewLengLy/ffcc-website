import type { Metadata } from "next";
import { site } from "@/content/site";

export const SITE_TITLE =
  "Faith Fellowship Community Church | Nondenominational Church in North Highlands, CA";

export const SITE_DESCRIPTION =
  "Faith Fellowship Community Church is a nondenominational church at 5937 Watt Avenue in North Highlands, CA. Join us Sundays at 10:00 AM.";

// Search engines stay out until launch. Set ALLOW_INDEXING=true in the Vercel
// project (Production) once the church approves the content and the domain is live.
export const ALLOW_INDEXING = process.env.ALLOW_INDEXING === "true";

type PageMetaInput = { title: string; description: string; path: string };

// Per-page metadata with a canonical URL and matching Open Graph fields.
export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
    },
  };
}

// JSON-LD Church schema. Service times and opening hours stay out until the
// church confirms them (see CONTENT_TODO.md).
export function churchJsonLd() {
  const sameAs: string[] = [site.social.facebook];
  if (site.social.youtube) sameAs.push(site.social.youtube);

  return {
    "@context": "https://schema.org",
    "@type": "Church",
    "@id": `${site.url}/#church`,
    name: site.name,
    alternateName: site.shortName,
    slogan: site.tagline,
    url: site.url,
    telephone: "+1-916-339-9156",
    faxNumber: "+1-916-339-9005",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    hasMap: site.maps.place,
    sameAs,
  };
}
