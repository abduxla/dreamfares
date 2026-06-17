import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { reviews } from "@/lib/data";
import { social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Real experiences from real Australian travellers who booked with Dreamfares. Rated 4.9★ across 500+ happy travellers.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What our travellers say"
        description="Real experiences from real Australian travellers who booked with Dreamfares."
      />

      <section className="section">
        <div className="container-px">
          <Reveal className="mx-auto mb-12 flex max-w-md flex-col items-center gap-3 rounded-3xl border border-ink/5 bg-sand px-8 py-8 text-center shadow-soft">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-4xl font-extrabold text-ink">4.9 / 5</p>
            <p className="text-sm text-ink-muted">
              From 500+ happy travellers across 19+ destinations
            </p>
          </Reveal>

          <Testimonials reviews={reviews} />

          <Reveal delay={0.1} className="mt-12 text-center">
            <p className="text-ink-muted">
              Travelled with us? Share your experience on{" "}
              <a
                href={social.trustpilot}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-300 underline-offset-2 hover:underline"
              >
                Trustpilot
              </a>{" "}
              or{" "}
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-300 underline-offset-2 hover:underline"
              >
                Facebook
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
