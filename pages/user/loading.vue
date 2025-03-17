<template>
    <!-- Loader -->
    <div v-if="loading" id="loader">
      <div class="lds-roller">
        <div></div><div></div><div></div><div></div>
        <div></div>
      </div>
    </div>
  
    <!-- Main Content -->
    <div v-else class="content">
      <h1>Welcome to My Website</h1>
      <p>This is the main content after loading.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true, // Loader starts visible
      };
    },
    mounted() {
      // Simulate a loading delay (e.g., fetching data)
      setTimeout(() => {
        this.loading = false; // Hide loader after 3 seconds
      }, 3000);
    },
  };
  </script>
  
  <style>
  /* Loader container */
  #loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  /* Loader animation */
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 20px 20px;
  }
  
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    margin: -4px 0 0 -4px;
    background: #3498db;
    border-radius: 50%;
  }
  
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
 
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
 
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  
  /* Keyframes for the rolling animation */
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Main content styling */
  .content {
    text-align: center;
    padding: 50px;
  }
  </style>
  