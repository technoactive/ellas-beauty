import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { BookButton } from "@/components/ui/book-button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { formatPrice, serviceCategories } from "@/lib/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Book an appointment",
  description:
    "Book Ella’s Beauty on Fresha for lashes, brows, makeup and skin in West Hampstead. Instant confirmation, evening hours, mobile add-on available.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Book", path: "/book" },
        ])}
      />
      <PageHero
        eyebrow="Reserve"
        title="Book in a minute. Confirmed instantly."
        description="The live diary lives on Fresha. Choose your treatment, add a complimentary patch test if you are new, and pick a time that fits — including late evenings."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Book", href: "/book" },
        ]}
      />
      <Section className="pt-4">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/60 bg-ink p-8 text-[#fffaf0] sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,103,0.35),transparent_65%)]"
            />
            <h2 className="relative font-serif text-4xl">Before you tap book</h2>
            <ol className="relative mt-6 space-y-4 text-sm leading-7 text-[#f3eadc]/85">
              {SITE.policies.map((policy, index) => (
                <li key={policy} className="flex gap-4">
                  <span className="gold-text shrink-0 font-script text-2xl leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{policy}</span>
                </li>
              ))}
            </ol>
            <div className="relative mt-8 flex flex-wrap items-center gap-4">
              <BookButton>Open Fresha diary</BookButton>
              <a
                href={SITE.social.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-gold/60 px-5 py-3 text-[0.66rem] tracking-[0.3em] text-gold-light uppercase transition-colors hover:bg-gold/15"
              >
                WhatsApp for mobile
              </a>
            </div>
            <p className="relative mt-6 text-xs tracking-wide text-[#f3eadc]/60">
              You will leave this site for Fresha, where payments and reminders
              are handled securely. Full{" "}
              <Link href="/terms" className="underline decoration-gold/50 underline-offset-4">
                terms &amp; conditions
              </Link>
              .
            </p>
          </div>
          <div className="gold-panel rounded-[2rem] p-8">
            <h2 className="font-serif text-3xl">Popular starting points</h2>
            <ul className="mt-6 space-y-4">
              {serviceCategories
                .flatMap((category) =>
                  category.services
                    .filter((service) => service.popular)
                    .map((service) => ({ ...service, category: category.title })),
                )
                .map((service) => (
                  <li
                    key={service.id}
                    className="flex items-center justify-between gap-4 border-b border-gold/30 pb-4"
                  >
                    <div>
                      <p className="font-serif text-xl">{service.name}</p>
                      <p className="text-xs tracking-[0.16em] text-muted uppercase">
                        {service.category} · {service.duration}
                      </p>
                    </div>
                    <p className="font-serif text-2xl">{formatPrice(service.price)}</p>
                  </li>
                ))}
            </ul>
            <a
              href={SITE.bookingUrl}
              className="mt-8 inline-flex text-xs tracking-[0.24em] text-gold-deep uppercase"
              target="_blank"
              rel="noopener noreferrer"
            >
              See every time slot
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
