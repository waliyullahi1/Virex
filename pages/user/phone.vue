<template>

    <div class="bg-slate-50">
      <UserNavbar class=" text-[poppins] w-full hiddn " :pagelaod="pagelaod"></UserNavbar>
  
      <div class="  flex mt-5 gap-3 ">
        <div class=" h-3  bg lg:block md:block flex-none min-w-56 hidden  ml-[1rem] "></div>
        <div class=" md:mx-4 px-4    w-full   ">
          <div class=" container px-2 sm:px-0   mx-auto flex gap-6 flex-col justify-center">
  
            <!-- RECENT COUNTRY CHOICE -->
            <section class="  rounded-lg shadow-lg bg-white sm:p-5 p-2  mb-10 mt-">
              <div class=" w-full py-3 flex justify-between items-center  bg-tertiary rounded-lg text-white px-3 mb-5">
                <p class="text-[16px] font-medium">Recent Working Countries </p>
              </div>
              <div class=" relative">
  
                <div>
                  <div v-if="!appfound[0]" class=" absolute flex items-center justify-center  w-full ">
                    <p class=" text-2xl text-center "></p>
                  </div>
                  <div id="apps" class=" py-5  px-3 grid-cols-3 gap-4 w grid min-h-[120px] overflow-y-scroll">
  
                  </div>
                </div>
  
  
              </div>
  
  
            </section>
  
            <!-- CHOICE COUNTRY  -->
            <section class="  rounded-lg shadow-lg bg-white mb-10   p-2  md:p-5  ">
              <div
                class=" w-full py-3 sm:flex block justify-between items-center bg-tertiary rounded-lg text-white px-3 mb-5">
                <p class="text-[16px] pb-3 font-medium">Choose a Country </p>
                <input type="search5" name="" v-model="searchCoutry" placeholder="search Country..."
                  class=" px-2 outline-none h-8  rounded-lg text-black" id="">
              </div>
              <div class="relative">
  
                <div id="countries"
                  class="  z-20 px-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-4 overflow-hidden w grid max-h-[250px] overflow-y-scroll">
  
                  <div v-for="item in filteredcountry" @click="shows(item)"
                    :class="{ 'bg-black hover:bg-black  text-white': item.countryName === selected }"
                    class="flex   gap-3 hover:border-[#799a3b] hover:bg-[#f3fff6] hover:text-[#799a3b] cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                    :key="item.countryName">
  
                    <img :src="`/countryimage/${item.image.toLowerCase()}.png`" class=" w-7" :alt="item.countryName" />
                    <h3 class=" w-full text-[14px] font-medium text-center">{{ item.countryName }}</h3>
                  </div>
  
                </div>
              </div>
  
  
            </section>
  
            <!-- CHOICE APP  -->
            <section class="  rounded-lg shadow-lg bg-white mb-10 p-2  md:p-5 ">
              <div
                class=" w-full py-3  md:flex justify-between items-center  bg-tertiary rounded-lg text-white px-3 mb-5">
                <p class="text-[16px] pb-2 font-medium">Choose an App </p>
                <input type="search" v-model="searchTerm" name="" placeholder="search Country..."
                  class=" px-2 outline-none h-8 rounded-sm text-black" id="">
              </div>
              <div class=" relative">
                <div :class="isLoadingFinished ? 'hidden' : 'flex'"
                  class=" flex justify-center items-center absolute bg-opacity-20 h-full  w-full bg-primary">
                  <img class="w-16 " src="@/assets/images/svg/preload.svg" alt="" srcset="">
                </div>
  
                <div>
                  <div v-if="!appfound[0]" class="  flex items-center justify-center   w-full ">
                    <p class=" text-2xl text-center ">Choose a Country first.</p>
                  </div>
                  <div id="apps"
                    class=" cursor-pointer py-5  px-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 w grid max-h-[250px] overflow-y-scroll">
                    <div v-for="item in filteredApps" @click="generateNnumber(item)"
                      :class="{ 'bg-black hover:bg-black  text-white': item.appName === selectedapp }"
                      class="flex cursor-pointers gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                      :key="item.countryName">
  
                      <img :src="`/appsImage/${item.image.toLowerCase()}.png`" class=" w-7" :alt="item.appName" />
                      <h3 class=" w-full text-[14px] font-medium  overflow-visible text-center">{{
                        item.appName
                        }}</h3>
  
                      <div
                        class="  text-[10px] flex gap-1 font-medium  px-3 py-[2px] border-green-700 rounded-xl w-fit hfit border  text-end">
                        <div class=" flex gap-2">
                          <p>{{ item.price }}</p> Credits
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
  
              </div>
  
  
            </section>
  
             <!-- COPY SMS MESSAGE  -->
            <section class="  rounded-lg shadow-lg bg-white mb-20 p-2  md:p-5">
              <div
                class=" w-full py-3 flex ddd justify-between items-center  bg-tertiary rounded-lg text-white px-3 mb-5">
                <p class="text-[14px] font-medium">Your Numbers ()</p>
              </div>
  
              <p class="text-[13px] bg-red-500 py-2 px-2 text-white" @click="getnumber()">All numbers are not eligible to
                receive sms for all
                services we request you to change number and wait only 1min to receive code if no code comes change
                number.
                We never charge money for numbers it only charge for sms/codes.</p>
              <!-- <button @click="autmaticOtp()">jjjj</button> -->
              <div class="w   overflow-x-auto  text-[15px] ul   h-fit w-full        mb-20   mt-  " >
                <div class=" min-w-[800px] mt-4 relative w-full  h-full ">
                  <div :class="isotpLoadFinished ? 'hidden' : 'flex'" class=" h-full w-full absolute">
                    <div class=" flex justify-center    items-center  bg-opacity-20 h-full w-full bg-primary">
                      <img class="w-16  " src="@/assets/images/svg/preload.svg" alt="" srcset="">
                    </div>
                  </div>
                  <table class=" font-semibold ov w-full  bg-white  text-sm">
                    <thead>
                      <tr class=" border-b-2 b  border-b-tertiary  h-10">
                        <th class="text-center pb-1  w-[9rem] ">Phone Number</th>
                        <th class="text-center  w-[9rem]">Activation Code</th>
                        <th class="text-center">Order Time</th>
                        <th class="text-center">Country</th>
                        <th class="text-center">App</th>
                        <th class="text-center">Get Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in 10" :key="index">
                        <td class="text-center py-3"> dsvnv{{ user.phone }}</td>
                        <td class="text-center py-3">fdbjfoi{{ user.activationCode }}</td>
                        <td class="text-center py-3">fvnsdn{{ user.orderTime }}</td>
                        <td class="text-center py-3">fvsndui{{ user.country }}</td>
                        <td class="text-center py-3">dccbdiu{{ user.app }}</td>
                        <td class="text-center py-3">
                          <button class="bg-blue-500 text-white px-2 py-1 rounded">Get Code</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
  
                </div>
  
              </div>
  
            </section>
          </div> 
  
  
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import countryNames from '../../data/country.json';
  import appAvailable from '../../data/apps.json';
  import axios from 'axios'


