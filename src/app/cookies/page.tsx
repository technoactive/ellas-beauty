import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Cookie policy",
  description: `Cookie use on ${SITE.domain}: essential cookies by default, optional analytics only with consent.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie policy"
        description="This site is built to work with essential cookies only. Anything extra waits for your choice."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Cookies", href: "/cookies" },
        ]}
      />
      <Section className="pt-4">
        <Container className="max-w-3xl space-y-6 text-sm leading-7 text-ink-soft">
          <p>
            Essential cookies remember your cookie choice so we do not ask on every visit. They are stored locally in your browser as <code>ellas-beauty-cookie-consent</code>.
          </p>
          <p>
            If you accept additional cookies, we may later enable privacy-friendly analytics. We will not set advertising cookies. You can change your mind by clearing site data for {SITE.domain}.
          </p>
          <p>
            Booking takes place on fresha.com, which sets its own cookies under Fresha’s policies. Embedded Google Maps on the visit page is provided by Google and may set cookies according to Google’s terms.
          </p>
        </Container>
      </Section>
    </>
  );
}
