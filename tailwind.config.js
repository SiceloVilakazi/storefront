/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}","./node_modules/flowbite/**/*.ts"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}