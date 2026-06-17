import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DestinationsGrid } from "@/components/DestinationsGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore 19+ international destinations from Australia — from Bali and Japan to the Maldives, Dubai and Europe. Curated holiday packages for every traveller.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Destinations"
        title="Explore the world from Australia"
        description="Choose from 19+ international destinations with curated holiday packages, sorted by region. Tap any destination to start a WhatsApp enquiry."
      />
      <section className="section">
        <div className="container-px">
          <DestinationsGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
