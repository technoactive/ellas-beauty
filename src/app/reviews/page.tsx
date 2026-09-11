import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { reviews } from "@/lib/reviews";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description: `Read verified client reviews of Ella’s Beauty in West Hampstead. ${SITE.rating} from ${SITE.reviewCount} ratings for lashes, brows, makeup and skin.`,
  path: "/reviews",
});

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
        description="Words from Fresha and Treatwell clients. The through-line is care: advice on what suits your eyes, a calm room, and results that last."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />
      <Section className="pt-4">
        <Container className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <figure key={review.name} className="rounded-[1.4rem] gold-border bg-[#fffdf8] p-7">
              <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-2xl leading-9 text-ink">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs tracking-[0.2em] text-muted uppercase">
                {review.name} · {review.treatment}
              </figcaption>
            </figure>
          ))}
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
