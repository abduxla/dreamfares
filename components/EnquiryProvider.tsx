"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { whatsappHref, messengerHref, defaultWhatsappMessage } from "@/lib/site";
import { easePremium } from "@/lib/motion";

interface EnquiryContextValue {
  open: (message?: string) => void;
}

const EnquiryContext = createContext<EnquiryContextValue>({ open: () => {} });

export function useEnquiry() {
  return useContext(EnquiryContext);
}

/**
 * App-wide enquiry router. Any CTA can call `open(message)` to present a popup
 * that lets the traveller choose WhatsApp or Messenger; the choice opens the
 * matching chat (WhatsApp with the message pre-filled).
 */
export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const isOpen = message !== null;

  const open = useCallback((msg?: string) => setMessage(msg ?? defaultWhatsappMessage), []);
  const close = useCallback(() => setMessage(null), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const go = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };

  return (
    <EnquiryContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Continue your enquiry"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.32, ease: easePremium }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-navy-850 p-7 shadow-card"
            >
              <div className="orb -right-16 -top-16 h-40 w-40 bg-brand-500/25" aria-hidden />
              <button
                aria-label="Close"
                onClick={close}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-muted transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative">
                <h3 className="text-xl font-bold text-white">Continue your enquiry</h3>
                <p className="mt-1.5 text-sm text-ink-muted">
                  How would you like to chat with our travel team?
                </p>

                <div className="mt-6 grid gap-3">
                  <button
                    onClick={() => go(whatsappHref(message ?? defaultWhatsappMessage))}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-grass-400/50 hover:bg-grass-500/10"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-grass-500 to-grass-600 text-white shadow-glow-green">
                      <MessageCircle className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">WhatsApp</span>
                      <span className="block text-sm text-ink-muted">Fastest reply, message pre-filled</span>
                    </span>
                  </button>

                  <button
                    onClick={() => go(messengerHref)}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-500/10"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-glow">
                      <MessengerGlyph className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">Messenger</span>
                      <span className="block text-sm text-ink-muted">Chat with us on Facebook</span>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryContext.Provider>
  );
}

function MessengerGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.3 2 2 6.2 2 11.7c0 2.9 1.2 5.4 3.1 7.1.2.1.3.4.3.6l.1 1.9c0 .6.6 1 1.2.8l2.1-.9c.2-.1.4-.1.6 0 .9.3 1.9.4 2.5.4 5.7 0 10-4.2 10-9.7C22 6.2 17.7 2 12 2zm6 7.5-2.9 4.6c-.5.7-1.5.9-2.1.4l-2.3-1.7c-.2-.2-.5-.2-.8 0l-3.1 2.4c-.4.3-1-.2-.7-.7l2.9-4.6c.5-.7 1.5-.9 2.1-.4l2.3 1.7c.2.2.5.2.8 0l3.1-2.4c.4-.3 1 .2.7.7z" />
    </svg>
  );
}
