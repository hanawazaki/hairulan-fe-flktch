/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShdw': '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        'customShdwBtn': '0px 7px 6px 0px rgba(0, 0, 0, 0.17)',
        'customShdwContainer': '0px 1px 12px 0px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        'customRed': '#730C07',
        'customOrange': '#EB3F36',
        'customGray': '#7C7C7C',
      }
    },
  },
  plugins: [],
}

