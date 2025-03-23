<template>

  <div class="bg-slate-50">
    <UserNavbar page_tittle="Fund Account"   :pagelaod="pagelaod" class=" text-[poppins] w-full hiddn "></UserNavbar>
    <UserTransferTemplate
    :cancel_template="cancel_transaction" @cancel_trac="cancel_traction"
    :acc_number="transfer_detail.acc_number"
    :acc_name="transfer_detail.acc_name"
    :bank_name="transfer_detail.bank_name"
    :total_amount="transfer_detail.amount"
     :time_expire="time_expire"
    ></UserTransferTemplate>
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
                    <FormSelect :field="payment_option" :required="true" v-model:inputValue="payment_details.payment_type">
                    </FormSelect>
                  </div>
                </div>


                <div class="pt-5">
                  <TypographyH4>Amount</TypographyH4>
                  <TypographyP class=" text-gray-500"> Minimum of 1000 Naira</TypographyP>
                  <div class="  bg-white  pb-8 px-4 bg-whte shadow-sm rounded-lg  text-black w-full">
                    <FormInput :addStyleBorder="true" :required="true" :nolabel="true" type="number"
                      v-model:inputValue="payment_details.amount" :minlength="1000" :maxlength="1000" class="pt-4" label="s"></FormInput>
                  </div>
                </div>


                <ButtonsPrimary type="submit":loading="loadingbtn"  class="mt-9 width-full" width="full">Fund Account</ButtonsPrimary>

              </div>
            </div>

            <div class=" w-full  md:w-[50%] p-6 bg-white rounded-lg shadow-lg k">
              <div class=" w-full flex flex-col items-center justify-center">
                <img class=" w-20 rounded-full" src="@/assets/images/person.jpg" alt="" srcset="">
                <TypographyH3>{{firstName}}</TypographyH3>
              </div>
              <div class=" flex items-center gap-4 mt-5">
                <img src="@/assets/images/svg/personal.svg" alt="" class="w-12 leading-4">
                <div class="  text-center">
                  <TypographyH4 class="lead">{{store.totalNumberUsed}}</TypographyH4>
                  <TypographyP class=" font-bold"> Number</TypographyP>
                </div>
              </div>

              <div class=" flex items-center gap-4 mt-7">
                <img src="@/assets/images/svg/balance.svg" alt="" class=" w- w-12 leading-4">
                <div class="  text-center">
                  <TypographyH4 class="le]">₦{{ user_wallet }}</TypographyH4>
                  <TypographyP> Balance</TypographyP>
                </div>
              </div>

              <ButtonsPrimary type="submit" :loading="loadingbtn"  class="mt-9 width-full" width="full">Fund Account</ButtonsPrimary>

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

const toast = useToast();
const nofit = (title, description, color = "red") => {
  toast.add({
    title: title,
    description: description,
    color: color,
  });
}
const cancel_transaction =ref(true)
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;
const pagelaod = ref(false)
import { fetchUserData } from '@/stores/dashboard'

const firstName = ref('')
const user_wallet = ref('')
const loadingbtn = ref(false)
const time_start = ref('11:00:00')
const time_expire = ref('12:00:00')
const transfer_detail = ref({
  amount:'',
  tx_ref:'',
  acc_name:'',
  acc_number:'',
  bank_name:' ',
  expire_time:'',
  time_created:"",

})
const payment_details = ref({
  amount: '',
  payment_type: ''
})
const store = fetchUserData()
const payment_option = [
  { text: ' ', label: ' ' },
  { text: 'Card', },
  { text: 'Transfer', }
];
const cancel_traction = ()=>{
  cancel_transaction.value= false
  console.log('done');
  
}

definePageMeta({
  middleware: "auth",
});
watch(() => store.userData, (newData) => {
  try {
    
    const full_name = newData.full_name;
    console.log(full_name);
    firstName.value = full_name.split(' ')[0];
    console.log("First name:", newData.walletBalance);
    user_wallet.value = newData.walletBalance.toLocaleString('en-US')
    console.log(user_wallet.value);
    
  } catch (error) {
    console.error(error)
  }

});

const fund_with_card =()=> {
  FlutterwaveCheckout({
  public_key: "FLWPUBK_TEST-636287b07025e2779058ab73c983bbe8-X",
  tx_ref: "hooli-tx-1920bbtytty",
  amount: 100,
  currency: "NGN",
  customer: {
    email: "customer@example.com",
    phonenumber: "07064586146",
    name: "John Doe",
  },
  callback: function (response) {
    console.log(response, 'ddddd');
    alert("Payment successful!");
  },
  onclose: function () {
    console.log("Payment closed");
  },
});
}

let transaction_valid

const fund = async () => {
  console.log(payment_details.value);
  loadingbtn.value = true;

  // Check if the amount is less than 1000
  if (payment_details.value.amount < 1000) {
    nofit('Error', "Amount must not be less than ₦1000");
    loadingbtn.value = false;
    return;
  }
  console.log(payment_details.value.payment_type,'llllll');
  
  if (payment_details.value.payment_type==='Card') {
    fund_with_card()
    console.log('it want to pay with card');
    loadingbtn.value = true;
    return
  }

  try {
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

    console.log(response.data);

    const detail = response.data.transac_dts;
    const timecreate = response.data.savefound.time_created;
    const tx_ref = response.data.savefound.tx_ref;
    const timeExpire = detail.account_expiration.split(" ")[1];

    console.log(timeExpire, detail.account_expiration);

    // Update transfer details and form data
    transfer_detail.tx_ref = tx_ref;
    time_start.value = timecreate;
    time_expire.value = timeExpire;
    transfer_detail.value.amount = detail.transfer_amount;
    transfer_detail.value.acc_name = 'flutterwave..';
    transfer_detail.value.acc_number = detail.transfer_account;
    transfer_detail.value.bank_name = detail.transfer_bank;

    cancel_transaction.value = true;

    // Wait for 4 seconds before starting the interval
    setTimeout(() => {
      transaction_valid = setInterval(async () => {
        try {
          const statusResponse = await axios({
            url: `${BASE_URL}/fund/valid`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
            data: { tx_ref },
          });


          // Check the response message to stop polling if "success" or "failed"
          if (statusResponse.data.message === "successful" || statusResponse.data.message === "failed") {
            clearInterval(transaction_valid);
            cancel_transaction.value = false
            router.push("/user")
            
          }
        } catch (statusError) {
          console.error(statusError);
          clearInterval(transaction_valid); // Stop polling if there's a server error
        }
      }, 7000); // Poll every 3 seconds after the initial delay
    }, 8000); // Initial delay of 4 seconds

    loadingbtn.value = false;
  } catch (error) {
    console.log(error);
    loadingbtn.value = false;

    if (error.response) {
      nofit('Error', error.response.data.message || "Something went wrong");
    }
  }
};



pagelaod.value = true
</script>






<style>
.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}
</style>