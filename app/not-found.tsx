import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-ink px-6 text-center text-white">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" aria-hidden />
      <div
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl"
        aria-hidden
      />
      <div className="relative max-w-md">
        <p className="text-7xl font-extrabold text-gold-400">404</p>
        <h1 className="heading-display mt-4 text-3xl text-white">
          This destination isn&apos;t on the map
        </h1>
        <p className="mt-3 text-white/70">
          The page you&apos;re looking for has wandered off. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-gold">
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <Link href="/destinations" className="btn-ghost border-white/20 bg-white/10 text-white">
            <Compass className="h-4 w-4" />
            Browse destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
