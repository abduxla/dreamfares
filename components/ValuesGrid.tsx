"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Globe2,
  Users,
  BadgeDollarSign,
  PlaneTakeoff,
} from "lucide-react";
import { values } from "@/lib/data";
import { stagger, cardIn, viewportOnce } from "@/lib/motion";

const icons = [ShieldCheck, HeartHandshake, Globe2, Users, BadgeDollarSign, PlaneTakeoff];

export function ValuesGrid() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {values.map((value, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={value.title}
            variants={cardIn}
            className="card group p-7 hover:-translate-y-1.5 hover:shadow-card"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{value.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {value.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
