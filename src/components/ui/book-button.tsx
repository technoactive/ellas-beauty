import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function BookButton({
  className,
  children = "Book now",
  variant = "gold",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "gold" | "ghost";
}) {
  if (variant === "ghost") {
    return (
      <Link
        href={SITE.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-[0.68rem] tracking-[0.3em] uppercase text-ink transition-colors hover:border-gold hover:bg-gold",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <ShimmerButton
      href={SITE.bookingUrl}
      background="#1a1610"
      shimmerColor="#e8d5a3"
      shimmerSize="0.06em"
      className={cn("min-h-12 border-ink px-8", className)}
    >
      <span className="relative z-10 text-[0.68rem] font-medium tracking-[0.32em] uppercase text-ivory">
        {children}
      </span>
    </ShimmerButton>
  );
}
