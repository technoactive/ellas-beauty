import { BookButton } from "@/components/ui/book-button";
import { formatPrice, type Service } from "@/lib/services";

export function ServiceMenu({ services }: { services: Service[] }) {
  return (
    <div className="divide-y divide-gold/15 overflow-hidden rounded-[1.4rem] gold-border bg-[#fffdf8]">
      {services.map((service) => (
        <article
          key={service.id}
          className="grid gap-3 px-5 py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:px-8"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-serif text-2xl text-ink">{service.name}</h3>
              {service.popular ? (
                <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.62rem] tracking-[0.18em] text-gold-deep uppercase">
                  Most booked
                </span>
              ) : null}
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
              {service.description}
            </p>
            <p className="mt-3 text-xs tracking-[0.2em] text-gold-deep uppercase">
              {service.duration}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
            <p className="font-serif text-3xl text-ink">{formatPrice(service.price)}</p>
            <BookButton className="px-5 py-2 text-[0.7rem]" />
          </div>
        </article>
      ))}
    </div>
  );
}
