/**
 * Content data for Dreamfares: hero slides, featured destinations, deals,
 * destinations, reviews, stats and brand values. Imagery is served from
 * Unsplash and optimized at request time by next/image.
 */

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const stats = [
  { value: "500+", label: "Happy Travellers" },
  { value: "19+", label: "Destinations" },
  { value: "4.9★", label: "Average Rating" },
];

export interface HeroSlide {
  place: string;
  tagline: string;
  from: number;
  image: string;
}

/** Rotating hero slides — background, eyebrow tagline and lead-in price. */
export const heroSlides: HeroSlide[] = [
  { place: "Phuket, Thailand", tagline: "Sun, Sea & Adventure", from: 899, image: img("1528181304800-259b08848526", 2000) },
  { place: "Bali, Indonesia", tagline: "Island Bliss Awaits", from: 1199, image: img("1537996194471-e657df975ab4", 2000) },
  { place: "Maldives", tagline: "Overwater Luxury", from: 3999, image: img("1514282401047-d79a71a590e8", 2000) },
  { place: "Tokyo, Japan", tagline: "Where Tradition Meets Future", from: 2999, image: img("1540959733332-eab4deabeeaf", 2000) },
  { place: "Dubai, UAE", tagline: "Desert Glamour", from: 1899, image: img("1512453979798-5ea266f8880c", 2000) },
];

export interface FeaturedDestination {
  name: string;
  country: string;
  image: string;
}

/** Six showcase tiles + hero filmstrip (matches the source ordering). */
export const featuredDestinations: FeaturedDestination[] = [
  { name: "Bali", country: "Indonesia", image: img("1573790387438-4da905039392") },
  { name: "Swiss Alps", country: "Switzerland", image: img("1531366936337-7c912a4589a7") },
  { name: "Kyoto", country: "Japan", image: img("1545569341-9eb8b30979d9") },
  { name: "Maldives", country: "Maldives", image: img("1514282401047-d79a71a590e8") },
  { name: "Phuket", country: "Thailand", image: img("1528181304800-259b08848526") },
  { name: "Norwegian Fjords", country: "Norway", image: img("1601439678777-b2b3c56fa627") },
];

export interface Deal {
  slug: string;
  short: string;
  title: string;
  location: string;
  nights: number;
  summary: string;
  inclusions: string[];
  price: number;
  originalPrice: number;
  save: number;
  image: string;
  featured?: boolean;
  limited?: boolean;
}

/** Featured holiday packages (home + Travel Deals page). */
export const deals: Deal[] = [
  {
    slug: "bali-paradise-package",
    short: "Bali",
    title: "Bali Paradise Package",
    location: "Bali, Indonesia",
    nights: 7,
    summary: "Flights + 4-star hotel in Seminyak with daily breakfast, airport transfers and a complimentary spa session. Perfect for couples.",
    inclusions: ["Return Flights", "4-Star Hotel", "Daily Breakfast"],
    price: 1199,
    originalPrice: 1599,
    save: 25,
    image: img("1537953773345-d172ccf13cf1"),
    featured: true,
    limited: true,
  },
  {
    slug: "maldives-luxury-water-villa",
    short: "Maldives",
    title: "Maldives Luxury Water Villa",
    location: "Maldives",
    nights: 6,
    summary: "The ultimate luxury escape — overwater villa with direct ocean access, all-inclusive meals, sunset cruise and snorkelling excursions.",
    inclusions: ["Return Flights", "Overwater Villa", "All-Inclusive Meals"],
    price: 3999,
    originalPrice: 5499,
    save: 27,
    image: img("1514282401047-d79a71a590e8"),
    featured: true,
  },
  {
    slug: "japan-triple-city-explorer",
    short: "Japan",
    title: "Japan Triple City Explorer",
    location: "Tokyo · Kyoto · Osaka",
    nights: 10,
    summary: "Tokyo, Kyoto & Osaka — flights + hotels + 7-day Japan Rail Pass. Explore ancient temples, neon cityscapes and world-class cuisine.",
    inclusions: ["Return Flights", "3 City Hotels", "7-Day Rail Pass"],
    price: 2999,
    originalPrice: 3799,
    save: 21,
    image: img("1545569341-9eb8b30979d9"),
    featured: true,
  },
  {
    slug: "europe-multi-city-grand-tour",
    short: "Europe",
    title: "Europe Multi-City Grand Tour",
    location: "Paris · Rome · Barcelona",
    nights: 12,
    summary: "Paris, Rome & Barcelona with inter-city train travel, 4-star city hotels and return flights. The classic European adventure.",
    inclusions: ["Return Flights", "Inter-City Trains", "4-Star Hotels"],
    price: 3799,
    originalPrice: 4599,
    save: 17,
    image: img("1502602898657-3e91760cbb34"),
    featured: true,
    limited: true,
  },
  {
    slug: "phuket-bangkok-adventure",
    short: "Thailand",
    title: "Phuket & Bangkok Adventure",
    location: "Phuket · Bangkok",
    nights: 8,
    summary: "A beach and city combination — Phuket's islands and Bangkok's buzz, with return flights, transfers, daily breakfast and an island day tour.",
    inclusions: ["Return Flights", "Daily Breakfast", "Island Tour"],
    price: 1699,
    originalPrice: 2199,
    save: 23,
    image: img("1528181304800-259b08848526"),
    featured: true,
    limited: true,
  },
  {
    slug: "dubai-luxury-escape",
    short: "Dubai",
    title: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    nights: 5,
    summary: "5-star beachfront hotel with a desert safari, return flights, transfers and daily breakfast. Glamour, gold and golden dunes.",
    inclusions: ["5-Star Hotel", "Desert Safari", "Return Flights"],
    price: 1899,
    originalPrice: 2499,
    save: 24,
    featured: true,
    image: img("1512453979798-5ea266f8880c"),
  },
];

