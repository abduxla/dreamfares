import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { DealsGrid } from "@/components/DealsGrid";
import { AIFinderTeaser } from "@/components/AIFinderTeaser";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Skyline } from "@/components/Skyline";
import { Reveal } from "@/components/motion/Reveal";
import { deals, reviews } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured destinations */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Popular destinations"
              title="Explore the world from Australia"
              description="Handpicked destinations loved by Australian travellers — from tropical beaches to alpine escapes."
            />
            <Reveal delay={0.1}>
              <Link href="/destinations" className="btn-ghost shrink-0">
                View all destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <FeaturedDestinations />
        </div>
      </section>

      {/* Featured deals */}
      <section className="section relative overflow-hidden">
        <Skyline className="pointer-events-none absolute inset-x-0 top-0 h-32 w-full text-brand-300/10" />
        <div className="container-px relative">
          <SectionHeading
            eyebrow="Featured deals"
            title="Exclusive Holiday Packages"
            description="Hand-picked deals with the best value for Australian travellers. Prices are per person in AUD."
          />
          <div className="mt-12">
            <DealsGrid deals={deals} />
          </div>
          <Reveal delay={0.1} className="mt-12 flex justify-center">
            <Link href="/travel-deals" className="btn-primary">
              See all travel deals
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <AIFinderTeaser />

      {/* Testimonials */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Reviews"
            title="Loved by Australian travellers"
            description="Real experiences from real travellers who booked their holiday with Dreamfares."
          />
          <div className="mt-12">
            <Testimonials reviews={reviews.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
