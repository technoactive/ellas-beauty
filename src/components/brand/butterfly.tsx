import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Six hand-drawn gold butterflies, one per promise. Each variant has its own
 * wing silhouette, gradient and markings so no two are the same.
 */
const VARIANTS = [
  {
    // Monarch — full rounded wings
    upper: "M50 46 C58 22 92 16 90 40 C88 54 66 58 50 51 Z",
    lower: "M50 53 C64 52 84 62 78 80 C72 92 56 84 50 70 Z",
    stops: ["#f7e7bf", "#d4af67", "#8c6a24"],
    marks: [
      { cx: 74, cy: 38, r: 3.2 },
      { cx: 68, cy: 70, r: 2.2 },
    ],
  },
  {
    // Swallowtail — pointed lower wings
    upper: "M50 46 C58 20 92 12 93 38 C93 52 70 58 50 52 Z",
    lower: "M50 54 C64 56 82 66 74 84 L69 96 C64 86 56 82 50 70 Z",
    stops: ["#e8d5a3", "#c4a056", "#7a5a1c"],
    marks: [
      { cx: 78, cy: 34, r: 2.4 },
      { cx: 70, cy: 46, r: 1.8 },
      { cx: 69, cy: 76, r: 2.6 },
    ],
  },
  {
    // Blue morpho shape — broad, gentle
    upper: "M50 47 C56 28 84 22 84 44 C82 56 64 58 50 52 Z",
    lower: "M50 54 C60 54 78 62 72 78 C66 88 54 80 50 68 Z",
    stops: ["#fff3d6", "#e8c77a", "#a37d2d"],
    marks: [{ cx: 70, cy: 42, r: 4 }],
  },
  {
    // Birdwing — tall, elongated upper wings
    upper: "M50 44 C53 12 84 6 90 32 C93 50 68 56 50 50 Z",
    lower: "M50 52 C62 50 80 58 79 76 C77 92 58 90 50 72 Z",
    stops: ["#f3e2b8", "#c9a35a", "#8c6a24"],
    marks: [
      { cx: 72, cy: 30, r: 2.2 },
      { cx: 80, cy: 40, r: 2.2 },
      { cx: 66, cy: 74, r: 2.2 },
    ],
  },
  {
    // Glasswing — wide and flat
    upper: "M50 48 C60 30 96 22 94 44 C92 56 66 58 50 52 Z",
    lower: "M50 54 C66 56 92 58 86 72 C80 84 58 78 50 68 Z",
    stops: ["#fbf1d8", "#dfc07a", "#9a7428"],
    marks: [
      { cx: 82, cy: 42, r: 2.6 },
      { cx: 76, cy: 66, r: 2 },
    ],
  },
  {
    // Peacock — scalloped, ornate
    upper: "M50 46 C56 24 80 14 90 30 C96 40 88 52 78 50 C70 48 60 56 50 52 Z",
    lower: "M50 54 C60 54 74 58 80 68 C84 78 76 88 68 84 C62 80 56 78 50 70 Z",
    stops: ["#f3e2b8", "#c4a056", "#6f5119"],
    marks: [
      { cx: 78, cy: 34, r: 4.2 },
      { cx: 70, cy: 72, r: 3.2 },
    ],
  },
] as const;

export function Butterfly({
  variant = 0,
  className,
}: {
  variant?: number;
  className?: string;
}) {
  const v = VARIANTS[variant % VARIANTS.length];
  const id = `bfly-${useId().replace(/:/g, "")}`;

  const renderWing = (mirrored: boolean) => (
    <g transform={mirrored ? "matrix(-1 0 0 1 100 0)" : undefined}>
      <g className="wing">
        <path d={v.upper} fill={`url(#${id}-a)`} stroke="rgba(120,90,30,0.35)" strokeWidth="0.8" />
        <path d={v.lower} fill={`url(#${id}-b)`} stroke="rgba(120,90,30,0.35)" strokeWidth="0.8" />
        {v.marks.map((m, i) => (
          <circle key={i} cx={m.cx} cy={m.cy} r={m.r} fill="rgba(255,250,236,0.85)" stroke="rgba(120,90,30,0.4)" strokeWidth="0.6" />
        ))}
        {/* veins */}
        <path d="M50 49 Q68 38 84 32" fill="none" stroke="rgba(120,90,30,0.28)" strokeWidth="0.6" />
        <path d="M50 50 Q66 48 80 46" fill="none" stroke="rgba(120,90,30,0.28)" strokeWidth="0.6" />
        <path d="M50 60 Q64 66 72 76" fill="none" stroke="rgba(120,90,30,0.28)" strokeWidth="0.6" />
      </g>
    </g>
  );

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("size-14 drop-shadow-[0_6px_10px_rgba(140,106,36,0.25)]", className)}
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={v.stops[0]} />
          <stop offset="55%" stopColor={v.stops[1]} />
          <stop offset="100%" stopColor={v.stops[2]} />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.stops[0]} />
          <stop offset="50%" stopColor={v.stops[1]} />
          <stop offset="100%" stopColor={v.stops[2]} />
        </linearGradient>
      </defs>
      {renderWing(false)}
      {renderWing(true)}
      {/* body */}
      <path d="M50 42 C53 50 53 64 50 78 C47 64 47 50 50 42 Z" fill="#6f5119" />
      <circle cx="50" cy="40" r="3" fill="#6f5119" />
      <path d="M48.5 38 C44 30 38 28 34 26" fill="none" stroke="#6f5119" strokeWidth="1" strokeLinecap="round" />
      <path d="M51.5 38 C56 30 62 28 66 26" fill="none" stroke="#6f5119" strokeWidth="1" strokeLinecap="round" />
      <circle cx="34" cy="26" r="1.2" fill="#c4a056" />
      <circle cx="66" cy="26" r="1.2" fill="#c4a056" />
    </svg>
  );
}
