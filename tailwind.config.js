/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "el-senor": "#3498da",
        "el-patron": "#0A2463",
      },
      keyframes: {
        badgeShow: {
          "0%": {
            transform: "scale3d(0.5, 0.5, 1)",
            opacity: 0,
            visibility: "hidden",
          },
          "30%": {
            transform: "scale3d(1.2, 1.2, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
            opacity: 1,
            visibility: "visible",
          },
        },
        badgeHide: {
          from: {
            transform: "scale3d(1, 1, 1)",
            opacity: 1,
            visibility: "visible",
          },

          to: {
            transform: "scale3d(0.5, 0.5, 1)",
            opacity: 0,
            visibility: "hidden",
          },
        },
        badgeIncrement: {
          "from, to": {
            transform: "scale3d(1, 1, 1)",
          },
          "40%": {
            transform: "scale3d(1.2, 1.2, 1)",
          },
        },
        badgeIncrementSame: {
          "from, to": {
            transform: "scale3d(1, 1, 1)",
          },
          "40%": {
            transform: "scale3d(1.2, 1.2, 1)",
          },
        },
        badgeDecrement: {
          "from, to": {
            transform: "scale3d(1, 1, 1)",
          },
          "40%": {
            transform: "scale3d(0.8, 0.8, 1)",
          },
        },
        badgeDecrementSame: {
          "from, to": {
            transform: "scale3d(1, 1, 1)",
          },
          "40%": {
            transform: "scale3d(0.8, 0.8, 1)",
          },
        },
      },
      animation: {
        badgeShow: "badgeShow .15s ease both",
        badgeHide: "badgeHide .15s ease both",
        badgeIncrement: "badgeIncrement .15s ease both",
        badgeIncrementSame: "badgeIncrementSame .15s ease both",
        badgeDecrement: "badgeDecrement .15s ease both",
        badgeDecrementSame: "badgeDecrementSame .15s ease both",
      },
    },
  },
  plugins: [],
};
