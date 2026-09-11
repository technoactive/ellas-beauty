"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/brand/logo";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const LEFT = NAV.filter((item) =>
  ["/services", "/about", "/gallery"].includes(item.href),
);
const RIGHT = NAV.filter((item) =>
  ["/reviews", "/faq", "/contact"].includes(item.href),
);

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative py-2 text-[0.68rem] tracking-[0.3em] uppercase transition-colors",
        active ? "text-ink" : "text-ink-soft/80 hover:text-ink",
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-ivory/90 backdrop-blur-md">
          <div className="mx-auto grid h-[76px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
            <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary left">
              {LEFT.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={pathname.startsWith(item.href)}
                />
              ))}
            </nav>

            <Link
              href="/"
              aria-label={`${SITE.name} home`}
              className="col-start-2 justify-self-center"
            >
              <Logo />
            </Link>

            <div className="hidden items-center justify-end gap-9 lg:flex">
              <nav className="flex items-center gap-9" aria-label="Primary right">
                {RIGHT.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={pathname.startsWith(item.href)}
                  />
                ))}
              </nav>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink px-5 py-2 text-[0.66rem] tracking-[0.3em] text-ink uppercase transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                Book
              </a>
            </div>

            <button
              type="button"
              className="group col-start-3 flex items-center gap-3 justify-self-end text-[0.66rem] tracking-[0.3em] text-ink uppercase lg:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span>{open ? "Close" : "Menu"}</span>
              <span className="flex w-7 flex-col gap-1.5" aria-hidden>
                <span
                  className={cn(
                    "h-px bg-ink transition-transform duration-300",
                    open && "translate-y-[3.5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-px bg-ink transition-transform duration-300",
                    open && "-translate-y-[3.5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
          <div className="gold-rule opacity-70" aria-hidden />
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-ivory pt-[76px]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 top-24 select-none font-script text-[9rem] leading-none text-gold/15 sm:text-[14rem]"
            >
              Ella’s
            </span>
            <nav
              className="relative flex flex-1 flex-col justify-center px-7 sm:px-12"
              aria-label="Mobile"
            >
              <ol className="space-y-1">
                {NAV.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.05, duration: 0.5 }}
                    className="flex items-baseline gap-5 border-b border-gold/15 py-3"
                  >
                    <span className="w-8 font-script text-xl text-gold-deep">
                      0{index + 1}
                    </span>
                    <Link
                      href={item.href}
                      onClick={close}
                      className={cn(
                        "font-serif text-4xl leading-none sm:text-5xl",
                        pathname === item.href ? "italic text-gold-deep" : "text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ol>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="relative flex flex-col gap-5 px-7 pb-8 sm:px-12"
            >
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-ink text-[0.7rem] tracking-[0.32em] text-ivory uppercase"
              >
                Book on Fresha
              </a>
              <p className="text-[0.66rem] leading-6 tracking-[0.16em] text-muted uppercase">
                Rush Hair West Hampstead · 186-188 West End Lane · NW6 1SG
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
