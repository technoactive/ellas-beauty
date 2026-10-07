import "server-only";
import { Resend } from "resend";
import { SITE } from "@/lib/site";
import type { Enquiry } from "./enquiry";
import { acknowledgement, enquiryNotification } from "./templates";

let client: Resend | null = null;

function resend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  client ??= new Resend(key);
  return client;
}

function identity(who: { name: string; address: string }) {
  return `${who.name} <${who.address}>`;
}

/**
 * 1. Enquiry → Ella’s inbox, sent *from* website@ with reply-to = client.
 * 2. Acknowledgement → client, sent *from* contact@ (the address Ella replies from).
 *
 * The notification is the critical path; a failed acknowledgement is logged
 * but does not fail the submission.
 */
export async function sendEnquiryEmails(enquiry: Enquiry) {
  const api = resend();
  const notification = enquiryNotification(enquiry);

  const sent = await api.emails.send({
    from: identity(SITE.mail.website),
    to: [SITE.mail.contact.address],
    replyTo: enquiry.email,
    subject: notification.subject,
    html: notification.html,
    text: notification.text,
    tags: [
      { name: "kind", value: "enquiry" },
      { name: "type", value: enquiry.type },
    ],
  });

  if (sent.error) {
    throw new Error(`Resend (notification): ${sent.error.message}`);
  }

  const ack = acknowledgement(enquiry);
  const acked = await api.emails.send({
    from: identity(SITE.mail.contact),
    to: [enquiry.email],
    replyTo: SITE.mail.contact.address,
    subject: ack.subject,
    html: ack.html,
    text: ack.text,
    tags: [
      { name: "kind", value: "acknowledgement" },
      { name: "type", value: enquiry.type },
    ],
  });

  if (acked.error) {
    console.error("[email] acknowledgement failed:", acked.error.message);
  }

  return { notificationId: sent.data?.id, acknowledgementId: acked.data?.id };
}
