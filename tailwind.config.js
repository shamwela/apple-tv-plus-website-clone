/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-sf-pro-display)'],
        sans: ['var(--font-sf-pro-text)'],
      },
      colors: {
        'dark-gray': '#1d1d1f',
        'light-gray': '#f5f5f7',
        accent: '#06c',
      },
    },
  },
}
