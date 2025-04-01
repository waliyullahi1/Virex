<template>

  <div class="dark:bg-slate-50  dark:text-black">
    <UserNavbar page_tittle="  Buy Number" :pagelaod="pagelaod" class=" text-[poppins] w-full hiddn "></UserNavbar>


    <div class="  flex mt-5 gap-3 ">
      <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
      <div class="sm:mx-4 mx-0 sm:px-2 px-0  w-full  shrink  flex-initial ">
        <div class=" pb-52 container   mx-auto flex gap-6 flex-col justify-center ">

          <!-- RECENT COUNTRY CHOICE -->
          <section class="  rounded-lg shadow-lg bg-white sm:p-5 p-2  mb-10 mt-">
            <div class=" w-full py-3 flex justify-between items-center   bg-tertiary rounded-lg text-white px-3 mb-5">
              <p class="text-[16px] font-medium">Recent Working Countries </p>
            </div>
            <div class=" relative">

              <div class=" min-h-[120px]">

                <div id="apps" class=" py-5  dark:text-black  px-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1   gap-4 w grid overflow-y-scroll">

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
                class=" px-2   dark:bg-white dark:text-black outline-none h-8  rounded-lg text-black" id="">
            </div>
            <div class="relative">

              <div id="countries"
                class="  z-20 px-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-4 overflow-hidden w grid max-h-[250px] overflow-y-scroll">

                <div v-for="item in filteredcountry" @click="shows(item)"
                  :class="{ 'bg-black hover:bg-black  dark:bg-white dark:text-black   text-white': item.countryName === selected }"
                  class="flex  dark:text-black   gap-3 hover:border-primary transform duration-300    cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                  :key="item.countryName">

                  <img :src="`/countryimage/${item.image.toLowerCase()}.png`" class=" w-7" :alt="item.countryName" />
                  <h3 class=" w-full text-[14px] font-medium text-center">{{ item.countryName }}</h3>
                </div>

              </div>
            </div>


          </section>

          <!-- CHOICE APP  -->
          <section class="  dark:text-black rounded-lg shadow-lg bg-white mb-10 p-2  md:p-5 ">
            <div
              class=" w-full py-3  md:flex justify-between items-center  bg-tertiary rounded-lg text-white px-3 mb-5">
              <p class="text-[16px] pb-2 font-medium">Choose an App </p>
              <input type="search" v-model="searchTerm" name="" placeholder="search Country..."
                class=" dark:bg-white dark:text-black px-2 outline-none h-8 rounded-sm text-black" id="">
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
                        <p>{{ item.rate*400 }}</p> Nairas
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>


          </section>

          <!-- COPY SMS MESSAGE  -->
          <section class="  dark:text-black rounded-lg shadow-lg bg-white mb-20 p-2  md:p-5">
            <div
              class=" w-full py-3 flex ddd justify-between items-center  bg-tertiary rounded-lg text-white px-3 mb-5">
              <p class="text-[14px] font-medium">Your Numbers ( Last 25 )</p>
            </div>

            <p class="text-[13px] bg-red-500 py-2 px-2 text-white" @click="getnumber()">All numbers are not eligible to
              receive sms for all
              services we request you to change number and wait only 1min to receive code if no code comes change
              number.
              We never charge money for numbers it only charge for sms/codes.</p>
         
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
                      :class="index % 2 === 0 ? ' bg-zinc-100 ' : 'bg-white'" class=" border-b-[1px] hover:bg-zinc-200  border-black">
                      <td class="text-center font-boldc px-3 py-0.5"> {{ item.Phone_Number }}</td>
                      <td class="text-center min-w-52  px-3 py-0.5">{{ item.Activation_Code }}</td>
                      <td class="text-center py-0.5 px-3">{{ item.transactiondate }}</td>
                      <td class="text-center py-0.5 px-3">{{ item.Country }}</td>
                      <td class="text-center py-0.5 px-3">{{ item.App }}</td>
                      <td class="text-center py-0.5 px-3">
                        <button @click="getOtp(item)" class=" text-white px-2 py-0.5 rounded">
                          <img src="@/assets/images/svg/reload.svg" alt="relaad" class="min-w-4 w-4" srcset="">
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



import { ref, onMounted } from 'vue'
import countryNames from '../../data/country.json';
import { fetchUserData } from '@/stores/dashboard'

const router = useRouter()
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;




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





