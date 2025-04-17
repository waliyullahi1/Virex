<template>
    <p class="  text-sm 'text-sm md:text-lg font-normal">
      <slot/>
    </p>
  </template>
  <script>
    export default {
      props: {
        color: String,
        small_text: Boolean
      }
    }
  </script>