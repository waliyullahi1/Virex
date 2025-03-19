export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/ui", '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      BASE_URL: "https://wizzywise.serveo.net", // 🔹 Change this anytime
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-22',
});