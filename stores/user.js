import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRuntimeConfig } from '#app'


export const useUserStore = defineStore('userStore', () => {
    const config = useRuntimeConfig(); // ✅ Must be inside setup()
  const BASE_URL = config.public.BASE_URL;
  const selectedCountry = ref({
    full_name: "USA",
    id: 58,
    link: "",
    picture: "https://pvapins.com/uploads/images/79533573_ky.webp"
  })
  const selectedApp = ref(null)
  const apps = ref([])   // 👈 must stay ref
  const numbers = ref([])
  const isAppLoading = ref(true)
  const isNumbersLoading = ref(true)
  function setApps(newApps) {
    apps.value = newApps
  }

  async function fetchNumbers() {
    try {
      const response = await axios({
        url: `${BASE_URL}/numbers`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
         withCredentials: true,
      });

      const apps = response.data;
      numbers.value = apps;
      isNumbersLoading.value = false
      console.log("Fetched numbers:", numbers);
    } catch (error) {
      console.log(error);

    }




  }

  return { selectedCountry,isNumbersLoading, selectedApp, apps, isAppLoading, numbers, setApps,fetchNumbers }
})

