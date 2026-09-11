import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { formatPrice, serviceCategories } from "@/lib/services";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = pageMetadata({
  title: "Treatments",
  description:
    "Full Ella’s Beauty menu: eyelash extensions, lash lift, brow lamination, henna HD brows, makeup, facials and mobile appointments in West Hampstead and London.",
  path: "/services",
  keywords: ["beauty treatments West Hampstead", "lash menu London", "brow menu NW6"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Menu"
        title="A considered menu. No filler treatments."
        description="Every service is priced as listed on Fresha. Patch tests and consultations are complimentary. Mobile visits add a £30 travel fee."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Treatments", href: "/services" },
        ]}
      />
      <Section className="pt-4">
        <Container className="grid gap-8">
          {serviceCategories.map((category) => (
            <article
              key={category.slug}
              className="overflow-hidden rounded-[1.6rem] gold-border bg-[#fffdf8] lg:grid lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[240px]">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-10">
                <p className="text-[0.68rem] tracking-[0.32em] text-gold-deep uppercase">
                  {category.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-4xl">{category.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{category.intro}</p>
                <ul className="mt-6 space-y-3">
                  {category.services.slice(0, 4).map((service) => (
                    <li
                      key={service.id}
                      className="flex items-baseline justify-between gap-4 border-b border-gold/10 pb-3 text-sm"
                    >
                      <span>{service.name}</span>
                      <span className="font-serif text-lg">{formatPrice(service.price)}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.href}
                  className="mt-6 inline-flex text-xs tracking-[0.24em] text-gold-deep uppercase"
                >
                  Full {category.title.toLowerCase()} menu
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
