/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',    /* Slate 900 */
          primary: '#2563eb', /* Blue 600 */
          accent: '#f59e0b',  /* Amber 500 */
          light: '#f8fafc',   /* Slate 50 */
        }
      }
    },
  },
  plugins: [],
}

