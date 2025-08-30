<!-- <template>

  <div class="dark:bg-slate-50 overflow-x-hidden   dark:text-black">
    <UserNavbar page_tittle="  Buy Number" class=" text-[poppins] w-full hiddn "></UserNavbar>


    <div class="  w-full mt-5 gap-3 ">

      <div class=" sm:px-2 px-0  w-full   shrink  flex-initial ">
        <div class=" pb-52  w-full  mx-auto flex gap-6 flex-col justify-center ">

          <div class=" w-full  gap-4  justify-between  block  md:flex">
            <div class="md:w-[55rem] w-full">
             HOICE COUNTRY  
              <section class="   rounded-lg  bg-white mb-2   p-2    ">
                <div class=" w-full  sm:flex block justify-between items-center rounded-lg text-white px-1 mb-5">

                  <input type="search5" name="" v-model="searchCoutry" placeholder="Search country..."
                    class="  dark:bg-white dark:text-black outline-none py-2 px-2 w-full border  rounded-lg text-black"
                    id="">
                </div>
                <div class="relative w-full">

                  <div id="countries" class="  z-20 px-3 w grid h-[300px]  overflow-y-scroll">
                    <div class=" w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 h-fit grid gap-2 ">


                      <div v-for="item in filteredcountry" @click="shows(item)"
                        :class="{ 'bg-black    dark:bg-black dark:text-white  hover:bg-black  text-white': item.countryName === selected }"
                        class="flex group overflow-hidden dark:text-black hover:bg-tertiary  items-center   gap-2 hover:border-primary transform duration-300 text-left    cursor-pointer r h-fit w-full border  py-1 px-2 rounded "
                        :key="item.countryName">
                        <div>

                        </div>
                        <img :src="`/countryimage/${item.image.toLowerCase()}.png`" class=" h-fit w-4"
                          :alt="item.countryName" />
                        <h3 class="  text-[14px] whitespace-nowrap font-medium group-hover:text-white  text-center">{{
                          item.countryName }}</h3>
                      </div>
                    </div>

                  </div>
                </div>


              </section>

              <!-- CHOICE APP  
              <section class="  space-y-2  rounded-lg  bg-white mb-10    ">
                <div class=" w-full sm:flex block justify-between items-center rounded-lg text-white px-1 ">

                  <input type="search" v-model="searchTerm" name="" placeholder="search App..."
                    class="  dark:bg-white dark:text-black outline-none py-2 px-2 w-full border  rounded-lg text-black"
                    id="">
                </div>
                <div class="relative w-full">
                  <TypographyP class=" pb-2 text-center font-semibold">{{ selected }} Apps</TypographyP>
                  <div id="countries" class="  z-20 px-3 w grid h-[300px]  overflow-y-scroll">
                    <div class=" w-full md:grid-cols-2 sm:grid-cols-3 h-fit grid gap-2 ">


                      <div v-for="item in filteredApps" @click="generateNnumber(item)"
                        :class="{ 'bg-black    dark:bg-black dark:text-white  hover:bg-black  text-white': item.countryName === selected }"
                        class="flex group overflow-hidden dark:text-black hover:bg-tertiary  justify-between items-center   gap-2 hover:border-primary transform duration-300 text-left    cursor-pointer r h-fit w-full border  py-1 px-2 rounded "
                        :key="item.app">

                        <div class="flex items-center gap-2">
                          <img
                            :src="`/appsImage/${(getAppImage(item.app) ?? '').replace(/\s+/g, '').toLowerCase()}.png`"
                            class="w-7" @error="$event.target.src = '/appsImage/asa.png'" />
                          <h3 class="  text-[14px] whitespace-nowrap font-medium group-hover:text-white  text-center">{{
                            item.app }}</h3>
                        </div>
                        <div
                          class="  bg-white text-[14px] flex gap-1 font-medium  px-3 py-[2px] border-green-700 rounded-sm w-fit hfit border  text-end">
                          <div class=" flex gap-2">
                            <p class="text-[12px] font-medium"> {{ (item.rate * usdToNgn).toFixed(2) }}₦</p>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>


              </section>
            </div>

            <div class="w-full ">
              <!-- TRENDING APP
              <section class="  w-full bg-white   rounded-lg  bg- mb-10   p-2   ">
                <div class=" w-full py-3  sm:flex block justify-between items-center rounded-lg  px-1">

                  <TypographyH4> 🔥 Trending Apps</TypographyH4>
                </div>
                <div class="relative w-full">

                  <div id="countries" class="  z-20 px-3 w grid h-fit">
                    <div class=" w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 h-fit grid gap-2 ">


                      <div v-for="item in trendApps" @click="generateNnumber(item)"
                        :class="{ 'bg-black    dark:bg-black dark:text-white  hover:bg-black  text-white': item.countryName === selected }"
                        class="flex group overflow-hidden dark:text-black hover:bg-tertiary  items-center   gap-2 hover:border-primary transform duration-300 text-left    cursor-pointer r h-fit w-full border  py-1 px-2 rounded "
                        :key="item.appName">
                        <div>

                        </div>
                        <img
                          :src="`/appsImage/${(getAppImage(item.image) ?? '').replace(/\s+/g, '').toLowerCase()}.png`"
                          class=" h-fit w-4" :alt="item.appName" />
                        <h3 class="  text-[14px] whitespace-nowrap font-medium group-hover:text-white  text-center">{{
                          item.appName }}</h3>
                      </div>
                    </div>

                  </div>
                </div>


              </section>

              <!-- OTP number 
              <section class="  w-full rounded-lg  bg-white mb-10   p-2  md:p-3  ">
                <div class=" w-full py-2 border-b sm:flex block justify-between items-center  border-b-black px-1 mb-3">
                  <TypographyH3><span class="font-medium">Recent Numbers</span></TypographyH3>
                  <input type="search5" name="" v-model="searchCoutry" placeholder="Search country..."
                    class="  dark:bg-white dark:text-black outline-none py-2 w-1/2 px-2  border  rounded-lg text-black"
                    id="">
                </div>
                <div class=" w-full   sm:flex block justify-between items-center  border-b-black px-1 mb-4">
                  <TypographyP> <span class=" font-bold  text-red-600 text-[14px]">Click refresh button next to Number
                      to get Code.</span></TypographyP>
                  <nuxt-link to="/deduction_history">
                    <TypographyP> <span class="font-medium text-orange-500 text-[14px]">Credit Deduction History</span>
                    </TypographyP>
                  </nuxt-link>
                </div>
                <div class="relative w-full">

                  <div id="SMS" class="  z-20 px-3 w   ">
                    <div class=" w-full space-y-4 h-fit  gap-2 ">


                      <div v-for="item in filteredcountry.slice(0, 1)" @click="shows(item)"
                        class="md:flex block jus group overflow-hidden shadow-sm border-l-4 rounded-lg border-green-700 g items-center  justify-between  gap-2 hover:border-primary transform duration-300 text-left     r h-fit w-full border  py-1 px-2  "
                        :key="item.countryName">
                        <div class=" sm:block flex justify-between font-semibold">
                          <TypographyP class="font-semibold">18168319507</TypographyP>
                          <TypographyP class=" bg-slate-100  rounded-md px-2 py-0.4 font-semibold text-sm">
                            <small class=" text-blue-500 fo ">Facebook5</small>
                            <small class=" text-slate-600 ">• USA</small>
                          </TypographyP>
                        </div>
                        <div class=" text-left pt-3 md:text-center font-semibold">
                          <TypographyP class="font-semibold leading-[4px] ">No message yet...</TypographyP>
                          <TypographyP class="   tracking-tighter   font-semibold text-sm">
                            <small class=" leading-[4px] text-[12px] ">Expired</small> <br>
                            <small class=" text-slate-600   leading-[4px]  text-[10px] "> 23/08 08:55</small>
                          </TypographyP>

                        </div>


                        <small
                          class="  bg-yellow-200 text-yellow-800 rounded-lg  px-1 text-[12px] whitespace-nowrap font-medium e  text-center">Rejected
                        </small>
                      </div>
                    </div>

                  </div>
                </div>
                <div class=" mt-6 ">
                  <TypographyP class="text-center"> <strong>View All Codes</strong></TypographyP>
                </div>
                <div class=" mt-6 p-4  bg-yellow-100">
                  <TypographyH4 class=" text-yellow-800">
                    🔔 Didn't receive the code?
                  </TypographyH4>
                  <TypographyP class="t">If no message arrives within a short time,
                    you can reject the number and request a new one.
                    Your balance will be automatically refunded.</TypographyP>
                </div>


              </section>
            </div>



          </div>






        </div>


      </div>
    </div>
  </div>
