/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue': '#505798',
        'dark-blue': '#1B1E44',
        'dark-dark-blue': '#222757',
        'grey-redeem': '#e1e2e4',
        'grey-redeem-text': '#c6cacd',
      }
    },
  },
  plugins: []
};