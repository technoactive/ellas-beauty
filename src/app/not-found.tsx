import Link from "next/link";
import { BookButton } from "@/components/ui/book-button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-[0.7rem] tracking-[0.42em] text-gold-deep uppercase">404</p>
      <h1 className="mt-4 font-serif text-5xl">This page has left the chair.</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-muted">
        The link may be out of date. Head home, browse treatments, or book directly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full border border-gold/35 px-6 py-3 text-sm tracking-[0.18em] uppercase"
        >
          Home
        </Link>
        <BookButton />
      </div>
    </div>
  );
}
