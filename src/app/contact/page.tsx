import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialLinks } from "@/components/brand/social-links";
import { BookButton } from "@/components/ui/book-button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Visit & contact",
  description:
    "Find Ella’s Beauty at Rush Salon, 186-188 West End Lane, West Hampstead NW6 1SG, or book mobile at your own address. Opening hours, directions, WhatsApp and Instagram.",
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
        description="Salon appointments at Rush Salon, West Hampstead, or mobile at your own address. Book on Fresha for instant confirmation, or message Ella on WhatsApp."
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
              <span className="text-muted">or mobile, at your own address — contact us first</span>
              <br />
              <a className="text-gold-deep" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </address>
            <div className="mt-6">
              <p className="text-[0.62rem] tracking-[0.3em] text-gold-deep uppercase">
                Message Ella
              </p>
              <SocialLinks className="mt-3" showLabels />
            </div>
            <ul className="mt-8 space-y-2 text-sm">
              {SITE.openingHoursCompact.map((item) => (
                <li key={item.day} className="flex justify-between gap-4 border-b border-gold/30 py-2">
                  <span className="text-[0.62rem] tracking-[0.26em] text-muted uppercase">{item.day}</span>
                  <span className="font-serif text-lg">{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <a
                href={SITE.mapsUrl}
                className="inline-flex items-center rounded-full border border-gold px-6 py-3 text-[0.68rem] tracking-[0.3em] text-gold-deep uppercase transition-colors hover:bg-gold hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open maps
              </a>
            </div>
            <div className="gold-frame mt-8">
              <iframe
                title={`Map of ${SITE.name}`}
                src={SITE.mapsEmbed}
                className="h-72 w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="gold-panel rounded-[2rem] p-7 sm:p-10">
            <h2 className="font-serif text-3xl">Write to Ella</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              For bridal trials, group bookings or mobile appointments at your
              own address. Appointments themselves are booked on Fresha —
              WhatsApp is the quickest way to reach Ella.
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
