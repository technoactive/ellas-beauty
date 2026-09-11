import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Aftercare",
  description:
    "Lash extension, lash lift, brow lamination and makeup aftercare from Ella’s Beauty in West Hampstead. Keep your results looking expensive.",
  path: "/aftercare",
});

const guides = [
  {
    title: "Eyelash extensions",
    items: [
      "Keep lashes dry for the first 24 hours so the adhesive can cure.",
      "No oil-based removers, saunas or steam on day one.",
      "Brush gently from root to tip each morning with a clean spoolie.",
      "Sleep on your back or use a silk pillowcase if you can.",
      "Book infills at 2–3 weeks. Do not pick or pull shedding extensions.",
    ],
  },
  {
    title: "Lash lift & tint",
    items: [
      "Avoid water, steam and makeup on the lashes for 24 hours.",
      "Skip oil cleansers around the eyes for 48 hours.",
      "Do not use an eyelash curler on a freshly lifted lash.",
      "Tint will soften gradually; a top-up tint is a quick refresh.",
    ],
  },
  {
    title: "Brow lamination & henna",
    items: [
      "Keep brows dry for 24 hours and resist brushing them against the set.",
      "After day one, brush up each morning and set with a clear brow gel if you like.",
      "Henna stains both hair and skin; the skin stain fades first, the hair colour lasts longer.",
      "Avoid retinoids and strong acids on the brow area for a couple of days.",
    ],
  },
  {
    title: "Makeup & skin",
    items: [
      "Bridal and complex makeup is built to last; blot rather than layer powder through the day.",
      "After dermaplaning, use SPF and skip active acids for 48 hours.",
      "Drink water after face sculpting; a little puffiness settling is normal and desirable.",
    ],
  },
];

export default function AftercarePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Aftercare", path: "/aftercare" },
        ])}
      />
      <PageHero
        eyebrow="Aftercare"
        title="The work continues after you leave the chair."
        description="Follow these notes and your set, lift or makeup will last as it was designed to. Ella will also talk you through a personal version at the appointment."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Aftercare", href: "/aftercare" },
        ]}
      />
      <Section className="pt-4">
        <Container className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <article key={guide.title} className="rounded-[1.4rem] gold-border bg-[#fffdf8] p-7">
              <h2 className="font-serif text-3xl">{guide.title}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                {guide.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
