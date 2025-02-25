<template>

  <div class="bg-slate-50">
    <UserNavbar page_tittle="Fund Account" class=" text-[poppins] w-full hiddn "></UserNavbar>

    <div class="  flex mt-5 gap-3 ">
      <div class=" h-3  bg lg:block md:block flex-none bg-orange-400 min-w-56 hidden  ml-[1rem] "></div>
      <div class="  md:mx-4 px-4 mx-0     w-full shrink  flex-initial   ">

        <div class=" pb-52 w-full  container   flex gap-6 flex-col justify-center ">

         
          <section class="  md:flex  block justify-between w-full gap-5   sm:p-5 p-2  mb-10 mt-">
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
                  <TypographyP class=" text-gray-500"> Minimum of 2 Dollars</TypographyP>
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
                <TypographyH3>waliu425</TypographyH3>
              </div>
              <div class=" flex items-center gap-4 mt-5">
                <img src="@/assets/images/svg/personal.svg" alt="" class="w-12 leading-4">
                <div class="  text-center">
                  <TypographyH4 class="lead">0</TypographyH4>
                  <TypographyP class=" font-bold"> Number</TypographyP>
                </div>
              </div>

              <div class=" flex items-center gap-4 mt-7">
                <img src="@/assets/images/svg/balance.svg" alt="" class=" w- w-12 leading-4">
                <div class="  text-center">
                  <TypographyH4 class="le]">$0.00</TypographyH4>
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



const payment_details = ref({
  amount: 'd ddddd',
  gateway_option: 'dddd'
})

const payment_option = [
  { text: ' ', label: ' ' },
  { text: 'Student', },
  { text: 'Teacher', }
];


</script>






<style>
.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}
</style>