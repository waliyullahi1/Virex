<template>
    <div  >
        <div  class="fixed transform bg-black bg-opacity-55 pt-10 px-4  w-[100%] left-0 top-2 flex justify-center  h-screen"
        :class="cancel_forgetPage ? ' transition transform h-svh translate-y-0  ' :' h-36 -translate-y-[100rem]'" 
        >
            <div class=" w-[350px]  rounded-lg     h-fit  p-5  bg-white"
                :class="cancel_forgetPage ? ' transition transform  translate-y-0' : ' transition transform '">
                <div class="  duration-500  border-b border-white  mx-auto  sm:flex block gap-5 container ">
                   <button type="button" ><TypographyH4 class=" text-center"> Forgot Password?</TypographyH4></button> 
                </div>
                <div class=" text-center">
                    <TypographyP>Enter your email and we will send new password to your Inbox.</TypographyP>
                </div>

                <form class="" @submit.prevent="forgetPassword">
                    <FormInput v-for="(input, index) in forget_password" :key="index" :oninput="input.oninput"
                        :type="input.type" v-model:inputValue="userData[input.modelKey]" :minlength="input.minlength"
                        :label="input.label" :class="`staggered-input delay-${index}`"></FormInput>

                    <div class=" flex mt-4 w-full gap-5">
                        <ButtonsTertiary type="submit"  class="mt-  width-full" :loading="loadingBtn">Send
                        </ButtonsTertiary>
                        <ButtonsPrimary type="button" @clicked="cancel" class="">Cancel</ButtonsPrimary>


                    </div>

                </form>

            </div>
        </div>

    </div>

</template>

<script setup>
//data
import axios from "axios";
const toast = useToast();
const loadingBtn = ref(false)
const userData = reactive({
    email: '',
})



const forget_password = [
    { type: 'text', label: 'Email', modelKey: 'email', minlength: 1, },
];
//POPS
const props = defineProps({
    cancel_forgetPage: {
        type: Boolean,
        default: true,
    }
})
//Function
const nofit = (title, description, color = "red") => {
  toast.add({
    title: title,
    description: description,
    color: color,
  });
}

const forgetPassword = async () => {
    console.log();
    
    loadingBtn.value = true


try {
  const response = await axios({
    url: "http://localhost:3500/resetpassword/requestPasswordReset",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    data: { email: userData.email }
  });
console.log(response.sucess);
console.log(response);

 console.log('finished');
 
 loadingBtn.value = false


} catch (error) {
    console.log(error.data);
    loadingBtn.value = false
  if (error.response) {
    nofit('Error', error.response.data.message, "red")
    console.error(error)

  }
}






}


// Emit Event to Parent
const emit = defineEmits(['cancel_forget']);

const cancel = () => {
    emit('cancel_forget');


}
</script>


<style>
.shadow-for-feature-section {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.shadow-for-our-service {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>