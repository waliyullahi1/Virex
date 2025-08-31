<template>
    <div>
        <div class="w-full ">
            <!-- TRENDING APP -->
            <section class="  w-full bg-white   rounded-lg  bg- mb-10   p-2   ">
                <div class=" w-full py-3  sm:flex block justify-between items-center rounded-lg  px-1">

                    <TypographyH4> 🔥 Trending Apps</TypographyH4>
                </div>
                <div class="relative w-full">

                    <div id="countries" class="  z-20 px-3 w grid h-fit">
                        <div class=" w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 h-fit grid gap-2 ">


                            <div v-for="item in trendApps" @click="preGenerateNumber(item)"
                                class="flex group overflow-hidden dark:text-black hover:bg-tertiary  items-center   gap-2 hover:border-primary transform duration-300 text-left    cursor-pointer r h-fit w-full border  py-1 px-2 rounded "
                                :key="item.appName">
                                <div>

                                </div>
                                <img :src="`/appsImage/${item.image.replace(/\s+/g, '').toLowerCase()}.png`"
                                    class=" h-fit w-4" :alt="item.appName" />
                                <h3
                                    class="  text-[14px] whitespace-nowrap font-medium group-hover:text-white  text-center">
                                    {{
                                        item.appName }}</h3>
                            </div>
                        </div>

                    </div>
                </div>

                <div v-if="selected.image !== null" class="relative mt-7   w-full">
                    <TypographyH4> trend app selelected</TypographyH4>
                    <div id="countries" class="  z-20 px-3 w grid h-fit">
                        <div :class="isLoadingFinished ? 'flex' : 'hidden'"
                            class=" flex justify-center z-10 items-center absolute bg-opacity-20 h-full  w-full bg-primary">
                            <img class="w-16 " src="@/assets/images/svg/preload.svg" alt="" srcset="">
                        </div>
                        <div class=" w-full grid-cols-1 sm:grid-cols-2 h-fit grid gap-2 ">


                            <div @click="generateNumber(item)"
                                class="flex group overflow-hidden dark:text-black hover:bg-tertiary justify-between items-center gap-2 hover:border-primary transform duration-300 text-left cursor-pointer h-fit w-full border py-1 px-2 rounded">
                                <!-- Left: logo + name -->
                                <div class="flex items-center gap-2">
                                    <img :src="`/appsImage/${selected.image}.png`" class="w-7" />
                                    <h3
                                        class="text-[14px] whitespace-nowrap font-medium group-hover:text-white text-center">
                                        {{ selected.app }}
                                    </h3>
                                </div>
                                <p class="text-[12px] font-medium">
                                    <!-- {{ item.rate ? Number(item.deduct).toFixed(2) : "0.00" }}₦ -->
                                    {{ selected.full_name }}
                                </p>
                                <!-- Right: rate -->
                                <div
                                    class="bg-white text-[14px] flex gap-1 font-medium px-3 py-[2px] border-green-700 rounded-sm w-fit h-fit border text-end">
                                    <p class="text-[12px] font-medium">
                                        <!-- {{ item.rate ? Number(item.deduct).toFixed(2) : "0.00" }}₦ -->
                                        {{ (selected.price * usdToNgn).toFixed(1) }}₦
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section>


        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"



import { useUserStore } from "@/stores/user";
import axios from "axios"
import trendApps from "../data/trendApp.json";

// Store import
import { useRuntimeConfig, useToast } from "#imports"




// Store import
const store = useUserStore()
const usdToNgn = ref(0)
const isLoadingFinished = ref(false)



// Store import


//notification Import
const toast = useToast()
// Env
const config = useRuntimeConfig()
const BASE_URL = config.public.BASE_URL




const nofit = (title, description, color = "red") => {
    toast.add({ title, description, color })
}


const selected = ref({
    full_name: "",
    country_code: null,
    app: null,
    price: null,
    image: null
});

const preGenerateNumber = async (item) => {
    try {
        selected.value.app = item.appName;
        selected.value.country_code = store.selectedCountry.id;
        selected.value.full_name = store.selectedCountry.full_name;
        const url = `${BASE_URL}/apps/${store.selectedCountry.id}`

        const response = await axios.get(url)
        const matchingApp = response.data.find(element => element.full_name === selected.value.app);
        selected.value.price = matchingApp.deduct;
        selected.value.image = item.image.replace(/\s+/g, '').toLowerCase();
        console.log(selected.value);

    } catch (error) {
        console.log(error);

    }

};


// ---------------- GENERATE NUMBER ----------------
const generateNumber = async (item) => {
    if (isLoadingFinished.value) {
        nofit('Notices', 'Loading in progress', "green")
        return
    };
    console.log(item, "Selected app:");
    isLoadingFinished.value = true;



    try {
        const response = await axios({
            url: `${BASE_URL}/generateNumber`,
            method: "POST",
            timeout: 30000,
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
            data: {
                country: selected.value.full_name,
                app: selected.value.app,
                country_code: selected.value.country_code
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

const convertToNaira = async () => {
    try {
        const res = await axios.get("https://open.er-api.com/v6/latest/USD",{timeout: 30000,})
        usdToNgn.value = res.data.rates.NGN + 420
        
    } catch (err) {
        console.error("Error fetching rate:", err.message)
    }
}
onMounted(() => {
    convertToNaira()
})
</script>

<style scoped>
/* Add your styles here */
</style>
