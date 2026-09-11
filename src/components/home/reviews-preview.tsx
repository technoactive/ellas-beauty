import { Marquee } from "@/components/magicui/marquee";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { reviews } from "@/lib/reviews";
import { SITE } from "@/lib/site";

function ReviewCard({
  name,
  quote,
  treatment,
  index,
}: {
  name: string;
  quote: string;
  treatment: string;
  index: number;
}) {
  return (
    <figure className="flex w-[22rem] shrink-0 flex-col justify-between border border-gold/30 bg-ivory p-7">
      <div>
        <span className="font-script text-3xl text-gold-deep">
          0{index + 1}
        </span>
        <blockquote className="mt-4 font-serif text-[1.35rem] leading-[1.5] text-ink">
          “{quote}”
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center justify-between border-t border-gold/25 pt-4 text-[0.62rem] tracking-[0.26em] text-muted uppercase">
        <span>{name}</span>
        <span>{treatment}</span>
      </figcaption>
    </figure>
  );
}

export function ReviewsPreview() {
  return (
    <Section className="overflow-hidden">
      <Container className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>Client love</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
            {SITE.rating} from {SITE.reviewCount} reviews —
            <br />
            <span className="italic">and a reputation for patience.</span>
          </h2>
        </div>
        <p className="text-[0.62rem] tracking-[0.3em] text-muted uppercase lg:col-span-4 lg:text-right">
          Verified on Fresha &amp; Treatwell
        </p>
      </Container>
      <div className="relative mt-14">
        <Marquee pauseOnHover className="[--duration:70s] [--gap:1.5rem] p-0">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} index={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-ivory to-transparent" />
      </div>
    </Section>
  );
}
