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
  variant?: "gold" | "ghost" | "ink";
}) {
  if (variant === "ink") {
    return (
      <ShimmerButton
        href={SITE.bookingUrl}
        background="#1a1610"
        shimmerColor="#e8d5a3"
        shimmerSize="0.08em"
        className={cn("min-h-12 px-8 shadow-[0_18px_40px_-18px_rgba(26,22,16,0.7)]", className)}
      >
        <span className="gold-text relative z-10 text-[0.68rem] font-semibold tracking-[0.32em] uppercase">
          {children}
        </span>
      </ShimmerButton>
    );
  }

  if (variant === "ghost") {
    return (
      <Link
        href={SITE.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 text-[0.68rem] tracking-[0.3em] uppercase text-gold-deep transition-colors hover:bg-gold hover:text-ink",
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
      background="linear-gradient(135deg,#8c6a24 0%,#c4a056 40%,#d4af67 60%,#8c6a24 100%)"
      shimmerColor="#fff6dc"
      shimmerSize="0.08em"
      className={cn(
        "min-h-12 px-8 shadow-[0_18px_40px_-18px_rgba(140,106,36,0.7)]",
        className,
      )}
    >
      <span className="relative z-10 text-[0.68rem] font-semibold tracking-[0.32em] uppercase text-[#fffaf0] drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
        {children}
      </span>
    </ShimmerButton>
  );
}
