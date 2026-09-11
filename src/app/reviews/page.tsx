import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { academyReviews, clientReviews, type Review } from "@/lib/reviews";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description: `Read verified client reviews of Ella’s Beauty in West Hampstead and praise from Ella’s Beauty Academy students. ${SITE.rating} from ${SITE.reviewCount} ratings for lashes, brows, makeup and skin.`,
  path: "/reviews",
});

function ReviewGrid({ items }: { items: Review[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((review) => (
        <figure key={review.name} className="gold-panel rounded-[1.6rem] p-7">
          <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" />
            ))}
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

export default function ReviewsPage() {
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
        description="Words from Fresha, Treatwell and Google clients — and from the artists Ella has trained. The through-line is care: advice on what suits your eyes, a calm room, and results that last."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />

      <Section className="pt-4">
        <Container>
          <Eyebrow>Client love</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl">
            From the <span className="gold-text italic">chair</span>.
          </h2>
          <div className="mt-10">
            <ReviewGrid items={clientReviews} />
          </div>
          <p className="mt-8 text-sm text-muted">
            Plus many more on{" "}
            <a
              href={SITE.social.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-deep underline decoration-gold/50 underline-offset-4"
            >
              Google
            </a>{" "}
            and{" "}
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-deep underline decoration-gold/50 underline-offset-4"
            >
              Fresha
            </a>
            .
          </p>
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
