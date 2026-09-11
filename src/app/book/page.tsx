import type { Metadata } from "next";
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
          <div className="rounded-[1.4rem] bg-ink p-8 text-[#fffaf0] sm:p-10">
            <h2 className="font-serif text-4xl">Before you tap book</h2>
            <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-7 text-[#f3eadc]/85">
              <li>New to tint, lift, lamination or extensions? Add the free patch test 24–48 hours ahead.</li>
              <li>Arrive with clean lashes and no oil-based eye products.</li>
              <li>Mobile visits: add the £30 travel service and mention your area in the notes.</li>
              <li>Bridal makeup: request a trial first so the look is locked before the day.</li>
            </ol>
            <div className="mt-8">
              <BookButton>Open Fresha diary</BookButton>
            </div>
            <p className="mt-6 text-xs tracking-wide text-[#f3eadc]/60">
              You will leave this site for Fresha, where payments and reminders are handled securely.
            </p>
          </div>
          <div className="rounded-[1.4rem] gold-border bg-[#fffdf8] p-8">
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
                    className="flex items-center justify-between gap-4 border-b border-gold/10 pb-4"
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
