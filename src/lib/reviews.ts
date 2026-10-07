export type ReviewSource = "google" | "fresha" | "treatwell" | "academy";

export type Review = {
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  /** "client" = treatment review, "academy" = training praise */
  kind: "client" | "academy";
  /** Where the words were published. */
  source: ReviewSource;
  /** Month the review was left, when known. */
  date?: string;
};

export const SOURCE_LABEL: Record<ReviewSource, string> = {
  google: "Google review",
  fresha: "Fresha review",
  treatwell: "Treatwell review",
  academy: "Academy praise",
};

/**
 * Client reviews are quoted from Ella’s Google Business Profile (5.0 · 89)
 * and Fresha (4.9 · 82). Google does not expose reviewer names in our source,
 * so those are credited as verified Google clients.
 */
export const reviews: Review[] = [
  // ——— Google ———
  {
    name: "Verified Google client",
    treatment: "Lash extensions & brow lamination",
    quote:
      "Ella is THE BEST! She is extremely professional, calm, quick and a very relaxing experience. Ella is very precise and informative and really listens to the look I wanted to achieve — and it’s just perfect. It’s the best experience I have had for my lash extensions and brow lamination.",
    rating: 5,
    kind: "client",
    source: "google",
    date: "February 2026",
  },
  {
    name: "Verified Google client",
    treatment: "Brow lamination",
    quote:
      "The best salon in London. I had my eyebrows laminated here recently and I couldn’t ask for a better outcome. Due to my work as an actress I was scared the eyebrows would look fake, however they turned out really natural and exactly the way I wanted. I will definitely be back — not only for the eyebrows.",
    rating: 5,
    kind: "client",
    source: "google",
    date: "February 2026",
  },
  {
    name: "Verified Google client",
    treatment: "Lash lift & tint",
    quote:
      "Had the best lash lift and tint on my natural lashes — I call it the open-eye effect. I’m literally obsessed. Ella was amazing: super professional, a lovely soul, and did a great job. I’m so happy with the result.",
    rating: 5,
    kind: "client",
    source: "google",
    date: "February 2026",
  },
  {
    name: "Verified Google client",
    treatment: "Dermaplaning",
    quote:
      "I had a dermaplaning treatment at Ella’s Beauty and I couldn’t be happier with the results. My skin looks incredibly glowy, smooth and fresh, and I can honestly see a big difference. Very professional, very gentle, and they use top products which makes the whole treatment feel even more premium.",
    rating: 5,
    kind: "client",
    source: "google",
    date: "February 2026",
  },
  {
    name: "Verified Google client",
    treatment: "Brow lamination",
    quote:
      "The whole experience was amazing from start to finish. The specialist was very professional, gentle, and clearly knew exactly what she was doing. She took the time to shape my brows perfectly according to my face, and the result looks so natural and beautiful. My brows have never looked this full and neat — I’ve already received so many compliments!",
    rating: 5,
    kind: "client",
    source: "google",
    date: "February 2026",
  },
  {
    name: "Verified Google client",
    treatment: "Lash lift & tint",
    quote:
      "I got my first ever lash lift and tint at Ella’s and I am beyond happy with it. Ella was super kind and explained the process step by step before we started. The results are fantastic — I will be back!",
    rating: 5,
    kind: "client",
    source: "google",
    date: "March 2026",
  },
  {
    name: "Verified Google client",
    treatment: "Brows — salon & mobile",
    quote:
      "I always do my brows with Ella, either at the salon in West Hampstead or mobile at my home in Kensington when I cannot make it there, and she is the best! Highly recommend.",
    rating: 5,
    kind: "client",
    source: "google",
    date: "December 2025",
  },
  {
    name: "Verified Google client",
    treatment: "Lash extensions",
    quote:
      "Professional service. Ella was so lovely and my eyelashes look great.",
    rating: 5,
    kind: "client",
    source: "google",
    date: "March 2026",
  },
  {
    name: "Sarah Shakery",
    treatment: "Dermaplaning & HD brows",
    quote:
      "I had Dermaplaning and HD Brows with Ella at the Rush Salon in West Hampstead and she is the best! I’ve already booked all my upcoming appointments for the rest of the year. Highly recommend if you live around Hampstead, central London or even anywhere — West Hampstead has amazing travel connections!",
    rating: 5,
    kind: "client",
    source: "google",
  },
  {
    name: "Michela Zanelli",
    treatment: "Lashes & brows",
    quote:
      "Ella… simply the best of the best. She doesn’t just do lashes and brows for money — she is passionate and treats your face like it’s her own. I trusted her to tell me what she thought was the best look for me. She explains everything and gives really good aftercare tips. It was relaxing, she makes sure you’re comfortable, offers you a drink, takes her time, does not rush her work. She reignited the queen I am!",
    rating: 5,
    kind: "client",
    source: "google",
  },
  {
    name: "Twinkle Sharma",
    treatment: "Lashes & brows",
    quote:
      "Where do I even begin — this girl has magic in her hands. The whole session felt like therapy and her work is excellent. I am so happy with my lashes and brows; I never let anyone touch or experiment with them, but Ella’s expertise just enhanced my look. Best beauty services you get in London!",
    rating: 5,
    kind: "client",
    source: "google",
  },

  // ——— Fresha ———
  {
    name: "Balsam M",
    treatment: "2 services with Ella",
    quote:
      "Amazing once again! Ella has such a warm aura and relaxing vibe. I thoroughly enjoyed my treatment as I always do and will definitely be coming back for more.",
    rating: 5,
    kind: "client",
    source: "fresha",
  },
  {
    name: "Kristiana K",
    treatment: "Lashes",
    quote:
      "Always a lovely experience with Ella! My lashes look great every time.",
    rating: 5,
    kind: "client",
    source: "fresha",
  },
  {
    name: "Abisheha K",
    treatment: "Kim K full set",
    quote:
      "Ella’s Beauty was a great place, the atmosphere was calm and I love how my lashes turned out. She was so lovely too.",
    rating: 5,
    kind: "client",
    source: "fresha",
  },
  {
    name: "Christy Z",
    treatment: "3 services with Ella",
    quote: "Great services and Ella is such a great human being!",
    rating: 5,
    kind: "client",
    source: "fresha",
  },
  {
    name: "Marwa J",
    treatment: "Brow shaping",
    quote: "Ella was so lovely and my brows look amazing!",
    rating: 5,
    kind: "client",
    source: "fresha",
  },
  {
    name: "Jack V",
    treatment: "Brows",
    quote:
      "Brows is lushhh! Ella’s got an amazing eye for detail. Very happy with the result and will be back.",
    rating: 5,
    kind: "client",
    source: "fresha",
  },

  // ——— Treatwell ———
  {
    name: "Sofia",
    treatment: "Hybrid lashes",
    quote:
      "Ella advised on the style and length that suited my eye shape and natural lash strength. I love the outcome. The glue she used is not irritating at all.",
    rating: 5,
    kind: "client",
    source: "treatwell",
  },

  // ——— Academy ———
  {
    name: "Jasmine R.",
    treatment: "Certified lash artist",
    quote:
      "Training with Ella changed everything. Her attention to detail, real-world insight and unwavering support gave me the confidence to launch my own lash business. It wasn’t just a course — it was the start of a new life.",
    rating: 5,
    kind: "academy",
    source: "academy",
  },
  {
    name: "Natalie S.",
    treatment: "Brow & skin specialist in training",
    quote:
      "I’ve taken other beauty courses before, but nothing compares to the level of professionalism and care Ella provides. Her knowledge is unmatched, and the atmosphere she creates is so inspiring and empowering.",
    rating: 5,
    kind: "academy",
    source: "academy",
  },
  {
    name: "Chloe M.",
    treatment: "Lash & brow graduate",
    quote:
      "From the moment I stepped into the Academy, I felt like I was being mentored by a true master of her craft. Ella teaches with passion and precision — and the fact that I’m fully booked weeks in advance now speaks for itself.",
    rating: 5,
    kind: "academy",
    source: "academy",
  },
];

export const clientReviews = reviews.filter((review) => review.kind === "client");
export const academyReviews = reviews.filter((review) => review.kind === "academy");
export const googleReviews = reviews.filter((review) => review.source === "google");
export const freshaReviews = reviews.filter((review) => review.source === "fresha");

/** Homepage marquee: alternate Google and Fresha voices, then academy. */
export const featuredReviews: Review[] = (() => {
  const out: Review[] = [];
  const g = [...googleReviews];
  const f = [...freshaReviews];
  while (g.length || f.length) {
    const a = g.shift();
    const b = f.shift();
    if (a) out.push(a);
    if (b) out.push(b);
  }
  return [...out, ...academyReviews];
})();
