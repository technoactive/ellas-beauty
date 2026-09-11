import { Star } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { reviews, type Review } from "@/lib/reviews";
import { SITE } from "@/lib/site";

function ReviewCard({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  const academy = review.kind === "academy";
  return (
    <figure className="gold-panel flex w-[22rem] shrink-0 flex-col justify-between rounded-3xl p-7 shadow-[0_20px_50px_-30px_rgba(140,106,36,0.5)] sm:w-[24rem]">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-script text-3xl text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex items-center gap-3">
            <span className="text-[0.56rem] tracking-[0.28em] text-gold-deep uppercase">
              {academy ? "Academy praise" : "Client love"}
            </span>
            <span className="flex gap-0.5" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-gold text-gold" aria-hidden />
              ))}
            </span>
          </span>
        </div>
        <blockquote className="mt-4 line-clamp-[9] font-serif text-[1.2rem] leading-[1.5] text-ink">
          “{review.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-gold/50 pt-4 text-[0.62rem] tracking-[0.26em] text-gold-deep uppercase">
        <span>{review.name}</span>
        <span className="text-right text-muted">{review.treatment}</span>
      </figcaption>
    </figure>
  );
}

export function ReviewsPreview() {
  return (
    <Section className="overflow-hidden">
      <Container className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>Client love &amp; academy praise</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
            <span className="gold-text">{SITE.rating}</span> from {SITE.reviewCount}{" "}
            reviews —
            <br />
            <span className="italic">and a reputation for patience.</span>
          </h2>
        </div>
        <p className="text-[0.62rem] tracking-[0.3em] text-gold-deep uppercase lg:col-span-4 lg:text-right">
          Verified on Fresha, Treatwell &amp;{" "}
          <a
            href={SITE.social.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gold/50 pb-0.5 hover:text-ink"
          >
            Google
          </a>
        </p>
      </Container>
      <div className="relative mt-14">
        <Marquee pauseOnHover repeat={2} className="[--duration:110s] [--gap:1.5rem] p-0">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} index={index} review={review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-ivory to-transparent" />
      </div>
    </Section>
  );
}
