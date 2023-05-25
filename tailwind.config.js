/** @type {import('tailwindcss').Config} */
import { fadeIn } from "react-animations";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-tangerine": "#f8a818",
        cinnabar: "#e64d44",
      },
      keyframes: {
        pulsing_out: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: " scale(1.2)" },
        },
        pulsing_in: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: " scale(0.8)" },
        }
      },
      animation: {
        pulsing_out: "pulsing_out 0.1s ease-in-out",
        pulsing_in: "pulsing_in 0.1s ease-in-out",
      },
    },
  },
  plugins: [],
};
