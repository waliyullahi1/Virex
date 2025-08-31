<template>

  <div class="bg-slate-50  dark:text-black">
    <div :class="acc_onprocess? 'flex':' hidden'" class=" w-full   justify-center items-center  fixed bg-tertiary bg-opacity-45 h-[100vh] z-50  top-0 ">
        <div class=" flex-col text-white flex  items-center">
          <img src="/assets/images/svg/preload.svg" alt="" class="    w-16">
          <TypographyP>Please wait, generating account number... <br>  This process may take more than a minute. </TypographyP>
     
        </div>
          
      
    </div>
    <UserNavbar page_tittle="Fund Account" :pagelaod="pagelaod" class=" text-[poppins] w-full hiddn "></UserNavbar>
    <UserTransferTemplate :cancel_template="cancel_transaction" @cancel_trac="cancel_traction" @val_trans="validTransaction"
      :acc_number="transfer_detail.acc_number" :acc_name="transfer_detail.acc_name"
      :bank_name="transfer_detail.bank_name" :total_amount="transfer_detail.amount" :time_expire="time_expire">
    </UserTransferTemplate>

   
    <div class="  flex mt-5 gap-3 ">
      <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
      <div class="   sm:mx-4 mx-0 sm:px-2 px-2 flex justify-center     w-full shrink  flex-initial   ">

        <div class=" pb-52 w-full  container   flex gap-6 flex-col justify-center ">


          <form @submit.prevent="fund" class="  md:flex  block justify-between w-full gap-5     mb-10 mt-">
            <div class=" w-full ">
              <div action="">
                <div>
                  <TypographyH4>Payment Type</TypographyH4>
                  <TypographyP class=" text-gray-500">Select your preferred service</TypographyP>
                  <div class=" pt-2 pb-8 px-4 bg-white shadow-sm rounded-lg text-black w-full">
                    <FormSelect :field="payment_option" :required="true"
                      v-model:inputValue="payment_details.payment_type">
                    </FormSelect>
                  </div>
                </div>


                <div class="pt-5">
                  <TypographyH4>Amount</TypographyH4>
                  <TypographyP class=" text-gray-500"> Minimum of 1000 Naira</TypographyP>
                  <div class="  bg-white  pb-8 px-4 bg-whte shadow-sm rounded-lg  text-black w-full">
                    <FormInput :addStyleBorder="true" :required="true" :nolabel="true" type="number"
                      v-model:inputValue="payment_details.amount" :minlength="1000" :maxlength="1000" class="pt-4"
                      label="s"></FormInput>
                  </div>
                </div>


                <ButtonsPrimary type="submit" :loading="loadingbtn" class="mt-9 width-full" width="full">Fund Account
                </ButtonsPrimary>

              </div>
            </div>

            <div class=" w-full  md:w-[50%] p-6 bg-white rounded-lg shadow-lg k">
              <div class=" w-full flex flex-col items-center justify-center">
                <img class=" w-20 rounded-full" src="@/assets/images/person.jpg" alt="" srcset="">
                <TypographyH3>{{ firstName }}</TypographyH3>
              </div>
              <div class=" flex items-center gap-4 mt-5">
                <img src="@/assets/images/svg/personal.svg" alt="" class="w-12 leading-4">
                <div class="  text-center">
                  <TypographyH4 class="lead"> {{ filteredUsers?.length || 0 }}</TypographyH4>
                  <TypographyP class=" font-bold"> Number</TypographyP>
                </div>
              </div>

              <div class=" flex items-center gap-4 mt-7">
                <img src="@/assets/images/svg/balance.svg" alt="" class=" w- w-12 leading-4">
                <div class="  text-center">
                  <TypographyH4 class="le] ₦">₦{{ user_wallet }}</TypographyH4>
                  <TypographyP> Balance</TypographyP>
                </div>
              </div>

              <ButtonsPrimary type="submit" :loading="loadingbtn" class="mt-9 width-full" width="full">Fund Account
              </ButtonsPrimary>

            </div>




          </form>
        </div>


      </div>
    </div>
  </div>
</template>




<script setup>
const router = useRouter();
import axios from 'axios'
 import { useUserStore } from "@/stores/user";
import { useRuntimeConfig, useToast } from "#imports"


const stores = useUserStore();
  const {  notices  } = useAuth();
const toast = useToast();
const nofit = (title, description, color = "red") => {
  toast.add({
    title: title,
    description: description,
    color: color,
  });
}
const cancel_transaction = ref(false)
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;
const email = ref()
const private_flutterwave = config.public.FLUTTERWAVE_PRIVATECODE;
const pagelaod = ref(false)
import { fetchUserData } from '@/stores/dashboard'
const time_expire = ref('')
const firstName = ref('')
const user_wallet = ref('')
const loadingbtn = ref(false)

const acc_onprocess = ref(false)
const transfer_detail = ref({
  amount: '',
  tx_ref: '',
  acc_name: '',
  acc_number: '',
  bank_name: ' ',
  expire_time: '',
  time_created: "",

})
const payment_details = ref({
  amount: '',
  payment_type: ''
})
const filteredUsers = computed(() => {
  return stores.numbers.filter(user => user.Activation_Code && user.Activation_Code.trim() !== "")
})
const store = fetchUserData()
const payment_option = [
  { text: ' ', label: ' ' },
  { text: 'Card', },
  { text: 'Transfer', }
];


