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
    <Section className="bg-ink text-ivory">
      <Container>
        <BlurFade>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-gold" aria-hidden />
            <p className="text-[0.66rem] tracking-[0.42em] text-gold-light uppercase">
              The difference
            </p>
          </div>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.02] text-ivory sm:text-6xl">
            What we borrowed from London’s best —
            <span className="italic text-gold-light"> and made quieter.</span>
          </h2>
        </BlurFade>

        <ol className="mt-16 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, index) => (
            <li key={item.title} className="bg-ink p-8 lg:p-10">
              <BlurFade delay={0.08 * index}>
                <span className="font-script text-4xl text-gold-light">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ivory/65">
                  {item.body}
                </p>
              </BlurFade>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
