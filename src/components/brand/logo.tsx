import Image from "next/image";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** The EB monogram — transparent PNG cut from Ella’s brand sheet (246×282). */
export const MARK = {
  gold: "/brand/mark.png",
  light: "/brand/mark-light.png",
  width: 246,
  height: 282,
} as const;

type Size = "sm" | "md" | "lg";
type Tone = "gold" | "light";

const MARK_SIZE: Record<Size, string> = {
  sm: "h-9",
  md: "h-12 sm:h-[3.25rem]",
  lg: "h-24 sm:h-28",
};

const WORD_SIZE: Record<Size, string> = {
  sm: "text-[0.62rem] tracking-[0.32em]",
  md: "text-[0.66rem] tracking-[0.3em] sm:text-[0.8rem] sm:tracking-[0.36em]",
  lg: "text-[0.9rem] tracking-[0.42em] sm:text-base",
};

/**
 * Brand lockup: EB monogram + “ELLA’S BEAUTY” wordmark.
 * `md`/`sm` sit horizontally (header); `lg` stacks (footer, page ends).
 */
export function Logo({
  className,
  size = "md",
  tone = "gold",
  priority = false,
}: {
  className?: string;
  size?: Size;
  tone?: Tone;
  priority?: boolean;
}) {
  const stacked = size === "lg";
  return (
    <span
      className={cn(
        "inline-flex items-center",
        stacked ? "flex-col gap-4" : "gap-3 sm:gap-3.5",
        className,
      )}
    >
      <Image
        src={MARK[tone]}
        alt=""
        width={MARK.width}
        height={MARK.height}
        priority={priority}
        sizes={stacked ? "112px" : "52px"}
        className={cn("w-auto select-none object-contain", MARK_SIZE[size])}
        draggable={false}
        aria-hidden
      />
      <span
        className={cn(
          "font-sans uppercase leading-none whitespace-nowrap",
          tone === "light" ? "text-ivory" : "text-gold-deep",
          WORD_SIZE[size],
        )}
      >
        {SITE.name}
      </span>
    </span>
  );
}
