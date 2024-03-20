/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'primary': '#001B21',
        'secondary': '#FF8C00',
        'gray': '#444444',
        'silver': '#B9B9B9',
      }
    },
  },
  plugins: [],
}