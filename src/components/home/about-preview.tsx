import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BookButton } from "@/components/ui/book-button";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { IMAGES, SITE } from "@/lib/site";

export function AboutPreview() {
  return (
    <Section>
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
        <BlurFade className="lg:col-span-5">
          <figure>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -inset-3 -translate-x-3 translate-y-4 rounded-[2.4rem] border border-gold/70 sm:-translate-x-4"
              />
              <div className="gold-frame">
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                  <Image
                    src={IMAGES.portrait.src}
                    alt={IMAGES.portrait.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <figcaption className="mt-8 flex justify-between border-t border-gold/60 pt-4 text-[0.62rem] tracking-[0.26em] text-gold-deep uppercase">
              <span>No. 02 — {IMAGES.portrait.name}</span>
              <span>Rush Salon, NW6</span>
            </figcaption>
          </figure>
        </BlurFade>

        <BlurFade delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <Eyebrow>{SITE.founder.headline}</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
            Your lash, brow, skin specialist
            <br />
            <span className="gold-text italic">&amp;</span> make-up artist.
          </h2>
          <p className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl leading-relaxed text-ink-soft">
            “{SITE.founder.intro}”
          </p>
          <div className="mt-8 space-y-5 text-[0.95rem] leading-8 text-muted">
            <p>{SITE.founder.promise}</p>
            <p>
              {SITE.founder.training} Prefer to stay home? Mobile appointments
              bring the same standard of work anywhere in London.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {SITE.awards.map((award) => (
              <li
                key={`${award.year}-${award.title}`}
                className="gold-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.6rem] tracking-[0.22em] text-gold-deep uppercase"
              >
                <span className="font-script text-base normal-case tracking-normal">
                  {award.year}
                </span>
                {award.title}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <BookButton />
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.3em] text-gold-deep uppercase"
            >
              Meet Ella
              <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </Link>
          </div>
        </BlurFade>
      </Container>
    </Section>
  );
}
