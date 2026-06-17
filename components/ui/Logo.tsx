"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Brand logo. Renders /logo.png if present (drop your supplied logo there) and
 * automatically falls back to the bundled /logo.svg recreation otherwise.
 */
export function Logo({ className = "h-14 w-auto sm:h-16" }: { className?: string }) {
  const [src, setSrc] = useState("/logo.png");
  return (
    <Link href="/" aria-label="Dream Fares — home" className="inline-flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        onError={() => setSrc("/logo.svg")}
        alt="Dream Fares"
        width={220}
        height={64}
        className={className}
      />
    </Link>
  );
}
