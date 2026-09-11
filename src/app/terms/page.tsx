import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of use",
  description: `Website terms for ${SITE.name}, including booking via Fresha and treatment information.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        description="These terms cover use of this website. Treatments are contracted when you book and pay via Fresha."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Terms", href: "/terms" },
        ]}
      />
      <Section className="pt-4">
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-ink-soft">
          <p>
            The website is provided by {SITE.legalName} for information and to help you book. Content is for general guidance and does not replace a consultation. Prices match the live Fresha menu at the time of writing and may change.
          </p>
          <p>
            Appointments, cancellations, payments and refunds are governed by the Fresha checkout terms shown when you book. Please arrive on time; late arrivals may mean a shortened treatment.
          </p>
          <p>
            You must disclose relevant allergies, eye conditions, pregnancy and medications. Patch tests are recommended for new tint, lift, lamination and extension clients.
          </p>
          <p>
            Photographs on this site include licensed stock used to illustrate atmosphere and finishes; they are not always images of Ella’s clients. All website design and original copy are reserved.
          </p>
          <p>Governing law: England and Wales. Contact: {SITE.email}.</p>
        </Container>
      </Section>
    </>
  );
}
