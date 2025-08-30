import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRuntimeConfig } from '#app'


export const useUserStore = defineStore('userStore', () => {
    const config = useRuntimeConfig(); // ✅ Must be inside setup()
  const BASE_URL = config.public.BASE_URL;
  const selectedCountry = ref({
    full_name: "",


  })
  const selectedApp = ref(null)
  const apps = ref([])   // 👈 must stay ref
  const numbers = ref([])

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
      console.log("Fetched numbers:", numbers);
    } catch (error) {
      console.log(error);

    }




  }

  return { selectedCountry, selectedApp, apps, numbers, setApps,fetchNumbers }
})

