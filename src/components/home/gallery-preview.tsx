import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { IMAGES } from "@/lib/site";

const tiles = [
  { image: IMAGES.eyes, caption: "Lash application", span: "sm:col-span-5 sm:row-span-2", ratio: "aspect-[4/5]" },
  { image: IMAGES.glam, caption: "Editorial skin", span: "sm:col-span-4", ratio: "aspect-[4/3]" },
  { image: IMAGES.gold, caption: "The kit", span: "sm:col-span-3", ratio: "aspect-[4/3]" },
  { image: IMAGES.makeup, caption: "Palette", span: "sm:col-span-3", ratio: "aspect-[4/3]" },
  { image: IMAGES.bridal, caption: "Bridal", span: "sm:col-span-4", ratio: "aspect-[4/3]" },
];

export function GalleryPreview() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Atelier</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
              The look book.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.3em] text-ink uppercase lg:col-span-5 lg:justify-self-end"
          >
            Full gallery
            <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
          </Link>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-12">
          {tiles.map(({ image, caption, span, ratio }, index) => (
            <li key={image.src} className={`flex min-w-0 ${span}`}>
              <figure className="group flex w-full min-w-0 flex-col">
                <div
                  className={`relative w-full flex-1 overflow-hidden bg-ivory-deep ${ratio} sm:aspect-auto sm:min-h-[260px]`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between text-[0.6rem] tracking-[0.26em] text-muted uppercase">
                  <span>Plate 0{index + 1}</span>
                  <span>{caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
