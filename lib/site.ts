/**
 * Central site configuration: brand, navigation, and all contact / CTA logic.
 * Contact values fall back to the production details but can be overridden
 * with NEXT_PUBLIC_* environment variables (see .env.example).
 */

export const siteConfig = {
  name: "Dreamfares",
  legalName: "Dreamfares PTY LTD",
  tagline: "Find Your Dream Escape",
  description:
    "A premium travel marketplace offering curated international holiday packages from Australia with AI-powered deal matching and dedicated travel assistance.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dreamfares.com.au",
  location: "Melbourne, Australia",
};

export const contact = {
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(03) 9003 0609",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 ?? "+61390030609",
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ?? "0485 864 978",
  whatsappE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "61485864978",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "Support@dreamfares.com.au",
  location: "Melbourne, Australia",
};

export const social = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/",
  trustpilot: process.env.NEXT_PUBLIC_TRUSTPILOT_URL ?? "https://www.trustpilot.com/",
};

/** Primary navigation, in the same order as the source site. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Travel Deals", href: "/travel-deals" },
  { label: "Destinations", href: "/destinations" },
  { label: "AI Deal Finder", href: "/ai-deal-finder" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Click-to-call link. */
export const telHref = `tel:${contact.phoneE164}`;

/** Email link with a friendly default subject. */
export const mailHref = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Holiday enquiry — Dreamfares",
)}`;

/** Google Maps link for the business location. */
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Dreamfares PTY LTD, Melbourne, Australia",
)}`;

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${contact.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsappMessage =
  "Hi Dreamfares! I'd love some help finding the perfect holiday package.";
