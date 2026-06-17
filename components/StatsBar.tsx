"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { stagger, cardIn, viewportOnce } from "@/lib/motion";

export function StatsBar() {
  return (
    <div className="container-px -mt-16 relative z-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-3 divide-x divide-ink/10 overflow-hidden rounded-3xl border border-ink/[0.06] bg-white/95 shadow-card backdrop-blur"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={cardIn}
            className="flex flex-col items-center gap-1 px-3 py-7 text-center sm:py-9"
          >
            <span className="text-2xl font-extrabold text-brand-700 sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium text-ink-muted sm:text-sm">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
