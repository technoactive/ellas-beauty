import { BookButton } from "@/components/ui/book-button";
import { Container } from "@/components/ui/section";
import { SITE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#f3e2b8_0%,#d4af67_35%,#c4a056_60%,#e8d5a3_100%)] px-6 py-24 text-center shadow-[0_40px_90px_-40px_rgba(140,106,36,0.6)] sm:px-12 sm:py-32">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-script text-[14rem] leading-none text-white/25 sm:text-[22rem]"
          >
            Book
          </span>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-4 rounded-[2rem] border border-white/40"
          />
          <div className="relative">
            <p className="text-[0.66rem] tracking-[0.42em] text-gold-deep uppercase">
              Instant confirmation on Fresha
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[0.95] text-ink sm:text-7xl">
              Let your eyes
              <br />
              <span className="italic">do the talking.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-ink-soft">
              Choose your treatment, add a complimentary patch test if you are
              new, and reserve evening hours that fit a London week.
            </p>
            <div className="mt-10 flex justify-center">
              <BookButton variant="ink">
                {`Book with ${SITE.name.split("’")[0]}`}
              </BookButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
