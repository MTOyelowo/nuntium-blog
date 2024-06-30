/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1C1C1C",
        main: "#FFFFFF",
      },
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
      },
    },
  },
  plugins: [],
};
