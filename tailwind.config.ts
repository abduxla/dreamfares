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
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#eefcfb",
          100: "#d3f6f4",
          200: "#aceceb",
          300: "#74dddb",
          400: "#37c5c3",
          500: "#15a8a7",
          600: "#0d8786",
          700: "#106b6b",
          800: "#125657",
          900: "#13474a",
          950: "#042a2c",
        },
        gold: {
          300: "#ecd7a3",
          400: "#e0c07a",
          500: "#d3a44c",
          600: "#b88638",
          700: "#956a30",
        },
        ink: {
          DEFAULT: "#0a2540",
          soft: "#33455a",
          muted: "#647689",
        },
        sand: "#f7f5f0",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10, 37, 64, 0.18)",
        card: "0 18px 50px -20px rgba(10, 37, 64, 0.28)",
        glow: "0 12px 36px -10px rgba(21, 168, 167, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 18s ease-out forwards",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
