/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        container: "1237px",
      },
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
        coresance: ['coresance', 'sans-serif'],
        causten: ['causten', 'sans-serif'],
      },
      colors: {
        "common-black": "#3C4242",
        "footer-whait": "#F6F6F6",
      },
      screens: {
        "little-lg": "1002px",
      },
    },
  },
  plugins: [],
};
