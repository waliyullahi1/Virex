<template>
  <div class="flex w-full content justify-center   h-screen">
    <div class="flex m-auto container w-full justify-center b items-center h-full  sm:mx-0 ">
      <div class="s sm:w-[400px]  w-full  px-4  h-fit">


        <div class="   h-full px-2 m font-sans  relative ">
          <div class=" w-full flex justify-center ">
            <img src="../assets/images/logo.png" alt="" >
          </div>
          <div class="   l justify-between w-full">
            <div class=" bg-tertiary py-2 rounded-xl my-5 px-3  h-fit ">
            
              <h3 class="  font-medium text-lg text-white">User Registration</h3>
             
            </div>

            <!-- First Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v-if="!hidden_first_form" class="text-left inset-0 staggered-form">
                <form @submit.prevent="first_handleSubmit">
                  <FormInput v-for="(input, index) in register" :key="index" :oninput="input.oninput"
                    :type="input.type" v-model:inputValue="userData[input.modelKey]" :minlength="input.minlength"
                    :label="input.label" :class="`staggered-input delay-${index}`" ></FormInput>

                  <div class=" flex w-full gap-5">
                    <ButtonsPrimary  type="submit"  :arrow=true class="mt-16 width-full" width="full">Register</ButtonsPrimary>
                    <ButtonsTertiary type="button" @clicked="$router.push({path: '/login'})" :arrow=true class="mt-16 width-full" width="full">Login</ButtonsTertiary>
                  </div>
                  
                  <button>


                  </button>
                </form>
              </div>
            </transition>



          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>




let label = "Choose a Subject"

const userData = reactive({

  full_name: '',
  email: '',
  phone_Number: '',
  password: '',
  confirm_pwd: '',

})












const register = [
  { type: 'text', label: 'First Name', modelKey: 'firstName', minlength: "1",  },
  { type: 'text', label: 'Phone Number', modelKey: 'Phone_Number', minlength: "11", oninput: (event) => { event.target.value = event.target.value.replace(/[^0-9]/g, '') }, },
  { type: 'email', label: 'Email', modelKey: 'email', minlength: "11",  },
];




















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