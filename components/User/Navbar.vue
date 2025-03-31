<template>
  <div>
    <div
      class=" b md:px-0 px-3 overflow-scrol  gap-1    md:pt-0  h-full justify-between    flex flex-col md:flex-row-reverse justify-beween  w-full se">

      <div class="w-full left-0 z-20 m fixed">


        <div class=" w-full flex  justify-center items-center     left-0   px-4     ">
          <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1.5rem] "></div>
          <!-- <div class=" h-3  bg lg:block md:block flex-none bg-orange-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div> -->
          <div class="  w-full flex bg-zinc-50 justify-center">
            <div
              class=" container flex md:h-[4rem] h-fit mt-4 md:mt-7 left-0 right-0 px-4 py-2 shadow-md  text-md  rounded-2xl bg-slate-100    justify-between overflowhidden items-center   w-full ">
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
                <TypographyH3 class="  hidden sm:block leading-4">{{ page_tittle }}</TypographyH3>
              </div>

              <div class="flex gap-3 items-center justify-center w-fit ">
                <img src="@/assets/images/svg/person.svg" alt="person" class="md:w-10 w-7 " srcset="">
                <div class="e dark:text-black  flex justify-center items-center flex-col ">
                  <TypographyH4 class=" ₦ leading-[12px]  dark:text-black ">{{ firstName }} </TypographyH4>
                  <small>${{user_wallet}}</small>
                </div>





              </div>
            </div>

          </div>


        </div>
      </div>

      <div class="  fixed   md:w-fit w-full flex duration-500 z-30  left-0 h-fit bg-black bg-opacity-30 bg-op"
        :class="mobileNav ? 'md:w-fit overflow-hidden w-full   -translate-x-0  md:-translate-x-0' : ' -translate-x-[200rem]  md:-translate-x-0 w-9   overflow-hidden '">

        <div
          :class="mobileNav ? ' transition transform -translate-x-0  md:-translate-x-0' : ' -translate-x-0  md:-translate-x-0  transition transform '"
          class="lg:w-[250px] w-[200px]  md:w-fit     text-white md:bloc  px-0   pt-10  z-40 bg-[#0C1E33]  translate-x-0 duration-700 text-[14px] h-screen">

          <div class=" px-10 pb-10">
            <img src="@/assets/images/logo.png" alt="" class=" hidden">

          </div>


          <div class=" mb-2 ">
            <div class="  h-fit md:overflow-hidden  w-">
              <div class="  w-full justify-between ">
                <div to="/user/home" exact-active-class="active-link" v-for="(link, index) in links">
                  <button @click="router.push(link.path)" class="group   w-fit   " :to="link.path" :class="[
                    link.magin ? ' mb-4' : 'mb-0',

                  ]">
                    <div :class="[
                      isActive(link.path) ? 'shadow-xl translate-y-0 ease-in-out rounded-md duration-200  bg-gradient-to-r from-slate-600   border-l-4 ' :
                        ' group-hover:shadow-xl group-hover:translate-y-0 ease-in-out rounded-md duration-200  group-hover:bg-gradient-to-r group-hover:from-slate-600   group-hover:border-l-4'
                    ]"
                      class="px-4 cursor-pointer  group bg-whe w-full   text-white py-2   group-hover:shadow-xl group-hover:translate-y-0 ease-in-out rounded-md duration-200  group-hover:bg-gradient-to-r group-hover:from-slate-600   group-hover:border-l-4  ">
                      <div :class="isActive(link.path) ? '  translate-x-1  gap-1 ' : ' b  gap-3 '"
                        class="flex   justify-center     items-center      group-hover:translate-x-1 ease-in-out  duration-500  group-hover:gap-1  md:gap-">
                        <div class=" group:r:absolute block">
                          <div v-html="link.image"></div>
                        </div>
                        <TypographyP class="font- text-white md:hidden lg:block  sm:block   whitespace-nowrap truncate">
                          {{ link.label }}</TypographyP>
                      </div>

                    </div>
                  </button>                 
                </div>
                <button @click="loginout()" class="group   w-fit   ">
                    <div
                      class="px-4 cursor-pointer  group bg-whe w-full   text-white py-2   group-hover:shadow-xl group-hover:translate-y-0 ease-in-out rounded-md duration-200  group-hover:bg-gradient-to-r group-hover:from-slate-600   group-hover:border-l-4  ">
                      <div 
                        class="flex   justify-center     items-center      group-hover:translate-x-1 ease-in-out  duration-500  group-hover:gap-1  gap-3">
                        <div class=" group:r:absolute block">
                          <div >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"></path>
                           <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"></path>
                        </svg>
                          </div>
                        </div>
                        <TypographyP class="font- text-white md:hidden lg:block  sm:block   whitespace-nowrap truncate">
                         log out</TypographyP>
                      </div>

                    </div>
                  </button>

              </div>

              <div>

              </div>


            </div>
          </div>




        </div>
        <div @click="toggleMenu" class=" h-screen md:hidden block  w-full bg-slae-900"
          :class="mobileNav ? ' md:hidden block' : ' md:hidden hidden  '">

        </div>
      </div>

    </div>

    <div class="flex">

      <div class=" w-full bg0 h-[7rem]"></div>

      <div v-if="!pagelaod" class="w-full left-0 z-50 m fixed">


        <div class=" w-full  justify-center items-center bg-slate-100  flex fixed h-screen z-50   left-0   px-4     ">

          <img class="w-16 " src="@/assets/images/svg/preload.svg" alt="" srcset="">



        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, reactive, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const { login, logout, accessToken, startTokenRefresh } = useAuth();
 import axios from 'axios'