definePageMeta({
  middleware: "auth",
});
watch(() => store.userData, (newData) => {
  try {

    const full_name = newData.full_name;
   // .log(full_name);
    firstName.value = full_name.split(' ')[0];
    //.log("First name:", newData.walletBalance);
    user_wallet.value = newData.walletBalance.toLocaleString('en-US')
    email.value = newData.email
    //.log(user_wallet.value);

  } catch (error) {
  //  .error(error)
  }

});

let transaction_valid;  // Declare global (no ".value" here unless you are using Vue ref())

const validTransaction = async (tx_ref) => {
  try {
    const statusResponse = await axios({
      url: `${BASE_URL}/fund/valid`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: { tx_ref },
    });

    const message = statusResponse.data.message;

    if (["successful", "failed", "pending"].includes(message)) {
      nofit(
        message === "successful" ? 'Successful' : 'Error',
        `Transaction ${message}`,
        message === "successful" ? 'green' : 'red'
      );

      if (message === "successful") {
        clearInterval(transaction_valid);  // Stop polling after success
      }

      setTimeout(async() => {
        cancel_transaction.value = false;
        router.push("/user");
        await notices(`${email.value} transfer method succesfull  `);
      }, 2000);

    } else if (message === 'Transaction still under process') {
      // Still processing, continue polling
      return;
    } else {
     
    
      clearInterval(transaction_valid);
      cancel_transaction.value = false;
      router.push("/user");
      await notices(`${email.value} try to make payment using transfer method  ${message} `);
    }

  } catch (statusError) {
   
    clearInterval(transaction_valid); // Stop polling if there's a server error
    cancel_transaction.value = false;
    router.push("/user");
    await notices(`${email.value} try to make payment using transfer method  ${statusError} `);
  }
};

const startTransactionValidation = (tx_ref) => {
  // Wait for 3 seconds for the first call
  setTimeout(() => {
    validTransaction(tx_ref);  // First call after 3 seconds

    // Start polling every 5 seconds after the first call
    transaction_valid = setInterval(() => {
      validTransaction(tx_ref);
    }, 5000);

  }, 3000);  // Correct: initial delay should be 3 seconds = 3000ms
};





const cancel_traction = () => {
  clearInterval(transaction_valid);
  cancel_transaction.value = false
  loadingbtn.value = false;

}
const fund_with_card = () => {
  const tx_ref = `TX-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

  FlutterwaveCheckout({
    public_key:private_flutterwave,
    tx_ref: tx_ref,
    amount: payment_details.value.amount,
    currency: "NGN",
    customer: {
      email: store.userData.email,
      phonenumber: store.userData.phoneNumber,
      name: store.userData.full_name,
    },
    callback: async function (response) {
      
      try {
        const response1 = await axios({
          url: `${BASE_URL}/fund/card`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          data: {
            id: response.transaction_id
          },


        });
        loadingbtn.value = true;
    
        alert("Payment successful!");
        navigateTo('/user')
        await notices(`${email.value} user card to make payment and it succesful today `);
      } catch (error) {
        
        loadingbtn.value = false;
      }


    },
    onclose: function () {
      loadingbtn.value = false;
      //console.log("Payment closed");
    },
  });
}



const fund = async () => {
 // console.log(payment_details.value);
  loadingbtn.value = true;

  // Check if the amount is less than 1000
  if (payment_details.value.amount < 100) {
    nofit('Error', "The amount must not be less than ₦1000");
    loadingbtn.value = false;
    return;
  }
  //console.log(payment_details.value.payment_type, 'llllll');

  if (payment_details.value.payment_type === 'Card') {
    fund_with_card()
  
    loadingbtn.value = true;
    return
  }

  try {
    acc_onprocess.value = true
    const response = await axios({
      url: `${BASE_URL}/fund`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: {
        amount: payment_details.value.amount,
        payment_type: payment_details.value.payment_type,
      },
    });

    //console.log(response.data);

    const detail = response.data.transaction_details;

    const tx_ref = detail.tx_ref;
    //console.log(detail.account_expiration);

    time_expire.value = detail.account_expiration_show.split(" ")[1];
    transfer_detail.value.amount = detail.amount;


    // Update transfer details and form data
    transfer_detail.tx_ref = tx_ref;
    transfer_detail.value.acc_name = 'virex-pin FLW';
    transfer_detail.value.acc_number = detail.transfer_account;
    transfer_detail.value.bank_name = detail.bank_name;
    acc_onprocess.value = false
    cancel_transaction.value = true;

    await notices(`${email.value} try to make payment using transfer method  `);
    startTransactionValidation(tx_ref)
    loadingbtn.value = false;
  } catch (error) {
    //console.log(error);
    loadingbtn.value = false;

    if (error.response) {
      nofit('Error', error.response.data.message || "Something went wrong");
    }
  }
};

onMounted(() => {

  stores.fetchNumbers()



});


pagelaod.value = true
</script>






<style>
.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}
</style>