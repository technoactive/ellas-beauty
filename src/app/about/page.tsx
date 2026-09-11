import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Ella",
  description:
    "Meet Ella, the lash and brow specialist behind Ella’s Beauty in West Hampstead. Precision extensions, honest advice, salon and mobile appointments across London.",
  path: "/about",
});

const principles = [
  {
    title: "Mapped, never mass-produced",
    body: "Lash styles are chosen for your eye shape and natural lash strength. If a trend will damage your lashes, Ella will say so.",
  },
  {
    title: "Lightness over drama for drama’s sake",
    body: "Fans are handmade to stay weightless. Isolation is non-negotiable. Retention comes from technique, not from overloading.",
  },
  {
    title: "Hospitality, not a conveyor belt",
    body: "The room is calm. Appointments are not stacked to the minute. You are talked through aftercare before you leave.",
  },
  {
    title: "Beauty that travels",
    body: "West Hampstead studio, Beckton, or your home. The standard does not change with the postcode.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="A one-woman atelier for eyes, brows and skin."
        description="Ella’s Beauty exists to make you look like yourself, only more awake. Woman-owned, detail-led, and built around clients who notice the difference."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <Section className="pt-4">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="gold-frame">
            <div className="relative overflow-hidden">
              <Image
                src={IMAGES.salon.src}
                alt={IMAGES.salon.alt}
                width={1000}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 text-base leading-8 text-ink-soft">
            <p>
              The studio sits inside Rush Hair West Hampstead on West End Lane —
              a two-minute walk from Thameslink, with evening hours that suit
              real London diaries. Ella also works in Beckton and offers a mobile
              service for clients who would rather stay home.
            </p>
            <p>
              Reviews mention the same things again and again: patience, an eye
              for detail, glue that does not irritate, and advice on length that
              actually suits the eye. That is the standard this website was built
              to match.
            </p>
            <p>
              Treatments span Classic to Mega Volume lashes, brow lamination and
              henna HD brows, classic through bridal makeup, and non-surgical
              face sculpting. A complimentary consultation and patch test are
              always available.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-[#fffdf8]">
        <Container className="grid gap-6 sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item.title} className="rounded-[1.4rem] gold-border p-7">
              <h2 className="font-serif text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
