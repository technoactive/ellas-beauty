import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/brand/social-links";
import { Butterfly } from "@/components/brand/butterfly";
import { Credentials } from "@/components/home/credentials";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { IMAGES, SITE, WORK } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Ella — award-winning lash, brow & skin specialist",
  description:
    "Meet Ella: over 15 years of hands-on experience and 8+ years fully qualified in luxury lashes, brows, skin and makeup in West Hampstead. Lash Awards Best Lash Tech 2024, Best Brows 2021, BABTAC & CIBTAC Awards 2023.",
  path: "/about",
  keywords: [
    "award winning lash technician London",
    "BABTAC lash artist",
    "Best Lash Tech Lash Awards 2024",
    "West Hampstead beauty specialist",
    "lash academy London",
  ],
});

const work = [
  WORK.russianVolume,
  WORK.browLamination,
  WORK.classicMakeup,
  WORK.lashLift,
  WORK.faceSculpt,
  WORK.wispyLashes,
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
        eyebrow={SITE.founder.headline}
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
                  alt={IMAGES.portrait.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-4 px-2 text-[0.6rem] tracking-[0.26em] text-gold-deep uppercase">
              {IMAGES.portrait.name} — Ella’s Beauty, Rush Salon
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>Meet Ella</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
              Over <span className="gold-text italic">{SITE.founder.yearsHandsOn} years</span>{" "}
              hands-on. {SITE.founder.yearsExperience}+ fully qualified.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-ink-soft">
              <p>{SITE.founder.intro}</p>
              <p>{SITE.founder.promise}</p>
              <p>{SITE.founder.training}</p>
              <p className="text-sm leading-7 text-muted">
                Find Ella at Rush Salon, 186-188 West End Lane, West Hampstead
                NW6 1SG — a two-minute walk from Thameslink — or book a mobile
                appointment anywhere in London.
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
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>My promise to you</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
                Six small vows, <span className="gold-text italic">kept</span> every time.
              </h2>
            </div>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SITE.promises.map((item, index) => (
              <li
                key={item.title}
                className="gold-panel flex gap-5 rounded-[1.75rem] p-6"
                style={{ ["--flutter-duration" as string]: `${2.6 + index * 0.35}s` }}
              >
                <Butterfly variant={index} className="size-20 shrink-0 -my-3" />
                <div>
                  <h3 className="font-serif text-xl leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Credentials className="pt-0" />

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
              <li key={image.src}>
                <Link href={image.href} className="group block">
                  <div className="gold-frame">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 45vw, 30vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <p className="mt-3 flex justify-between px-2 text-[0.6rem] tracking-[0.26em] text-gold-deep uppercase">
                    <span>Plate {String(index + 1).padStart(2, "0")}</span>
                    <span className="text-muted">{image.name}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
