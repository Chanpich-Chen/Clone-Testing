/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      colors: {
        newBlue :'#094C9E',
        lightBlue :'#2463b0',
      },
      fontFamily:{
        Moul: ["Moul", "serif"],
        battambang : ["Battambang",],
        Rubik: ["Rubik"],
      }
    },
  },
  plugins: [ require('flowbite/plugin'),],
}
