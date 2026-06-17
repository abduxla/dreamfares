"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations, regions } from "@/lib/data";
import { cardIn, viewportOnce } from "@/lib/motion";

export function DestinationsGrid() {
  const [region, setRegion] = useState("All Regions");

  const filtered = useMemo(
    () =>
      region === "All Regions"
        ? destinations
        : destinations.filter((d) => d.region === region),
    [region],
  );

  return (
    <div>
      {/* Region filters */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {regions.map((r) => {
          const active = r === region;
          return (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active
                  ? "bg-brand-600 text-white shadow-glow"
                  : "border border-ink/10 bg-white text-ink-soft hover:border-brand-500/40 hover:text-brand-700"
              }`}
            >
              {r}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((destination) => (
            <motion.div
              key={destination.name}
              layout
              variants={cardIn}
              initial="hidden"
              whileInView="visible"
              exit={{ opacity: 0, scale: 0.96 }}
              viewport={viewportOnce}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
