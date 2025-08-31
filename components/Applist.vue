<template>
  <div class="w-full">
    <!-- CHOICE APP  -->
    <section class="space-y-2 rounded-lg bg-white mb-10">
      <div class="w-full sm:flex block justify-between items-center rounded-lg text-white px-1">
        <input
          type="search"
          v-model="searchTerm"
          placeholder="Search App..."
          class="dark:bg-white dark:text-black outline-none py-2 px-2 w-full border rounded-lg text-black"
        />
      </div>

      <div class="relative w-full">
        <TypographyP class="pb-2 text-center font-semibold">
          {{ store.selectedCountry.full_name || "All" }} Apps
        </TypographyP>

        <div id="apps" class="z-20 px-3 w grid h-[300px] overflow-y-scroll">
           <div :class="isLoadingFinished ? 'flex' : 'hidden'"
                class=" flex justify-center z-10 items-center absolute bg-opacity-20 h-full  w-full bg-primary">
                <img class="w-16 " src="@/assets/images/svg/preload.svg" alt="" srcset="">
              </div>
              <!-- SKELETON  -->
          <div class="w-full md:grid-cols-2 sm:grid-cols-3 h-fit grid gap-2">

             <div v-for="item in 50" v-if="store.isAppLoading" :key="item" class="bg-gray-100  justify-between flex animate-pulse cursor-pointer h-fit w-full  py-1 px-2 rounded" >
              <!-- Left: logo + name -->
              <div class="flex items-center gap-2">
                 <div class="w-7 h-6  duration-300 bg-gray-300 rounded animate-pulse"></div>
                  <div class="w-7 h-4  duration-300 bg-gray-300 rounded animate-pulse"></div>
              </div>

              <!-- Right: rate -->
              <div class=" flex gap-1  p-1 items-center bg-gray-300 rounded animate-pulse">
                <div class="w-4 h-4  duration-300 bg-gray-100  animate-pulse"></div>
                  <div class="w-2 h-2  duration-300 bg-gray-100  animate-pulse"></div>
              </div>
            </div>

           
          </div>
            <!-- APP LIST  -->
          <div v-if="!store.isAppLoading" class="w-full md:grid-cols-2 sm:grid-cols-3 h-fit grid gap-2">

            

          
            <div 
              v-for="item in filteredApps" @click="generateNumber(item)"
              :key="item.app"
              :class="{
                'bg-black dark:bg-black dark:text-white text-white': item.full_name === store.selectedApp,
              }"
              class="flex group overflow-hidden dark:text-black hover:bg-tertiary justify-between items-center gap-2 hover:border-primary transform duration-300 text-left cursor-pointer h-fit w-full border py-1 px-2 rounded"
            >
              <!-- Left: logo + name -->
              <div class="flex items-center gap-2">
                <img
                  :src="item.link"
                  class="w-7"
                 
                />
                <h3 class="text-[14px] whitespace-nowrap font-medium group-hover:text-white text-center">
                  {{ item.full_name }}
                </h3>
              </div>

              <!-- Right: rate -->
              <div
                class="bg-white text-[14px] flex gap-1 font-medium px-3 py-[2px] border-green-700 rounded-sm w-fit h-fit border text-end"
              >
                <p class="text-[12px] font-medium">
                    <!-- {{ item.rate ? Number(item.deduct).toFixed(2) : "0.00" }}₦ -->
                     {{ (item.deduct * usdToNgn).toFixed(1) }}₦
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import axios from "axios"
import appImages from "~/data/apps.json"
import { useUserStore } from "@/stores/user"
import { useRuntimeConfig, useToast } from "#imports"


// Store import
const store = useUserStore()

//notification Import
const toast = useToast()



// Env
const config = useRuntimeConfig()
const BASE_URL = config.public.BASE_URL
 

// local state
const usdToNgn = ref(0)
const searchTerm = ref("")
const selectedApp = ref(null)
const isLoadingFinished = ref(false)

//pops
const { pageDetect } = defineProps({
  pageDetect: String,
})

// filter apps from store
const filteredApps = computed(() => {
  if (searchTerm.value) {
  

    return store.apps.filter((app) =>
      app.full_name.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  }
  return store.apps
})

//---------NOTIFICATION----------
  
const nofit = (title, description, color = "red") => {
  toast.add({ title, description, color })
}
// ---------------- GET APP IMAGE ----------------
const getAppImage = (appName) => {
  if (!appName) return "/appsImage/default.png"

  const lowerName = appName.toLowerCase()
  const matchedApp = appImages.find((app) =>
    lowerName.includes(app.image.toLowerCase())
  )

  if (matchedApp) {
    return `/appsImage/${matchedApp.image.toLowerCase()}.png`
  }
  return `/appsImage/${lowerName.replace(/\s+/g, "")}.png`
}

// ---------------- GET RATE ----------------
const convertToNaira = async () => {
  try {
    const res = await axios.get("https://open.er-api.com/v6/latest/USD")
    usdToNgn.value = res.data.rates.NGN + 420
   
  } catch (err) {
    console.error("Error fetching rate:", err.message)
  }
}

// ---------------- GENERATE NUMBER ----------------
const generateNumber = async (item) => {
  // console.log(pageDetect);
  
  if (pageDetect !== "USER"){
    nofit('Notices', 'Login to process', "green")
   return 
  } 

isLoadingFinished.value = true;
  selectedApp.value = item.full_name;

  
  

  try {
    const response = await axios({
      url: `${BASE_URL}/generateNumber`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    timeout: 30000, // 30s
      data: {
        country: store.selectedCountry.full_name, 
        app: selectedApp.value,
        
        country_code: store.selectedCountry.id
      }
    });

    const apps = response.data;
    nofit('Notices', apps, "green")
    
    store.fetchNumbers()

   isLoadingFinished.value = false;

  } catch (error) {
    console.log(error);
    
  }


}





watch(store.apps, (newVal, oldVal) => {
  // console.log('Apps updated:', newVal)
  // do something, like refresh UI or trigger another API
})
onMounted(() => {
  convertToNaira()
})
</script>
