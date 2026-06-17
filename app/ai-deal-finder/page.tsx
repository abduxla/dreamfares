import type { Metadata } from "next";
import { Sparkles, Wallet, Compass, Headphones } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AIFinderForm } from "@/components/AIFinderForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "AI Deal Finder",
  description:
    "Tell us your preferences and our AI will match you with the perfect holiday package — tailored to your budget, dates and travel style.",
};

const steps = [
  {
    icon: Wallet,
    title: "Set your budget",
    text: "Share your price per person and we'll tailor options that fit.",
  },
  {
    icon: Compass,
    title: "Share preferences",
    text: "Destination, travel month and trip length — the more, the better.",
  },
  {
    icon: Headphones,
    title: "Get matched",
    text: "Our team reviews your details and sends tailored packages over WhatsApp.",
  },
];

export default function AIDealFinderPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Deal Finder"
        title="Smart Travel Deal Finder"
        description="Tell us your preferences and our AI will match you with the perfect holiday package."
      />
      <section className="section">
        <div className="container-px grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              How it works
            </span>
            <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
              Personalised packages in three simple steps
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              The more detail you share, the sharper your matches. It only takes
              a minute.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-ink">
                      <span className="text-sm text-brand-500">0{i + 1}</span>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AIFinderForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
