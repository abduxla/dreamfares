import Link from "next/link";
import { Sparkles, Wallet, Compass, Headphones, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const points = [
  { icon: Wallet, title: "Set your budget", text: "Tell us your price per person and we'll work within it." },
  { icon: Compass, title: "Share preferences", text: "Destination, dates and trip style — the more, the better." },
  { icon: Headphones, title: "Get matched", text: "Our team and AI return tailored packages, fast." },
];

export function AIFinderTeaser() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-navy-850 to-navy-950 px-6 py-14 text-white shadow-card sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div
            className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
            aria-hidden
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow text-brand-300">
                <Sparkles className="h-3.5 w-3.5" />
                AI Deal Finder
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Let our AI find your perfect holiday package
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
                Tell us your preferences and our AI will match you with the
                perfect holiday package — tailored to your budget, dates and
                travel style.
              </p>
              <Link href="/ai-deal-finder" className="btn-gold mt-8">
                Try the Deal Finder
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="space-y-4">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:border-brand-400/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-300">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