</template>




<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue"
import { useRouter, useRuntimeConfig, useToast } from "#imports" // Nuxt auto-imports
import axios from "axios"

import { fetchUserData } from "@/stores/dashboard"
import trendApps from "~/data/trendApp.json"
import appImages from "~/data/apps.json"

const router = useRouter()
const config = useRuntimeConfig()
const BASE_URL = config.public.BASE_URL

// Refs
const countryNames = ref([])
const pagelaod = ref(false)
const selectedapp = ref("")
const selected = ref("")
const appfound = ref([])
const searchTerm = ref("")
const searchCoutry = ref("")
const appfilter = ref([])
const isLoadingFinished = ref(true)
const selectedcountry = ref("")
const data = ref([])
const isotpLoadFinished = ref(true)
const toast = useToast()
const store = fetchUserData()
const usdToNgn = ref(null)

let transaction_valid = null

// ---------------- FETCH COUNTRIES ----------------
// const fetchCountries = async () => {
//   try {
//     console.log("Fetching countries...")
//     const response = await axios.get(`${BASE_URL}/countries`)
//     countryNames.value = response.data
//   } catch (error) {
//     console.error("Error fetching countries:", error)
//   }
// }
// await fetchCountries()

// ---------------- CONVERT TO NAIRA ----------------
// const convertToNaira = async () => {
//   try {
//     const res = await axios.get("https://open.er-api.com/v6/latest/USD")
//     usdToNgn.value = res.data.rates.NGN + 420
//     console.log(usdToNgn.value, "Naira")
//   } catch (err) {
//     console.error("Error fetching rate:", err.message)
//   }
// }

