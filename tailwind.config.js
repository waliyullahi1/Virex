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
        'secondary': '#0C1E33',
        'tertiary':"#353448"
      }
    },
  },
  plugins: [],
};
