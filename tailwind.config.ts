import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96A",
          pale: "#F0DFA0",
          dark: "#8B6914",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          muted: "#C8BFB0",
        },
        bg: {
          DEFAULT: "#080808",
          soft: "#0F0F0F",
          card: "#111111",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        dm: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "wiggle": "wiggle 0.5s ease-in-out",
        "pulse-ring": "pulseRing 2.5s ease-out infinite",
        "draw-line": "drawLine 1.5s ease forwards",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8C96A 0%, #C9A84C 50%, #8B6914 100%)",
        "dark-radial": "radial-gradient(ellipse at center, #1a0d00 0%, #080808 70%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
