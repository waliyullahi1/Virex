<template>

  <div class="dark:bg-white dark:text-black bg-white ">
    <Navbar></Navbar>

    <div class="flex container  mx-auto - gap-10 ">

      <div class=" container l my-10  ">
        <div class=" md:w-[700px]  w-full  mx-auto flex gap-6 flex-col justify-center ">





          <section class="  ">
           
            <div class=" w-full py-3  rounded-b-md  px-3 mb-5">
              <TypographyH2 class="py-3">Choose a Country </TypographyH2>
            </div>
             <CountryList></CountryList>


          </section>


          <section id="Apps" class=" ">
            <div class=" w-full py-3     rounded-b-md px-3 mb-5">
              <TypographyH2 class=" py-3  ">Choose an App </TypographyH2>
             
            </div>
              <Applist/>


          </section>




        </div>

      </div>
    </div>


    <Footer></Footer>
  </div>
</template>




<script setup>
import { ref, onMounted } from 'vue'
import countryNames from '../../data/country.json';
import axios from 'axios';
const { login } = useAuth();
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;
import metaConfig from '~/utils/meta.config.json'


const description = ref('')
// Dynamically set the title and use the rest of the metaConfig
useHead({
  ...metaConfig, // Spread other meta information from metaConfig
  title: 'Pricing - virexcode',
  meta: [
    {
      name: 'description',
      content: description.value
    }
  ] // Override the title
})


const selectedapp = ref('');
const selected = ref('');
const appfound = ref([]);
const searchTerm = ref('');
const searchCoutry = ref('');
const appfilter = ref('');
const isLoadingFinished = ref(true);
const selectedcountry = ref('');



const description_function = () => {
  countryNames.forEach(items => {
    const country_name = items.countryName.toUpperCase()
    const desc = `Buy ${country_name} Numbers, `
    description.value += desc  // use += on description.value
  })

  // access .value here too
}



onMounted(async () => {

  await login('userData', 'userData.password');
  console.log('FFFF');

  await nextTick();

  description_function()






})
const shows = async (item) => {
  // isLoadingFinished.value = false;
  // selected.value = item.countryName;
  // selectedcountry.value = item.countryName;


  try {
    console.log('ddd');
    
    // const response = await axios.get(`${BASE_URL}/getRates/apps/${item.countryName}`);
    // const apps = response.data;
    // console.log('asaa');
      // const data = await $fetch(`${BASE_URL}/getRates/apps/${item.countryName}`, {
      //   method: "GET",
      //   credentials: "include",
      // });
       const response = await axios({
      url: `${BASE_URL}/getRates/apps/usa`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const apps = response.data;
    number_history.value = apps.reverse()


    // if (!apps) {
    //   notify({
    //     title: "Notices",
    //     text: 'An error occurred',
    //   });
    //   return;
    // } else {

    //   appfound.value = apps;

    //   const section = document.getElementById('Apps')
    //   if (section) {
    //     section.scrollIntoView({ behavior: 'smooth' })
    //   }
    // }
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
















// setInterval(() => {
//   autmaticOtp();
// }, 10000);


</script>






<style>
.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}
</style>