<template>

  <div class="bg-slate-50">
    <UserNavbar page_tittle="  Buy Number" :pagelaod="pagelaod" class=" text-[poppins] w-full hiddn "></UserNavbar>


    <div class="  flex mt-5 gap-3 ">
      <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
      <div class="sm:mx-4 mx-0 sm:px-2 px-0  w-full  shrink  flex-initial ">
        <div class=" pb-52 container   mx-auto flex gap-6 flex-col justify-center ">

          <!-- RECENT COUNTRY CHOICE -->
          <section class="  rounded-lg shadow-lg bg-white sm:p-5 p-2  mb-10 mt-">
            <div class=" w-full py-3 flex justify-between items-center  bg-tertiary rounded-lg text-white px-3 mb-5">
              <p class="text-[16px] font-medium">Recent Working Countries </p>
            </div>
            <div class=" relative">

              <div class=" min-h-[120px]">

                <div id="apps" class=" py-5  px-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1   gap-4 w grid overflow-y-scroll">

                  <div v-for="item in recentCountryUserChoose" @click="shows(item)"
                    :class="{ 'bg-black hover:bg-black   text-white': item.countryName === selected }"
                    class="flex   gap-3 hover:border-primary transform duration-300    cursor-pointer text-center items-center w-full h-fit border border-black py-1 px-2 rounded shadowss"
                    :key="item.countryName">
                    <img :src="`/countryimage/${(item.countryName ?? '').replace(/\s+/g, '').toLowerCase()}.png`"
                      class=" w-7" :alt="item.countryName" />


                    <h3 class=" w-full text-[14px] font-medium text-center">{{ item.countryName }}</h3>
                  </div>

                </div>
                <div v-if="!recentCountryUserChoose[0]" class="  flex items-center justify-center   w-full ">
                  <p class=" text-[16px] font-medium">No Country as selected.</p>
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
                  :class="{ 'bg-black hover:bg-black   text-white': item.countryName === selected }"
                  class="flex   gap-3 hover:border-primary transform duration-300    cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
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
                  <p class=" text-[16px] font-medium">No Country as selected.</p>
                </div>
                <div id="apps"
                  class=" cursor-pointer py-5  px-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 w grid max-h-[250px] overflow-y-scroll">
                  <div v-for="item in filteredApps" @click="generateNnumber(item)"
                    :class="{ 'bg-black hover:bg-black  text-white': item.app === selectedapp }"
                    class="flex cursor-pointers gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                    :key="item.app">

                    <img :src="`/appsImage/${(item.app ?? '').replace(/\s+/g, '').toLowerCase()}.png`" class="w-7"
                      :alt="item.app || 'App Image'" />
                    <h3 class=" w-full text-[14px] font-medium  overflow-visible text-center">{{
                      item.app
                    }}</h3>

                    <div
                      class="  text-[10px] flex gap-1 font-medium  px-3 py-[2px] border-green-700 rounded-xl w-fit hfit border  text-end">
                      <div class=" flex gap-2">
                        <p>{{ item.rate }}</p> Credits
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
            <div class="w  m  overflow-x-auto  text-[15px] ul   h-fit w-full        mb-20   mt-  ">
              <div class="  mt-4 relative   h-full ">
                <div :class="isotpLoadFinished ? 'hidden' : 'flex'" class=" h-full w-full absolute">
                  <div class=" flex justify-center    items-center  bg-opacity-20 h-full w-full bg-primary">
                    <img class="w-16  " src="@/assets/images/svg/preload.svg" alt="" srcset="">
                  </div>
                </div>
                <table class=" font-semibold ov w-full  bg-white  text-sm">
                  <thead class=" w-full">
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
                    <tr v-for="(item, index) in data.slice(0, 10)" :key="index"
                      :class="index % 2 === 0 ? ' bg-zinc-100 ' : 'bg-white'" class=" border-b-[1px] border-black">
                      <td class="text-center font-boldc px-3 py-0.5"> {{ item.Phone_Number }}</td>
                      <td class="text-center min-w-52  px-3 py-0.5">{{ item.Activation_Code }}</td>
                      <td class="text-center py-0.5 px-3">{{ item.transactiondate }}</td>
                      <td class="text-center py-0.5 px-3">{{ item.Country }}</td>
                      <td class="text-center py-0.5 px-3">{{ item.App }}</td>
                      <td class="text-center py-0.5 px-3">
                        <button @click="getOtp(item)" class=" text-white px-2 py-0.5 rounded">
                          <img src="@/assets/images/svg/reload.svg" alt="relaad" class="w-4" srcset="">
                        </button>
                      </td>
                    </tr>
                  </tbody>

                </table>
                <TypographyP @click="router.push('/user/number_history')"
                  class=" text-preprimary cursor-pointer mt-4 text-sm  text-center">View All Numbers</TypographyP>
                <div v-if="!data[0]" class="  h-36 flex justify-center items-center  w-full      ">

                  <p @click="router.push(link.path)" class="text-[16px] font-medium">No Number History </p>
                </div>

              </div>

            </div>

          </section>
        </div>


      </div>
    </div>
  </div>
