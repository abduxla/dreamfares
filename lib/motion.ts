import type { Variants } from "framer-motion";

/** Premium easing curve used across the site (Apple-style ease-out). */
export const easePremium = [0.22, 1, 0.36, 1] as const;

/** Fade + rise, used for most section content. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePremium },
  },
};

/** Subtle fade for hero overlays and large imagery. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: easePremium } },
};

/** Stagger container — children animate in sequence. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** Card entrance used inside staggered grids. */
export const cardIn: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easePremium },
  },
};

/** Default viewport config so animations only fire once, slightly early. */
export const viewportOnce = { once: true, margin: "0px 0px -80px 0px" } as const;
