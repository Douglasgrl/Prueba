/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        rick: {
          white: "#FFF",
          textos: "#575757",
          gray: "#F2F2F2",
          gray2: "#ABABAB",
          gray3: "#AAA",
          skyBlue: "#4DCCFF",
          red: "#ED1A00",
        },
      },
      fontFamily: {
        light: ["Gotham Light", "sans-serif"],
        regular: ["Gotham Regular", "sans-serif"],
        medium: ["Gotham Medium", "sans-serif"],
        bold: ["Gotham Bold", "sans-serif"],
        normal: ["Gotham Medium", "sans-serif"],
        book: ["Gotham Book", "sans-serif"],
      },
    },
  },
  plugins: [],
};
