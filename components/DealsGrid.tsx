"use client";

import { motion } from "framer-motion";
import { DealCard } from "@/components/DealCard";
import type { Deal } from "@/lib/data";
import { stagger, cardIn, viewportOnce } from "@/lib/motion";

export function DealsGrid({ deals }: { deals: Deal[] }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {deals.map((deal) => (
        <motion.div key={deal.slug} variants={cardIn} className="h-full">
          <DealCard deal={deal} />
        </motion.div>
      ))}
    </motion.div>
  );
}
