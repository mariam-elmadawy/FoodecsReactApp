/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Cairo'
      },
      backgroundImage: {
        hero: "url('/src/assets/images/hero2.jpg')",
        promo: "url('/src/assets/images/hero1.jpg')"
      }
    },
  },
  plugins: [],
}

