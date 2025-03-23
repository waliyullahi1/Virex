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
            
              <h3 class="  font-medium text-lg text-white">User login</h3>
             
            </div>

            <!-- First Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v class="text-left inset-0 staggered-form">
                <form @submit.prevent="handleLogin">
                  <FormInput v-for="(input, index) in login_detail" :key="index" :oninput="input.oninput" 
                    :type="input.type" v-model:inputValue="userData[input.modelKey]" :minlength="input.minlength"
                    :label="input.label" :class="`staggered-input delay-${index}`" ></FormInput>
                  <div class=" flex w-full gap-5">
                    <ButtonsTertiary  type="submit"  :loading=LoadingState  :arrow=true class="mt-16 width-full" width="full">Login</ButtonsTertiary>
                    <ButtonsPrimary type="button" @clicked="$router.push({path: '/register'})" :arrow=true class="mt-16 width-full" width="full">Register</ButtonsPrimary>
                    
                  </div>
                  
                  <TypographyP @click="cancel_Forgetpage" class=" text-preprimary cursor-pointer mt-4 font-semibold text-center">Forget Password</TypographyP>
                </form>
              </div>
            </transition>


            
          </div>
        </div>
        <div class="  h-9 w-1 overflow-hidden ">
          <Forgetpage class=""  @cancel_forget="cancel_Forgetpage"  :cancel_forgetPage="cancel_forgetPages"></Forgetpage>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
const toast = useToast();
const { login, logout, accessToken, startTokenRefresh } = useAuth();

const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;

const nofit = (title, description, color="red" )=>{
  toast.add({
    title: title,
    description: description,
    color: color,
  });
}


const userData = reactive({
  "email/phone": '',
  phone_Number: '',
  password: '',


})

const cancel_forgetPages = ref(false)
const LoadingState = ref(false)



const login_detail = [
  { type: 'text', label: 'Email/Phone', modelKey: 'email/phone', minlength: 1,  },
  { type: 'password', label: 'Password', modelKey: 'password', minlength: 5,  },
];







const cancel_Forgetpage = ()=>{
  console.log('dsfgdfsd');
  console.log( );
  
  cancel_forgetPages.value = !cancel_forgetPages.value
  
}



const handleLogin = async () => {
  LoadingState.value = true 
  console.log(userData['email/phone'], userData.password);
  
 const response = await login(userData['email/phone'], userData.password);
 console.log(response);
 
 if (response){

  LoadingState.value = true
  nofit('Sucess', 'Login Sucessfully', "green" )
  navigateTo("/user");
  console.log('user');
  
  LoadingState.value = false
 } else{
 nofit('Error', 'Email/phone  or password is not correct', "red" )
 
  LoadingState.value = false

  
 }
};

// const handleLogin = async () => {
//     toast.add({
//     title: "Success!",
//     description: "Your action was successful.",
//     color: "green",
//   });
// };








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