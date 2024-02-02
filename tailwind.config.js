/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "serif"],
      },
      colors: {
        "main-dark": "#0A0F1A",
        "dynamic-menu": "#111725",
        "light-blue": "#2B5FDA",
        "Jobs-blue": "#203E83",
      },
      height: {
        18: "4.5rem",
      },
      margin: {
        18: "4.5rem",
        17: "4.25rem",
      },
    },
  },
  plugins: [],
};
