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
      <div className="gold-panel mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl p-5 shadow-[0_24px_60px_-30px_rgba(140,106,36,0.6)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
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
            className="rounded-full border border-gold px-4 py-2 text-[0.62rem] tracking-[0.26em] text-gold-deep uppercase"
            onClick={() => {
              window.localStorage.setItem(KEY, "essential");
              setVisible(false);
            }}
          >
            Essential only
          </button>
          <button
            type="button"
            className="rounded-full bg-[linear-gradient(135deg,#8c6a24,#c4a056_45%,#d4af67_65%,#8c6a24)] px-4 py-2 text-[0.62rem] font-semibold tracking-[0.26em] text-[#fffaf0] uppercase"
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
