<template>

    <div>
      <Navbar></Navbar>
      
      <div class="flex container  mx-auto - gap-10 ">
        
        <div class=" container l my-10  ">
          <div class=" md:w-[700px]  w-full  mx-auto flex gap-6 flex-col justify-center ">
  
  
           
  
  
            <section class="  ">
              <div
                class=" w-full py-3  rounded-b-md  px-3 mb-5">
                <TypographyH2 class="py-3">Choose a Country </TypographyH2>
                <input type="search5" name="" v-model="searchCoutry" placeholder="search Country..."
                  class=" px-2  w-full outline-none h-12 focus:shadow-primary shadow focus:border-primary  border-2 rounded-sm text-black" id="">
              </div>
              <div class="relative">
  
                <div id="countries"
                  class="  z-20 px-3  sm:grid-cols-2 gap-4 overflow-hidden py-5 w grid max-h-[250px] overflow-y-scroll">
  
                  <div v-for="item in filteredcountry" @click="shows(item)"
                    :class="{ 'bg-black hover:bg-black b  text-white': item.countryName === selected }"
                    class="flex   gap-3 hover:border-[#799a3b] hover:bg-[#f3fff6]  cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                    :key="item.countryName">
  
                    <img :src="`/countryimage/${item.image.toLowerCase()}.png`" class=" w-7" :alt="`${item.countryName} logo`" />
                    <TypographyH4 class=" w-full text-[14px] text-center">{{ item.countryName.toUpperCase() }}</TypographyH4>
                  </div>
  
                </div>
              </div>
  
  
            </section>
  
  
            <section class=" ">
              <div
                class=" w-full py-3     rounded-b-md px-3 mb-5">
                <TypographyH2 class=" py-3  ">Choose an App </TypographyH2>
                <input type="search" v-model="searchTerm" name="" placeholder="search Country..."
                  class=" px-2  w-full outline-none h-12 focus:shadow-primary shadow focus:border-primary  border-2 rounded-sm text-black" id="">
              </div>
              <div class=" relative">
                <div :class="isLoadingFinished ? 'hidden' : 'flex'"
                  class=" flex justify-center items-center absolute bg-opacity-20 h-full  w-full bg-primary">
                  
                </div>
  
                <div>
                  <div v-if="!appfound[0]" class="  flex items-center justify-center   w-full ">
                    <TypographyP class=" ">Choose a Country first.</TypographyP>
                  </div>
                  <div id="apps"
                    class=" cursor-pointer py-5  px-3  grid-cols-1 md:grid-cols-2 gap-4 w grid max-h-[250px] overflow-y-scroll">
                    <div v-for="item in filteredApps" @click="generateNnumber(item)"
                      :class="{ 'bg-black hover:bg-black  text-white': item.appName === selectedapp }"
                      class="flex cursor-pointers gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                      :key="item.countryName">
  
                      <img :src="`/appsImage/${item.image.toLowerCase()}.png`" class=" w-7" :alt="item.appName" />
                      <TypographyH4 class=" w-full  font-medium  overflow-visible text-center">{{
                    item.appName.toUpperCase()
                  }}</TypographyH4>
  
                      <div
                        class="   flex gap-1  font-bold px-1 py-[2px] border-green-700 rounded-md w-fit hfit border  text-end">
                      <div class=" flex gap-2">
                        <TypographyH4 class=" text-base">{{ item.price }}₦</TypographyH4>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
  
  
              </div>
  
  
            </section>
  

            

          </div>
  
        </div>
      </div>

      
      <Footer></Footer>
    </div>
  </template>
  
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import countryNames from '../../data/country.json';
  import appAvailable from '../../data/apps.json';
  import axios from 'axios';

  
  
  
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
  
  
  
  
  
  
  
  
  const shows = async (item) => {
    isLoadingFinished.value = false
    selected.value = item.countryName;
    selectedcountry.value = item.countryName
    let appfounds = appAvailable.filter(app => app.available.includes(item.countryName));
  
  
  
    try {
      const response = await axios.get(`http://localhost:4500/apps/${item.countryName}`);
      const apps = response.data;
      
      apps.value = null
      if (!apps) {
        notify({
  
          title: "Notices",
          text: 'An error occure',
        });
        return
      } else {
        appfounds = appfounds.filter(element => {
          const matchingApp = apps.find(app => app.app === element.appName);
          if (matchingApp) {
  
            element.price = Number(matchingApp.rate) * 450  ;
            console.log(element.price);
            
            return true;
          }
          return false;
        });
        appfound.value = appfounds;
      }
  
    } catch (error) {
     
      console.error(error);
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
      notify({
  
        title: "Notices",
        text: apps,
      });
      isLoadingFinished.value = true
    } catch (error) {
      if (error.response) {
        notify({
          title: 'error',
          text: error.response.data.message,
        });
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
  
      } else if (error.request) {
        notify({
          title: 'error',
          text: error.request,
        });
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
  
  
  </script>
  
  
  
  
  
  
  <style>
  .shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  }
  </style>