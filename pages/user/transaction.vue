<template>

  <div class="bg-slate-50 dark:text-black">
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
                      <th class="text-center">status</th>
              
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in transaction_history" :key="index" :class="index % 2 === 0 ? ' bg-zinc-100 ' : 'bg-white'"  class=" border-b-[1px]  border-black">
                    
                      <td class="text-center  py-2 min-w-52"> {{ user.tx_ref }}</td>
                      <td class="text-center py-2 min-w-48 px-3 ">{{ user.time_created }}</td>
                      <td class="text-center py-2 ₦ px-3">₦{{ user.amount }}</td>
                      
                      <td class="text-center py-2  px-3">{{ user.payment_type }}</td>
                      <td class="text-center py-2  px-3 ">{{ user.status }}</td>

                    </tr>
                  </tbody>
                </table>
                <div v-if="!transaction_history[0]" class=" h-36  flex justify-center items-center  w-full      ">
                  
                  <p class="text-[16px] font-medium">No Transaction History </p>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;
definePageMeta({
  middleware: 'auth',
});

// Reactive references
const pagelaod = ref(false);
const transaction_history = ref([]);


let transaction_valid;  // Declare transaction_valid globally


const validTransaction = async (tx_ref) => {
  try {
    const statusResponse = await axios({
      url: `${BASE_URL}/fund/valid`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: { tx_ref },
    });

    //console.log('API response:', statusResponse.data);

    const message = statusResponse.data.message;

    if (["successful", "failed", "pending"].includes(message)) {
      //console.log('Transaction status:', message);

      // nofit(
      //   message === "successful" ? 'Successful' : 'Error',
      //   `Transaction ${message}`,
      //   message === "successful" ? 'green' : 'red'
      // );
      // setTimeout(() => {
      //   clearInterval(transaction_valid);
      //   cancel_transaction.value = false; 
      // router.push("/user");
      // }, 80000);
    

      
    } else if (message === 'Transaction still under process') {
      //console.log('Transaction still processing, waiting to retry...');
      return; // Keep polling if it's still in process
    } else {
      //console.log('Unexpected status, stopping transaction check:', message);
      // clearInterval(transaction_valid);
      // cancel_transaction.value = false;
      // router.push("/user");
    }
  } catch (statusError) {
    //console.error('Error checking transaction status:', statusError);
    // clearInterval(transaction_valid); // Stop polling if there's a server error
  }
};
const getnumber = async () => {
  const config = useRuntimeConfig(); // Access runtime configuration
  const BASE_URL = config.public.BASE_URL;

  try {
    const response = await axios({
      url: `${BASE_URL}/fund/history`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    // Reverse and store the transaction history
    transaction_history.value = response.data.reverse();
   // console.log(transaction_history.value);

    console.log('done');
    pagelaod.value = true; // Update page load status
  } catch (error) {
    if (error.response) {
     // console.error('API error:', error.response.data); // Handle API error
    } else {
    //  console.error('Unexpected error:', error.message);
    }
  }
};

// Fetch data when the component is mounted
onMounted(async () => {
  await getnumber();
  
   const transaction_with_verify = transaction_history.value.filter(element => {
    return  element.status === 'processing';
  });

  await Promise.all(transaction_with_verify.slice(0, 10).map(async (element) => {
  // console.log(element.tx_ref);
   await validTransaction(element.tx_ref)
  
  }));
 


  
});

// Check initial reactive value
//console.log(pagelaod.value);
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