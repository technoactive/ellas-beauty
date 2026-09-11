import { BookButton } from "@/components/ui/book-button";
import { Container } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: { name: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden pt-[76px]", className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-20 select-none font-script text-[10rem] leading-none text-gold/10 sm:text-[16rem]"
      >
        {eyebrow}
      </span>
      <Container className="relative pt-12 pb-14 sm:pt-16 sm:pb-16">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-gold" aria-hidden />
          <p className="text-[0.66rem] tracking-[0.42em] text-gold-deep uppercase">
            {eyebrow}
          </p>
        </div>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.01em] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted">{description}</p>
        <div className="mt-9">
          <BookButton />
        </div>
      </Container>
      <div className="gold-rule" aria-hidden />
    </div>
  );
}
