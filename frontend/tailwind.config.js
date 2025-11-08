/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sanse-red': '#D32F2F',
        'sanse-blue': '#1565C0', 
        'sanse-dark-blue': '#0D47A1',
      },
    },
  },
  plugins: [],
}