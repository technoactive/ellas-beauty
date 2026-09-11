export const SITE = {
  name: "Ella’s Beauty",
  legalName: "Ella’s Beauty London",
  domain: "ellas-beauty.co.uk",
  url: "https://ellas-beauty.co.uk",
  locale: "en_GB",
  language: "en-GB",
  tagline: "Let your eyes do the talking.",
  strapline: "Your lash, brow, skin specialist & make-up artist.",
  description:
    "Award-winning luxury lashes, brows, skin and makeup in West Hampstead. Over 8 years of bespoke artistry by Ella using organic Russian-made products, in salon or mobile at your address.",
  email: "contact@ellas-beauty.co.uk",
  bookingUrl:
    "https://www.fresha.com/en-GB/a/ellas-beauty-london-rush-hair-west-hampstead-186-188-west-end-lane-qq4f1g83?pId=1332797",
  rating: 4.9,
  reviewCount: 79,
  social: {
    instagram: {
      label: "Instagram",
      handle: "@iamellasbeauty",
      url: "https://www.instagram.com/iamellasbeauty",
    },
    whatsapp: {
      label: "WhatsApp",
      handle: "Message Ella",
      url: "https://wa.me/message/DYHVAGLHIMPIM1",
    },
    google: {
      label: "Google",
      handle: "Ella’s Beauty on Google",
      url: "https://www.google.com/maps/search/?api=1&query=Ella%E2%80%99s%20Beauty%20Rush%20Hair%20West%20Hampstead%20186-188%20West%20End%20Lane%20NW6%201SG",
    },
  },
  sameAs: [
    "https://www.instagram.com/iamellasbeauty",
    "https://www.fresha.com/en-GB/a/ellas-beauty-london-rush-hair-west-hampstead-186-188-west-end-lane-qq4f1g83",
  ],
  founder: {
    name: "Ella",
    role: "Lash, brow & skin specialist and make-up artist",
    yearsExperience: 8,
    intro:
      "My name is Ella and I specialise in luxury lash, brow, skin and makeup services using the highest-quality organic Russian-made products — for over 8 years.",
    training:
      "I trained at the Beauty Academy, then developed my craft through 4 further courses and 6 masterclasses.",
    promise:
      "Whether you are looking for a bold new look or a subtle enhancement, I bring precision, artistry and luxury to every appointment.",
    products: "Highest-quality organic Russian-made products",
    coursesCompleted: 4,
    masterclassesCompleted: 6,
  },
  awards: [
    { year: "2019", title: "Health & Beauty Awards", detail: "Winner" },
    { year: "2021", title: "Health & Beauty Awards", detail: "Winner" },
    { year: "2022", title: "Innovative Lash Creator of the Year", detail: "Winner" },
    { year: "2023", title: "BABTAC & CIBTAC Awards", detail: "Winner" },
  ],
  policies: [
    "Arriving more than 15 minutes late will result in the appointment being cancelled.",
    "All clients must arrive with clean lashes and no makeup or mascara on.",
    "Infills require a minimum of 50% of lashes remaining and must be booked within 1–3 weeks of your last appointment.",
    "Infills are not carried out on another technician’s work — a removal and a new set are required.",
    "Please do not wear contact lenses during your appointment.",
    "Please give 48 hours’ notice if you wish to cancel or reschedule.",
    "For mobile appointments at your own address, please contact us first.",
  ],
  locationNote: "Rush Salon, 186-188 West End Lane, NW6 1SG — or mobile, at your own address.",
  address: {
    street: "Rush Salon, 186-188 West End Lane",
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
    { day: "Monday", hours: "10:00 – 22:00", schema: "Mo 10:00-22:00" },
    { day: "Tuesday", hours: "10:00 – 22:00", schema: "Tu 10:00-22:00" },
    { day: "Wednesday", hours: "10:00 – 22:00", schema: "We 10:00-22:00" },
    { day: "Thursday", hours: "10:00 – 22:00", schema: "Th 10:00-22:00" },
    { day: "Friday", hours: "10:00 – 22:00", schema: "Fr 10:00-22:00" },
    { day: "Saturday", hours: "10:00 – 20:00", schema: "Sa 10:00-20:00" },
    { day: "Sunday", hours: "12:00 – 18:00", schema: "Su 12:00-18:00" },
  ],
  openingHoursCompact: [
    { day: "Mon – Fri", hours: "10am – 10pm" },
    { day: "Saturday", hours: "10am – 8pm" },
    { day: "Sunday", hours: "12pm – 6pm" },
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
