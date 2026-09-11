import { BlurFade } from "@/components/magicui/blur-fade";
import { Container, Section } from "@/components/ui/section";

const pillars = [
  {
    title: "Bespoke mapping",
    body: "Every set is designed for your eye shape, lifestyle and natural lash strength — never a one-length tray.",
  },
  {
    title: "Lash health first",
    body: "Fine diameters, full isolation, and honest advice if a look would overload your lashes.",
  },
  {
    title: "Hospitality, not hurry",
    body: "A calm chair, evening hours until 11pm, and the kind of care reviewers call patient.",
  },
  {
    title: "Beauty that travels",
    body: "West Hampstead studio, Beckton, or your home. The standard does not change with the postcode.",
  },
];

export function WhyElla() {
  return (
    <Section className="py-10 sm:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/60 bg-ink px-6 py-16 text-ivory sm:px-12 sm:py-20 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,103,0.35),transparent_65%)]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-10 right-4 select-none font-script text-[10rem] leading-none text-gold/15 sm:text-[16rem]"
          >
            Ella
          </span>

          <BlurFade>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold" aria-hidden />
              <p className="text-[0.66rem] tracking-[0.42em] text-gold-light uppercase">
                The difference
              </p>
            </div>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.02] text-ivory sm:text-6xl">
              What we borrowed from London’s best —
              <span className="gold-text italic"> and made quieter.</span>
            </h2>
          </BlurFade>

          <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => (
              <li
                key={item.title}
                className="rounded-3xl border border-gold/40 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-gold/80"
              >
                <BlurFade delay={0.08 * index}>
                  <span className="gold-text font-script text-4xl">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ivory/70">
                    {item.body}
                  </p>
                </BlurFade>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
