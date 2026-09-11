import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { SocialLinks } from "@/components/brand/social-links";
import { BookButton } from "@/components/ui/book-button";
import { Container } from "@/components/ui/section";
import { NAV, SITE } from "@/lib/site";

const secondary = [
  { href: "/aftercare", label: "Aftercare" },
  { href: "/book", label: "Book" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms & policies" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ivory pt-6">
      <div className="mx-auto h-[3px] max-w-7xl rounded-full bg-[linear-gradient(90deg,transparent,#c4a056,#f3e2b8,#8c6a24,transparent)]" aria-hidden />
      <Container className="grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo size="lg" className="items-start" />
          <p className="mt-4 font-serif text-xl italic text-gold-deep">
            {SITE.strapline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            Award-winning lashes, brows, skin and makeup in West Hampstead, or
            mobile all across London. Over 15 years of hands-on precision,
            artistry and luxury.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <BookButton />
            <SocialLinks />
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
              <br />
              <span className="text-muted">or mobile, all across London</span>
            </p>
            <p>
              <a className="hover:text-gold-deep" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <br />
              <a className="hover:text-gold-deep" href={SITE.phone.href}>
                {SITE.phone.display}
              </a>
              <br />
              <a
                className="hover:text-gold-deep"
                href={SITE.social.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Ella
              </a>
              {" · "}
              <a
                className="hover:text-gold-deep"
                href={SITE.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.social.instagram.handle}
              </a>
              {" · "}
              <a
                className="hover:text-gold-deep"
                href={SITE.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </p>
          </address>
          <dl className="mt-6 space-y-1.5 text-sm text-ink-soft">
            {SITE.openingHoursCompact.map((row) => (
              <div key={row.day} className="flex justify-between gap-4 border-b border-gold/25 pb-1.5">
                <dt className="text-[0.62rem] tracking-[0.26em] text-muted uppercase">{row.day}</dt>
                <dd className="font-serif text-base">{row.hours}</dd>
              </div>
            ))}
          </dl>
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
          <p>Lashes · Brows · Skin · Makeup — London NW6</p>
        </Container>
      </div>
    </footer>
  );
}