//   definePageMeta({
//   middleware: "auth",
// });
const pagelaod = ref(true)
  const selectedapp = ref('');
  const selected = ref('');
  const appfound = ref([]);
  const searchTerm = ref('');
  const searchCoutry = ref('');
  const appfilter = ref('');
  const isLoadingFinished = ref(true);
  const selectedcountry = ref('');
  const data = ref([{}, {}, {}]);
  const isotpLoadFinished = ref(true);
  
  
  const getnumber = async () => {
  
  
  
    try {
      const response = await axios({
        url: "https://api.abaniseedu.com/getRates",
        method: "GET",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
  
      const apps = response.data;
      data.value = apps.reverse()
  
  
    } catch (error) {
      if (error.response) {
        //   ({
        //     title: 'error',
        //     text: error.response.data.message,
        //   });
      }
    }
  
  
  
  
  
  
  }
  getnumber()
  
  
  
  
  
  const shows = async (item) => {
    isLoadingFinished.value = false
    selected.value = item.countryName;
    selectedcountry.value = item.countryName
    let appfounds = appAvailable.filter(app => app.available.includes(item.countryName));
  
  
  
    try {
      const response = await axios.get(`https://api.abaniseedu.com/getRates/apps/${item.countryName}`);
      const apps = response.data;
  
      apps.value = null
      if (!apps) {
        // ({
  
        //   title: "Notices",
        //   text: 'An error occure',
        // });
        return
      } else {
        appfounds = appfounds.filter(element => {
          const matchingApp = apps.find(app => app.app === element.appName);
          if (matchingApp) {
  
            element.price = matchingApp.rate;
            return true;
          }
          return false;
        });
        appfound.value = appfounds;
      }
  
    } catch (error) {
      //   ({
  
      //     title: "Notices",
      //     text: 'An error occure',
      //   });
     // console.error(error);
    }
  
  
  
    isLoadingFinished.value = true
  }
  
  
  
  
  const filteredcountry = computed(() => {
  
    if (searchCoutry.value) {
      const countryfilter = countryNames.filter(app => app.countryName.toLowerCase().includes(searchCoutry.value.toLowerCase()))
      return countryfilter
    } else {
  
      return countryNames;
    }
  
  });
  
  
  
  const filteredApps = computed(() => {
  
    if (searchTerm.value) {
      appfilter.value = appfound.value.filter(app => app.appName.toLowerCase().includes(searchTerm.value.toLowerCase()))
      return appfilter.value
    } else {
      return appfound.value;
    }
  
  });
  
  
  
  
  const getOtp = async (item) => {
    console.log(item.phoneNumber, item.App);
    isotpLoadFinished.value = false
    if (!item.Activation_Code || item.Activation_Code === '') {
      try {
        const response = await axios({
          url: "https://api.abaniseedu.com/getRates/otp",
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          data: { country: item.Country, app: item.App, phoneNumber: item.Phone_Number, transactiondate: item.transactiondate }
        });
  
        const apps = response.data;
        isotpLoadFinished.value = true
        setTimeout(() => {
          getnumber()
        }, 10);
  
        isotpLoadFinished = true
      } catch (error) {
  
        isotpLoadFinished.value = true
      }
  
    }
  
    isotpLoadFinished.value = true
  
  }
  
  
  
  
  const autmaticOtp = async () => {
  
    const itemsWithoutActivationCode = data.value.filter(element => {
      return !element.Activation_Code || element.Activation_Code === '';
    });
  
  
  
    await Promise.all(itemsWithoutActivationCode.map(async (element) => {
      isotpLoadFinished.value = false
      const response = await axios({
        url: "https://api.abaniseedu.com/getRates/otp",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        data: { country: element.Country, app: element.App, phoneNumber: element.Phone_Number, transactiondate: element.transactiondate }
      });
  
      isotpLoadFinished.value = true
  
      getnumber()
  
    }));
  
  
  }
  
  
  
  
  
  
  const generateNnumber = async (item) => {
    isLoadingFinished.value = false
    selectedapp.value = item.appName;
  
    const selectedApp = item.appName
  
    try {
      const response = await axios({
        url: "https://api.abaniseedu.com/getRates/generateNumber",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        data: {
          country: selectedcountry.value, app: selectedApp
        }
      });
  
      const apps = response.data;
  
      setTimeout(() => {
        getnumber()
      }, 10);
      //   ({
  
      //     title: "Notices",
      //     text: apps,
      //   });
      isLoadingFinished.value = true
    } catch (error) {
      if (error.response) {
        // ({
        //   title: 'error',
        //   text: error.response.data.message,
        // });
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
  
      } else if (error.request) {
        // ({
        //   title: 'error',
        //   text: error.request,
        // });
        isLoadingFinished.value = false
        // The request was made but no response was received
  
      } else {
        isLoadingFinished.value = true
  
      }
  
      isLoadingFinished.value = true
    }
  
  
  }
  
  
  // setInterval(() => {
  //   autmaticOtp();
  // }, 10000);
  
 loading.value = false
  </script>
  
  
  
  
  
  
  <style>
  .shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  }
  </style>