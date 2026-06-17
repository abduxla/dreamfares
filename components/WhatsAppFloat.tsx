"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappHref, defaultWhatsappMessage } from "@/lib/site";
import { easePremium } from "@/lib/motion";

/** Floating WhatsApp button that fades in after the user scrolls a little. */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappHref(defaultWhatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.4, ease: easePremium }}
          className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" aria-hidden />
          <MessageCircle className="relative h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
