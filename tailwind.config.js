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
        'w-600': '600px',
        'w-gallery': 'calc(100% - 640px)',
      },
      colors: {
        'search-bg': '#F0F0F0',
        'header-bg': '#F2F0F1',
        'card-bg': '#F0EEED',
        'text-o': 'rgba(0, 0, 0, .6)',
        'border-10': 'rgba(0, 0, 0, .1)',
        'price-30': 'rgba(0, 0, 0, .3)',
      },
    },
  },
  plugins: [],
};
