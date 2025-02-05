<template>
    <div class="flex w-full overflow-x-hidden  justify-center   h-screen">
      <div class="flex  container   justify-center b items-center h-full   ">
        <div class=" s sm:w-[400px]  w-full  px-4  h-fit">
  
  
          <div class="     h-full px-2 m font-sans  relative ">
            <div class=" w-full flex justify-center ">
              <img src="../assets/images/logo.png" alt="" >
            </div>
            <div class="   l justify-between w-full">
              <div class="bg-tertiary py-2 rounded-xl my-5 px-3  h-fit ">
              
                <h3 class="  font-medium text-lg text-white">User Login</h3>
               
              </div>
  
              <!-- First Form -->
              <transition name="slide-stagger" mode="out-in">
                <div v-if="!hidden_first_form" class="text-left inset-0 staggered-form">
                  <form @submit.prevent="first_handleSubmit">
                    <FormInput v-for="(input, index) in register" :key="index" :oninput="input.oninput"
                      :type="input.type" v-model:inputValue="userData[input.modelKey]" :minlength="input.minlength"
                      :label="input.label" :class="`staggered-input delay-${index}`" ></FormInput>
  
                    <div class=" flex w-full gap-5">
                        <ButtonsTertiary type="submit" :arrow=true class="mt-16 width-full" width="full">Login</ButtonsTertiary>
                        <ButtonsPrimary   type="button"  @clicked="$router.push({path: '/register'})"  :arrow=true class="mt-16 width-full" width="full">Register</ButtonsPrimary>
                        
  
                    </div>
                    
                    <TypographyP class=" text-primary cursor-pointer mt-4 font-semibold text-center" @click="cancel">Forget Password</TypographyP>
                    
                  </form>
                </div>
              </transition>
  
              <Forgetpage :cancel_forgetPage="cancell_forget"  @cancel_forgetPage="cancel"></Forgetpage>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
 
  
  
  const cancell_forget = ref(false)
  
  const userData = reactive({ 
    email: '',
    phone_Number: '',
    password: '',

  })

  
  const register = [
    { type: 'text', label: 'Phone no/email', modelKey: 'email', minlength: "1",  },
    { type: 'text', label: 'Password', modelKey: 'Password', minlength: "6" },
    
  ];



  
  
  
  const cancel = ()=> {
    console.log('ggggg');
    cancell_forget.value = !cancell_forget.value
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </script>
  
  <style scoped>
  
  
  /* Define keyframe for staggered sliding effect */
  @keyframes staggeredSlideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
  
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .staggered-input {
    opacity: 0;
    animation: staggeredSlideIn 0.5s forwards;
  }
  
  .staggered-form .staggered-input.delay-0 {
    animation-delay: 0s;
  }
  
  .staggered-form .staggered-input.delay-1 {
    animation-delay: 0.2s;
  }
  
  .staggered-form .staggered-input.delay-2 {
    animation-delay: 0.4s;
  }
  </style>