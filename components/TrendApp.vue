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


                            <div v-for="item in trendApps"
                            
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


            </section>

          
        </div>
    </div>
</template>

<script setup>

import trendApps from "../data/trendApp.json";




</script>

<style scoped>
/* Add your styles here */
</style>
