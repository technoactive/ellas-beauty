"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-gold/25 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-gold/25 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-gold/25 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-linear-to-r from-[#8c6a24] to-[#c4a056] px-6 py-3 text-sm tracking-[0.2em] text-[#fffaf0] uppercase"
      >
        Send enquiry
      </button>
      {status === "sent" ? (
        <p className="text-sm text-muted" role="status">
          Your email app should open with the message ready to send.
        </p>
      ) : null}
    </form>
  );
}
