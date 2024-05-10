/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '490px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
      '2xl': '1450px',
      '3xl': '1770px',
      '4xl': '1920px',
    },
    fontFamily: {
      body: 'Roboto, sans-serif',
    },
    colors: {
      blue: '#1890FF',
      grey: '#EFEFEF',
      'light-grey': '#f7f7f7',
      white: '#fff',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
};
