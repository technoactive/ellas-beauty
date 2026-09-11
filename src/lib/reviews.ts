export type Review = {
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  /** "client" = treatment review, "academy" = training praise */
  kind: "client" | "academy";
};

export const reviews: Review[] = [
  {
    name: "Sarah Shakery",
    treatment: "Dermaplaning & HD brows",
    quote:
      "I had Dermaplaning and HD Brows with Ella at the Rush Salon in West Hampstead and she is the best! I’ve already booked all my upcoming appointments for the rest of the year. Highly recommend if you live around Hampstead, central London or even anywhere — West Hampstead has amazing travel connections!",
    rating: 5,
    kind: "client",
  },
  {
    name: "Michela Zanelli",
    treatment: "Lashes & brows",
    quote:
      "Ella… simply the best of the best. She doesn’t just do lashes and brows for money — she is passionate and treats your face like it’s her own. I trusted her to tell me what she thought was the best look for me. She explains everything and gives really good aftercare tips. It was relaxing, she makes sure you’re comfortable, offers you a drink, takes her time, does not rush her work. She reignited the queen I am!",
    rating: 5,
    kind: "client",
  },
  {
    name: "Twinkle Sharma",
    treatment: "Lashes & brows",
    quote:
      "Where do I even begin — this girl has magic in her hands. The whole session felt like therapy and her work is excellent. I am so happy with my lashes and brows; I never let anyone touch or experiment with them, but Ella’s expertise just enhanced my look. Best beauty services you get in London!",
    rating: 5,
    kind: "client",
  },
  {
    name: "Abisheha K",
    treatment: "Kim K full set",
    quote:
      "Ella’s Beauty was a great place, the atmosphere was calm and I love how my lashes turned out. She was so lovely too.",
    rating: 5,
    kind: "client",
  },
  {
    name: "Sofia",
    treatment: "Hybrid lashes",
    quote:
      "Ella advised on the style and length that suited my eye shape and natural lash strength. I love the outcome. The glue she used is not irritating at all.",
    rating: 5,
    kind: "client",
  },
  {
    name: "Miranda S",
    treatment: "Lash extensions removal",
    quote:
      "Very understanding and patient. She fixed my lashes after work from another technician.",
    rating: 5,
    kind: "client",
  },
  {
    name: "Jack V",
    treatment: "Brows",
    quote:
      "Brows is lushhh! Ella’s got an amazing eye for detail. Very happy with the result and will be back.",
    rating: 5,
    kind: "client",
  },
  {
    name: "Jasmine R.",
    treatment: "Certified lash artist",
    quote:
      "Training with Ella changed everything. Her attention to detail, real-world insight and unwavering support gave me the confidence to launch my own lash business. It wasn’t just a course — it was the start of a new life.",
    rating: 5,
    kind: "academy",
  },
  {
    name: "Natalie S.",
    treatment: "Brow & skin specialist in training",
    quote:
      "I’ve taken other beauty courses before, but nothing compares to the level of professionalism and care Ella provides. Her knowledge is unmatched, and the atmosphere she creates is so inspiring and empowering.",
    rating: 5,
    kind: "academy",
  },
  {
    name: "Chloe M.",
    treatment: "Lash & brow graduate",
    quote:
      "From the moment I stepped into the Academy, I felt like I was being mentored by a true master of her craft. Ella teaches with passion and precision — and the fact that I’m fully booked weeks in advance now speaks for itself.",
    rating: 5,
    kind: "academy",
  },
];

export const clientReviews = reviews.filter((review) => review.kind === "client");
export const academyReviews = reviews.filter((review) => review.kind === "academy");
