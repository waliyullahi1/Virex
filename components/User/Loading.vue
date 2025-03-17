<template>
    <div>
      <div
        class=" b md:px-0 px-3 overflow-scrol  gap-1    md:pt-0  h-full justify-between    flex flex-col md:flex-row-reverse justify-beween  w-full se">
  
       
  
        
  
      </div>
  
  
      
    </div>
  </template>
  
  <script setup>
  
 
  </script>
  
  
  
  
  <style scoped>
  .overflow-container::before {
    left: 0;
  }
  
  .overflow-container::after {
    right: 0;
  }
  
  .scrollable-container::-webkit-scrollbar {
    width: 0;
    /* Hide scrollbar */
  }
  
  .scrollable-container {
    scrollbar-width: none;
    /* Hide scrollbar for Firefox */
    -ms-overflow-style: none;
    /* Hide scrollbar for IE and Edge */
  }
  </style>