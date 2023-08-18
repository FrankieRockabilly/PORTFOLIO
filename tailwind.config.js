/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        kuning : '#ffd700',
        gelap : '#241010'
      }
    },
  },
  plugins: [require('daisyui')],
}