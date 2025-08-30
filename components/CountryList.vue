<template>
  <div>
    <!-- CHOICE COUNTRY -->
    <section class="rounded-lg bg-white mb-2 p-2">
      <!-- Search bar -->
      <div class="w-full sm:flex block justify-between items-center rounded-lg text-white px-1 mb-5">
        <input
          type="search"
          v-model="searchCountry"
          placeholder="Search country..."
          class="dark:bg-white dark:text-black outline-none py-2 px-2 w-full border rounded-lg text-black"
        />
      </div>

      <!-- Countries grid -->
      <div class="relative w-full">
        <div id="countries" class="z-20 px-3 grid h-[300px] overflow-y-scroll">
          <div class="w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid gap-2 h-fit">
            <div
              v-for="item in filteredCountries"
              :key="item.id"
              @click="fetchApps(item)"
              :class="{
                'bg-black dark:bg-black dark:text-white text-white': item.full_name === store.selectedCountry.full_name,
              }"
              class="flex group overflow-hidden dark:text-black hover:bg-tertiary items-center gap-2 hover:border-primary transform duration-300 text-left cursor-pointer w-full border py-1 px-2 rounded"
            >
             <!-- :src="`/countryimage/${item.image.toLowerCase()}.png`"-->
              <img
                
                 :src="`${item.picture}`"
                class="w-4 h-fit"
                :alt="item.full_name"
              />
              <h3 class="text-[14px] whitespace-nowrap font-medium group-hover:text-white text-center">
                {{ item.full_name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

import { useUserStore } from "@/stores/user"
import { useRuntimeConfig } from "#imports"
import axios from "axios"

// Store import
const store = useUserStore()

// Env
const config = useRuntimeConfig()
const BASE_URL = config.public.BASE_URL

// Refs
const searchCountry = ref("")
const countryNames = ref([])

// ---------------- FETCH COUNTRY FOR SELECTED COUNTRY ----------------
const fetchCountries = async () => {

  try {
    const url =`${BASE_URL}/countries`
    

    const response = await axios.get(url)

    // ✅ Correct way to update Pinia ref
   countryNames.value = (response.data || [])

    console.log("Updated countries:", countryNames.value)
  } catch (error) {
    console.error("Error fetching apps:", error)
  }
}

// ---------------- FILTER COUNTRIES ----------------
const filteredCountries = computed(() => {
  if (searchCountry.value) {
    return countryNames.value.filter((c) =>
      c.full_name.toLowerCase().includes(searchCountry.value.toLowerCase())
    )
  }
  return countryNames.value
})




// ---------------- FETCH APPS FOR SELECTED COUNTRY ----------------
const fetchApps = async (item) => {
  store.selectedCountry = item ? item : "USA"

  try {
    const url = item
      ? `${BASE_URL}/apps/${item.id}`
      : `${BASE_URL}/getRates/apps/usa`

    const response = await axios.get(url)

    // ✅ Correct way to update Pinia ref
    store.setApps(response.data || [])

   
  } catch (error) {
    console.error("Error fetching apps:", error)
  }
}

onMounted(() => {
  fetchCountries()
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
  padding: 0;
}
</style>
