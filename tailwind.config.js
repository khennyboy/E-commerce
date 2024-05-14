/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'tablet' : {'max' : '55em'},
        'android' : {'max': '30em'},
        'smallAndroid' : {'min' :'0em', 'max': '22em'},
        'largeTablet' : {'min': '55em', 'max': '75em'},
        'mediumDesktop': {'min': '75.1em', 'max': '94em'}
      },
      colors :{
        Orange: 'hsl(26, 100%, 55%)',
        'Pale orange' : 'hsl(25, 100%, 94%)',
        'Very dark blue': 'hsl(220, 13%, 13%)',
        'Dark grayish blue': 'hsl(219, 9%, 45%)',
        'Grayish blue': 'hsl(220, 14%, 75%)',
        'Light grayish blue': 'hsl(223, 64%, 98%)',
        'Black': 'hsl(0, 0%, 0%)'
      },
      fontFamily :{
         'sans': ['"Kumbh Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
// - Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)