import { Butterfly } from "@/components/brand/butterfly";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BookButton } from "@/components/ui/book-button";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";

function PromiseCard({
  title,
  body,
  index,
  compact = false,
}: {
  title: string;
  body: string;
  index: number;
  compact?: boolean;
}) {
  return (
    <article
      className={
        compact
          ? "gold-panel flex h-full flex-col items-center rounded-[1.75rem] px-5 py-6 text-center shadow-[0_18px_40px_-28px_rgba(140,106,36,0.6)]"
          : "gold-panel flex w-[12rem] flex-col xl:w-[13.5rem] items-center rounded-[1.75rem] px-4 py-5 text-center shadow-[0_18px_40px_-28px_rgba(140,106,36,0.6)] transition-transform duration-500 hover:scale-[1.04]"
      }
      style={{ ["--flutter-duration" as string]: `${2.6 + index * 0.35}s` }}
    >
      <Butterfly variant={index} className={compact ? "size-24" : "size-20 -my-2"} />
      <h3 className="mt-3 font-serif text-[1.15rem] leading-snug text-ink">
        {title}
      </h3>
      <p
        className={
          compact
            ? "mt-2 text-sm leading-6 text-muted"
            : "mt-2 text-[0.78rem] leading-5 text-muted"
        }
      >
        {body}
      </p>
    </article>
  );
}

export function PromiseWheel() {
  const items = SITE.promises;

  return (
    <Section className="relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-4rem] top-10 select-none font-script text-[12rem] leading-none text-gold/15 sm:text-[18rem]"
      >
        promise
      </span>

      <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <BlurFade className="lg:col-span-4">
          <Eyebrow>My promise to you</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
            Six things you can{" "}
            <span className="gold-text italic">always</span> expect.
          </h2>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-8 text-muted">
            {SITE.founder.promise} Each promise below is a small vow I make to
            every client who sits in my chair — in the salon or in your own
            home.
          </p>
          <div className="mt-9">
            <BookButton />
          </div>
        </BlurFade>

        {/* Desktop: rotating wheel */}
        <div className="hidden lg:col-span-8 lg:flex lg:justify-center">
          <div
            className="wheel relative size-[40rem] [--wheel-duration:90s] [--wheel-r:14rem] xl:size-[46rem] xl:[--wheel-r:16.5rem]"
            role="list"
            aria-label="My promise to you"
          >
            <span
              aria-hidden
              className="absolute inset-[5.5rem] rounded-full border border-dashed border-gold/50 xl:inset-[6.5rem]"
            />
            <span
              aria-hidden
              className="absolute inset-[8.5rem] rounded-full border border-gold/30 xl:inset-[9.5rem]"
            />

            <div className="wheel-ring absolute inset-0">
              {items.map((item, index) => {
                const angle = index * (360 / items.length) - 90;
                return (
                  <div
                    key={item.title}
                    role="listitem"
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--wheel-r)) rotate(${-angle}deg)`,
                    }}
                  >
                    <div className="wheel-item">
                      <PromiseCard
                        title={item.title}
                        body={item.body}
                        index={index}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-1/2 left-1/2 flex size-[13rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[linear-gradient(135deg,#8c6a24,#c4a056_45%,#d4af67_65%,#8c6a24)] text-center text-[#fffaf0] shadow-[0_30px_60px_-30px_rgba(140,106,36,0.9)]">
              <span className="font-script text-4xl leading-none">My promise</span>
              <span className="mt-2 text-[0.62rem] tracking-[0.36em] uppercase">
                to you
              </span>
              <span className="mt-3 h-px w-10 bg-[#fff6dc]/70" aria-hidden />
              <span className="mt-3 font-serif text-sm italic text-[#fff6dc]">
                — Ella
              </span>
            </div>
          </div>
        </div>

        {/* Mobile & tablet: staggered grid */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:hidden" aria-label="My promise to you">
          {items.map((item, index) => (
            <li key={item.title} className={index % 2 === 1 ? "sm:translate-y-6" : ""}>
              <BlurFade delay={0.06 * index} className="h-full">
                <PromiseCard
                  title={item.title}
                  body={item.body}
                  index={index}
                  compact
                />
              </BlurFade>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
