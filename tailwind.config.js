const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        surface: '#00050c',
        'on-surface': '#fff',
        orange: colors.orange,
        yellow: colors.yellow,
        cyan: colors.cyan,
        green: colors.green,
        purple: colors.purple
      },
      backgroundColor: {
        featured:
          'linear-gradient(269.16deg, #FFE580 -15.83%, #FF7571 -4.97%, #FF7270 15.69%, #EA5DAD 32.43%, #C2A0FD 50.09%, #9867F0 67.47%, #3BF0E4 84.13%, #33CE43 105.13%, #B2F4B6 123.24%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@downwindcss/flex-center')]
};
