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
  IMAGES.lashes,
  IMAGES.eyes,
  IMAGES.glam,
  IMAGES.skin,
  IMAGES.makeup,
  IMAGES.bridal,
  IMAGES.portrait,
  IMAGES.salon,
  IMAGES.spa,
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
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((image) => (
              <figure key={image.src} className="mb-4 break-inside-avoid">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  className="h-auto w-full rounded-2xl object-cover"
                />
                <figcaption className="sr-only">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
