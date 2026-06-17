import Link from "next/link";
import { Plane } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className="group inline-flex items-center gap-2.5"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:-rotate-6">
        <Plane className="h-5 w-5 -rotate-45" strokeWidth={2.2} />
      </span>
      <span
        className={`text-xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Dream<span className="text-brand-500">fares</span>
      </span>
    </Link>
  );
}
