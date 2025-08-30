module.exports = {
  darkMode: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'preprimary': '#FFC059',
        'secondary': '#FFFCF7',
        'tertiary':"#0C1E33"
      }
    },
  },
  plugins: [],
};
