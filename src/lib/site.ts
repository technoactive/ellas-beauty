export const SITE = {
  name: "Ella’s Beauty",
  legalName: "Ella’s Beauty London",
  domain: "ellas-beauty.co.uk",
  url: "https://ellas-beauty.co.uk",
  locale: "en_GB",
  language: "en-GB",
  tagline: "Let your eyes do the talking.",
  description:
    "Luxury lashes, brows, makeup and skin treatments in West Hampstead. Bespoke artistry by Ella, with salon and mobile appointments across London.",
  email: "hello@ellas-beauty.co.uk",
  bookingUrl:
    "https://www.fresha.com/en-GB/a/ellas-beauty-london-rush-hair-west-hampstead-186-188-west-end-lane-qq4f1g83?pId=1332797",
  rating: 4.9,
  reviewCount: 79,
  sameAs: [] as string[],
  address: {
    street: "Rush Hair West Hampstead, 186-188 West End Lane",
    locality: "London",
    region: "Greater London",
    postalCode: "NW6 1SG",
    country: "GB",
    countryName: "United Kingdom",
    area: "West Hampstead",
    neighbourhood: "Kilburn",
  },
  geo: {
    latitude: 51.5474,
    longitude: -0.1911,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=186-188%20West%20End%20Lane%20London%20NW6%201SG",
  mapsEmbed:
    "https://www.google.com/maps?q=186-188+West+End+Lane,+London+NW6+1SG&output=embed",
  openingHours: [
    { day: "Monday", hours: "10:00 – 23:00", schema: "Mo 10:00-23:00" },
    { day: "Tuesday", hours: "10:00 – 23:00", schema: "Tu 10:00-23:00" },
    { day: "Wednesday", hours: "10:00 – 23:00", schema: "We 10:00-23:00" },
    { day: "Thursday", hours: "10:00 – 23:00", schema: "Th 10:00-23:00" },
    { day: "Friday", hours: "10:00 – 23:00", schema: "Fr 10:00-23:00" },
    { day: "Saturday", hours: "10:00 – 20:00", schema: "Sa 10:00-20:00" },
    { day: "Sunday", hours: "10:00 – 18:00", schema: "Su 10:00-18:00" },
  ],
  amenities: [
    "Woman-owned",
    "Mobile appointments",
    "Near West Hampstead Thameslink",
    "Parking available",
    "LGBTQ+ welcoming",
    "Kid-friendly",
    "Pet-friendly",
  ],
} as const;

export const IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=2400&q=80",
    alt: "Close-up of expertly applied makeup and defined lashes",
  },
  lashes: {
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80",
    alt: "Lash technician isolating and applying extensions to a relaxed client",
  },
  brows: {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=80",
    alt: "Portrait with full, softly defined brows and natural makeup",
  },
  makeup: {
    src: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=1600&q=80",
    alt: "Makeup artist holding a neutral eyeshadow palette",
  },
  skin: {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
    alt: "Relaxing facial treatment for glowing skin",
  },
  portrait: {
    src: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=80",
    alt: "Portrait of a woman with luminous skin and defined features",
  },
  salon: {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
    alt: "Calm, refined beauty salon interior",
  },
  glam: {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=80",
    alt: "Editorial beauty portrait with glowing skin and soft brows",
  },
  eyes: {
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80",
    alt: "Lash extensions being applied with precision tweezers",
  },
  bridal: {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    alt: "Bridal beauty and makeup preparation",
  },
  gold: {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury makeup edit laid out on marble",
  },
  spa: {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    alt: "Spa facial massage in a calm treatment room",
  },
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Treatments" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit" },
] as const;
