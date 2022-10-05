/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'secondary':'#212025',
        'tertiary':'#ADADAD',
        'primary':'#FBBC04',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}