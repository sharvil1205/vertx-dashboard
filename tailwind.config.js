/** @type {import('tailwindcss').Config} */
const customColors = require("./src/Colors.js");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', "sans-serif"],
      },
      colors: customColors,
    },
  },
  plugins: [],
};
