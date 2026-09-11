import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Browse the Ella’s Beauty look book: lashes, brows, makeup and skin in West Hampstead. Book the finish you want on Fresha.",
  path: "/gallery",
});

const gallery = [
  { ...IMAGES.lashes, caption: "Lash application" },
  { ...IMAGES.brows, caption: "Brow definition" },
  { ...IMAGES.glam, caption: "Editorial skin" },
  { ...IMAGES.skin, caption: "Face sculpt ritual" },
  { ...IMAGES.makeup, caption: "Palette work" },
  { ...IMAGES.bridal, caption: "Bridal" },
  { ...IMAGES.gold, caption: "The kit" },
  { ...IMAGES.portrait, caption: "Natural finish" },
  { ...IMAGES.salon, caption: "The studio" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        title="Soft light. Sharp mapping. Quiet luxury."
        description="A taste of the finishes Ella creates — from weightless hybrids to bridal glam. Your set will be designed for your features, not copied from a grid."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
      />
      <Section className="pt-4">
        <Container>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {gallery.map((image, index) => (
              <figure key={image.src} className="group mb-8 break-inside-avoid">
                <div className="gold-frame">
                  <div className="overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={1000}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 flex items-center justify-between px-2 text-[0.6rem] tracking-[0.26em] text-gold-deep uppercase">
                  <span>Plate {String(index + 1).padStart(2, "0")}</span>
                  <span className="text-muted">{image.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
