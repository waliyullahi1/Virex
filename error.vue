<template>
  <div class="min-h-screen bg-secondary flex flex-col items-center justify-center text-tertiary px-4 text-center">
    <h1 class="text-8xl font-extrabold tracking-widest text-preprimary">404</h1>
    <p class="text-2xl mt-4 mb-8 text-tertiary">Oops! Page Not Found</p>

    <div class="relative group">
      <div class="absolute  hover:bg-tertiary hover:text-white to-tertiary rounded-lg blur opacity-50 group-hover:opacity-90 transition duration-300"></div>
      <NuxtLink
        to="/"
        class="relative inline-block px-8 py-3 bg-white text-tertiary rounded-lg border border-tertiary hover:border-preprimary transition duration-300 font-medium"
      >
        Go Back Home
      </NuxtLink>
    </div>

    <div class="mt-16 max-w-lg text-gray-600 text-sm">
      If you think this is a mistake, please check the URL or return to the homepage.
    </div>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* Optional: custom animations or shadows */
</style>
