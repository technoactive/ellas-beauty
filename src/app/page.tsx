import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyElla } from "@/components/home/why-ella";
import { AboutPreview } from "@/components/home/about-preview";
import { ReviewsPreview } from "@/components/home/reviews-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { VisitPreview } from "@/components/home/visit-preview";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyElla />
      <AboutPreview />
      <ReviewsPreview />
      <GalleryPreview />
      <VisitPreview />
      <FinalCta />
    </>
  );
}
