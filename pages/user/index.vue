<template>

  <div class="dark:bg-slate-50 overflow-x-hidden   dark:text-black">
    <UserNavbar page_tittle="  Buy Number" class=" text-[poppins] w-full hiddn "></UserNavbar>


    <div class="  w-full mt-5 gap-3 ">

      <div class=" sm:px-2 px-0  w-full   shrink  flex-initial ">
        <div class=" pb-52  w-full  mx-auto flex gap-6 flex-col justify-center ">

          <div class=" w-full   gap-4  justify-between  block  md:flex">
            <div class="   w-full">
              <!-- CHOICE COUNTRY  -->
              
                  <CountryList></CountryList>
            
                

                <!-- CHOICE APP  -->
                <Applist></Applist>
              
            </div>

            
            <div class=" w-full">
               <TrendApp></TrendApp>
               <NumberList></NumberList>
            </div>
             

          </div>






        </div>


      </div>
    </div>
  </div>
</template>




<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue"
const selected = ref(null);

import countryNames from '../../data/country.json';



// Refs

const searchCoutry = ref("")


// ---------------- FETCH COUNTRIES ----------------
const filteredcountry = computed(() => {

  if (searchCoutry.value) {
    const countryfilter = countryNames.filter(app => app.countryName.toLowerCase().includes(searchCoutry.value.toLowerCase()))
    return countryfilter
  } else {

    return countryNames;
  }

});


// ---------------- NOTIFICATION ----------------
const nofit = (title, description, color = "red") => {
  toast.add({ title, description, color })
}


// ---------------- LIFECYCLE ----------------
onMounted(async () => {
 
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
</style>
