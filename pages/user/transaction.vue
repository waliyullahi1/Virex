<template>

    <div class="bg-slate-50">
      <UserNavbar page_tittle="Transactions" class=" text-[poppins] w-full hiddn "></UserNavbar>
  
      <div class="  flex mt-5 gap-3 ">
        <div class=" h-3  bg lg:block md:block flex-none min-w-56 hidden  ml-[1rem] "></div>
        <div class="  md:mx-4 px     w-full   ">
          <div class=" container px-2 sm:px-0   mx-auto flex gap-6 flex-col justify-center ">
  

            <div class="  flex  v-if=!appfound[0] bg-white  p-5 gap-3 items-center rounded-lg w-full ">
                    
                    <div> 
                      <TypographyH2 class=" font-semibold" >Transactions History</TypographyH2>
                      
                      
                    </div>
  
                  </div>
  
  
  
  
  
  
            <section class="  rounded-lg shadow-lg bg-white mb-20 p-2  md:p-5">
  
  
  
              <div class="w   overflow-x-auto  text-[15px] ul   h-fit w-full        mb-20   mt-  ">
                <div class=" min-w-full mt-4 relative w-full  h-full ">
                 
                  <table class=" font-semibold ov w-full mt-5  bg-white  text-sm">
                    <thead>
                      <tr class=" border-b-2 b  border-b-tertiary  h-10">
                        <th class="text-center pb-1  w-[9rem] ">ID Invoice</th>
                        <th class="text-center  w-[9rem]">Date</th>
                        <th class="text-center">Date</th>
                        <th class="text-center">Type</th>
                        <th class="text-center">Method</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(number_history, index) in history" :key="index">
                        <td class="text-center py-3"> dsvnv{{ number_history.status }}</td>
                        <td class="text-center py-3">fdbjfoi{{ user.number }}</td>
                        <td class="text-center py-3">fvnsdn{{ user.code }}</td>
                        <td class="text-center py-3">fvsndui{{ user.service }}</td>
                        <td class="text-center py-3">dccbdiu{{ user.amount }}</td>
                        
                      </tr>
                    </tbody>
                  </table>
  
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
  
  
  
  
  const history = ref([]);
  
  
  
  
  
  
  </script>
  
  
  
  
  
  
  <style>
  .shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  }
  </style>