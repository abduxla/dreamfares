import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import {
  contact,
  telHref,
  mailHref,
  mapsHref,
  whatsappHref,
  defaultWhatsappMessage,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Dreamfares travel team. Call, WhatsApp or email us — we're based in Melbourne and ready to plan your next holiday.",
};

const methods = [
  {
    icon: Phone,
    label: "Call us",
    value: contact.phoneDisplay,
    href: telHref,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    href: whatsappHref(defaultWhatsappMessage),
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: mailHref,
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contact.location,
    href: mapsHref,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a question or ready to book? Reach out to our friendly travel team."
      />

      <section className="section">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          {/* Contact methods */}
          <Reveal>
            <h2 className="heading-display text-2xl sm:text-3xl">
              We&apos;d love to help plan your trip
            </h2>
            <p className="mt-3 text-ink-muted">
              {siteConfig.legalName} · {contact.location}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="card group flex items-start gap-4 p-5 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-brand-400/20 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      {m.label}
                    </span>
                    <span className="mt-1 block break-words font-semibold text-ink">
                      {m.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-ink/5 bg-sand p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500/15 text-brand-300 ring-1 ring-inset ring-brand-400/20">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">Friendly 7-day support</p>
                <p className="mt-1 text-sm text-ink-muted">
                  We&apos;re here before, during and after your trip — every day
                  of the week.
                </p>
              </div>
            </div>

            <a
              href={whatsappHref(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
