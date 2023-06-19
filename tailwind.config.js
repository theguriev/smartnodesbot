/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        smart: "#777778",
        active: "#33b445",
        tg_color_scheme: "var(--tg-color-scheme, light)",
        tg_bg_color: "var(--tg-theme-bg-color, #ffffff)",
        tg_button_color: "var(--tg-theme-button-color, #3390ec)",
        tg_button_text_color: "var(--tg-theme-button-text-color, #ffffff)",
        tg_hint_color: "var(--tg-theme-hint-color, #707579)",
        tg_link_color: "var(--tg-theme-link-color, #00488f)",
        tg_secondary_bg_color: "var(--tg-theme-secondary-bg-color, #f4f4f5)",
        tg_text_color: "var(--tg-theme-text-color, #000000)",
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
