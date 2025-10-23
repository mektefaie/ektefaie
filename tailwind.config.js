/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      fontFamily: {
        primary: ['var(--font-jetbrainsMono)'],
      },
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#FE0786',
          hover: '#FE3A9E',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
