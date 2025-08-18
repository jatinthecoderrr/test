/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // for Vite
    "./src/**/*.{js,jsx,ts,tsx}", // all React files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        bgZoomMove: "bgZoomMove 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        stretchFromLeft: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "60%": { transform: "scaleX(1.2)", opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        bgZoomMove: {
          "0%, 100%": { transform: "scale(1) translateY(0)" },
          "50%": { transform: "scale(1.05) translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
