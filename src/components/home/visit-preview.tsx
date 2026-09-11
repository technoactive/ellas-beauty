import { BookButton } from "@/components/ui/book-button";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";

export function VisitPreview() {
  return (
    <Section className="border-t border-gold/25">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Visit</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
            West Hampstead,
            <br />
            Beckton, <span className="italic">or</span> your living room.
          </h2>
          <address className="mt-8 font-serif text-2xl not-italic leading-snug text-ink-soft">
            {SITE.address.street}
            <br />
            {SITE.address.locality} {SITE.address.postalCode}
          </address>
          <p className="mt-4 text-sm leading-7 text-muted">
            West Hampstead Thameslink is a two-minute stroll. Woman-owned,
            LGBTQ+ welcoming, parking nearby, kid- and pet-friendly.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <BookButton />
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.3em] text-ink uppercase"
            >
              Directions
              <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <dl className="grid gap-px bg-gold/20 sm:grid-cols-2">
            {SITE.openingHours.map((item) => (
              <div
                key={item.day}
                className="flex items-baseline justify-between bg-ivory px-5 py-4"
              >
                <dt className="text-[0.62rem] tracking-[0.3em] text-muted uppercase">
                  {item.day}
                </dt>
                <dd className="font-serif text-xl text-ink">{item.hours}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between bg-ivory px-5 py-4">
              <dt className="text-[0.62rem] tracking-[0.3em] text-muted uppercase">
                Mobile
              </dt>
              <dd className="font-serif text-xl text-ink">By arrangement</dd>
            </div>
          </dl>
          <div className="relative mt-5 aspect-[16/9] overflow-hidden border border-gold/30">
            <iframe
              title={`Map of ${SITE.name} in West Hampstead`}
              src={SITE.mapsEmbed}
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
