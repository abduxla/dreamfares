import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { DealsGrid } from "@/components/DealsGrid";
import { CTASection } from "@/components/CTASection";
import { deals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Travel Deals",
  description:
    "Exclusive, limited-time holiday packages from Australia — flights, hotels and experiences included. Save up to 27% on curated international getaways.",
};

export default function TravelDealsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Travel Deals"
        title="Exclusive holiday packages"
        description="Curated international packages with flights, hotels and experiences included — all at exclusive negotiated rates. Prices are per person in AUD."
      />
      <section className="section">
        <div className="container-px">
          <DealsGrid deals={deals} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
