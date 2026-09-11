import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { BookButton } from "@/components/ui/book-button";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms & conditions",
  description: `Appointment terms and studio policies for ${SITE.name}: lateness, lash infills, cancellations, mobile appointments and website terms.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms & conditions", path: "/terms" },
        ])}
      />
      <PageHero
        eyebrow="Terms"
        title="Terms & conditions."
        description="A few simple policies keep every appointment calm, on time and safe for your natural lashes. Please read them before you book."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Terms & conditions", href: "/terms" },
        ]}
      />

      <Section className="pt-4">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Appointments</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.02]">
              Studio <span className="gold-text italic">policies</span>.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              These apply to every booking, whether at Rush Salon in West
              Hampstead or a mobile appointment at your own address.
            </p>
            <div className="mt-8">
              <BookButton />
            </div>
          </div>
          <ol className="grid gap-4 lg:col-span-8">
            {SITE.policies.map((policy, index) => (
              <li
                key={policy}
                className="gold-panel flex items-start gap-5 rounded-3xl p-6"
              >
                <span className="gold-text shrink-0 font-script text-3xl leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.95rem] leading-7 text-ink-soft">{policy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-ink-soft">
          <Eyebrow>Website terms</Eyebrow>
          <p>
            The website is provided by {SITE.legalName} for information and to
            help you book. Content is for general guidance and does not replace
            a consultation. Prices match the live Fresha menu at the time of
            writing and may change.
          </p>
          <p>
            Appointments, payments and refunds are handled through the Fresha
            checkout shown when you book, alongside the studio policies above.
          </p>
          <p>
            You must disclose relevant allergies, eye conditions, pregnancy and
            medications. Patch tests are recommended for new tint, lift,
            lamination and extension clients.
          </p>
          <p>
            Photographs on this site may include licensed stock used to
            illustrate atmosphere and finishes; they are not always images of
            Ella’s clients. All website design and original copy are reserved.
          </p>
          <p>
            Governing law: England and Wales. Contact: {SITE.email} or{" "}
            <a
              href={SITE.social.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-deep underline decoration-gold/50 underline-offset-4"
            >
              WhatsApp
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
