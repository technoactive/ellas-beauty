import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: `How ${SITE.name} collects and uses personal information in line with UK GDPR.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="This policy explains what we collect, why, and how you can ask us about it. It is written for a UK audience under UK GDPR."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy", href: "/privacy" },
        ]}
      />
      <Section className="pt-4">
        <Container className="prose-legal max-w-3xl space-y-6 text-sm leading-7 text-ink-soft">
          <p>Last updated: 11 September 2026. Controller: {SITE.legalName}, {SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode}. Email: {SITE.email}.</p>
          <h2 className="font-serif text-2xl text-ink">What we collect</h2>
          <p>When you use this website we may process technical data such as IP address, browser type and pages viewed (if analytics is enabled with your consent). When you email us or submit the contact form, we process your name, email address and message. Appointments booked on Fresha are processed by Fresha under their own privacy notice.</p>
          <h2 className="font-serif text-2xl text-ink">Why we process it</h2>
          <p>To respond to enquiries, provide beauty services, meet legal obligations, and — only with consent — understand how the site is used. The lawful bases are contract, legitimate interests (running a small studio) and consent for non-essential cookies.</p>
          <h2 className="font-serif text-2xl text-ink">Sharing</h2>
          <p>We do not sell your data. Booking, payments and reminders are handled by Fresha. Email may be processed by your mail provider when you write to us. Hosting providers process logs as needed to keep the site available.</p>
          <h2 className="font-serif text-2xl text-ink">Retention & your rights</h2>
          <p>Enquiry emails are kept only as long as needed to complete the conversation and any follow-up appointment. You may request access, correction, deletion, restriction or portability, and you may complain to the ICO at ico.org.uk. To exercise rights, email {SITE.email}.</p>
        </Container>
      </Section>
    </>
  );
}
