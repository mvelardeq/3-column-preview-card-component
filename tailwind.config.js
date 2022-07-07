/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'br-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)'
      },
      fontFamily: {
        'shoulders': ['Big Shoulders Display', 'cursive'],
        'lexend': ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}
