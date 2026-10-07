# Ella’s Beauty — ellas-beauty.co.uk

Marketing site for Ella’s Beauty (lashes, brows, skin & make-up, West Hampstead / mobile across London). Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and `motion`.

## Develop

```bash
npm install
cp .env.example .env.local   # then fill in the keys below
npm run dev                  # http://localhost:3000
```

`npm run lint`, `npx tsc --noEmit` and `npm run build` should all pass before pushing.

## Environment

| Variable         | Purpose                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY` | Sends the contact-form emails via [Resend](https://resend.com). Required in production. |

The sending domain `ellas-beauty.co.uk` is verified in Resend.

## Contact form email flow

1. A client submits the form on `/contact` → server action `src/app/contact/actions.ts` (validation, honeypot, light rate-limit).
2. **Enquiry → Ella**: sent from `Ella’s Beauty Website <website@ellas-beauty.co.uk>` to `contact@ellas-beauty.co.uk`, with *reply-to* set to the client so Ella can answer straight from her inbox.
3. **Acknowledgement → client**: sent from `Ella’s Beauty <contact@ellas-beauty.co.uk>`; copy adapts to the enquiry type (booking, bridal & events, mobile, academy, other).

Templates live in `src/lib/email/templates.ts` (branded HTML + plain-text); sender identities are in `SITE.mail` (`src/lib/site.ts`).

## Content

All business copy, contact details, treatments, reviews, awards and photos are configured in `src/lib/` (`site.ts`, `services.ts`, `reviews.ts`, `faq.ts`). Optimised images live in `public/images/`; the brand monogram in `public/brand/`.
