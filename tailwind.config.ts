import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Dark navy-blue surfaces
        navy: {
          950: "#03060f",
          900: "#060b1c",
          850: "#0a1126",
          800: "#0e1833",
          700: "#152144",
          600: "#1d2c5e",
          500: "#27397a",
        },
        // Vivid electric-blue accent
        brand: {
          50: "#eef3ff",
          100: "#dae6ff",
          200: "#bcd3ff",
          300: "#8eb4ff",
          400: "#5b8bff",
          500: "#356bff",
          600: "#1f4ff5",
          700: "#1740e0",
          800: "#1833b4",
          900: "#1a318d",
          950: "#141f54",
        },
        azure: { 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9" },
        violet: { 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6" },
        gold: { 300: "#f3dca6", 400: "#ecd384", 500: "#dcae53", 600: "#c08f37", 700: "#9c712a" },
        grass: { 300: "#6ee7a8", 400: "#3ddc84", 500: "#22c55e", 600: "#16a34a" },
        // Light text tokens (used on dark surfaces)
        ink: { DEFAULT: "#eaf0ff", soft: "#c3cee8", muted: "#8a9ac0" },
        sand: "#0a1126",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(2, 6, 23, 0.6)",
        card: "0 24px 60px -24px rgba(2, 6, 23, 0.8)",
        glow: "0 14px 40px -10px rgba(53, 107, 255, 0.55)",
        "glow-gold": "0 14px 40px -10px rgba(220, 174, 83, 0.45)",
        "glow-green": "0 14px 40px -10px rgba(34, 197, 94, 0.5)",
      },
      borderRadius: { "4xl": "2rem" },
      maxWidth: { content: "1200px" },
      transitionTimingFunction: { premium: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.14)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(18px,-26px)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: { "100%": { transform: "translateX(100%)" } },
      },
      animation: {
        "ken-burns": "ken-burns 20s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        marquee: "marquee 38s linear infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
