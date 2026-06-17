import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { ValuesGrid } from "@/components/ValuesGrid";
import { Reveal } from "@/components/motion/Reveal";
import { stats, heroImage } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dreamfares is a Melbourne-based travel agency delivering premium international holiday packages for Australian travellers at exclusive, transparent prices.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Dreamfares"
        title="Your Gateway to the World"
        description="A Melbourne-based travel agency on a mission to make international travel accessible to every Australian."
      />

      {/* Story */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-card">
            <Image
              src={heroImage}
              alt="A breathtaking tropical destination"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Premium travel, made accessible"
            />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>
                Dreamfares was born from a passion for making international
                travel accessible to every Australian — delivering premium
                experiences at genuinely affordable prices.
              </p>
              <p>
                We partner directly with airlines, hotels and local operators
                across 19+ destinations to secure exclusive rates you won&apos;t
                find anywhere else — from Bali and Japan to the Maldives and
                beyond.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-ink/5 bg-sand p-4 text-center">
                  <p className="text-2xl font-extrabold text-brand-700">{stat.value}</p>
                  <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-sand">
        <div className="container-px">
          <SectionHeading
            eyebrow="The Dreamfares difference"
            title="Why travellers choose us"
            description="Every booking is backed by transparent pricing, expert support and a global network of trusted partners."
          />
          <ValuesGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