</template>




<script setup>
import axios from "axios";
definePageMeta({
  middleware: "auth",
});


import { ref, onMounted } from 'vue'
import countryNames from '../../data/country.json';
import { fetchUserData } from '@/stores/dashboard'
let refreshInterval = null;
const router = useRouter()

const recentCountryChoose = ref([])
const pagelaod = ref(false)
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
const toast = useToast();
const store = fetchUserData()
const number_used = ref([])
const autmaticOtp = async () => {
  console.log('fff');

  const itemsWithoutActivationCode = data.value.filter(element => {
    return !element.Activation_Code || element.Activation_Code === '';
  });



  await Promise.all(itemsWithoutActivationCode.map(async (element) => {
    isotpLoadFinished.value = false
    const response = await axios({
      url: "http://localhost:3500/getRates/otp",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: { country: element.Country, app: element.App, phoneNumber: element.Phone_Number, transactiondate: element.transactiondate }
    });

    isotpLoadFinished.value = true
    setTimeout(getnumber, 10000)
    getnumber()

  }));


}

// const startopt = () => {
//     if (typeof window === "undefined") return; // Make sure e no run for server-side

//     refreshInterval = setInterval(autmaticOtp, 6000);
//   };

const nofit = (title, description, color = "red") => {
  toast.add({
    title: title,
    description: description,
    color: color,
  });
}



const getnumber = async () => {



  try {
    const response = await axios({
      url: "http://localhost:3500/getRates",
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const apps = response.data;
    data.value = apps.reverse()
    console.log('reach you');

    console.log(store.message, 'ffffffff');
    number_used.value = data.value.filter(element => {
      return element.Activation_Code
    });
   store.totalNumberUsed = number_used.value.length
   console.log(store.totalNumberUsed);
   


  } catch (error) {
    if (error.response) {
      nofit('error', error.response.data.message, "red")
      console.error(error)

    }
  }






}
getnumber()






const shows = async (item) => {

  isLoadingFinished.value = false;
  selected.value = item.countryName;
  selectedcountry.value = item.countryName;


  try {
    const response = await axios.get(`http://localhost:3500/getRates/apps/${item.countryName}`);
    const apps = response.data;

    if (!apps) {
      nofit('Notices', 'An error occurred', "red")

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


const recentCountryUserChoose = computed(() => {
  if (!data.value || !Array.isArray(data.value)) return [];

  // Count occurrences of each country
  const countryCounts = data.value.reduce((acc, app) => {
    if (app.Country) {
      acc[app.Country] = (acc[app.Country] || 0) + 1;
    }
    return acc;
  }, {});

  // Sort countries by count in descending order
  const sortedCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1]) // Sort by frequency
    .map(([country]) => ({ countryName: country }));

  // Show only countries that have the highest occurrences
  return sortedCountries.slice(0, 3); // Show top 3 most common
});



const getOtp = async (item) => {
  console.log(item.Phone_Number, 'opt');
  isotpLoadFinished.value = false

  if (!item.Activation_Code || item.Activation_Code === '') {
    try {
      const response = await axios({
        url: "http://localhost:3500/getRates/otp",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        data: { country: item.Country, app: item.App, phoneNumber: item.Phone_Number, transactiondate: item.transactiondate }
      });

      const apps = response.data;
      isotpLoadFinished.value = true

      getnumber()


      isotpLoadFinished = true
    } catch (error) {
      nofit('error', error.response.data.message, "red")
      isotpLoadFinished.value = true
      getnumber()
    }

  }

  isotpLoadFinished.value = true

}











const generateNnumber = async (item) => {
  isLoadingFinished.value = false;
  selectedapp.value = item.app;
  clearInterval(autmaticOtp)
  const selectedApp = item.app
  console.log(selectedApp);


  try {
    const response = await axios({
      url: "http://localhost:3500/getRates/generateNumber",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: {
        country: selectedcountry.value, app: selectedApp
      }
    });

    const apps = response.data;
    nofit('Notices', apps, "green")


    getnumber()

    //   ({

    //     title: "Notices",
    //     text: apps,
    //   });
    isLoadingFinished.value = true
  } catch (error) {
    if (error.response) {
      nofit('error', error.response.data, "red")
      console.error(error);

      // ({
      //   title: 'error',
      //   text: error.response.data.message,
      // });
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

    } else if (error.request) {
      nofit('error', error.request, "red")
      console.error(error);
      // ({
      //   title: 'error',
      //   text: error.request,
      // });
      isLoadingFinished.value = false
      // The request was made but no response was received

    } else {
      isLoadingFinished.value = true
      console.log('not good');


    }
    console.log('not pade');

    isLoadingFinished.value = true
  }


}








watch(() => store.userData, (newData) => {


  pagelaod.value = true
});










</script>






<style>
.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}

td {
  border-left: 1px;
  border: solid 0px rgb(128, 128, 128);
  padding: 0px 0px;
}
</style>