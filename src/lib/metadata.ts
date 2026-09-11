import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    title === SITE.name
      ? `${SITE.name} | Luxury Lashes, Brows & Makeup in West Hampstead`
      : title;

  return {
    title,
    description,
    keywords: [
      "Ella’s Beauty",
      "lash extensions West Hampstead",
      "brow lamination London",
      "makeup artist West Hampstead",
      "mobile lash technician London",
      ...keywords,
    ],
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
