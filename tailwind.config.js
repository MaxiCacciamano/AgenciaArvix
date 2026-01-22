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
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
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
    },
  },
  plugins: [],
};
