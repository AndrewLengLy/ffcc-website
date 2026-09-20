import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { ALLOW_INDEXING } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!ALLOW_INDEXING) return { rules: [{ userAgent: "*", disallow: "/" }] };

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