const transaction_history = ref([]);
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;
import { fetchUserData } from '@/stores/dashboard'
import { onMounted, watch } from 'vue'



const validTransaction = async (tx_ref) => {
  try {
    const statusResponse = await axios({
      url: `${BASE_URL}/fund/valid`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: { tx_ref },
    });

  
    const message = statusResponse.data.message;

    if (["successful", "failed", "pending"].includes(message)) {
     

  

      
    } else if (message === 'Transaction still under process') {
      console.log('Transaction still processing, waiting to retry...');
      return; // Keep polling if it's still in process
    } else {
      console.log('Unexpected status, stopping transaction check:', message);
      
    }
  } catch (statusError) {
    console.error('Error checking transaction status:', statusError);

  }
};
const transaction_history_function = async () => {
  const config = useRuntimeConfig(); // Access runtime configuration
  const BASE_URL = config.public.BASE_URL;

  try {
    const response = await axios({
      url: `${BASE_URL}/fund/history`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    // Reverse and store the transaction history
    transaction_history.value = response.data.reverse();
   

    console.log('done');
   // Update page load status
  } catch (error) {
    if (error.response) {
      console.error('API error:', error.response.data); // Handle API error
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

const store = fetchUserData()
const firstName = ref('')
const user_wallet =ref('')

onMounted( async() => {
  store.fetchUserDetail()
  
  
  await nextTick();
  await transaction_history_function();
  
   const transaction_with_verify = transaction_history.value.filter(element => {
    return  element.status === 'processing'  || element.status === 'Expired';
  });

  await Promise.all(transaction_with_verify.map(async (element) => {
   console.log(element.tx_ref);
   await validTransaction(element.tx_ref)
  
  }));
  
  // Fetch user data when component mounts
})

// Watch for changes in userData
watch(() => store.userData, (newData) => {
  try {
    const full_name = newData.full_name;
    console.log(full_name);
    firstName.value = full_name.split(' ')[0];
    console.log("First name:", newData.walletBalance);
    user_wallet.value = newData.walletBalance.toLocaleString('en-US')
    console.log(user_wallet.value);
    
  } catch (error) {
    console.error(error)
  }

});




const route = useRoute();


const router = useRouter();
const menuRevealed = ref(false);
const mobileNav = ref(false);


const props = defineProps({
  links: Array,
  pagelaod: {
    type: Boolean,
    default: true,
  },
 
  page_tittle: String,
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
    label: 'Number History',
    path: '/user/number_history',
    image: `<div " class="ai-icon" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                           <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                           <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                           <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                        </svg>
							
						</div>`
  },





  {
    label: 'Deduction History', path: '/user/deduction_history', magin: true,
    image: `<div " class="ai-icon" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                           <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                           <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                           <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                        </svg>
							
						</div>`

  },
  {
    label: 'Fund Account', path: '/user/fund',
    image: `  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-cash-coin" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"></path>
                           <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"></path>
                           <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"></path>
                           <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"></path>
                        </svg>`
  },

  {
    label: 'Transaction History', path: '/user/transaction',
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-newspaper" viewBox="0 0 16 16">
                           <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
                           <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
                        </svg>`
  },


  {
    label: 'Settings', path: '/user/settings',
    image: `<svg viewBox="0 0 16 17" width="20" height="20" fill="#fff" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11C6.62 11 5.5 9.88 5.5 8.5C5.5 7.12 6.62 6 8 6C9.38 6 10.5 7.12 10.5 8.5C10.5 9.88 9.38 11 8 11ZM8 7C7.17333 7 6.5 7.67333 6.5 8.5C6.5 9.32667 7.17333 10 8 10C8.82667 10 9.5 9.32667 9.5 8.5C9.5 7.67333 8.82667 7 8 7Z" fill="white"/>
<path d="M10.1397 15.2933C9.99967 15.2933 9.85967 15.2733 9.71968 15.24C9.30634 15.1267 8.95967 14.8667 8.73967 14.5L8.65967 14.3667C8.26634 13.6867 7.72634 13.6867 7.33301 14.3667L7.25968 14.4933C7.03967 14.8667 6.69301 15.1333 6.27967 15.24C5.85967 15.3533 5.42634 15.2933 5.05967 15.0733L3.91301 14.4133C3.50634 14.18 3.21301 13.8 3.08634 13.34C2.96634 12.88 3.02634 12.4067 3.25967 12C3.45301 11.66 3.50634 11.3533 3.39301 11.16C3.27967 10.9667 2.99301 10.8533 2.59967 10.8533C1.62634 10.8533 0.833008 10.06 0.833008 9.08665V7.91332C0.833008 6.93999 1.62634 6.14665 2.59967 6.14665C2.99301 6.14665 3.27967 6.03332 3.39301 5.83999C3.50634 5.64665 3.45967 5.33999 3.25967 4.99999C3.02634 4.59332 2.96634 4.11332 3.08634 3.65999C3.20634 3.19999 3.49967 2.81999 3.91301 2.58665L5.06634 1.92665C5.81967 1.47999 6.81301 1.73999 7.26634 2.50665L7.34634 2.63999C7.73968 3.31999 8.27968 3.31999 8.67301 2.63999L8.74634 2.51332C9.19967 1.73999 10.193 1.47999 10.953 1.93332L12.0997 2.59332C12.5063 2.82665 12.7997 3.20665 12.9263 3.66665C13.0463 4.12665 12.9863 4.59999 12.753 5.00665C12.5597 5.34665 12.5063 5.65332 12.6197 5.84665C12.733 6.03999 13.0197 6.15332 13.413 6.15332C14.3863 6.15332 15.1797 6.94665 15.1797 7.91999V9.09332C15.1797 10.0667 14.3863 10.86 13.413 10.86C13.0197 10.86 12.733 10.9733 12.6197 11.1667C12.5063 11.36 12.553 11.6667 12.753 12.0067C12.9863 12.4133 13.053 12.8933 12.9263 13.3467C12.8063 13.8067 12.513 14.1867 12.0997 14.42L10.9463 15.08C10.693 15.22 10.4197 15.2933 10.1397 15.2933ZM7.99967 12.8267C8.59301 12.8267 9.14634 13.2 9.52634 13.86L9.59967 13.9867C9.67967 14.1267 9.81301 14.2267 9.97301 14.2667C10.133 14.3067 10.293 14.2867 10.4263 14.2067L11.5797 13.54C11.753 13.44 11.8863 13.2733 11.9397 13.0733C11.993 12.8733 11.9663 12.6667 11.8663 12.4933C11.4863 11.84 11.4397 11.1667 11.733 10.6533C12.0263 10.14 12.633 9.84665 13.393 9.84665C13.8197 9.84665 14.1597 9.50665 14.1597 9.07999V7.90665C14.1597 7.48665 13.8197 7.13999 13.393 7.13999C12.633 7.13999 12.0263 6.84665 11.733 6.33332C11.4397 5.81999 11.4863 5.14665 11.8663 4.49332C11.9663 4.31999 11.993 4.11332 11.9397 3.91332C11.8863 3.71332 11.7597 3.55332 11.5863 3.44665L10.433 2.78665C10.1463 2.61332 9.76634 2.71332 9.59301 3.00665L9.51967 3.13332C9.13967 3.79332 8.58634 4.16665 7.99301 4.16665C7.39967 4.16665 6.84634 3.79332 6.46634 3.13332L6.39301 2.99999C6.22634 2.71999 5.85301 2.61999 5.56634 2.78665L4.41301 3.45332C4.23967 3.55332 4.10634 3.71999 4.05301 3.91999C3.99967 4.11999 4.02634 4.32665 4.12634 4.49999C4.50634 5.15332 4.55301 5.82665 4.25967 6.33999C3.96634 6.85332 3.35967 7.14665 2.59967 7.14665C2.17301 7.14665 1.83301 7.48665 1.83301 7.91332V9.08665C1.83301 9.50665 2.17301 9.85332 2.59967 9.85332C3.35967 9.85332 3.96634 10.1467 4.25967 10.66C4.55301 11.1733 4.50634 11.8467 4.12634 12.5C4.02634 12.6733 3.99967 12.88 4.05301 13.08C4.10634 13.28 4.23301 13.44 4.40634 13.5467L5.55967 14.2067C5.69967 14.2933 5.86634 14.3133 6.01967 14.2733C6.17967 14.2333 6.31301 14.1267 6.39967 13.9867L6.47301 13.86C6.85301 13.2067 7.40634 12.8267 7.99967 12.8267Z" fill="white"/>
</svg>
`
  }
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


const loginout = async () => {
  
  
await logout();

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