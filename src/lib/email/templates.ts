import { SITE } from "@/lib/site";
import { ENQUIRY_TYPES, type Enquiry, type EnquiryType } from "./enquiry";

/* ------------------------------------------------------------------ */
/*  Palette & primitives                                               */
/* ------------------------------------------------------------------ */

const C = {
  ivory: "#fbf7f0",
  card: "#fffdf8",
  ink: "#1a1610",
  inkSoft: "#4a4238",
  muted: "#7a6f60",
  gold: "#c4a056",
  goldDeep: "#8c6a24",
  goldLight: "#efe2c4",
  line: "#eadfc9",
} as const;

const SERIF = `'Cormorant Garamond', Georgia, 'Times New Roman', serif`;
const SANS = `'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif`;

const MARK_URL = `${SITE.url}/brand/mark.png`;

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nl2br(value: string) {
  return esc(value).replace(/\r?\n/g, "<br />");
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  }).format(date);
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || "there";
}

function button(label: string, href: string) {
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:28px 0 8px;">
      <tr>
        <td bgcolor="${C.goldDeep}" style="border-radius:999px;background:linear-gradient(135deg,${C.goldDeep},${C.gold} 55%,${C.goldDeep});">
          <a href="${href}" style="display:inline-block;padding:14px 30px;font-family:${SANS};font-size:12px;letter-spacing:0.28em;text-transform:uppercase;color:#fffaf0;text-decoration:none;font-weight:600;">${esc(label)}</a>
        </td>
      </tr>
    </table>`;
}

function eyebrow(text: string) {
  return `<p style="margin:0 0 14px;font-family:${SANS};font-size:11px;letter-spacing:0.34em;text-transform:uppercase;color:${C.goldDeep};">${esc(text)}</p>`;
}

function heading(html: string) {
  return `<h1 style="margin:0 0 18px;font-family:${SERIF};font-weight:400;font-size:34px;line-height:1.08;letter-spacing:-0.01em;color:${C.ink};">${html}</h1>`;
}

function para(html: string) {
  return `<p style="margin:0 0 16px;font-family:${SANS};font-size:16px;line-height:1.7;color:${C.inkSoft};">${html}</p>`;
}

function rule() {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:26px 0;"><tr><td style="height:1px;background:${C.line};font-size:0;line-height:0;">&nbsp;</td></tr></table>`;
}

function detailRow(label: string, value: string, last = false) {
  return `
    <tr>
      <td style="padding:12px 0;${last ? "" : `border-bottom:1px solid ${C.line};`}vertical-align:top;width:34%;font-family:${SANS};font-size:11px;letter-spacing:0.26em;text-transform:uppercase;color:${C.muted};">${esc(label)}</td>
      <td style="padding:12px 0;${last ? "" : `border-bottom:1px solid ${C.line};`}vertical-align:top;font-family:${SANS};font-size:15px;line-height:1.6;color:${C.ink};">${value}</td>
    </tr>`;
}

