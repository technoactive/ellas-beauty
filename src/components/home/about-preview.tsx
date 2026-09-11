import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BookButton } from "@/components/ui/book-button";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { IMAGES } from "@/lib/site";

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
              <span>No. 02 — The specialist</span>
              <span>Est. West Hampstead</span>
            </figcaption>
          </figure>
        </BlurFade>

        <BlurFade delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <Eyebrow>The specialist</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
            Ella, your lash
            <br />
            <span className="gold-text italic">&amp;</span> brow specialist.
          </h2>
          <p className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl leading-relaxed text-ink-soft">
            “Enhancing natural beauty should feel empowering — you should
            still look like you, only more awake.”
          </p>
          <div className="mt-8 space-y-5 text-[0.95rem] leading-8 text-muted">
            <p>
              Clients come back because Ella is honest about what will suit
              their eye shape and natural lash strength. Sets are mapped,
              isolated and kept light. Glue is chosen with sensitive eyes in
              mind. The room is calm; the finish is considered.
            </p>
            <p>
              Prefer to stay home? Mobile appointments travel across London,
              including Beckton, so the same standard of work meets you there.
            </p>
          </div>
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
