import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { TrustBadges } from "@/components/TrustBadges";
import {
  navLinks,
  contact,
  social,
  telHref,
  mailHref,
  mapsHref,
  whatsappHref,
  defaultWhatsappMessage,
  siteConfig,
} from "@/lib/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="orb -left-24 bottom-0 h-72 w-72 bg-brand-600/15" aria-hidden />
      <div className="orb -right-24 top-0 h-72 w-72 bg-violet-500/10" aria-hidden />

      {/* Accreditation band */}
      <div className="container-px relative border-b border-white/10 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Accredited &amp; trusted
          </p>
          <TrustBadges className="justify-center" />
        </div>
      </div>

      <div className="container-px relative grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <Logo className="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dreamfares on Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-400 hover:bg-brand-500/15 hover:text-brand-300"
            >
              <Facebook className="h-[18px] w-[18px]" />
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dreamfares on Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-pink-400 hover:bg-pink-500/15 hover:text-pink-300"
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href={contact.messenger}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dreamfares on Messenger"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-400 hover:bg-brand-500/15 hover:text-brand-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
                <path d="M12 2C6.3 2 2 6.2 2 11.7c0 2.9 1.2 5.4 3.1 7.1.2.1.3.4.3.6l.1 1.9c0 .6.6 1 1.2.8l2.1-.9c.2-.1.4-.1.6 0 .9.3 1.9.4 2.5.4 5.7 0 10-4.2 10-9.7C22 6.2 17.7 2 12 2zm6 7.5-2.9 4.6c-.5.7-1.5.9-2.1.4l-2.3-1.7c-.2-.2-.5-.2-.8 0l-3.1 2.4c-.4.3-1-.2-.7-.7l2.9-4.6c.5-.7 1.5-.9 2.1-.4l2.3 1.7c.2.2.5.2.8 0l3.1-2.4c.4-.3 1 .2.7.7z" />
              </svg>
            </a>
            <a
              href={social.trustpilot}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dreamfares on Trustpilot"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-grass-400 hover:text-grass-300"
            >
              <Star className="h-4 w-4 fill-current text-gold-400" />
              Trustpilot
            </a>
          </div>
        </div>

        {/* Pages */}
        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-muted transition-colors hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={telHref} className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-[18px] w-[18px] text-brand-300" />
                <span className="text-ink-muted transition-colors group-hover:text-white">
                  {contact.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a
                href={whatsappHref(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <MessageCircle className="mt-0.5 h-[18px] w-[18px] text-grass-400" />
                <span className="text-ink-muted transition-colors group-hover:text-white">
                  {contact.whatsappDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={mailHref} className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-[18px] w-[18px] text-brand-300" />
                <span className="break-all text-ink-muted transition-colors group-hover:text-white">
                  {contact.email}
                </span>
              </a>
            </li>
            <li>
              <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                <MapPin className="mt-0.5 h-[18px] w-[18px] text-brand-300" />
                <span className="text-ink-muted transition-colors group-hover:text-white">
                  {contact.address}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-muted sm:flex-row">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>Curated international holiday packages from Australia.</p>
        </div>
      </div>
    </footer>
  );
}
