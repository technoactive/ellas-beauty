import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-4 text-[0.66rem] tracking-[0.42em] text-gold-deep uppercase">
      <span className="h-px w-12 bg-gold" aria-hidden />
      {children}
    </p>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("gold-rule", className)} aria-hidden />;
}
