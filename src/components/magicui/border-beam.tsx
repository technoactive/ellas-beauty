"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionStyle } from "motion/react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 80,
  duration = 8,
  delay = 0,
  colorFrom = "#F3E2B8",
  colorTo = "#8C6A24",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-beam-width)*1px)_solid_transparent]"
      style={{ "--border-beam-width": borderWidth } as React.CSSProperties}
    >
      <motion.div
        className={cn(
          "absolute aspect-square [offset-anchor:calc(var(--x)*1%)_calc(var(--y)*1%)] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
          className,
        )}
        style={
          {
            "--size": size,
            "--x": 0,
            "--y": 0,
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          } as MotionStyle
        }
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          repeat: Infinity,
          duration,
          delay,
          ease: "linear",
        }}
      />
    </div>
  );
}
