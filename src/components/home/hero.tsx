import Image from "next/image";
import { Star } from "lucide-react";
import { BookButton } from "@/components/ui/book-button";
import { Container } from "@/components/ui/section";
import { IMAGES, SITE } from "@/lib/site";

const strip = [
  "Classic & hybrid lashes",
  "Russian volume",
  "Brow lamination",
  "Henna HD brows",
  "Bridal makeup",
  "Face sculpt",
  "Lash lift",
  "Dermaplaning",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[76px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] size-[42rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,103,0.28),transparent_65%)] blur-2xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-24 select-none font-script text-[11rem] leading-none text-gold/20 sm:text-[18rem] lg:text-[24rem]"
      >
        Ella
      </span>

      <Container className="relative pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold" aria-hidden />
              <p className="text-[0.66rem] tracking-[0.42em] text-gold-deep uppercase">
                West Hampstead · London
              </p>
            </div>

            <h1 className="mt-8 font-serif text-[clamp(2.75rem,6.2vw,5.75rem)] leading-[0.92] tracking-[-0.02em] text-ink">
              Lashes, brows
              <br />
              <span className="font-script text-[0.7em] leading-none text-gold">
                &amp;
              </span>{" "}
              skin, <span className="gold-text italic font-normal">composed</span>
              <br />
              for you.
            </h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end lg:max-w-2xl">
              <p className="max-w-md text-base leading-8 text-ink-soft">
                {SITE.tagline} Bespoke extensions, brow architecture, makeup
                and facial sculpting by Ella — in salon, in Beckton, or at
                your home.
              </p>
              <div className="flex flex-col items-start gap-3">
                <BookButton />
                <p className="flex items-center gap-2 text-xs tracking-wide text-muted">
                  <Star className="size-3.5 fill-gold text-gold" aria-hidden />
                  {SITE.rating} · {SITE.reviewCount} verified reviews
                </p>
              </div>
            </div>
          </div>

          <figure className="relative lg:col-span-5 lg:pl-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <span
                aria-hidden
                className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2.4rem] border border-gold/70"
              />
              <div className="gold-frame">
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                  <Image
                    src={IMAGES.hero.src}
                    alt={IMAGES.hero.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-[center_30%]"
                  />
                </div>
              </div>
            </div>
            <figcaption className="mt-8 flex items-start justify-between gap-6 border-t border-gold/60 pt-4 text-[0.66rem] tracking-[0.24em] text-gold-deep uppercase">
              <span>No. 01 — The studio edit</span>
              <span className="text-right">
                Rush Hair, 186-188
                <br />
                West End Lane
              </span>
            </figcaption>
          </figure>
        </div>
      </Container>

      <div className="border-y border-gold/50 bg-linear-to-r from-transparent via-gold-light/30 to-transparent">
        <div className="flex overflow-hidden [--duration:60s] [--gap:0px] [gap:var(--gap)]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="animate-marquee flex shrink-0 items-center py-4"
            >
              {strip.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-8 pl-8 font-serif text-lg italic text-ink-soft"
                >
                  {item}
                  <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
