<template>
    <div @click="emitClick" class="block lg:hidden cursor-pointer">
      <div class="relative w-8 h-6 flex flex-col justify-between">
        <div 
          class="w-8 h-1 bg-black transition-transform duration-300 ease-in-out" 
          :class="rotate ? 'rotate-45 translate-y-2' : ''">
        </div>
        <div 
          class="w-8 h-1 bg-black transition-opacity duration-300 ease-in-out" 
          :class="rotate ? 'opacity-0' : ''">
        </div>
        <div 
          class="w-8 h-1 bg-black transition-transform duration-300 ease-in-out" 
          :class="rotate ? '-rotate-45 -translate-y-2' : ''">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rotate: false
      };
    },
    methods: {
      emitClick() {
        this.rotate = !this.rotate;
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  h1 {
    font-family: "Poppins", sans-serif;
  }
  </style>
  