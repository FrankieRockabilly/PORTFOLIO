/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#020617',
        primary: '#0bc6a2',
        warm : '#FFFAFA',
        primarySec : '#15ab8e',
        secondary: '#abeb12',
        oren: '#fb923c'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'anton' : ['anton', 'serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}