/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  
  theme: {
    extend: {
      colors: {
        'primary': '#ee0181',
        'secondary' : '#e2f3d0a1'

      },
      fontFamily: {
        'primary':['Roboto','sans-serif']
      },
      animation: {
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      }, 
    },
  },
  plugins: [],
}

