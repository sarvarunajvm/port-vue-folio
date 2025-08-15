/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        landscape: { raw: '(orientation: landscape) and (max-height: 500px)' },
      },
      fontSize: {
        '9xl': '8rem',
        '10xl': '10rem',
      },
    },
  },
  plugins: [],
};
