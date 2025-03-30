<template>
    <div>
        <div class="fixed transform bg-black bg-opacity-55 pt-10 px-4 z-50 w-[100%] left-0 top-2 items-center flex justify-center h-screen"
            :class="cancel_template ? 'transition transform h-svh translate-y-0' : 'h-36 -translate-y-[100rem]'">
            
            <div class="w-[400px] rounded-lg border-t-2 border-b-preprimary h-fit p-5 bg-white"
                :class="cancel_template ? 'transition transform translate-y-0' : 'transition transform'">
                
                <button @click="cancel_transaction"
                    class="rounded-full bg-red-600 text-white font-medium text-[14px] text-center h-6 w-6">
                    X
                </button>
             
                <div class="duration-500 border-b border-white justify-center items-center mx-auto sm:flex block gap-5">
                    <small class="text-[14px] font-semibold tracking-widest text-center">Account Details</small>
                </div>

                <div class="mt-4 text-center">
                    <p class="text-[13px]">
                        This account expires in <strong> {{time_expire}}</strong> and can only <br> be used for this transaction.
                    </p>
                </div>

                <div class="bg-[#f3f3f3] mt-2 h-fit sm:flex block sm:justify-between text-center w-full p-3 rounded-lg">
                    <p class="text-[15px]">Account Name:</p>
                    <p class="text-[15px] italic"><strong>{{ acc_name }}</strong></p>
                </div>

                <div class="bg-[#f3f3f3] mt-2 h-fit sm:flex block sm:justify-between text-center w-full p-3 rounded-lg">
                    <p class="text-[15px]">Account Number:</p>
                    <p class="text-[15px] italic"><strong>{{ acc_number }}</strong></p>
                </div>

                <div class="bg-[#f3f3f3] mt-2 h-fit sm:flex block sm:justify-between text-center w-full p-3 rounded-lg">
                    <p class="text-[15px]">Bank Name:</p>
                    <p class="text-[15px] italic"><strong>{{ bank_name }}</strong></p>
                </div>

                <div class="bg-[#f3f3f3] mt-2 h-fit sm:flex block sm:justify-between text-center w-full p-3 rounded-lg">
                    <p class="text-[15px]">Total Amount:</p>
                    <p class="text-[15px] italic"><strong>NGN {{ total_amount }}</strong></p>
                </div>

                <div class="mt-2 h-fit text-center w-full p-3 rounded-lg">
                    <p class="text-[13px]">Please make a transfer to the account <br> details above.</p>
                    
                    <ButtonsTertiary type="submit" :loading="loadingBtn" class="mt-3 w-full">
                        I<span class="lowercase">'ve sent the money</span>
                    </ButtonsTertiary>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

import {  onMounted, onUnmounted } from "vue";
const toast = useToast();
const loadingBtn = ref(false);

const props = defineProps({
    time_expire:{
        type: String,
        default: '11:00:00',
    },

    acc_number: {
        type: String,
        default: '',
    },
    acc_name: {
        type: String,
        default: '  ',
    },
    bank_name: {
        type: String,
        default: '',
    },
    total_amount: {
        type: [String, Number],
        default: '10000',
    },
    cancel_template: {
        type: Boolean,
        default: true,
    }
});

// Emits
const emit = defineEmits(['cancel_trac']);

// Function to cancel transaction
const cancel_transaction = () => {
    emit('cancel_trac');
};

// Notification function




// Set the expiration time (Replace with actual value)



</script>

<style>
.shadow-for-feature-section {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.shadow-for-our-service {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>
