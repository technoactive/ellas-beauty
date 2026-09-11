import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Patch tests, lash aftercare, mobile appointments, bridal makeup and how to book Ella’s Beauty in West Hampstead.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqJsonLd()} />
      <PageHero
        eyebrow="Questions"
        title="Everything you might ask before you lie back."
        description="Straight answers on patch tests, retention, mobile visits and how booking works on Fresha."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <Section className="pt-4">
        <Container className="max-w-3xl">
          <dl className="space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-[1.2rem] gold-border bg-[#fffdf8] p-6">
                <dt className="font-serif text-2xl">{item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-muted">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
