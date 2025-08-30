<template>

  <div class="bg-slate-50  dark:text-black">
    <UserNavbar page_tittle="Phone Number History" class=" text-[poppins] w-full hiddn " :pagelaod="pagelaod">
    </UserNavbar>

    <div class="  flex mt-5  gap-3 ">
      <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
      <div class="    w-full  flex justify-center shrink  flex-initial ">
        <div class=" container  mx-auto flex gap-6 flex-col justify-center ">







          <!-- COPY SMS MESSAGE  -->
          <section class="  rounded-lg shadow-lg bg-white mb-20 p-2  md:p-5">



            <div class="w   overflow-x-auto  text-[15px] ul  sm:max-h-screen   h-fit w-full        mb  mt-  ">
              <div class=" min min-w-full mt-4 relative w-full  h-full ">
                <div
                  class="  flex  v-if=!appfound[0] text-rose-500 bg-rose-100  p-3 gap-3 items-center rounded-lg w-full ">
                  <div class=" bg-rose-500 h-12  rounded-2xl w-9 "></div>
                  <div>
                    <TypographyH4 class=" text-lg  ">Dear waliu!!</TypographyH4>
                    <TypographyP>You Need to purchase a service before You can proceed</TypographyP>

                  </div>

                </div>
                <table class=" font-semibold ov w-full mt-5  bg-white  text-sm">
                  <thead>
                    <tr class=" border-b-2 b  border-b-tertiary  h-10">
                      <th class="text-center  py-0.5 ">Number</th>
                      <th class="text-center  py-0.5">App</th>
                      <th class="text-center py-0.5">Country</th>
                      <th class="text-center py-0.5">Time</th>
                      <th class="text-center py-0.5">Message</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in store.numbers.slice(0, 20)" :key="index"
                      :class="index % 2 === 0 ? ' bg-zinc-100 ' : 'bg-white'" class=" border-b-[1px] border-black">
                      <td class="text-center py-2 px-3"> {{ user.Phone_Number }}</td>
                      <td class="text-center py-2 px-3">{{ user.App }}</td>
                      <td class="text-center py-2 px-3">{{ user.Country }}</td>
                      {{
                        new Date(user.transactiondate).getFullYear() + '/' +
                        String(new Date(user.transactiondate).getMonth() + 1).padStart(2, '0') + '/' +
                        String(new Date(user.transactiondate).getDate()).padStart(2, '0') + ' ' +
                        String(new Date(user.transactiondate).getHours()).padStart(2, '0') + ':' +
                      String(new Date(user.transactiondate).getMinutes()).padStart(2, '0')
                      }}
                      <td class="text-center py-2 px-3  max-w-52">{{ user.Activation_Code }}</td>
                    </tr>
                  </tbody>
                </table>
                <div v-if="!store.numbers" class=" h-36  flex justify-center items-center  w-full      ">

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
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;
import axios from 'axios'
import { useUserStore } from "@/stores/user";
import { useRuntimeConfig, useToast } from "#imports"


const store = useUserStore();








onMounted(() => {

  store.fetchNumbers()
  console.log(store.numbers.values);


});









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
</style>