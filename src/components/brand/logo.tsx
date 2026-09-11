import Image from "next/image";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Ella’s Beauty wordmark with tiara — transparent PNG, 720×355 (≈2.03:1). */
export const LOGO = {
  src: "/brand/logo.png",
  width: 720,
  height: 355,
  alt: SITE.name,
} as const;

const SIZES = {
  sm: "h-10 w-auto",
  md: "h-14 w-auto sm:h-16",
  lg: "h-24 w-auto sm:h-28",
} as const;

export function Logo({
  className,
  size = "md",
  priority = false,
}: {
  className?: string;
  size?: keyof typeof SIZES;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        priority={priority}
        sizes={size === "lg" ? "256px" : "160px"}
        className={cn("select-none object-contain", SIZES[size])}
        draggable={false}
      />
    </span>
  );
}