// // // ---------------- GET APP IMAGE ----------------
// const getAppImage = (appName) => {
//   if (!appName) return "/default.png"
//   const lowerName = appName.toLowerCase()

//   const matchedApp = appImages.find(app =>
//     lowerName.includes(app.image.toLowerCase())
//   )
//   if (matchedApp) {
//     return matchedApp.image
//   }
//   return lowerName
// }

// ---------------- NOTIFICATION ----------------
// const nofit = (title, description, color = "red") => {
//   toast.add({ title, description, color })
// }

// ---------------- GET NUMBER ----------------
// const getnumber = async () => {
//   try {
//     // TODO: implement API call
//   } catch (error) {
//     if (error.response) {
//       nofit("Error", error.response.data.message, "red")
//     }
//   }
// }

// ---------------- SHOW APPS ----------------
// const shows = async (item) => {
//   isLoadingFinished.value = false

//   if (item) {
//     selected.value = item.countryName
//     selectedcountry.value = item.countryName
//   } else {
//     selectedcountry.value = "USA"
//     selected.value = "USA"
//   }

//   try {
//     const url = item
//       ? `${BASE_URL}/getRates/apps/${item.countryName}`
//       : `${BASE_URL}/getRates/apps/usa`

//     const response = await axios.get(url)
//     appfound.value = response.data || []

//     const section = document.getElementById("Apps")
//     if (section) section.scrollIntoView({ behavior: "smooth" })
//   } catch (error) {
//     nofit("Notices", "An error occurred", "red")
//   } finally {
//     isLoadingFinished.value = true
//   }
// }

// ---------------- FILTERS ----------------
// const filteredcountry = computed(() => {
//   console.log(countryNames.value);
  
//   // if (searchCoutry.value) {
//   //   return countryNames.value.filter(app =>
//   //     app.countryName.toLowerCase().includes(searchCoutry.value.toLowerCase())
//   //   )
//   // }
//   return countryNames.value
// })

// const filteredApps = computed(() => {
//   if (searchTerm.value) {
//     return appfound.value.filter(app =>
//       app.app.toLowerCase().includes(searchTerm.value.toLowerCase())
//     )
//   }
//   return appfound.value
// })

// ---------------- OTP ----------------
// const getOtp = async (item) => {
//   const section = document.getElementById("sms")
//   isotpLoadFinished.value = false

//   if (!item.Activation_Code) {
//     try {
//       await axios.put(
//         `${BASE_URL}/getRates/otp`,
//         {
//           country: item.Country,
//           app: item.App,
//           phoneNumber: item.Phone_Number,
//           transactiondate: item.transactiondate,
//         },
//         { withCredentials: true }
//       )

//       await getnumber()
//       if (section) section.scrollIntoView({ behavior: "smooth" })
//     } catch (error) {
//       console.error("Error fetching OTP:", error)
//       await getnumber()
//     }
//   }

//   isotpLoadFinished.value = true
// }

// const autmaticOtp = async () => {
//   if (!data?.value) {
//     stopTransactionValidation()
//     return
//   }

//   const itemsWithoutActivationCode = data.value.filter(
//     (el) => el.status === "active" || el.status === "No Used"
//   )
//   if (itemsWithoutActivationCode.length === 0) return

//   try {
//     await Promise.all(itemsWithoutActivationCode.map(el => getOtp(el)))
//   } catch (error) {
//     console.error("Automatic OTP error:", error)
//   }
// }

// ---------------- TRANSACTION VALIDATION ----------------
// const startTransactionValidation = () => {
//   stopTransactionValidation()
//   setTimeout(async () => {
//     await autmaticOtp()
//     transaction_valid = setInterval(autmaticOtp, 10000)
//   }, 10000)
// }

// const stopTransactionValidation = () => {
//   if (transaction_valid) {
//     clearInterval(transaction_valid)
//     transaction_valid = null
//   }
// }

// onUnmounted(stopTransactionValidation)

// // ---------------- GENERATE NUMBER ----------------
// const generateNnumber = async (item) => {
//   isLoadingFinished.value = false
//   selectedapp.value = item.app
//   stopTransactionValidation()

//   try {
//     const response = await axios.post(
//       `${BASE_URL}/getRates/generateNumber`,
//       { country: selectedcountry.value, app: item.app },
//       { withCredentials: true }
//     )

//     nofit("Notices", response.data, "green")
//     await getnumber()
//   } catch (error) {
//     if (error.response) {
//       nofit("Error", error.response.data.message, "red")
//     }
//   } finally {
//     isLoadingFinished.value = true
//     startTransactionValidation()
//   }
// }

// // ---------------- WATCHERS ----------------
// watch(() => store.userData, () => {
//   pagelaod.value = true
// })


// ---------------- LIFECYCLE ----------------
onMounted(async () => {
  await convertToNaira()
  await getnumber()
  await nextTick()
  setTimeout(startTransactionValidation, 100)
})
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
</style> -->

<template>
  <div>
    <h1>dsdfsds</h1>
  </div>
</template>


