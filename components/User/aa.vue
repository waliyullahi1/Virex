<template>
    <div>
      <div
        class=" b md:px-0 px-3 overflow-scrol  gap-1    md:pt-0  h-full justify-between    flex flex-col md:flex-row-reverse justify-beween  w-full se">
  
        <div class="w-full left-0 z-20 m fixed">
  
  
          <div class=" w-full  flex fixed   left-0   px-4     ">
            <div class=" h-4 md:w-[320px] md:flex hidden  w-1"></div>
            <div
              class=" flex md:h-[4rem] h-fit mt-4 md:mt-7 left-0 right-0 px-4 py-2 shadow-md  text-md  rounded-2xl bg-slate-100    justify-between overflowhidden items-center   w-full ">
              <div class="w-fit flex  gap-3 items-center ">
                <button class="flex  lef-4  md:hidden" @click="toggleMenu">
                  <div class="w-5">
                    <div :class="mobileNav ? 'transition transform rotate-45  items-center w-6' : 'transition w-6'"
                      class="block cursor-pointer bg-black" style="height: 3px;"></div>
  
  
  
                    <div
                      :class="mobileNav ? 'transition transform   -rotate-45 item-center w-6 -mt-0.5' : 'transition  w-6 mt-1.5'"
                      class="block cursor-pointer bg-black" style="height: 3px;"></div>
                  </div>
                </button>
                <TypographyH3 class="  hidden sm:block leading-4">Buy Phone Number</TypographyH3>
              </div>
  
              <div class="flex gap-3 items-center justify-center w-fit ">
                <img src="@/assets/images/svg/person.svg" alt="person" class="md:w-10 w-7 " srcset="">
                <div class="  flex justify-center items-center flex-col ">
                  <p class=" leading-[7px] text-lg">user </p>
                  <small>0.00₦</small>
                </div>
  
  
  
  
  
              </div>
            </div>
  
  
  
          </div>
        </div>
  
        <div class="  fixed  md:w-fit w-full flex duration-500 z-30  left-0 h-fit bg-black bg-opacity-30 bg-op"
        :class="mobileNav ?'md:w-fit overflow-hidden w-full   -translate-x-0  md:-translate-x-0':' -translate-x-[200rem]  md:-translate-x-0 w-9   overflow-hidden '",
        >
          
          <div
            :class="mobileNav ? ' transition transform -translate-x-0  md:-translate-x-0' : ' -translate-x-0  md:-translate-x-0  transition transform '"
            class="md:w-[250px] w-[200px]      text-white md:bloc  px-0   pt-10  z-40 bg-[#0C1E33]  translate-x-0 duration-700 text-[14px] h-screen">
  
            <div class=" px-10 pb-10">
              <img src="@/assets/images/logo.png" alt="" class="w-">
  
            </div>
  
  
            <div class=" mb-2 ">
              <div class="  h-fit md:overflow-hidden  w-">
                <div class="  w-full justify-between ">
                  <div  to="/user/home" exact-active-class="active-link" v-for="(link, index) in links" :key="index">
                    <button  @click="router.push(link.path)" class="group   w-fit   "
                      :class="[
                        link.magin ? ' mb-4' : 'mb-0',
                        
                        ]">
                      <div
                      :class="[
                        isActive(link.path) ? 'shadow-xl translate-y-0 ease-in-out rounded-md duration-200  bg-gradient-to-r from-slate-600   border-l-4 ' :
                         ' group-hover:shadow-xl group-hover:translate-y-0 ease-in-out rounded-md duration-200  group-hover:bg-gradient-to-r group-hover:from-slate-600   group-hover:border-l-4'
                        ]"
                        class="px-4 cursor-pointer  group bg-whe w-full   text-white py-2   group-hover:shadow-xl group-hover:translate-y-0 ease-in-out rounded-md duration-200  group-hover:bg-gradient-to-r group-hover:from-slate-600   group-hover:border-l-4  ">
                        <div :class=" isActive(link.path) ?'  translate-x-1  gap-1 ':' b  gap-3 '"
                          class="flex   justify-center     items-center      group-hover:translate-x-1 ease-in-out  duration-500  group-hover:gap-1  md:gap-">
                          <div class=" group:r:absolute block">
                            <div v-html="link.image"></div>
                          </div>
                          <TypographyP class="font- text-white   whitespace-nowrap truncate" >
                            {{ link.label }}</TypographyP>
                        </div>
  
                      </div>
                    </button>
                    
                  </div>
  
                </div>
  
                <div>
  
                </div>
                <nuxt-link to="/user">Howork</nuxt-link>
                    <nuxt-link to="/user/fund">How it work</nuxt-link>
  
              </div>
            </div>
  
  
  
  
          </div>
          <div @click="toggleMenu" class=" h-screen md:hidden block  w-full bg-slae-900"
          :class="mobileNav ? ' md:hidden block' : ' md:hidden hidden  '"
          >
            
          </div>
        </div>
  
      </div>
  
  
      <div class="flex">
        
        <div class=" w-full bg0 h-[7rem]"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  import { ref, reactive, toRaw } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  
  
  const router = useRouter();
  const menuRevealed = ref(false);
  const mobileNav = ref(false);
  let flex = ref(false);
  let scrollPosition = ref(0);
  let top = ref(false);
  let lastScrollPosition = 0;
  
  const props = defineProps({
    links: Array,
    dashboardbtn: {
      type: Boolean,
      default: true,
    }
  });
  
  const links = reactive([
  
    {
      label: 'Dashboard', path: '/user',
      image: ` <div class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z" stroke="#currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z" stroke="#currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z" stroke="#currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> </div>`,
      magin: true
    },
  
    {
      label: 'Phone Numbers',
      image: ` <div class='text-white'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
               <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                </svg></div>`
    },
  
  
    {
      label: 'Number History',
      magin: true,
      image: `<div " class="ai-icon" aria-expanded="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                             <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                             <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                             <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                          </svg>
                              
                          </div>`
    },
  
  
    {
      label: 'Fund Account',  path: '/user/fund',
      image: `  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-cash-coin" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"></path>
                             <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"></path>
                             <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"></path>
                             <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"></path>
                          </svg>`
    },
  
  
    {
      label: ' Transactions',
      image: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-newspaper" viewBox="0 0 16 16">
                             <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
                             <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
                          </svg>`
  
    },
  
  
    {
      label: ' login',
      image: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                             <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"></path>
                             <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"></path>
                          </svg>`
    },
  
  ])
  
  
  const hoveredButton = ref(null);
  
  // Calculate scale based on button's proximity to hovered button
  const getScaleStyle = (index) => {
    if (hoveredButton.value === null) {
      return { transform: 'scale(1)' };
    }
  
  
    const distance = Math.abs(index - hoveredButton.value);
  
    // Determine scale based on proximity
    let scale = 1;
    if (distance === 0) scale = 1.2;        // Hovered button
    else if (distance === 1) scale = 1.1;   // First neighbors
    else if (distance === 2) scale = 1;   // Second neighbors
    else scale = 1.1;                       // Further buttons
  
    return { transform: `scale(${scale})` };
  };
  
  const toggleMenu = () => {
      console.log('fdbdfbdfd');
      
      mobileNav.value = !mobileNav.value;
      menuRevealed.value = !menuRevealed.value;
  };
  
  
  const isActive = (path) => route.path === path;
  
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