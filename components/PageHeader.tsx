import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Skyline } from "@/components/Skyline";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}

/**
 * Compact dark page header for inner pages. The top padding clears the fixed
 * navbar; abstract orbs + a faint landmark skyline add depth.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/5 bg-navy-950 pb-20 pt-36 lg:pb-24 lg:pt-44">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="orb -right-24 -top-24 h-80 w-80 animate-float bg-brand-600/25" aria-hidden />
      <div className="orb -bottom-28 left-10 h-72 w-72 animate-float-slow bg-violet-500/15" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,107,255,0.18),transparent_60%)]" aria-hidden />

      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-brand-300/15" />

      <div className="container-px relative">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {eyebrow}
            </span>
          )}
          <h1 className="heading-display mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
