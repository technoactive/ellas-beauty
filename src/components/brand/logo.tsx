import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <span
      className={cn(
        "relative inline-flex flex-col items-center leading-none",
        className,
      )}
    >
      <span
        className={cn(
          "font-serif uppercase text-ink",
          size === "lg"
            ? "text-4xl tracking-[0.28em]"
            : "text-[1.35rem] tracking-[0.26em]",
        )}
      >
        Ella’s
      </span>
      <span
        className={cn(
          "font-script text-gold-deep",
          size === "lg" ? "-mt-2 text-4xl" : "-mt-1.5 text-[1.35rem]",
        )}
      >
        Beauty
      </span>
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
