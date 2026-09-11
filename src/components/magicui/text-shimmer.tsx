import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

export function TextShimmer({
  children,
  className,
  duration = 6,
}: {
  children: string;
  className?: string;
  duration?: number;
}) {
  return (
    <span
      className={cn(
        "inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
        "[--base-color:#8c6a24] [--base-gradient-color:#f3e2b8]",
        "[background-repeat:no-repeat,padding-box]",
        "[--bg:linear-gradient(90deg,transparent_calc(50%-var(--spread)),var(--base-gradient-color),transparent_calc(50%+var(--spread)))]",
        className,
      )}
      style={
        {
          "--spread": "40px",
          backgroundImage:
            "var(--bg), linear-gradient(var(--base-color), var(--base-color))",
          animation: `shimmer-slide ${duration}s linear infinite`,
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
}
