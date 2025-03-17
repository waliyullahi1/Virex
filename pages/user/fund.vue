<template>

  <div class="bg-slate-50">
    <UserNavbar page_tittle="Fund Account"  :pagelaod="pagelaod" class=" text-[poppins] w-full hiddn "></UserNavbar>

    <div class="  flex mt-5 gap-3 ">
      <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
      <div class="   sm:mx-4 mx-0 sm:px-2 px-2 flex justify-center     w-full shrink  flex-initial   ">

        <div class=" pb-52 w-full  container   flex gap-6 flex-col justify-center ">

         
          <section class="  md:flex  block justify-between w-full gap-5     mb-10 mt-">
            <div class=" w-full ">
              <form action="">
                <div>
                  <TypographyH4>Payment Type</TypographyH4>
                  <TypographyP class=" text-gray-500">Select your preferred service</TypographyP>
                  <div class=" pt-2 pb-8 px-4 bg-white shadow-sm rounded-lg text-black w-full">
                    <FormSelect :field="payment_option" v-model:inputValue="payment_details.gateway_option">
                    </FormSelect>
                  </div>
                </div>


                <div class="pt-5">
                  <TypographyH4>Amount</TypographyH4>
                  <TypographyP class=" text-gray-500"> Minimum of 1000 Nairas</TypographyP>
                  <div class="  bg-white  pb-8 px-4 bg-whte shadow-sm rounded-lg  text-black w-full">
                    <FormInput :addStyleBorder="true" :nolabel="true" type="text"
                      v-model:inputValue="payment_details.amount" :minlength="1" class="pt-4" label="s"></FormInput>
                  </div>
                </div>


                <ButtonsPrimary type="submit" class="mt-9 width-full" width="full">Fund Account</ButtonsPrimary>

              </form>
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

              <ButtonsPrimary type="submit" class="mt-9 width-full" width="full">Fund Account</ButtonsPrimary>

            </div>


            

          </section>
        </div>


      </div>
    </div>
  </div>
</template>




<script setup>
  definePageMeta({
  middleware: "auth",
});

const pagelaod = ref(false)
import { fetchUserData } from '@/stores/dashboard'
console.log('waliu');
const firstName = ref('')
const user_wallet = ref('')
const payment_details = ref({
  amount: '',
  gateway_option: ''
})
const store = fetchUserData()
const payment_option = [
  { text: ' ', label: ' ' },
  { text: 'Card', },
  { text: 'Transfer', }
];


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





pagelaod.value = true
</script>






<style>
.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}
</style>