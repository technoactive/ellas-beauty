import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.9a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.6 2.8.5.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.7h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z" />
      <path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a6 6 0 0 1-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
      <path d="M6.4 13.9A6 6 0 0 1 6.4 10V7.5H3.1a10 10 0 0 0 0 9l3.3-2.6Z" />
      <path d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5L6.4 10A6 6 0 0 1 12 6Z" />
    </svg>
  );
}

const items = [
  { key: "whatsapp", Icon: WhatsAppIcon, ...SITE.social.whatsapp },
  { key: "instagram", Icon: InstagramIcon, ...SITE.social.instagram },
  { key: "google", Icon: GoogleIcon, ...SITE.social.google },
];

export function SocialLinks({
  className,
  showLabels = false,
  size = "md",
}: {
  className?: string;
  showLabels?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map(({ key, Icon, label, handle, url }) => (
        <li key={key}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label}: ${handle}`}
            className={cn(
              "gold-panel group inline-flex items-center gap-3 rounded-full text-gold-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_rgba(140,106,36,0.7)]",
              size === "lg" ? "px-5 py-3" : "px-4 py-2.5",
              !showLabels && (size === "lg" ? "size-12 justify-center px-0 py-0" : "size-11 justify-center px-0 py-0"),
            )}
          >
            <Icon className={size === "lg" ? "size-5" : "size-[1.1rem]"} />
            {showLabels ? (
              <span className="text-[0.66rem] tracking-[0.26em] uppercase">{label}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
