/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#050063',
        'gold': '#DEA401',
        'black': '#000000',
        'white': '#FFFFFF'
      }
    },
  },
  plugins: [],
};
