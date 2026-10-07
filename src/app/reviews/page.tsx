import type { Metadata } from "next";
import { ArrowUpRight, Star } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  academyReviews,
  freshaReviews,
  googleReviews,
  SOURCE_LABEL,
  type Review,
} from "@/lib/reviews";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description: `Read verified Google and Fresha reviews of Ella’s Beauty in West Hampstead, plus praise from Ella’s Beauty Academy students. ${SITE.rating} from ${SITE.reviewCount} ratings for lashes, brows, makeup and skin.`,
  path: "/reviews",
});

function ReviewGrid({ items }: { items: Review[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((review, index) => (
        <figure key={`${review.source}-${index}`} className="gold-panel rounded-[1.6rem] p-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-[0.56rem] tracking-[0.28em] text-gold-deep uppercase">
              {SOURCE_LABEL[review.source]}
              {review.date ? ` · ${review.date}` : ""}
            </span>
          </div>
          <blockquote className="mt-4 font-serif text-[1.35rem] leading-9 text-ink sm:text-2xl">
            “{review.quote}”
          </blockquote>
          <figcaption className="mt-5 text-xs tracking-[0.2em] text-muted uppercase">
            {review.name} · {review.treatment}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function PlatformLink({ platform }: { platform: (typeof SITE.reviewPlatforms)[number] }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-[0.66rem] tracking-[0.28em] text-gold-deep uppercase transition-colors hover:text-ink"
    >
      Read all {platform.count} on {platform.label}
      <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}

export default function ReviewsPage() {
  const [google, fresha] = SITE.reviewPlatforms;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <PageHero
        eyebrow="Reviews"
        title={`${SITE.rating} stars. ${SITE.reviewCount} voices. One specialist.`}
        description={`${google.rating} on Google from ${google.count} reviews and ${fresha.rating} on Fresha from ${fresha.count} — plus the artists Ella has trained. The through-line is care: advice on what suits your eyes, a calm room, and results that last.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />

      <Section className="pt-4">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Google · {google.rating} from {google.count} reviews</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
                From the <span className="gold-text italic">chair</span>.
              </h2>
            </div>
            <PlatformLink platform={google} />
          </div>
          <div className="mt-10">
            <ReviewGrid items={googleReviews} />
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Fresha · {fresha.rating} from {fresha.count} reviews</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
                From the <span className="gold-text italic">booking diary</span>.
              </h2>
            </div>
            <PlatformLink platform={fresha} />
          </div>
          <div className="mt-10">
            <ReviewGrid items={freshaReviews} />
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Eyebrow>Academy praise</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
            From the <span className="gold-text italic">classroom</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
            Ella also trains the next generation of lash and brow artists at the
            Ella’s Beauty Academy. Here is what her students say.
          </p>
          <div className="mt-10">
            <ReviewGrid items={academyReviews} />
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
