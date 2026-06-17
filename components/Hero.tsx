"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { heroImage } from "@/lib/data";
import {
  whatsappHref,
  defaultWhatsappMessage,
  siteConfig,
} from "@/lib/site";
import { easePremium } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Aerial view of a tropical island getaway"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
      </div>

      <div className="container-px relative z-10 pt-28 pb-32 lg:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            Curated holidays from Australia
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            Exclusive holiday packages with flights, hotels and unforgettable
            experiences — handpicked for Australian travellers and matched to
            you with AI-powered deal finding.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/travel-deals" className="btn-gold">
              Explore Travel Deals
              <ArrowRight className="h-4 w-4" />
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

          {/* Featured price badge */}
          <motion.div
            variants={item}
            className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-2 pr-5 backdrop-blur-md"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500 text-ink">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="text-sm text-white/80">
              <span className="block font-semibold text-white">Bali, Indonesia</span>
              from{" "}
              <span className="font-bold text-gold-300">AUD $1,199</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border-2 border-white/40 p-1"
        >
          <span className="block h-1.5 w-1 rounded-full bg-white/70" />
        </motion.span>
      </div>
    </section>
  );
}
