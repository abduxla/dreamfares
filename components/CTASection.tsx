import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import {
  telHref,
  contact,
  whatsappHref,
  defaultWhatsappMessage,
} from "@/lib/site";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-14 text-center shadow-card sm:px-12 lg:py-20">
          <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="heading-display text-3xl text-white sm:text-4xl">
              Ready to plan your dream escape?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Chat with our friendly travel team today and secure your exclusive
              holiday deal — flights, hotels and experiences sorted.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappHref(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={telHref}
                className="btn bg-white text-brand-700 shadow-soft hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
