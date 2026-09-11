import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/brand/social-links";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { IMAGES, SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Ella — award-winning lash, brow & skin specialist",
  description:
    "Meet Ella: over 8 years of luxury lash, brow, skin and makeup artistry in West Hampstead using organic Russian-made products. Health & Beauty Awards winner 2019 & 2021, Innovative Lash Creator of the Year 2022, BABTAC & CIBTAC Awards 2023.",
  path: "/about",
  keywords: [
    "award winning lash technician London",
    "BABTAC lash artist",
    "Innovative Lash Creator of the Year",
    "West Hampstead beauty specialist",
  ],
});

const principles = [
  {
    title: "Mapped, never mass-produced",
    body: "Lash styles are chosen for your eye shape and natural lash strength. If a trend will damage your lashes, Ella will say so.",
  },
  {
    title: "Organic, Russian-made products",
    body: "Only the highest-quality organic Russian-made lashes, adhesives and brow products — chosen for retention, comfort and sensitive eyes.",
  },
  {
    title: "Hospitality, not a conveyor belt",
    body: "The room is calm. Appointments are not stacked to the minute. You are talked through aftercare before you leave.",
  },
  {
    title: "Beauty that travels",
    body: "Rush Salon in West Hampstead, or mobile at your own address. The standard does not change with the postcode.",
  },
];

const work = [
  IMAGES.lashes,
  IMAGES.brows,
  IMAGES.glam,
  IMAGES.makeup,
  IMAGES.skin,
  IMAGES.bridal,
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
        title="Your lash, brow, skin specialist & make-up artist."
        description={`${SITE.founder.intro} ${SITE.founder.promise}`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <Section className="pt-4">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="gold-frame">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={IMAGES.portrait.src}
                  alt="Ella, lash, brow and skin specialist at Ella’s Beauty"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 px-2 text-[0.6rem] tracking-[0.26em] text-gold-deep uppercase">
              Ella — founder, Ella’s Beauty
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>Meet Ella</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
              Over <span className="gold-text italic">8 years</span> of
              precision, artistry and luxury.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-ink-soft">
              <p>{SITE.founder.intro}</p>
              <p>{SITE.founder.training}</p>
              <p>{SITE.founder.promise}</p>
              <p className="text-sm leading-7 text-muted">
                Find Ella at Rush Salon, 186-188 West End Lane, West Hampstead
                NW6 1SG — a two-minute walk from Thameslink — or book a mobile
                appointment at your own address.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <SocialLinks showLabels />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/60 bg-ink px-6 py-14 text-ivory sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,103,0.35),transparent_65%)]"
            />
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" aria-hidden />
                  <p className="text-[0.66rem] tracking-[0.42em] text-gold-light uppercase">
                    Recognition
                  </p>
                </div>
                <h2 className="mt-6 font-serif text-4xl leading-[1.02] text-ivory sm:text-5xl">
                  Award-winning,
                  <br />
                  <span className="gold-text italic">four times over.</span>
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/70">
                  Industry awards for lash artistry and beauty excellence, plus
                  formal training at the Beauty Academy, {SITE.founder.coursesCompleted}{" "}
                  further courses and {SITE.founder.masterclassesCompleted} masterclasses.
                </p>
              </div>
              <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {SITE.awards.map((award) => (
                  <li
                    key={`${award.year}-${award.title}`}
                    className="rounded-3xl border border-gold/40 bg-white/[0.04] p-6 transition-colors hover:border-gold/80"
                  >
                    <span className="gold-text font-script text-4xl">{award.year}</span>
                    <h3 className="mt-3 font-serif text-xl text-ivory">{award.title}</h3>
                    <p className="mt-1 text-[0.62rem] tracking-[0.3em] text-gold-light uppercase">
                      {award.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>The work</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
                Bold new look or <span className="gold-text italic">subtle</span> enhancement.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.3em] text-gold-deep uppercase lg:col-span-5 lg:justify-self-end"
            >
              Full gallery
              <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {work.map((image, index) => (
              <li key={`${image.src}-${index}`}>
                <div className="gold-frame">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-6 sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item.title} className="gold-panel rounded-[1.6rem] p-7">
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
