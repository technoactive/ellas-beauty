export type Service = {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  popular?: boolean;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  href: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "lashes",
    title: "Lashes",
    eyebrow: "Signature artistry",
    summary:
      "Classic, hybrid, volume and statement sets, mapped to your eye shape and natural lash health.",
    seoTitle: "Eyelash Extensions & Lash Lift West Hampstead | Ella’s Beauty",
    seoDescription:
      "Bespoke eyelash extensions in West Hampstead: Classic, Hybrid, Russian Volume, Kim K, Mega Volume and Kendall sets, plus lash lift and tint. Book with Ella.",
    intro:
      "Every set is designed around your eye shape, lifestyle and natural lash strength. Ella isolates each lash, chooses diameter with care, and never overloads — so the finish looks expensive, feels light, and lasts.",
    image:
      "/images/work/russian-volume.jpg",
    imageAlt: "Russian volume lash extensions by Ella’s Beauty — dense, fluffy, dark set",
    href: "/services/lashes",
    services: [
      {
        id: "lash-lift",
        name: "Lash lift",
        duration: "1 hour",
        price: 50,
        description:
          "A keratin-style lift that opens the eyes with a mascara-like curl — no extensions required.",
        popular: true,
      },
      {
        id: "lash-tint",
        name: "Lash tint",
        duration: "15 mins",
        price: 10,
        description:
          "Soft definition for fair or blonde lashes. Beautiful alone or with a lift.",
      },
      {
        id: "classic-hybrid-full",
        name: "Classic / Hybrid full set",
        duration: "1 hour 30 mins",
        price: 80,
        description:
          "The everyday luxury set. Classic for a mascara finish, hybrid for extra texture and fullness.",
        popular: true,
      },
      {
        id: "classic-hybrid-infill",
        name: "Classic / Hybrid infill",
        duration: "1 hour",
        price: 65,
        description:
          "Refresh your set at 2–3 weeks to keep the line even, light and healthy.",
      },
      {
        id: "russian-full",
        name: "Russian Volume full set",
        duration: "1 hour 30 mins",
        price: 100,
        description:
          "Handmade ultra-fine fans for a fluffy, glamorous finish that still feels weightless.",
        popular: true,
      },
      {
        id: "russian-infill",
        name: "Russian Volume infill",
        duration: "1 hour",
        price: 85,
        description: "Maintain volume density and shape as natural lashes cycle.",
      },
      {
        id: "kimk-full",
        name: "Kim K full set",
        duration: "1 hour 30 mins",
        price: 90,
        description:
          "Spiky, textured clusters mixed through a hybrid base — editorial and camera-ready.",
      },
      {
        id: "kimk-infill",
        name: "Kim K infill",
        duration: "1 hour",
        price: 75,
        description: "Restore the spike-and-soft contrast as the set grows out.",
      },
      {
        id: "mega-full",
        name: "Mega Volume full set",
        duration: "1 hour 40 mins",
        price: 120,
        description:
          "Maximum drama with the lightest possible fans. For clients who want a dark, full lash line.",
      },
      {
        id: "mega-infill",
        name: "Mega Volume infill",
        duration: "1 hour",
        price: 105,
        description: "Keep mega volume plush without weighing natural lashes.",
      },
      {
        id: "kendall-full",
        name: "Kendall full set",
        duration: "1 hour 30 mins",
        price: 120,
        description:
          "Elongated, cat-eye mapping for a lifted, model-like silhouette.",
      },
      {
        id: "kendall-infill",
        name: "Kendall infill",
        duration: "1 hour",
        price: 105,
        description: "Preserve the outer-corner length and fox-eye line.",
      },
    ],
  },
  {
    slug: "brows",
    title: "Brows",
    eyebrow: "Architecture for the face",
    summary:
      "Shaping, lamination, tint and henna HD brows — designed to frame your features, not fight them.",
    seoTitle: "Brow Lamination, Henna & Shaping West Hampstead | Ella’s Beauty",
    seoDescription:
      "Brow lamination, tint, shaping and HD henna brows in West Hampstead. Precision work by Ella, tailored to your face shape and skin tone.",
    intro:
      "Brows are architecture. Ella studies your bone structure, hair growth and skin tone, then sculpts a shape that looks like you — only more polished. From a 20-minute tidy to a full lamination, every finish is considered.",
    image:
      "/images/work/brow-lamination.jpg",
    imageAlt: "Brow lamination by Ella’s Beauty — brushed-up, glossy, perfectly shaped brow",
    href: "/services/brows",
    services: [
      {
        id: "brow-shape",
        name: "Brow shaping / tidy",
        duration: "20 mins",
        price: 20,
        description:
          "A precise clean-up that restores the line without over-thinning.",
      },
      {
        id: "brow-lamination",
        name: "Brow lamination",
        duration: "1 hour",
        price: 50,
        description:
          "Hairs are softened, brushed and set for a fuller, fluffy, salon-groomed brow that lasts weeks.",
        popular: true,
      },
      {
        id: "brow-tint",
        name: "Brow tint",
        duration: "30 mins",
        price: 20,
        description:
          "Custom-mixed colour for depth and definition, matched to your hair and skin.",
      },
      {
        id: "henna-dark",
        name: "HD Brows — henna (dark skin)",
        duration: "1 hour",
        price: 35,
        description:
          "Henna stain plus shape for rich, long-wear definition on deeper skin tones.",
      },
      {
        id: "henna-medium",
        name: "HD Brows — henna (medium skin)",
        duration: "40 mins",
        price: 35,
        description:
          "Balanced henna colour and sculpting for medium complexions.",
      },
      {
        id: "henna-fair",
        name: "HD Brows — henna (fair skin)",
        duration: "30 mins",
        price: 35,
        description:
          "Soft, natural henna definition that never looks harsh on fair skin.",
      },
    ],
  },
  {
    slug: "makeup",
    title: "Makeup",
    eyebrow: "From everyday to bridal",
    summary:
      "Classic, complex Arabic glam and full bridal makeup — camera-ready, skin-like and built to last.",
    seoTitle: "Makeup Artist West Hampstead | Bridal & Glam | Ella’s Beauty",
    seoDescription:
      "Classic, Arabic glam and bridal makeup in West Hampstead and mobile across London. Strip lashes available. Book Ella for events, weddings and editorial looks.",
    intro:
      "Makeup here is never mask-like. Ella builds from skin, sculpts the eye, and finishes with the exact level of drama you asked for — whether that is a polished daytime face or full bridal complex makeup.",
    image:
      "/images/work/complex-makeup.jpg",
    imageAlt: "Complex Arabic-style make-up by Ella’s Beauty — sculpted eye, sharp liner and glossy lip",
    href: "/services/makeup",
    services: [
      {
        id: "classic-makeup",
        name: "Classic makeup",
        duration: "1 hour",
        price: 80,
        description:
          "Elevated everyday glam: luminous skin, defined eyes, and a finish that photographs beautifully.",
        popular: true,
      },
      {
        id: "arabic-makeup",
        name: "Complex / Arabic makeup",
        duration: "1 hour 20 mins",
        price: 120,
        description:
          "Full glam with sculpted eyes, precision liner and richer pigment — made for evenings and events.",
      },
      {
        id: "bridal-makeup",
        name: "Bridal complex makeup",
        duration: "1 hour 40 mins",
        price: 200,
        description:
          "Wedding-day artistry designed to last through vows, photographs and dancing. A trial is recommended.",
        popular: true,
      },
      {
        id: "strip-lashes",
        name: "Fake lashes / strip lashes",
        duration: "20 mins",
        price: 20,
        description:
          "A refined strip-lash finish as a standalone or add-on to makeup.",
      },
    ],
  },
  {
    slug: "skin",
    title: "Skin",
    eyebrow: "Sculpt, glow, restore",
    summary:
      "Non-surgical face sculpting, dermaplaning and a deep-relax ritual for skin that looks rested, not overdone.",
    seoTitle: "Facials & Non-Surgical Face Sculpt West Hampstead | Ella’s Beauty",
    seoDescription:
      "Signature non-surgical face sculpt, dermaplaning and relaxing facial rituals in West Hampstead. Glow without downtime. Book with Ella’s Beauty.",
    intro:
      "Treatments are chosen to lift, smooth and brighten — never to leave you red and overworked. Whether you have an hour or thirty minutes, the result is skin that looks like good sleep and good light.",
    image:
      "/images/work/face-sculpt.jpg",
    imageAlt: "Non-surgical face sculpt before and after at Ella’s Beauty — lifted, glowing skin",
    href: "/services/skin",
    services: [
      {
        id: "signature-sculpt",
        name: "Signature non-surgical face sculpt",
        duration: "1 hour",
        price: 75,
        description:
          "A full ritual of lift, contour and glow — lymphatic movement, sculpting massage and skin polish.",
        popular: true,
      },
      {
        id: "express-sculpt",
        name: "Express non-surgical face sculpt",
        duration: "30 mins",
        price: 55,
        description:
          "A focused lift for events, photographs or a midweek reset.",
      },
      {
        id: "relax-ritual",
        name: "Deep relax face ritual",
        duration: "40 mins",
        price: 60,
        description:
          "Slow, calming facial work to ease tension in the jaw, temples and brow.",
      },
      {
        id: "dermaplaning",
        name: "Dermaplaning",
        duration: "1 hour",
        price: 70,
        description:
          "Physical exfoliation that sweeps away peach fuzz and dull cells for makeup that sits like silk.",
      },
    ],
  },
  {
    slug: "mobile",
    title: "Mobile & studio",
    eyebrow: "West Hampstead · or your own address",
    summary:
      "See Ella at Rush Salon in West Hampstead, or book a mobile appointment at your own address. Patch tests and consultations are complimentary.",
    seoTitle: "Mobile Lash & Beauty Appointments London | Ella’s Beauty",
    seoDescription:
      "Salon appointments in West Hampstead plus mobile lash, brow, makeup and skin treatments at your own address across London. Complimentary consultation and patch test.",
    intro:
      "Luxury should travel. Ella offers a complimentary consultation and patch test, then meets you in salon or at your own address. Mobile visits carry a travel fee so the treatment itself stays unhurried and precise — please contact us first to arrange one.",
    image:
      "/images/work/deep-relax-ritual.jpg",
    imageAlt: "Deep relax face ritual at Ella’s Beauty — client resting with red roses",
    href: "/services/mobile",
    services: [
      {
        id: "consultation",
        name: "Consultation",
        duration: "15 mins",
        price: 0,
        description:
          "A no-obligation chat about lash style, brow shape, skin or makeup — including what will suit your natural lashes.",
      },
      {
        id: "patch-test",
        name: "Patch test",
        duration: "15 mins",
        price: 0,
        description:
          "Recommended 24–48 hours before tint, lift, lamination or extensions if you are new to the treatment.",
      },
      {
        id: "mobile",
        name: "Mobile service",
        duration: "1 hour 30 mins",
        price: 30,
        description:
          "Travel add-on for appointments at your own address. Treatment prices are in addition. Please contact Ella first to confirm your area and timing.",
        popular: true,
      },
    ],
  },
];

export function getCategory(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}

export function formatPrice(price: number) {
  if (price === 0) return "Complimentary";
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({ ...service, category })),
);
