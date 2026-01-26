/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        brand: {
          black: "#050505",
          dark: "#0a0a0a",
          gray: "#111111",
          border: "#222222",
          lime: "#CCFF00",
          white: "#ffffff",
        },
      },

      /* ✅ ANIMATIONS */
      animation: {
        marquee: "marquee 25s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },

      /* ✅ KEYFRAMES */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
