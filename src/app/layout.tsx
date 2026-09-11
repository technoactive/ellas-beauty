import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { beautySalonJsonLd, personJsonLd, websiteJsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Luxury Lashes, Brows & Makeup in West Hampstead`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Ella", url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "beauty",
  keywords: [
    "Ella’s Beauty",
    "lash extensions West Hampstead",
    "brow lamination West Hampstead",
    "makeup artist NW6",
    "mobile lashes London",
    "Russian volume lashes London",
    "henna brows West Hampstead",
    "bridal makeup West Hampstead",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "en-GB": SITE.url,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Luxury Lashes, Brows & Makeup in West Hampstead`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Luxury Lashes, Brows & Makeup in West Hampstead`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "West Hampstead",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF7F0",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${cormorant.variable} ${greatVibes.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={beautySalonJsonLd()} />
        <JsonLd data={personJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
