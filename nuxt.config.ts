// nuxt.config.js


export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/ui', '@pinia/nuxt'],

  
  runtimeConfig: {
    public: {
      //https://api.vir
      BASE_URL: "https://api.virex.codes",
      FLUTTERWAVE_PRIVATECODE:'FLWPUBK-3441a7d6bfb8753d177f53a0c7136302-X', // 🔹 Base URL for public use
    },
    private: {
       // 🔒 Secret Key (Not exposed to frontend)
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
