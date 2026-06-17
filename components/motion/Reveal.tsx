"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easePremium, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Scroll-triggered fade + rise. Animates once when it enters the viewport. */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: easePremium, delay }}
    >
      {children}
    </motion.div>
  );
}
