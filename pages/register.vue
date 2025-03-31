<template>
  <div class="flex w-full dark:bg-white dark:text-black  content justify-center   h-screen">
    
    <div class="flex m-auto container w-full justify-center b items-center h-full  sm:mx-0 ">
      <div class="s sm:w-[400px]  w-full  px-4  h-fit">
        

        <div class="   h-full px-2 m font-sans  relative ">
          <div class=" w-full flex justify-center ">
            <img src="@/assets/images/svg/logo.svg" class="  " alt="logo">
          </div>
          <div class="   l justify-between w-full">
            <div class=" bg-tertiary py-2 rounded-xl my-5 px-3  h-fit ">

              <h3 class="  font-medium text-lg text-white">User Registration</h3>

            </div>

            <!-- First Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v class="text-left inset-0 staggered-form">
                <form @submit.prevent="handleregister">
                  <FormInput v-for="(input, index) in register" :key="index" :oninput="input.oninput" :pattern="input.pattern"  :type="input.type"
                    v-model:inputValue="userData[input.modelKey]" :minlength="input.minlength" :label="input.label" :maxlength="input.maxlength"
                    :class="`staggered-input delay-${index}`"></FormInput>

                  <div class=" flex w-full gap-5">
                    <ButtonsPrimary type="submit" :loading="loadingBtn" :arrow=true class="mt-16 width-full" width="full">Register
                    </ButtonsPrimary>
                    <ButtonsTertiary type="button" @clicked="$router.push({ path: '/login' })" :arrow=true
                      class="mt-16 width-full" width="full">Login</ButtonsTertiary>
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

const toast = useToast();
const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;


const loadingBtn = ref(false)
const userData = reactive({

  full_name: '',
  email: '',
  phone: '',
  password: '',
  confirm_pwd: '',

})












const register = [
  { type: 'text', label: 'First Name', modelKey: 'full_name', minlength: 1, },
  { type: 'tel', label: 'Phone Number', modelKey: 'phone', minlength: 12, pattern:"^[0-9]{11}$", maxlength: 11, oninput: (event) => { event.target.value = event.target.value.replace(/[^0-9]/g, '') }, },
  { type: 'email', label: 'Email', modelKey: 'email', minlength: 1, },
  { type: 'password', label: 'Password', modelKey: 'password',  minlength: 6, maxlength: 7 },
];



const nofit = (title, description, color="red" )=>{
  toast.add({
    title: title,
    description: description,
    color: color,
  });
}


const handleregister = async () => {
  loadingBtn.value = true;
  const router = useRouter();

  try {
    // Validate full name (must contain at least two words)
    console.log(userData.full_name);
    const fullNameValid = userData.full_name.trim().split(/\s+/).length >= 2;
    
    if (!fullNameValid) {
      console.log('Write your name properly like this: "Sumae Jame"');
      nofit('Error', 'Full name must contain at least two words. firstname and lastname(daniel tenny)', "red");
      loadingBtn.value = false;
      return;
    }

    // Send registration request
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        full_name: userData.full_name,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
      })
    });

    // Handle errors from the server
    if (!response.ok) {
      const errorData = await response.json();
      nofit('Error', errorData.message, "red");
      loadingBtn.value = false;
      throw new Error(errorData.message);
    }

    // Success response handling
    const data = await response.json();
    nofit('Success', data.success, "green");

    // Redirect to login page after a short delay
    setTimeout(() => {
      router.push('/login');
      loadingBtn.value = false;
    }, 500);
    
  } catch (err) {
    console.error("Registration failed:", err);
    loadingBtn.value = false;
  }
};














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