import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesWheel } from "@/components/home/services-wheel";
import { PromiseWheel } from "@/components/home/promise-wheel";
import { ServicesPreview } from "@/components/home/services-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { Credentials } from "@/components/home/credentials";
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
      <ServicesWheel />
      <PromiseWheel />
      <ServicesPreview />
      <AboutPreview />
      <Credentials className="py-10 sm:py-14" />
      <ReviewsPreview />
      <GalleryPreview />
      <VisitPreview />
      <FinalCta />
    </>
  );
}
