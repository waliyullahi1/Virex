<template>

  <div class="dark:bg-white dark:text-black bg-white ">
    <Navbar></Navbar>

    <div class="flex container  mx-auto - gap-10 ">

      <div class=" container l my-10  ">
        <div class=" md:w-[700px]  w-full  mx-auto flex gap-6 flex-col justify-center ">





          <section class="  ">
            <div class=" w-full py-3  rounded-b-md  px-3 mb-5">
              <TypographyH2 class="py-3">Choose a Country </TypographyH2>
              <input type="search5" name="" v-model="searchCoutry" placeholder="search Country..."
                class=" px-2 dark:bg-white dark:text-black  w-full outline-none h-12 focus:shadow-primary shadow focus:border-primary  border-2 rounded-sm text-black"
                id="">
            </div>
            <div class="relative">

              <div id="countries"
                class="  z-20 px-3  sm:grid-cols-2 gap-4 overflow-hidden py-5 w grid max-h-[250px] overflow-y-scroll">

                <div v-for="item in filteredcountry" @click="shows(item)"
                  :class="{ 'bg-black  hover:bg-black b  text-white': item.countryName === selected }"
                  class="flex   gap-3 hover:border-[#799a3b] hover:bg-[#f3fff6]  cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                  :key="item.countryName">

                  <img :src="`/countryimage/${item.image.toLowerCase()}.png`" class=" w-7"
                    :alt="`${item.countryName} logo`" />
                  <TypographyH4 class=" w-full text-[14px] text-center">{{ item.countryName.toUpperCase() }}
                  </TypographyH4>
                </div>

              </div>
            </div>


          </section>


          <section class=" ">
            <div class=" w-full py-3     rounded-b-md px-3 mb-5">
              <TypographyH2 class=" py-3  ">Choose an App </TypographyH2>
              <input type="search" v-model="searchTerm" name="" placeholder="search Country..."
                class=" px-2 dark:bg-white dark:text-black  w-full outline-none h-12 focus:shadow-primary shadow focus:border-primary  border-2 rounded-sm text-black"
                id="">
            </div>
            <div class=" relative">
              <div :class="isLoadingFinished ? 'hidden' : 'flex'"
                class=" flex justify-center items-center absolute bg-opacity-20 h-full  w-full bg-primary">
                <img class="w-16  " src="@/assets/images/svg/preload.svg" alt="" srcset="">
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

                    <img :src="`/appsImage/${(item.app ?? '').replace(/\s+/g, '').toLowerCase()}.png`" class="w-7" :alt="item.app || 'App Image'" />
                    <TypographyH4 class=" w-full  font-medium  overflow-visible text-center">{{
                      item.app.toUpperCase()
                      }}</TypographyH4>

                    <div
                      class="   flex gap-1  font-bold px-1 py-[2px] border-green-700 rounded-md w-fit hfit border  text-end">
                      <div class=" flex gap-2">
                        <TypographyH4 class=" text-base">{{ item.rate *400 }}₦</TypographyH4>
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
import axios from 'axios';
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;



const selectedapp = ref('');
const selected = ref('');
const appfound = ref([]);
const searchTerm = ref('');
const searchCoutry = ref('');
const appfilter = ref('');
const isLoadingFinished = ref(true);
const selectedcountry = ref('');






const shows = async (item) => {
  isLoadingFinished.value = false;
  selected.value = item.countryName;
  selectedcountry.value = item.countryName;
  

  try {
    const response = await axios.get(`${BASE_URL}/getRates/apps/${item.countryName}`);
    const apps = response.data;
    
    if (!apps) {
      notify({
        title: "Notices",
        text: 'An error occurred',
      });
      return;
    } else {

      appfound.value = apps;
      
    }
  } catch (error) {
    console.error(error);
  }

  isLoadingFinished.value = true;
};

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
    appfilter.value = appfound.value.filter(app => app.app.toLowerCase().includes(searchTerm.value.toLowerCase()))
    return appfilter.value
  } else {
    return appfound.value;
  }

});
















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