/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        white: "#FFFFFF",
        red: {
          50: "#fff1f1",
          100: "#ffe4e5",
          200: "#fdced1",
          300: "#fca5ac",
          400: "#fa7280",
          500: "#f24157",
          600: "#e02041",
          700: "#bc1435",
          800: "#9e1333",
          900: "#871432",
          950: "#4b0616",
        },
        blue: {
          50: '#edf3ff',
          100: '#deeaff',
          200: '#c4d7ff',
          300: '#a0bcff',
          400: '#7a97ff',
          500: '#5b71f9',
          600: '#3d48ee',
          700: '#3037d2',
          800: '#2930aa',
          900: '#293086',
          950: '#181a4e',
        },
        slate: {
          50: '#f4f5fc',
          100: '#e9e9f0',
          200: '#d8d8e5',
          400: '#9e9ebc',
          500: '#8886ab',
          600: '#79749c',
          950: '#322f3c',
        },
        gray: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#5d5d5d',
          600: '#3d3d3d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#292929',
        },
        maxWidth: {
          "6xl": "1180px",
          "7xl": "1540px"
        },
      },
      gridTemplateColumns: {
        "grid-responsive": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};