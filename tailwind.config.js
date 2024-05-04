/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
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
