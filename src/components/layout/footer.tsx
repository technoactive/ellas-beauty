import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { BookButton } from "@/components/ui/book-button";
import { Container } from "@/components/ui/section";
import { NAV, SITE } from "@/lib/site";

const secondary = [
  { href: "/aftercare", label: "Aftercare" },
  { href: "/book", label: "Book" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ivory pt-6">
      <div className="mx-auto h-[3px] max-w-7xl rounded-full bg-[linear-gradient(90deg,transparent,#c4a056,#f3e2b8,#8c6a24,transparent)]" aria-hidden />
      <Container className="grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo size="lg" className="items-start" />
          <p className="mt-8 max-w-sm text-sm leading-7 text-muted">
            Bespoke lashes, brows, makeup and skin in West Hampstead, with
            mobile appointments across London. Woman-owned. Detail-led.
          </p>
          <div className="mt-8">
            <BookButton />
          </div>
        </div>

        <nav className="lg:col-span-3" aria-label="Footer">
          <p className="text-[0.62rem] tracking-[0.32em] text-gold-deep uppercase">
            Explore
          </p>
          <ul className="mt-6 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-serif text-2xl text-ink transition-colors hover:text-gold-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="text-[0.62rem] tracking-[0.32em] text-gold-deep uppercase">
            Visit
          </p>
          <address className="mt-6 space-y-4 text-sm not-italic leading-7 text-ink-soft">
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.locality} {SITE.address.postalCode}
            </p>
            <p>
              <a className="hover:text-gold-deep" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p className="text-muted">
              West Hampstead Thameslink · 2 minutes
              <br />
              Also Beckton &amp; mobile London
            </p>
          </address>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {secondary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.62rem] tracking-[0.26em] text-muted uppercase hover:text-gold-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold/40 bg-linear-to-b from-transparent to-gold-light/30">
        <Container className="flex flex-col gap-2 py-6 text-[0.62rem] tracking-[0.24em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Lashes · Brows · Makeup · Skin — London NW6</p>
        </Container>
      </div>
    </footer>
  );
}
