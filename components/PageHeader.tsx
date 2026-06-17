import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}

/**
 * Compact dark page header for inner pages. The top padding clears the
 * fixed navbar, and the dark background keeps the nav links legible.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-ink pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
        aria-hidden
      />
      <div className="container-px relative">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow text-brand-300">
              <span className="h-px w-6 bg-current opacity-60" />
              {eyebrow}
            </span>
          )}
          <h1 className="heading-display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
