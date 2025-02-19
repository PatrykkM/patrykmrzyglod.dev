import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-cyan-400",
    "text-cyan-700",
    "text-black",
    "text-blue-900",
    "text-yellow-300",
    "text-cyan-600",
    "text-purple-600",
    "text-orange-700",
    "text-pink-400",
    "text-orange-500",
    "text-lime-400",
    "text-sky-400",
    "text-sky-800",
    "text-lime-500",
    "text-sky-500",
    "text-violet-600",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
      },
      animation: { shake: "shake 0.4s cubic-bezier(.36,.07,.19,.97) both" },
      zIndex: { "9999": "9999" },
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      colors: {
        "primary-100": "#FFFFFF",
        "primary-200": "#E5EAF5",
        "primary-300": "#DAE0EF",
        "primary-400": "#151924",
        "primary-500": "#111725",
        "primary-600": "#0A0F1A",
        "primary-900": "#0D0D0D",
        "neutral-100": "#2B5FDA",
        "neutral-200": "#203E83",
      },
      minWidth: { "314px": "314px", "1280px": "1280px" },
      width: { "92": "22.5rem", "112": "28rem", "128": "32rem" },
      height: { "18": "4.5rem" },
      margin: { "18": "4.5rem", "17": "4.25rem" },
    },
  },
};

export default config;
