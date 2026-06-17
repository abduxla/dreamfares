import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Backdrop } from "@/components/Backdrop";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { GetQuote } from "@/components/GetQuote";
import { siteConfig, contact, social } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "travel packages Australia",
    "holiday deals",
    "Bali holidays",
    "Maldives packages",
    "Japan tours",
    "Dubai holidays",
    "international travel agency Melbourne",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: contact.email,
  telephone: contact.phoneE164,
  areaServed: "AU",
  address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressCountry: "AU" },
  sameAs: [social.facebook, social.trustpilot],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={jakarta.variable}>
      <body className="min-h-screen bg-navy-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Backdrop />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <GetQuote />
      </body>
    </html>
  );
}
