/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      integral: ['Integral'],
    },
    extend: {
      spacing: {
        'half-sp': 'calc(50% - 10px)',
        'card-1-lg': '410px',
        'card-2-lg': 'calc(50% - 420px)',
        'search-field': '580px',
        'w-600': '600px',
        'w-gallery': 'calc(100% - 640px)',
        'sidebar-h': 'calc(100vh - 100px)',
        'sidebar-w': '295px',
        'summary-2': '500px',
        'search-top': 'calc(100% + 10px)',
      },
      colors: {
        'search-bg': '#F0F0F0',
        'header-bg': '#F2F0F1',
        'card-bg': '#F0EEED',
        'text-o': 'rgba(0, 0, 0, .6)',
        'border-10': 'rgba(0, 0, 0, .1)',
        'price-30': 'rgba(0, 0, 0, .3)',
        'pagin-color': 'rgba(0, 0, 0, .5)',
        'pagin-page': 'rgba(0, 0, 0, .06)',
        'discount-bg': 'rgba(255, 51, 51, .1)',
      },
      boxShadow: {
        'card-shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        'card-sh': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
};
