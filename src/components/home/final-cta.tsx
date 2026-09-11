import { BookButton } from "@/components/ui/book-button";
import { Container } from "@/components/ui/section";
import { SITE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-gold/25 py-28 sm:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-script text-[14rem] leading-none text-gold/10 sm:text-[22rem]"
      >
        Book
      </span>
      <Container className="relative text-center">
        <p className="text-[0.66rem] tracking-[0.42em] text-gold-deep uppercase">
          Instant confirmation on Fresha
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[0.95] sm:text-7xl">
          Let your eyes
          <br />
          <span className="italic">do the talking.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted">
          Choose your treatment, add a complimentary patch test if you are new,
          and reserve evening hours that fit a London week.
        </p>
        <div className="mt-10 flex justify-center">
          <BookButton>{`Book with ${SITE.name.split("’")[0]}`}</BookButton>
        </div>
      </Container>
    </section>
  );
}
