import Image from "next/image";
import { MessageCircle, MapPin, Moon, Check } from "lucide-react";
import type { Deal } from "@/lib/data";
import { whatsappHref } from "@/lib/site";

export function DealCard({ deal }: { deal: Deal }) {
  const message = `Hi Dreamfares! I'm interested in the "${deal.title}" (${deal.nights} nights) package from AUD $${deal.price.toLocaleString()}. Could you share availability?`;

  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-card">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-70" />
        <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-ink shadow-soft">
          Save {deal.save}%
        </span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <Moon className="h-3 w-3" />
          {deal.nights} nights
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
          <MapPin className="h-3.5 w-3.5" />
          {deal.location}
        </p>
        <h3 className="mt-2 text-xl font-bold text-ink">{deal.title}</h3>
        <p className="mt-1.5 text-sm text-ink-muted">{deal.summary}</p>

        <ul className="mt-4 grid grid-cols-1 gap-1.5">
          {deal.inclusions.map((inc) => (
            <li key={inc} className="flex items-center gap-2 text-sm text-ink-soft">
              <Check className="h-4 w-4 shrink-0 text-brand-500" />
              {inc}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between pt-6">
          <div>
            <span className="block text-xs text-ink-muted line-through">
              ${deal.originalPrice.toLocaleString()}
            </span>
            <span className="text-2xl font-extrabold text-ink">
              ${deal.price.toLocaleString()}
            </span>
            <span className="ml-1 text-xs font-medium text-ink-muted">AUD pp</span>
          </div>
        </div>

        <a
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4 w-full"
        >
          <MessageCircle className="h-4 w-4" />
          Enquire Now
        </a>
      </div>
    </article>
  );
}
