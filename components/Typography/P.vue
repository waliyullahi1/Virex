<template>
    <p class="  text-sm  md:text-base font-normal">
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