export interface Destination {
  name: string;
  region: string;
  price: number;
  image: string;
}

/** All bookable destinations (Destinations page) in source order. */
export const destinations: Destination[] = [
  { name: "Bali", region: "Southeast Asia", price: 1199, image: img("1573790387438-4da905039392", 1000) },
  { name: "Thailand", region: "Southeast Asia", price: 1699, image: img("1528181304800-259b08848526", 1000) },
  { name: "Japan", region: "East Asia", price: 2999, image: img("1540959733332-eab4deabeeaf", 1000) },
  { name: "Vietnam", region: "Southeast Asia", price: 1499, image: img("1528127269322-539801943592", 1000) },
  { name: "Maldives", region: "South Asia", price: 3999, image: img("1514282401047-d79a71a590e8", 1000) },
  { name: "Singapore", region: "Southeast Asia", price: 1299, image: img("1525625293386-3f8f99389edd", 1000) },
  { name: "Dubai", region: "Middle East", price: 1899, image: img("1512453979798-5ea266f8880c", 1000) },
  { name: "Turkey", region: "Middle East", price: 2199, image: img("1541432901042-2d8bd64b4a9b", 1000) },
  { name: "South Korea", region: "East Asia", price: 2499, image: img("1538485399081-7191377e8241", 1000) },
  { name: "Greece", region: "Europe", price: 3299, image: img("1570077188670-e3a8d69ac5ff", 1000) },
  { name: "Italy", region: "Europe", price: 3499, image: img("1552832230-c0197dd311b5", 1000) },
  { name: "Switzerland", region: "Europe", price: 4299, image: img("1531366936337-7c912a4589a7", 1000) },
  { name: "France", region: "Europe", price: 3799, image: img("1502602898657-3e91760cbb34", 1000) },
  { name: "United Kingdom", region: "Europe", price: 3599, image: img("1513635269975-59663e0ac1ad", 1000) },
  { name: "Sri Lanka", region: "South Asia", price: 1599, image: img("1566296314736-6eaac1ca0cb9", 1000) },
  { name: "India", region: "South Asia", price: 1799, image: img("1564507592333-c60657eea523", 1000) },
  { name: "Fiji", region: "Pacific Islands", price: 1999, image: img("1589330273594-fade1ee91647", 1000) },
  { name: "New Zealand", region: "Oceania", price: 1399, image: img("1469521669194-babb45599def", 1000) },
];

export const regions = [
  "All Regions",
  "Southeast Asia",
  "East Asia",
  "South Asia",
  "Middle East",
  "Europe",
  "Pacific Islands",
  "Oceania",
];

export interface Review {
  name: string;
  trip: string;
  rating: number;
  quote: string;
}

/** Traveller testimonials (Reviews page + home carousel). */
export const reviews: Review[] = [
  { name: "Sarah Lawson", trip: "Bali", rating: 5, quote: "Fantastic service and unbeatable Bali deal. Everything was smooth." },
  { name: "Michael Reynolds", trip: "Japan", rating: 5, quote: "Very professional and responsive. Found us a great Japan package." },
  { name: "Amanda Turner", trip: "Thailand", rating: 5, quote: "Amazing deals and great communication. Highly recommend Dreamfares." },
  { name: "James Kowalski", trip: "Maldives", rating: 5, quote: "Our Maldives honeymoon was perfectly arranged. The water villa was incredible!" },
  { name: "Priya Sharma", trip: "Dubai", rating: 5, quote: "Best price we found for a Dubai family trip. Will definitely book again." },
  { name: "Tom & Lisa Bennett", trip: "Europe", rating: 5, quote: "Europe multi-city trip was seamless. Hotels were lovely and flights well-timed." },
];

export interface Value {
  title: string;
  description: string;
}

/** The "Dreamfares Difference" — brand values on the About page. */
export const values: Value[] = [
  { title: "Trust & Transparency", description: "Transparent pricing with no hidden fees, ever." },
  { title: "Customer First", description: "Friendly 7-day support before, during and after your trip." },
  { title: "Global Network", description: "Direct partnerships with airlines, hotels and operators worldwide." },
  { title: "Expert Team", description: "Consultants with genuine first-hand destination experience." },
  { title: "Best Prices", description: "Exclusive negotiated rates you won't find anywhere else." },
  { title: "Seamless Travel", description: "End-to-end booking support from first enquiry to safe return." },
];

export const heroImage = img("1537996194471-e657df975ab4", 2000);

/** Travel months for the AI Deal Finder dropdown. */
export const travelMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
