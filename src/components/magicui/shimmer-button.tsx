"use client";

import React, { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ShimmerButtonProps = ButtonProps | AnchorProps;

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ShimmerButtonProps
>((props, ref) => {
  const {
    shimmerColor = "#F3E2B8",
    shimmerSize = "0.08em",
    shimmerDuration = "3s",
    borderRadius = "999px",
    background = "linear-gradient(135deg, #8c6a24, #c4a056 45%, #6b4f1a)",
    className,
    children,
    ...rest
  } = props;

  const style = {
    "--spread": "90deg",
    "--shimmer-color": shimmerColor,
    "--radius": borderRadius,
    "--speed": shimmerDuration,
    "--cut": shimmerSize,
    "--bg": background,
  } as CSSProperties;

  const classes = cn(
    "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-7 py-3.5 text-white no-underline [background:var(--bg)]",
    "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
    className,
  );

  const inner = (
    <>
      <div className="-z-30 blur-[2px] [container-type:size] absolute inset-0 overflow-visible">
        <div className="animate-shimmer-slide absolute inset-0 [aspect-ratio:1] h-[100cqh] [border-radius:0] [mask:none]">
          <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      {children}
      <div className="absolute inset-0 size-full rounded-[inherit] shadow-[inset_0_-8px_10px_#ffffff1f] group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f] transition-all duration-300 ease-in-out" />
      <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
    </>
  );

  if ("href" in props && props.href) {
    const { href, target = "_blank", rel = "noopener noreferrer", ...anchorRest } =
      rest as AnchorProps;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        style={style}
        className={classes}
        {...anchorRest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      style={style}
      className={classes}
      {...(rest as ButtonProps)}
    >
      {inner}
    </button>
  );
});

ShimmerButton.displayName = "ShimmerButton";
