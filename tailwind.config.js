/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bangers: ['Bangers', 'sans-serif'],
    },
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
    },
  },
  plugins: [],
}

