"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { sendEnquiry, type EnquiryField, type EnquiryState } from "@/app/contact/actions";
import { ENQUIRY_TYPES } from "@/lib/email/enquiry";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const INITIAL: EnquiryState = { status: "idle" };

const inputClass =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-ink outline-none transition-shadow placeholder:text-muted/60 focus:ring-2 focus:ring-gold/40";

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: EnquiryField;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between gap-3 text-xs tracking-[0.2em] uppercase">
        <span>{label}</span>
        {hint ? <span className="text-[0.6rem] tracking-[0.16em] text-muted normal-case">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-[#9b3b2e]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#8c6a24] to-[#c4a056] px-6 py-3 text-sm tracking-[0.2em] text-[#fffaf0] uppercase shadow-[0_10px_24px_-12px_rgba(140,106,36,0.8)] transition-transform hover:scale-[1.02] disabled:cursor-wait disabled:opacity-70"
    >
      {pending ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
      {pending ? "Sending…" : "Send enquiry"}
    </button>
  );
}

export function ContactForm() {
  const [state, action] = useActionState(sendEnquiry, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="rounded-[1.6rem] border border-gold/40 bg-white/70 p-7 text-center" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden />
        <h3 className="mt-4 font-serif text-2xl">Message sent.</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{state.message}</p>
        <p className="mt-5 text-xs leading-6 text-muted">
          Need a reply faster?{" "}
          <a
            href={SITE.social.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-deep underline decoration-gold/50 underline-offset-4"
          >
            Message Ella on WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={action} className="space-y-5" noValidate>
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={e.name}>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            defaultValue={v.name}
            aria-invalid={!!e.name}
            aria-describedby={e.name ? "name-error" : undefined}
            className={cn(inputClass, e.name ? "border-[#c9735f]" : "border-gold/25")}
          />
        </Field>
        <Field id="email" label="Email" error={e.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            defaultValue={v.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? "email-error" : undefined}
            className={cn(inputClass, e.email ? "border-[#c9735f]" : "border-gold/25")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Phone" hint="optional" error={e.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            defaultValue={v.phone}
            aria-invalid={!!e.phone}
            aria-describedby={e.phone ? "phone-error" : undefined}
            className={cn(inputClass, e.phone ? "border-[#c9735f]" : "border-gold/25")}
          />
        </Field>
        <Field id="type" label="This is about" error={e.type}>
          <select
            id="type"
            name="type"
            required
            defaultValue={v.type ?? "booking"}
            aria-invalid={!!e.type}
            aria-describedby={e.type ? "type-error" : undefined}
            className={cn(inputClass, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 fill=%22none%22 stroke=%22%238c6a24%22 stroke-width=%221.5%22/></svg>')] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10", e.type ? "border-[#c9735f]" : "border-gold/25")}
          >
            {Object.entries(ENQUIRY_TYPES).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="preferredDate" label="Preferred date or time" hint="optional" error={e.preferredDate}>
        <input
          id="preferredDate"
          name="preferredDate"
          placeholder="e.g. Saturday afternoon, or 14 June"
          defaultValue={v.preferredDate}
          className={cn(inputClass, "border-gold/25")}
        />
      </Field>

      <Field id="message" label="Message" error={e.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={v.message}
          placeholder="Tell Ella what you have in mind — the look you’d like, any lash or brow history, and whether you’d prefer the salon or a mobile visit."
          aria-invalid={!!e.message}
          aria-describedby={e.message ? "message-error" : undefined}
          className={cn(inputClass, "resize-y", e.message ? "border-[#c9735f]" : "border-gold/25")}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton />
        {state.status === "error" && state.message ? (
          <p className="text-sm text-[#9b3b2e]" role="alert">
            {state.message}
          </p>
        ) : null}
      </div>
      <p className="text-xs leading-6 text-muted">
        You’ll receive a confirmation by email, and Ella replies personally — usually within 24 hours.
        Appointments themselves are booked on{" "}
        <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-gold-deep underline decoration-gold/50 underline-offset-4">
          Fresha
        </a>
        .
      </p>
    </form>
  );
}
