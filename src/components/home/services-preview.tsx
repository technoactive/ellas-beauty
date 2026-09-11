import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { serviceCategories } from "@/lib/services";

export function ServicesPreview() {
  const featured = serviceCategories.filter((item) => item.slug !== "mobile");

  return (
    <Section>
      <Container>
        <BlurFade>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>The edit</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.01em] sm:text-6xl">
                Four disciplines,
                <br />
                <span className="italic">one</span> steady hand.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted lg:col-span-4 lg:col-start-9">
              Treatments look expensive because the mapping is personal.
              Choose a discipline — every price is exactly as listed on Fresha.
            </p>
          </div>
        </BlurFade>

        <ol className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((category, index) => (
            <li key={category.slug} className={index % 2 === 1 ? "lg:mt-16" : ""}>
              <BlurFade delay={0.08 * index}>
                <Link href={category.href} className="group block">
                  <figure>
                    <div className="relative">
                      <span
                        aria-hidden
                        className="absolute -inset-2 translate-x-3 translate-y-3 border border-gold/0 transition-all duration-500 group-hover:border-gold/60"
                      />
                      <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                        <Image
                          src={category.image}
                          alt={category.imageAlt}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-7 border-t border-gold/30 pt-5">
                      <div className="flex items-baseline justify-between">
                        <span className="font-script text-2xl text-gold-deep">
                          0{index + 1}
                        </span>
                        <span className="text-[0.62rem] tracking-[0.3em] text-muted uppercase">
                          {category.eyebrow}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-3xl text-ink">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {category.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[0.66rem] tracking-[0.3em] text-ink uppercase">
                        View menu
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              </BlurFade>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
