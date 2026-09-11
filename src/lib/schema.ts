import { SITE } from "@/lib/site";
import { faqs } from "@/lib/faq";
import { serviceCategories } from "@/lib/services";

const address = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: SITE.geo.latitude,
  longitude: SITE.geo.longitude,
};

export function beautySalonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${SITE.url}/#salon`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    image: [`${SITE.url}/opengraph-image`],
    description: SITE.description,
    email: SITE.email,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Card, Fresha",
    address,
    geo,
    hasMap: SITE.mapsUrl,
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "Place", name: "West Hampstead" },
      { "@type": "Place", name: "Beckton" },
      { "@type": "Place", name: "Kilburn" },
    ],
    openingHoursSpecification: SITE.openingHours.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.day,
      opens: item.schema.split(" ")[1].split("-")[0],
      closes: item.schema.split(" ")[1].split("-")[1],
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    founder: {
      "@type": "Person",
      name: "Ella",
      jobTitle: "Lash and brow specialist",
    },
    amenityFeature: SITE.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    makesOffer: serviceCategories.flatMap((category) =>
      category.services.map((service) => ({
        "@type": "Offer",
        url: `${SITE.url}${category.href}`,
        price: service.price,
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": `${SITE.url}/#salon` },
        },
      })),
    ),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.language,
    publisher: { "@id": `${SITE.url}/#salon` },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
