/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': { 'max': '55em' },
        'android': { 'max': '30em' },
        'smallAndroid': { 'min': '0em', 'max': '22em' },
        'largeTablet': { 'min': '55em', 'max': '75em' },
        'mediumDesktop': { 'min': '75.1em', 'max': '94em' }
      },
      colors: {
        'DarkOrange': 'hsl(26, 100%, 55%)',
        'PaleOrange': 'hsl(25, 100%, 94%)',
        'VeryDarkBlue': 'hsl(220, 13%, 13%)',
        'DarkGrayishBlue': 'hsl(219, 9%, 45%)',
        'GrayishBlue': 'hsl(220, 14%, 75%)',
        'LightGrayishBlue': 'hsl(223, 64%, 98%)',
        'Black': 'hsl(0, 0%, 0%)'
      },
      fontFamily: {
        'sans': ['"Kumbh Sans"', 'sans-serif']
      },
      animation: {
        'zoom': 'zoom 0.6s linear'
      },
      keyframes: {
        zoom: {
          'from': { transform: 'scale(0)' },
          'to': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
