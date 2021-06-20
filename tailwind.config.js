module.exports = {
  purge: {
    content: [
      './app/**/*.php',
      './resources/**/*.php',
      './resources/**/*.vue',
      './resources/**/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      lightPink: "#FEF5FF",
      purple: "#a9317b",
      darkGray: "#050400",
      black: "#000000",
      darkMagenta: "#B02885",
      darkOrange: "#F2A006",
      darkGreen: "#02AF8E",
    },
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Cooper Hewitt", "sans-serif"],
    },
    extend: {},
  },
  extend: {},
  plugins: [],
};
