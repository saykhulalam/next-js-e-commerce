/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app//*.{js,ts,jsx,tsx,mdx}",
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
        'xs': '415px',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        dot: {
          '0%, 20%': { opacity: '0' },
          '40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        dot1: 'dot 1.4s infinite',
        dot2: 'dot 1.4s infinite .2s',
        dot3: 'dot 1.4s infinite .4s',
      },
    },
  },
  plugins: [],
};