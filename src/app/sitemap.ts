import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { serviceCategories } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/services",
    "/about",
    "/gallery",
    "/reviews",
    "/faq",
    "/contact",
    "/book",
    "/aftercare",
    "/privacy",
    "/cookies",
    "/terms",
    ...serviceCategories.map((category) => category.href),
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
  }));
}
