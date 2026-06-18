"use client";

import { useState, type ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

/**
 * Accreditation / trust badges. Each slot shows an official asset if you drop
 * one into /public (iata-tids.png, aus-badge.png) and otherwise renders a
 * neutral, on-brand text badge.
 *
 * Note: per IATA rules, TIDS holders may only display the official TIDS
 * Recognition Stamp issued to them — not the IATA logo. Add that stamp as
 * /public/iata-tids.png to show it here.
 */
function BadgeSlot({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
}) {
  const [ok, setOk] = useState(true);
  if (!ok) return <>{fallback}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setOk(false)}
      className="h-16 w-auto rounded-xl bg-white object-contain p-2 shadow-soft"
    />
  );
}

function SouthernCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
      <circle cx="6" cy="11" r="1.4" />
      <circle cx="18" cy="10" r="1.4" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="16" cy="18" r="1.1" />
    </svg>
  );
}

const pill =
  "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3";

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <BadgeSlot
        src="/iata-tids.png"
        alt="Registered with IATA TIDS"
        fallback={
          <div className={pill}>
            <ShieldCheck className="h-8 w-8 text-azure-300" />
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">Registered with</p>
              <p className="text-base font-extrabold text-white">IATA TIDS</p>
            </div>
          </div>
        }
      />
      <BadgeSlot
        src="/aus-badge.png"
        alt="Proudly Australian travel company"
        fallback={
          <div className={pill}>
            <SouthernCross className="h-8 w-8 text-gold-400" />
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">Proudly</p>
              <p className="text-base font-extrabold text-white">Australian Travel Co.</p>
            </div>
          </div>
        }
      />
    </div>
  );
}
