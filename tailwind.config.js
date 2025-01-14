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
      backgroundColor: theme => ({
        ...theme('colors'),
        'charcoal': '#23424a',
        'gray': '#ececeb',
        'mistyBlue': '#bfd2d0',
        'ivory': '#f4f7f0'
      }),
      textColor: theme => ({
        ...theme('colors'),
        'charcoal': '#23424a',
        'gray': '#ececeb',
        'mistyBlue': '#bfd2d0',
        'ivory': '#f4f7f0'
      })
    },
  },
  plugins: [],
}

