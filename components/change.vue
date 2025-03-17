<template>
     <div class=" container px-2 sm:px-0   mx-auto flex gap-6 flex-col justify-center ">







<!-- COPY SMS MESSAGE  -->
<section class="  rounded-lg shadow-lg bg-white mb-20 p-2  md:p-5">



  <div class="w   overflow-x-auto  text-[15px] ul   h-fit w-full        mb-20   mt-  ">
    <div class=" min-w-full mt-4 relative w-full  h-full ">
      <div class="  flex  v-if=!appfound[0] text-rose-500 bg-rose-100  p-3 gap-3 items-center rounded-lg w-full ">
        <div class=" bg-rose-500 h-12  rounded-2xl w-9 "></div>
        <div> 
          <TypographyH4 class=" text-lg  ">Dear waliu425!!</TypographyH4>
          <TypographyP>You Need to purchase a service before You can proceed</TypographyP>
          
        </div>

      </div>
      <table class=" font-semibold ov w-full mt-5  bg-white  text-sm">
        <thead>
          <tr class=" border-b-2 b  border-b-tertiary  h-10">
            <th class="text-center pb-1  w-[9rem] ">Status</th>
            <th class="text-center  w-[9rem]">Number</th>
            <th class="text-center">Code</th>
            <th class="text-center">Service</th>
            <th class="text-center">Amount</th>
            <th class="text-center">Country</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(number_history, index) in history" :key="index">
            <td class="text-center py-3"> dsvnv{{ number_history.status }}</td>
            <td class="text-center py-3">fdbjfoi{{ user.number }}</td>
            <td class="text-center py-3">fvnsdn{{ user.code }}</td>
            <td class="text-center py-3">fvsndui{{ user.service }}</td>
            <td class="text-center py-3">dccbdiu{{ user.amount }}</td>
            <td class="text-center py-3">dccbdiu{{ user.country }}</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>

</section>
</div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        rotate: false
      };
    },
    methods: {
      emitClick() {
        this.rotate = !this.rotate;
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  h1 {
    font-family: "Poppins", sans-serif;
  }
  </style>
  