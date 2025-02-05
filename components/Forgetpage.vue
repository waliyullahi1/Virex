<template>
    <div  :class="cancel_forgetPage?'   h-screen':'  h-0'" class="fixed transform bg-black  bg-opacity-65 w-[100%] left-0 top-2 flex justify-center  h-screen">
        <div class=" w-[350px]     h-fit  p-5  bg-white"
        :class="cancel_forgetPage?' transition transform  translate-y-10':'-translate-y-72 transition transform '"
        >
            <div class="  duration-500  border-b border-white  mx-auto  sm:flex block gap-5 container ">
                <TypographyH4 class=" text-center"> Forgot Password?</TypographyH4>
            </div>
            <div class=" text-center">
                <TypographyP>Enter your email and we will send new password to your Inbox.</TypographyP>
            </div>

            <form class="" @submit.prevent="first_handleSubmit">
                <FormInput v-for="(input, index) in forget_password" :key="index" :oninput="input.oninput"
                    :type="input.type" v-model:inputValue="userData[input.modelKey]" :minlength="input.minlength"
                    :label="input.label" :class="`staggered-input delay-${index}`"></FormInput>

                <div class=" flex mt-4 w-full gap-5">
                    <ButtonsTertiary type="submit" class="mt-  width-full" >Send
                    </ButtonsTertiary>
                    <ButtonsPrimary type="button" @clicked="cancel" 
                        class="" >Cancel</ButtonsPrimary>


                </div>

            </form>

        </div>
    </div>

</template>

<script setup>
//data
import { defineEmits } from 'vue';

const userData = reactive({
    email: '',
})

const forget_password = [
    { type: 'text', label: 'Email', modelKey: 'email', minlength: "1", },
];
//POPS
const props = defineProps({
    cancel_forgetPage : {
        type: Boolean,
        default: false,
    }
})
//Function
// Emit Event to Parent
const emit = defineEmits(['cancel_forgetPage']); 

const cancel = ()=>{
    emit('cancel_forgetPage');
    
    
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