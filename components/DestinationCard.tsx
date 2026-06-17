import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/lib/data";
import { whatsappHref } from "@/lib/site";

export function DestinationCard({ destination }: { destination: Destination }) {
  const message = `Hi Dreamfares! I'd like to explore holiday packages to ${destination.name} (from AUD $${destination.price.toLocaleString()}).`;

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-glow"
    >
      <Image
        src={destination.image}
        alt={`${destination.name} — ${destination.region}`}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />

      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
        {destination.region}
      </span>

      <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-brand-500/90 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-xl font-bold text-white">{destination.name}</h3>
        <p className="mt-1 text-sm text-white/80">
          From{" "}
          <span className="font-semibold text-gold-300">
            AUD ${destination.price.toLocaleString()}
          </span>
        </p>
      </div>
    </a>
  );
}
