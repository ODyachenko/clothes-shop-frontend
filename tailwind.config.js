/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'search-bg': '#F0F0F0',
        'header-bg': '#F2F0F1',
        'card-bg': '#F0EEED',
      },
    },
  },
  plugins: [],
};
