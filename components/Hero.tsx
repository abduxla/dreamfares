"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { heroSlides, stats, featuredDestinations } from "@/lib/data";
import { whatsappHref, defaultWhatsappMessage } from "@/lib/site";
import { easePremium } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } },
};

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[i];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Rotating backgrounds */}
      <div className="absolute inset-0">
        {heroSlides.map((s, idx) => (
          <div
            key={s.place}
            className="absolute inset-0 transition-opacity duration-1000 ease-premium"
            style={{ opacity: idx === i ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.place}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`object-cover ${idx === i ? "animate-ken-burns" : ""}`}
            />
          </div>
        ))}
        {/* Blue-tinted cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/65 to-navy-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(53,107,255,0.22),transparent_55%)]" />
      </div>

      {/* Slide indicators */}
      <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {heroSlides.map((s, idx) => (
          <button
            key={s.place}
            aria-label={`Show ${s.place}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === i ? "h-8 bg-gold-400" : "bg-white/40 hover:bg-white/70"
            } w-2`}
          />
        ))}
      </div>

      <div className="container-px relative z-10 pt-28 pb-40 lg:pt-32">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">
          {/* Rotating price badge */}
          <AnimatePresence mode="wait">
            <motion.span
              key={slide.place}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-gold-400" />
              {slide.place} · from{" "}
              <span className="font-bold text-gold-300">${slide.from.toLocaleString()}</span>
            </motion.span>
          </AnimatePresence>

          <motion.span variants={item} className="mt-6 block">
            <span className="eyebrow text-azure-300">
              <Sparkles className="h-3.5 w-3.5" />
              {slide.tagline}
            </span>
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-3 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Find Your
            <span className="mt-1 block text-gold-gradient">Dream Escape</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Exclusive holiday packages including flights, hotels &amp; experiences —
            crafted for Australians who love to explore.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/travel-deals" className="btn-gold">
              Browse Deals
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ai-deal-finder" className="btn-ghost">
              <Sparkles className="h-4 w-4 text-azure-300" />
              AI Deal Finder
            </Link>
            <a
              href={whatsappHref(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-sm text-ink-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Destination filmstrip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: easePremium }}
        className="absolute inset-x-0 bottom-0 z-10"
      >
        <div className="container-px pb-5">
          <div className="mask-fade-x flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredDestinations.map((d) => (
              <Link
                key={d.name}
                href="/destinations"
                className="group relative h-20 w-32 shrink-0 overflow-hidden rounded-2xl border border-white/15 sm:h-24 sm:w-40"
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs font-semibold text-white">
                  {d.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