definePageMeta({
  middleware: "auth",
});


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
      url: `${BASE_URL}/getRates`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const apps = response.data;
    data.value = apps.reverse()
    console.log('reach you');

    
    number_used.value = data.value.filter(element => {
      return element.Activation_Code
    });
   store.totalNumberUsed = number_used.value.length
   console.log(store.totalNumberUsed);
   


  } catch (error) {
    if (error.response) {
      nofit('error', response.data.message, "red")
      console.error(error)

    }
  }






}







const shows = async (item) => {

  isLoadingFinished.value = false;
  selected.value = item.countryName;
  selectedcountry.value = item.countryName;


  try {
    const response = await axios.get(`${BASE_URL}/getRates/apps/${item.countryName}`);
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

let transaction_valid;

const getOtp = async (item) => {
  console.log('ddddsdgi');
  

  isotpLoadFinished.value = false

  if (!item.Activation_Code || item.Activation_Code === '') {
    try {
      const response = await axios({
        url: `${BASE_URL}/getRates/otp`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        data: { country: item.Country, app: item.App, phoneNumber: item.Phone_Number, transactiondate: item.transactiondate }
      });

      const apps = response.data;
      isotpLoadFinished.value = true
      console.log(response.data);
      
      getnumber()


      isotpLoadFinished = true
    } catch (error) {
      // nofit('error', error.response.data.message, "red")
      isotpLoadFinished.value = true
      getnumber()
    }

  }

  isotpLoadFinished.value = true

}

const autmaticOtp = async () => {
  
console.log(data);

  // const itemsWithoutActivationCode = data.value.filter(element => {
  //   return  element.status === 'No Used' || element.status === 'active';
  // });
  // const itemsWithoutActivationCode = data.value.filter(element => {
  //   return  element.status === 'No Used' || element.status === 'active';
  // });

  if (!data?.value){
    clearInterval(transaction_valid);
   return;  
  } 

    const itemsWithoutActivationCode = data.value.filter(element => {
    return element.status === 'active' || element.status === 'No Used'
  });
  console.log( );
  
  if(!itemsWithoutActivationCode) return


console.log(itemsWithoutActivationCode.length, 'ggggggg');


 try {
  await Promise.all(itemsWithoutActivationCode.map(async (element) => {
   
    getOtp(element)
    console.log('the nmber');
    
   
    

  }));
 } catch (error) {
  console.log(error);
  
 }


}

const startTransactionValidation = (tx_ref) => {
  // Wait for 10 seconds before the first call
  setTimeout(async () => {
    await autmaticOtp(); // First call after 10 seconds

    // Start polling every 10 seconds after the first call
    transaction_valid = setInterval(async () => {
      await autmaticOtp();
    }, 10000); // Poll every 10 seconds after the first call
  }, 10000); // Initial delay of 10 seconds for the first call
};
const stopTransactionValidation = () => {
  if (transaction_valid) {
    clearInterval(transaction_valid);
    console.log("Transaction validation stopped.");
  }
};
onUnmounted(() => {
  stopTransactionValidation();
});
onMounted(async () => {
  await getnumber();  // Step 1: Fetch numbers first and wait for it to finish
  await nextTick();   // Step 2: Ensure DOM updates are processed after getnumber()

  // Step 3: Make sure automatic OTP runs last after all other tasks are complete
  setTimeout(async () => {
    await startTransactionValidation();  // Running autmaticOtp() last after a brief delay to ensure completion order
  }, 100);  // Small delay ensures it doesn't block other initialization tasks
});













const generateNnumber = async (item) => {
  isLoadingFinished.value = false;
  selectedapp.value = item.app;
  clearInterval(transaction_valid)
  const selectedApp = item.app
  console.log(selectedApp);


  try {
    const response = await axios({
      url: `${BASE_URL}/getRates/generateNumber`,
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

   
    isLoadingFinished.value = true
    await startTransactionValidation();
  } catch (error) {
    if (error.response) {
      nofit('Error', error.response.data.message, "red")
      console.error(error);

      await startTransactionValidation();

    } else if (error.request) {
      // nofit('error', error.request, "red")
      console.error(error);
      await startTransactionValidation();
      isLoadingFinished.value = false
      // The request was made but no response was received

    } else {
      isLoadingFinished.value = true
      console.log('not good');
      await startTransactionValidation();

    }
    console.log('not pade');
    await startTransactionValidation();
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