import { BadgeCheck, CalendarDays, MapPin, Route } from "lucide-react";
import { Container } from "@/components/ui/section";
import { SITE } from "@/lib/site";

const icons = [CalendarDays, MapPin, Route, BadgeCheck];

export function TrustBar() {
  return (
    <Container className="py-14 sm:py-18">
      <ul className="gold-panel grid grid-cols-1 gap-y-8 rounded-[2rem] px-6 py-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-gold/40 lg:px-4 lg:py-10">
        {SITE.facts.map((fact, index) => {
          const Icon = icons[index] ?? BadgeCheck;
          return (
            <li
              key={fact.title}
              className="flex items-start gap-4 lg:flex-col lg:items-center lg:px-6 lg:text-center"
            >
              <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f3e2b8,#c4a056_55%,#8c6a24)] text-[#fffaf0] shadow-[0_12px_24px_-14px_rgba(140,106,36,0.9)]">
                <Icon className="size-5" aria-hidden />
                <span className="absolute -top-1 -right-1 font-script text-base leading-none text-gold-deep">
                  0{index + 1}
                </span>
              </span>
              <div>
                <p className="font-serif text-xl leading-tight text-ink sm:text-[1.35rem]">
                  {fact.title}
                </p>
                <p className="mt-1.5 text-[0.62rem] tracking-[0.26em] text-muted uppercase">
                  {fact.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
