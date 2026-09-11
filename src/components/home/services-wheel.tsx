import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import { Container, Eyebrow, Section } from "@/components/ui/section";
import { SERVICE_WHEEL } from "@/lib/site";

function WheelCard({
  item,
  index,
}: {
  item: (typeof SERVICE_WHEEL)[number];
  index: number;
}) {
  return (
    <Link
      href={item.href}
      className="group block w-[15.5rem] shrink-0 sm:w-[17rem]"
      aria-label={`${item.name} — view treatment menu`}
    >
      <figure>
        <div className="gold-frame transition-transform duration-500 group-hover:-translate-y-1.5">
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 60vw, 17rem"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/55 to-transparent" />
            <span className="absolute right-4 bottom-3 font-script text-3xl leading-none text-[#fff6dc] drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
        <figcaption className="mt-3 flex items-center justify-between gap-3 px-2">
          <span className="font-serif text-lg leading-tight text-ink group-hover:text-gold-deep">
            {item.name}
          </span>
          <span className="h-px w-6 shrink-0 bg-gold transition-all duration-300 group-hover:w-10" />
        </figcaption>
      </figure>
    </Link>
  );
}

const FIRST_HALF = SERVICE_WHEEL.slice(0, Math.ceil(SERVICE_WHEEL.length / 2));
const SECOND_HALF = SERVICE_WHEEL.slice(Math.ceil(SERVICE_WHEEL.length / 2));

export function ServicesWheel() {
  return (
    <Section className="overflow-hidden pt-4 sm:pt-6">
      <Container className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>The menu, in motion</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-6xl">
            Seventeen ways to{" "}
            <span className="gold-text italic">let your eyes</span> do the
            talking.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-muted lg:col-span-4 lg:justify-self-end lg:text-right">
          Every photograph is Ella’s own work. Hover to pause, tap any plate to
          open the menu for that treatment.
        </p>
      </Container>

      <div className="relative mt-14 space-y-6">
        <Marquee pauseOnHover repeat={3} className="[--duration:90s] [--gap:1.5rem] p-0 pb-1">
          {FIRST_HALF.map((item, index) => (
            <WheelCard key={item.src} item={item} index={index} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse repeat={3} className="[--duration:100s] [--gap:1.5rem] p-0 pb-1">
          {SECOND_HALF.map((item, index) => (
            <WheelCard key={item.src} item={item} index={FIRST_HALF.length + index} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-ivory to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-ivory to-transparent sm:w-28" />
      </div>
    </Section>
  );
}
