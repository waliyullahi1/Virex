// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/ui', '@pinia/nuxt'],

  runtimeConfig: {
    public: {
      BASE_URL: "https://answer-herb-arizona-quizzes.trycloudflare.com", // 🔹 Base URL for public use
    },
  },

  app: {
    head: {
      script: [
        { src: 'https://checkout.flutterwave.com/v3.js', defer: true }
      ]
    }
  },
  // Configure PostCSS (works properly with Nuxt3)
  postcss: {
    plugins: {
      tailwindcss: {},   // Tailwind integration
      autoprefixer: {},  // Autoprefixer configuration
    },
  },

  // Vite configuration to handle any externalized modules issues (if necessary)
  vite: {
    build: {
      rollupOptions: {
        external: ['fs', 'path', 'source-map-js'], // Suppress warnings if modules cause issues
      },
    },
  },

  // Set compatibility date (optional)
  compatibilityDate: '2025-01-22',
});
