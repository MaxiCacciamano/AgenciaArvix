export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#050505',
          dark: '#0a0a0a',
          gray: '#111111',
          border: '#222222',
          lime: '#CCFF00',
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
