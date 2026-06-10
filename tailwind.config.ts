import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E63946",
          50: "#FFF0F1",
          100: "#FFD6D9",
          200: "#FFADB3",
          300: "#FF848D",
          400: "#FF5B67",
          500: "#E63946",
          600: "#C1121F",
          700: "#9A0D18",
          800: "#730A12",
          900: "#4C060C",
        },
        navy: {
          DEFAULT: "#1B2A4A",
          50: "#E8EDF5",
          100: "#C5D0E6",
          200: "#8FA6CD",
          300: "#5A7BB4",
          400: "#2D5099",
          500: "#1B2A4A",
          600: "#152239",
          700: "#0F1928",
          800: "#0A1019",
          900: "#05080D",
        },
        accent: "#E63946",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1B2A4A 0%, #243460 40%, #2D1B4E 100%)",
        "section-gradient": "linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.07)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.12)",
        "nav-dropdown": "0 16px 48px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
