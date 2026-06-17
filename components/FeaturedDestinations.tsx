"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredDestinations } from "@/lib/data";
import { stagger, cardIn, viewportOnce } from "@/lib/motion";

export function FeaturedDestinations() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3"
    >
      {featuredDestinations.map((dest, i) => (
        <motion.div
          key={dest.name}
          variants={cardIn}
          className={`group relative overflow-hidden rounded-3xl border border-white/10 shadow-soft transition-all duration-500 hover:border-brand-400/40 ${
            i === 0 ? "col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-[4/5]" : "aspect-[4/5]"
          }`}
        >
          <Link href="/destinations" className="block h-full w-full">
            <Image
              src={dest.image}
              alt={`${dest.name}, ${dest.country}`}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">{dest.name}</h3>
                <p className="text-sm text-white/75">{dest.country}</p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-transform duration-300 group-hover:-translate-y-1">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
