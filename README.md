# Dreamfares — Premium Travel Marketplace

A premium travel-agency marketplace offering curated international holiday
packages from Australia, with AI-powered deal matching and dedicated travel
assistance.

Built with a modern, performance-first stack and fully responsive, premium
travel-agency aesthetics — smooth transitions, luxury spacing and refined
microinteractions.

## ✨ Tech Stack

- **[Next.js 14](https://nextjs.org/)** — App Router, Server Components, image optimization
- **[TypeScript](https://www.typescriptlang.org/)** — fully typed
- **[Tailwind CSS](https://tailwindcss.com/)** — design system & responsive layout
- **[Framer Motion](https://www.framer.com/motion/)** — Apple-level transitions & scroll reveals
- **[lucide-react](https://lucide.dev/)** — crisp, lightweight icons
- **next/font** — self-hosted Plus Jakarta Sans (zero layout shift)

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. (optional) configure environment
cp .env.example .env.local   # then edit values

# 3. Run the dev server
npm run dev          # http://localhost:3000
```

### Production

```bash
npm run build
npm run start        # serves the optimized production build
```

> **Note:** If your machine sits behind a TLS-intercepting proxy/antivirus and
> `npm install` fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, run Node with the
> system certificate store: `NODE_OPTIONS=--use-system-ca npm install`.

## 📁 Project Structure

```
dreamfares-au/
├─ app/                 # Routes (App Router) + SEO (sitemap, robots, metadata)
│  ├─ page.tsx          # Home
│  ├─ travel-deals/     # Travel Deals
│  ├─ destinations/     # Destinations (filterable)
│  ├─ ai-deal-finder/   # AI Deal Finder (preferences form)
│  ├─ reviews/          # Traveller reviews
│  ├─ about/            # About
│  ├─ contact/          # Contact (enquiry form)
│  └─ layout.tsx        # Root layout, fonts, metadata, JSON-LD
├─ components/          # UI components (Hero, cards, grids, forms, nav, footer)
│  ├─ motion/           # Reusable Framer Motion primitives
│  └─ ui/               # Small presentational atoms (Logo, …)
├─ lib/                 # Data + site config + motion variants
│  ├─ data.ts           # Deals, destinations, reviews, stats, values
│  ├─ site.ts           # Brand, navigation & contact/CTA logic
│  └─ motion.ts         # Shared animation variants
├─ public/              # Static assets
├─ styles/              # Global stylesheet (Tailwind layers)
└─ …config files
```

## 📞 Clickable Contact Actions

All contact CTAs are real, working links and centralised in
[`lib/site.ts`](lib/site.ts):

| Action      | Link                                            |
| ----------- | ----------------------------------------------- |
| Phone       | `tel:` click-to-call                            |
| Email       | `mailto:` with a pre-filled subject             |
| WhatsApp    | `wa.me` deep links with pre-filled messages     |
| Address     | Google Maps redirect                            |
| Social      | Facebook & Trustpilot (open in a new tab)       |

The contact and AI Deal Finder forms require no backend — submissions compose a
pre-filled WhatsApp message (with an email fallback), so the site is fully
static and deploy-ready.

## ⚙️ Configuration

All brand and contact details can be overridden via environment variables — see
[`.env.example`](.env.example). Sensible production defaults are baked in, so the
app runs with no configuration.

## 🔍 Performance & SEO

- `next/image` with AVIF/WebP, responsive `sizes` and lazy loading
- `next/font` self-hosting (no render-blocking font requests)
- Per-page metadata, Open Graph & Twitter cards
- `sitemap.xml`, `robots.txt` and `TravelAgency` JSON-LD structured data
- `prefers-reduced-motion` respected throughout

## 🚢 Deployment

Optimised for [Vercel](https://vercel.com/) (zero-config) but runs anywhere that
supports a Node.js server via `npm run build && npm run start`.

---

© Dreamfares PTY LTD. Curated international holiday packages from Australia.
