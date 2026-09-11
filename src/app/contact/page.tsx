import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { BookButton } from "@/components/ui/book-button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Visit & contact",
  description:
    "Find Ella’s Beauty at Rush Hair West Hampstead, 186-188 West End Lane, NW6 1SG. Opening hours, directions, mobile appointments and contact.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Visit", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Visit"
        title="West End Lane, two minutes from Thameslink."
        description="Salon appointments inside Rush Hair West Hampstead, plus Beckton and mobile London. Book on Fresha for instant confirmation."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Visit", href: "/contact" },
        ]}
      />
      <Section className="pt-4">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">Studio</h2>
            <address className="mt-4 not-italic leading-7 text-ink-soft">
              {SITE.address.street}
              <br />
              {SITE.address.locality} {SITE.address.postalCode}
              <br />
              <a className="text-gold-deep" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </address>
            <ul className="mt-8 space-y-2 text-sm">
              {SITE.openingHours.map((item) => (
                <li key={item.day} className="flex justify-between gap-4 border-b border-gold/10 py-2">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <a
                href={SITE.mapsUrl}
                className="inline-flex items-center rounded-full border border-gold/35 px-6 py-3 text-sm tracking-[0.18em] uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open maps
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.4rem]">
              <iframe
                title={`Map of ${SITE.name}`}
                src={SITE.mapsEmbed}
                className="h-72 w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-[1.4rem] gold-border bg-[#fffdf8] p-7 sm:p-10">
            <h2 className="font-serif text-3xl">Write to Ella</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              For bridal trials, group bookings or mobile coverage questions.
              Appointments themselves are booked on Fresha.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
