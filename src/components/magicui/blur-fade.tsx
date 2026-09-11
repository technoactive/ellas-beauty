"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 12,
  inViewMargin = "-50px",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  inViewMargin?: `${number}px`;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: inViewMargin });

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 0, filter: "blur(8px)" }}
      animate={
        inView
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: yOffset, opacity: 0, filter: "blur(8px)" }
      }
      transition={{
        delay,
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
