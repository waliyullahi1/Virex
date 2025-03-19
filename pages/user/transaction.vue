<template>

  <div class="bg-slate-50">
    <UserNavbar page_tittle="Transactions" class=" text-[poppins] w-full hiddn " :pagelaod="pagelaod">
    </UserNavbar>

    <div class="  flex mt-5  gap-3 ">
      <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
      <div class=" sm:mx-4 mx-0 sm:px-2 px-0   w-full  flex justify-center shrink  flex-initial ">
        <div class=" container   mx-auto flex gap-6 flex-col justify-center ">







          <!-- COPY SMS MESSAGE  -->
          <section class="  rounded-lg shadow-lg bg-white mb-20 p-2  md:p-5">



            <div class="w   overflow-x-auto  text-[15px] ul   h-fit w-full        mb  mt-  ">
              <div class=" min min-w-full mt-4 relative w-full  h-full ">
                <div
                  class="  flex  v-if=!appfound[0]   p-3 gap-3 items-center rounded-lg w-full ">
                  
                  <div>
                    <TypographyH2 class=" text-lg  ">Transactions History </TypographyH2>
                   

                  </div>

                </div>
                <table class=" font-semibold ov w-full mt-5  bg-white  text-sm">
                  <thead>
                    <tr class=" border-b-2 b  border-b-tertiary  h-10">
                      
                      <th class="text-center pb-1  w-[9rem] ">ID Invoice	</th>
                      <th class="text-center  w-[9rem]">Date</th>
                      <th class="text-center">Amount</th>
                      
                      <th class="text-center">Type</th>
                      <th class="text-center">Method</th>
              
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in number_used" :key="index" :class="index % 2 === 0 ? ' bg-zinc-100 ' : 'bg-white'"  class=" border-b-[1px]  border-black">
                    
                      <td class="text-center nobreak"> {{ user.Phone_Number }}</td>
                      <td class="text-center  ">{{ user.App }}</td>
                      <td class="text-center  nobreak">{{ user.Country }}</td>
                      
                      <td class="text-center px-5 nobreak">{{ user.new_bal }}</td>
                      <td class="text-center px-5  nobreak">₦{{ user.Amount }}</td>

                    </tr>
                  </tbody>
                </table>
                <div v-if="!number_history[0]" class=" h-36  flex justify-center items-center  w-full      ">
                  
                  <p class="text-[16px] font-medium">No Number History </p>
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
import { ref, onMounted } from 'vue'
import { fetchUserData } from '@/stores/dashboard'
 import axios from 'axios'
definePageMeta({
  middleware: "auth",
});

const pagelaod = ref(false)
const number_used =  ref([]);
const number_history = ref([]);
console.log(pagelaod.value);

const getnumber = async () => {
  const config = useRuntimeConfig();
  const BASE_URL = config.public.BASE_URL;



  try {
    const response = await axios({
      url: `${BASE_URL}/getRates`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const apps = response.data;
    number_history.value = apps.reverse()
    number_used.value = number_history.value.filter(element => {
  return element.Activation_Code 
});
   
      console.log('done');
      
   
      pagelaod.value = true

  } catch (error) {
    
    
    if (error.response) {
      //   ({
      //     title: 'error',
      //     text: error.response.data.message,
      //   });
    }
  }






}
getnumber()








</script>






<style>
.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}

.accout_icon::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><path d='M12 2C8.69 2 6 4.69 6 8V10H4V22H20V10H18V8C18 4.69 15.31 2 12 2ZM8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V10H8V8ZM6 12H18V20H6V12Z'/></svg>");
  background-size: cover;
}

td {
  border-left: 1px;
  
  padding: 12px 4px;
  
}
.nobreak{
white-space: nowrap
}
</style>