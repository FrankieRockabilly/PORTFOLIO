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
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '24ch' } // Ganti sesuai jumlah karakter
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        }
      },
      animation: {
        typing: 'typing 5s steps(24) forwards',
        blink: 'blink 1s step-end infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
