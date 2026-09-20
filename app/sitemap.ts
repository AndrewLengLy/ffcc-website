import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allRoutes } from "@/content/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return allRoutes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/events" || path === "/watch" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/privacy" ? 0.2 : 0.7,
  }));
}
