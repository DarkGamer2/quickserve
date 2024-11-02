/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'bebasneue': ['Bebas Neue', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}