/** Outer shell: ivory canvas, monogram, gold rule, card, footer. */
function shell({
  preheader,
  body,
  footerNote,
}: {
  preheader: string;
  body: string;
  footerNote: string;
}) {
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${esc(SITE.name)}</title>
</head>
<body style="margin:0;padding:0;background:${C.ivory};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="${C.ivory}" style="background:${C.ivory};">
    <tr>
      <td align="center" style="padding:40px 16px 48px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;">
          <!-- brand -->
          <tr>
            <td align="center" style="padding:0 0 26px;">
              <a href="${SITE.url}" style="text-decoration:none;">
                <img src="${MARK_URL}" width="62" height="71" alt="${esc(SITE.name)}" style="display:block;margin:0 auto 14px;border:0;outline:none;" />
                <span style="font-family:${SANS};font-size:13px;letter-spacing:0.42em;text-transform:uppercase;color:${C.goldDeep};">${esc(SITE.name)}</span>
              </a>
            </td>
          </tr>
          <!-- gold rule -->
          <tr>
            <td style="padding:0 0 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr><td style="height:3px;background:${C.gold};background-image:linear-gradient(90deg,${C.goldDeep},${C.goldLight},${C.gold},${C.goldLight},${C.goldDeep});border-radius:3px 3px 0 0;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>
          <!-- card -->
          <tr>
            <td bgcolor="${C.card}" style="background:${C.card};padding:40px 40px 34px;border:1px solid ${C.line};border-top:0;border-radius:0 0 28px 28px;">
              ${body}
            </td>
          </tr>
          <!-- footer -->
          <tr>
            <td align="center" style="padding:30px 20px 0;">
              <p style="margin:0 0 10px;font-family:${SERIF};font-style:italic;font-size:18px;color:${C.goldDeep};">${esc(SITE.tagline)}</p>
              <p style="margin:0 0 6px;font-family:${SANS};font-size:12px;line-height:1.7;color:${C.muted};">
                ${esc(SITE.address.street)}, ${esc(SITE.address.locality)} ${esc(SITE.address.postalCode)} · or mobile across London
              </p>
              <p style="margin:0 0 14px;font-family:${SANS};font-size:12px;line-height:1.7;color:${C.muted};">
                <a href="${SITE.phone.href}" style="color:${C.goldDeep};text-decoration:none;">${esc(SITE.phone.display)}</a>
                &nbsp;·&nbsp;
                <a href="mailto:${SITE.email}" style="color:${C.goldDeep};text-decoration:none;">${esc(SITE.email)}</a>
              </p>
              <p style="margin:0 0 16px;font-family:${SANS};font-size:11px;letter-spacing:0.22em;text-transform:uppercase;">
                <a href="${SITE.social.instagram.url}" style="color:${C.goldDeep};text-decoration:none;">Instagram</a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="${SITE.social.tiktok.url}" style="color:${C.goldDeep};text-decoration:none;">TikTok</a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="${SITE.social.whatsapp.url}" style="color:${C.goldDeep};text-decoration:none;">WhatsApp</a>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="${SITE.bookingUrl}" style="color:${C.goldDeep};text-decoration:none;">Book on Fresha</a>
              </p>
              <p style="margin:0;font-family:${SANS};font-size:11px;line-height:1.7;color:${C.muted};">${footerNote}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/*  1. Enquiry notification → Ella (from website@)                     */
/* ------------------------------------------------------------------ */

export function enquiryNotification(enquiry: Enquiry) {
  const typeLabel = ENQUIRY_TYPES[enquiry.type];
  const subject = `${typeLabel} from ${enquiry.name}`;
  const mailto = `mailto:${enquiry.email}?subject=${encodeURIComponent(`Re: your ${typeLabel.toLowerCase()} — Ella’s Beauty`)}`;

  const rows = [
    detailRow("Name", esc(enquiry.name)),
    detailRow("Email", `<a href="mailto:${esc(enquiry.email)}" style="color:${C.goldDeep};text-decoration:none;">${esc(enquiry.email)}</a>`),
    enquiry.phone
      ? detailRow("Phone", `<a href="tel:${esc(enquiry.phone.replace(/\s+/g, ""))}" style="color:${C.goldDeep};text-decoration:none;">${esc(enquiry.phone)}</a>`)
      : "",
    detailRow("Enquiry", esc(typeLabel)),
    enquiry.preferredDate ? detailRow("Preferred date", esc(enquiry.preferredDate)) : "",
    detailRow("Received", esc(formatDate(enquiry.submittedAt)), true),
  ].join("");

  const body = `
    ${eyebrow("New website enquiry")}
    ${heading(`${esc(typeLabel)} <span style="color:${C.goldDeep};font-style:italic;">from ${esc(enquiry.name)}</span>`)}
    ${para(`A new message has arrived through the form on ${esc(SITE.domain)}. Reply to this email and your answer goes straight to ${esc(firstName(enquiry.name))}.`)}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:10px;">
      ${rows}
    </table>
    ${rule()}
    ${eyebrow("Message")}
    <blockquote style="margin:0;padding:18px 22px;border-left:3px solid ${C.gold};background:${C.ivory};border-radius:0 18px 18px 0;font-family:${SERIF};font-size:19px;line-height:1.55;color:${C.ink};">${nl2br(enquiry.message)}</blockquote>
    ${button(`Reply to ${firstName(enquiry.name)}`, mailto)}
  `;

  const html = shell({
    preheader: `${typeLabel} — ${enquiry.message.slice(0, 90)}`,
    body,
    footerNote: `Sent automatically by the website form at ${esc(SITE.domain)}. The reply-to address is set to the client, so you can answer directly from your inbox.`,
  });

  const text = [
    `NEW WEBSITE ENQUIRY — ${typeLabel}`,
    ``,
    `Name:           ${enquiry.name}`,
    `Email:          ${enquiry.email}`,
    enquiry.phone ? `Phone:          ${enquiry.phone}` : null,
    `Enquiry:        ${typeLabel}`,
    enquiry.preferredDate ? `Preferred date: ${enquiry.preferredDate}` : null,
    `Received:       ${formatDate(enquiry.submittedAt)}`,
    ``,
    `MESSAGE`,
    enquiry.message,
    ``,
    `— Sent by the website form at ${SITE.domain}. Reply to this email to answer the client.`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, html, text };
}

/* ------------------------------------------------------------------ */
/*  2. Acknowledgement → client (from contact@)                        */
/* ------------------------------------------------------------------ */

const ACK_COPY: Record<
  EnquiryType,
  { subject: string; eyebrow: string; heading: string; lead: string; next: string; cta?: { label: string; href: string } }
> = {
  booking: {
    subject: "We’ve received your booking enquiry",
    eyebrow: "Booking enquiry received",
    heading: `Thank you — your message is <em style="color:${C.goldDeep};">with Ella</em>.`,
    lead: "Thank you for getting in touch about an appointment. Ella has your enquiry and will reply personally, usually within 24 hours, to confirm availability and anything you would like to discuss first.",
    next: `If you would rather secure a time straight away, the live diary is on Fresha — every treatment, price and evening slot is there with instant confirmation. New to lash or brow tints? Add a complimentary patch test at least 24 hours before.`,
    cta: { label: "Open the Fresha diary", href: SITE.bookingUrl },
  },
  bridal: {
    subject: "Your bridal & events enquiry — Ella’s Beauty",
    eyebrow: "Bridal & events",
    heading: `Congratulations — and <em style="color:${C.goldDeep};">thank you</em>.`,
    lead: "Thank you for thinking of Ella for your special day. She has your enquiry and will reply personally, usually within 24 hours, to talk through dates, trials and whether you would like her at the salon or on location.",
    next: "Bridal and group bookings are planned by hand rather than through the online diary, so there is nothing more you need to do for now. If anything changes in the meantime, simply reply to this email.",
  },
  mobile: {
    subject: "Your mobile appointment enquiry — Ella’s Beauty",
    eyebrow: "Mobile appointment",
    heading: `The same standard, <em style="color:${C.goldDeep};">at your address</em>.`,
    lead: "Thank you for your enquiry about a mobile appointment. Ella has your message and will reply personally, usually within 24 hours, to confirm your area, timing and the treatments you would like.",
    next: `Mobile visits across London carry a small travel fee on top of the salon price, and Ella will confirm the exact figure with you before anything is booked. If you would prefer the salon, the Fresha diary is always open.`,
    cta: { label: "Browse treatments", href: `${SITE.url}/services` },
  },
  academy: {
    subject: "Your training enquiry — Ella’s Beauty Academy",
    eyebrow: "Academy & training",
    heading: `Welcome — your journey <em style="color:${C.goldDeep};">starts here</em>.`,
    lead: "Thank you for your interest in training with Ella. She has your enquiry and will reply personally, usually within 24 hours, with course details, dates and how one-to-one mentoring works.",
    next: "In the meantime you can see Ella’s own work and credentials on the website — every certificate, award and masterclass that goes into what she teaches.",
    cta: { label: "About Ella", href: `${SITE.url}/about` },
  },
  general: {
    subject: "Thank you for your message — Ella’s Beauty",
    eyebrow: "Message received",
    heading: `Thank you — your message is <em style="color:${C.goldDeep};">with Ella</em>.`,
    lead: "Thank you for getting in touch. Ella has your message and will reply personally, usually within 24 hours.",
    next: "If it is quicker, you are always welcome to message Ella on WhatsApp — or browse the treatment menu while you wait.",
    cta: { label: "Message on WhatsApp", href: SITE.social.whatsapp.url },
  },
};

export function acknowledgement(enquiry: Enquiry) {
  const copy = ACK_COPY[enquiry.type];
  const name = firstName(enquiry.name);

  const body = `
    ${eyebrow(copy.eyebrow)}
    ${heading(copy.heading)}
    ${para(`Dear ${esc(name)},`)}
    ${para(esc(copy.lead))}
    ${para(esc(copy.next))}
    ${copy.cta ? button(copy.cta.label, copy.cta.href) : ""}
    ${rule()}
    ${eyebrow("A copy of your message")}
    <blockquote style="margin:0 0 6px;padding:18px 22px;border-left:3px solid ${C.gold};background:${C.ivory};border-radius:0 18px 18px 0;font-family:${SERIF};font-size:18px;line-height:1.55;color:${C.ink};">${nl2br(enquiry.message)}</blockquote>
    <p style="margin:8px 0 0;font-family:${SANS};font-size:12px;color:${C.muted};">${esc(ENQUIRY_TYPES[enquiry.type])}${enquiry.preferredDate ? ` · preferred date: ${esc(enquiry.preferredDate)}` : ""} · sent ${esc(formatDate(enquiry.submittedAt))}</p>
    ${rule()}
    ${para(`With love,`)}
    <p style="margin:-6px 0 0;font-family:${SERIF};font-style:italic;font-size:30px;line-height:1;color:${C.goldDeep};">Ella</p>
    <p style="margin:10px 0 0;font-family:${SANS};font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:${C.muted};">${esc(SITE.founder.role)}</p>
  `;

  const html = shell({
    preheader: `${copy.lead.slice(0, 110)}…`,
    body,
    footerNote: `You are receiving this because you contacted ${esc(SITE.name)} through ${esc(SITE.domain)}. Simply reply to this email to reach Ella.`,
  });

  const text = [
    `Dear ${name},`,
    ``,
    copy.lead,
    ``,
    copy.next,
    copy.cta ? `\n${copy.cta.label}: ${copy.cta.href}` : null,
    ``,
    `— A copy of your message —`,
    enquiry.message,
    ``,
    `With love,`,
    `Ella`,
    SITE.founder.role,
    ``,
    `${SITE.name} · ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.postalCode}`,
    `${SITE.phone.display} · ${SITE.email} · ${SITE.url}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject: copy.subject, html, text };
}
