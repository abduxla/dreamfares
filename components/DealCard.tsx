import Image from "next/image";
import { Plane, Clock, Star } from "lucide-react";
import type { Deal } from "@/lib/data";
import { DealActions } from "@/components/DealActions";

export function DealCard({ deal }: { deal: Deal }) {
  const message = `Hi Dreamfares! I'm interested in the "${deal.title}" (${deal.nights} nights) package from AUD $${deal.price.toLocaleString()}. Could you share availability?`;

  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:border-brand-400/40 hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {deal.limited && (
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-soft">
              <Clock className="h-3 w-3" />
              Limited Time
            </span>
          )}
          <span className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-2.5 py-1 text-[11px] font-bold text-navy-950 shadow-soft">
            Save {deal.save}%
          </span>
        </div>
        {deal.featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-500/90 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-extrabold text-white">{deal.short}</h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-azure-300">
            <Plane className="h-3.5 w-3.5 -rotate-45" />
            {deal.nights}N
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-ink-soft">
          {deal.nights} Nights {deal.title}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">{deal.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {deal.inclusions.map((inc) => (
            <span
              key={inc}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-ink-soft"
            >
              {inc}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-6">
          <div>
            <span className="text-xs text-ink-muted">From</span>
            <p className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-white">
                AUD ${deal.price.toLocaleString()}
              </span>
              <span className="text-sm text-ink-muted line-through">
                ${deal.originalPrice.toLocaleString()}
              </span>
            </p>
            <span className="text-xs text-ink-muted">per person</span>
          </div>
        </div>

        <DealActions message={message} />
      </div>
    </article>
  );
}
