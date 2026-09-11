import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Container, Section } from "@/components/ui/section";
import { SITE } from "@/lib/site";

export function Credentials({ className }: { className?: string }) {
  const trophies = SITE.credentials.filter((c) => c.kind === "Award");
  const certificates = SITE.credentials.filter((c) => c.kind === "Certificate");

  return (
    <Section className={className}>
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/60 bg-ink px-6 py-14 text-ivory sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,103,0.35),transparent_65%)]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-4 select-none font-script text-[10rem] leading-none text-gold/12 sm:text-[16rem]"
          >
            Ella
          </span>

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <BlurFade>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" aria-hidden />
                  <p className="text-[0.66rem] tracking-[0.42em] text-gold-light uppercase">
                    Recognition
                  </p>
                </div>
                <h2 className="mt-6 font-serif text-4xl leading-[1.02] text-ivory sm:text-5xl">
                  Qualified.
                  <br />
                  Certified.
                  <br />
                  <span className="gold-text italic">Recognised.</span>
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-7 text-ivory/70">
                  Over {SITE.founder.yearsHandsOn} years hands-on and{" "}
                  {SITE.founder.yearsExperience}+ fully qualified — trained at the
                  Beauty Academy, refined through {SITE.founder.coursesCompleted}{" "}
                  further courses and {SITE.founder.masterclassesCompleted}{" "}
                  masterclasses, and recognised by the industry seven times over.
                </p>
              </BlurFade>

              <ol className="mt-8 space-y-2.5">
                {SITE.awards.map((award, index) => (
                  <li
                    key={`${award.year}-${award.title}`}
                    className="flex items-baseline gap-4 border-b border-gold/25 pb-2.5"
                  >
                    <span className="gold-text w-12 shrink-0 font-script text-2xl leading-none">
                      {award.year}
                    </span>
                    <span className="text-sm text-ivory/85">{award.title}</span>
                    <span className="sr-only">{award.detail}</span>
                    <span className="ml-auto text-[0.58rem] tracking-[0.28em] text-gold-light/70 uppercase">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {trophies.map((item, index) => (
                <BlurFade
                  key={item.src}
                  delay={0.08 * index}
                  className={index === 0 ? "sm:col-span-2" : ""}
                >
                  <figure className="group">
                    <div className="gold-frame">
                      <div
                        className={`relative overflow-hidden bg-[#111] ${
                          index === 0 ? "aspect-[16/8]" : "aspect-[16/9]"
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes={index === 0 ? "(max-width: 1024px) 90vw, 60vw" : "(max-width: 640px) 90vw, 30vw"}
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-3 flex flex-col gap-1 px-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="font-serif text-lg text-ivory">{item.title}</span>
                      <span className="text-[0.6rem] tracking-[0.26em] text-gold-light uppercase">
                        {item.detail}
                      </span>
                    </figcaption>
                  </figure>
                </BlurFade>
              ))}

            </div>
          </div>

          <div className="relative mt-16 border-t border-gold/30 pt-12">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" aria-hidden />
                  <p className="text-[0.66rem] tracking-[0.42em] text-gold-light uppercase">
                    Certificates
                  </p>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-[1.05] text-ivory sm:text-4xl">
                  {certificates.length} accredited courses,{" "}
                  <span className="gold-text italic">2017 to today.</span>
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-7 text-ivory/60 lg:col-span-5 lg:justify-self-end lg:text-right">
                Training is renewed continually — every technique on the menu
                is learned, examined and practised before it reaches a client.
              </p>
            </div>

            <ul className="mt-10 grid grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((item, index) => {
                const portrait = item.orientation === "portrait";
                return (
                  <li
                    key={item.src}
                    className={portrait ? "sm:row-span-2 flex" : "flex"}
                  >
                    <BlurFade delay={0.06 * index} className="flex w-full flex-col">
                      <figure className="group flex h-full flex-col">
                        <div className="gold-frame flex flex-1 flex-col">
                          <div
                            className={`relative flex-1 overflow-hidden bg-[#fbf7f0] ${
                              portrait ? "aspect-[5/7] sm:aspect-auto sm:min-h-full" : "aspect-[7/5]"
                            }`}
                          >
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                          </div>
                        </div>
                        <figcaption className="mt-3 flex flex-col gap-0.5 px-2">
                          <span className="font-serif text-base leading-snug text-ivory">
                            {item.title}
                          </span>
                          <span className="text-[0.58rem] tracking-[0.24em] text-gold-light/80 uppercase">
                            {item.detail}
                          </span>
                        </figcaption>
                      </figure>
                    </BlurFade>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
