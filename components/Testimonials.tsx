"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Review } from "@/lib/data";
import { stagger, cardIn, viewportOnce } from "@/lib/motion";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-gold-400 text-gold-400" : "text-ink/15"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials({ reviews }: { reviews: Review[] }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {reviews.map((review) => (
        <motion.figure
          key={`${review.name}-${review.trip}`}
          variants={cardIn}
          className="card relative flex h-full flex-col p-7"
        >
          <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-100" />
          <Stars rating={review.rating} />
          <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
            “{review.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
              {review.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span>
              <span className="block text-sm font-bold text-ink">{review.name}</span>
              <span className="block text-xs text-ink-muted">{review.trip} traveller</span>
            </span>
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}
