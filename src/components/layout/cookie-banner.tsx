"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "ellas-beauty-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!window.localStorage.getItem(KEY)) setVisible(true);
    }, 600);
    return () => window.clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 border border-gold/40 bg-ivory/95 p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-ink-soft">
          We use essential cookies to run this website. Booking happens on Fresha,
          which has its own cookies. Read the{" "}
          <Link href="/cookies" className="underline decoration-gold/50 underline-offset-4">
            cookie policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            className="rounded-full border border-ink/40 px-4 py-2 text-[0.62rem] tracking-[0.26em] uppercase"
            onClick={() => {
              window.localStorage.setItem(KEY, "essential");
              setVisible(false);
            }}
          >
            Essential only
          </button>
          <button
            type="button"
            className="rounded-full bg-ink px-4 py-2 text-[0.62rem] tracking-[0.26em] text-ivory uppercase"
            onClick={() => {
              window.localStorage.setItem(KEY, "accepted");
              setVisible(false);
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
