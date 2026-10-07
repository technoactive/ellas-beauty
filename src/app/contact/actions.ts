"use server";

import { headers } from "next/headers";
import { sendEnquiryEmails } from "@/lib/email/send";
import { ENQUIRY_TYPES, type Enquiry, type EnquiryType } from "@/lib/email/enquiry";

export type EnquiryField = "name" | "email" | "phone" | "type" | "preferredDate" | "message";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<EnquiryField, string>>;
  /** Echoed back so the form can repopulate after a server-side error. */
  values?: Partial<Record<EnquiryField, string>>;
};

/* ---------- light-touch abuse protection (per server instance) ---------- */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

/* ------------------------------- validation ------------------------------ */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^[+\d][\d\s().-]{6,19}$/;

function str(data: FormData, key: string, max = 2000) {
  return String(data.get(key) ?? "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, max);
}

function isEnquiryType(value: string): value is EnquiryType {
  return value in ENQUIRY_TYPES;
}

export async function sendEnquiry(
  _prev: EnquiryState,
  data: FormData,
): Promise<EnquiryState> {
  // Honeypot — real users never see or fill this field.
  if (str(data, "company")) {
    return { status: "success", message: "Thank you — your message has been sent." };
  }

  const values = {
    name: str(data, "name", 120),
    email: str(data, "email", 200).toLowerCase(),
    phone: str(data, "phone", 40),
    type: str(data, "type", 20),
    preferredDate: str(data, "preferredDate", 120),
    message: str(data, "message", 4000),
  };

  const errors: EnquiryState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !PHONE_RE.test(values.phone)) errors.phone = "That phone number doesn’t look right.";
  if (!isEnquiryType(values.type)) errors.type = "Please choose what your message is about.";
  if (values.message.length < 10) errors.message = "Please add a little more detail — at least a sentence.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    };
  }

  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip) || rateLimited(values.email)) {
    return {
      status: "error",
      message: "You’ve sent a few messages in a short time. Please wait a little while, or message Ella on WhatsApp.",
      values,
    };
  }

  const enquiry: Enquiry = {
    name: values.name,
    email: values.email,
    phone: values.phone || undefined,
    type: values.type as EnquiryType,
    preferredDate: values.preferredDate || undefined,
    message: values.message,
    submittedAt: new Date(),
  };

  try {
    await sendEnquiryEmails(enquiry);
  } catch (error) {
    console.error("[contact] send failed:", error);
    return {
      status: "error",
      message:
        "Sorry — we couldn’t send your message just now. Please try again in a moment, or reach Ella on WhatsApp.",
      values,
    };
  }

  return {
    status: "success",
    message: `Thank you, ${enquiry.name.split(/\s+/)[0]} — your message is with Ella. A confirmation is on its way to ${enquiry.email}.`,
  };
}
