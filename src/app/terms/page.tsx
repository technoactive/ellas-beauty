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
  description: `Booking terms for ${SITE.name}: deposits, rescheduling and cancellations, late arrivals, lash infills, patch testing, aftercare, minors, photography and your statutory rights.`,
  path: "/terms",
});

const slug = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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
        description={SITE.termsIntro}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Terms & conditions", href: "/terms" },
        ]}
      />

      <Section className="pt-4">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <Eyebrow>Contents</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-[1.02]">
                Sixteen <span className="gold-text italic">clear</span> clauses.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                These apply to every booking, whether at Rush Salon in West
                Hampstead or a mobile appointment anywhere in London.
              </p>
              <ol className="mt-6 hidden columns-2 gap-x-6 text-[0.62rem] tracking-[0.2em] text-gold-deep uppercase lg:block">
                {SITE.terms.map((section, index) => (
                  <li key={section.title} className="mb-2 break-inside-avoid">
                    <a href={`#${slug(section.title)}`} className="hover:text-ink">
                      {String(index + 1).padStart(2, "0")} · {section.title}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <BookButton />
              </div>
            </div>
          </aside>

          <ol className="grid gap-4 lg:col-span-8">
            {SITE.terms.map((section, index) => (
              <li
                key={section.title}
                id={slug(section.title)}
                className="gold-panel scroll-mt-[calc(var(--header-h)+1rem)] rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-baseline gap-5">
                  <span className="gold-text shrink-0 font-script text-3xl leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl leading-tight">{section.title}</h3>
                </div>
                <div className="mt-4 space-y-3 pl-0 sm:pl-[3.4rem]">
                  {section.clauses.map((clause) => (
                    <p key={clause} className="text-[0.95rem] leading-7 text-ink-soft">
                      {clause}
                    </p>
                  ))}
                </div>
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
            Appointments, deposits and payments are handled through the Fresha
            checkout shown when you book, alongside the terms above.
          </p>
          <p>
            Photographs on this site are Ella’s own work, shared with client
            permission. All website design and original copy are reserved.
          </p>
          <p>
            Governing law: England and Wales. Contact:{" "}
            <a href={`mailto:${SITE.email}`} className="text-gold-deep">
              {SITE.email}
            </a>
            ,{" "}
            <a href={SITE.phone.href} className="text-gold-deep">
              {SITE.phone.display}
            </a>{" "}
            or{" "}
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
