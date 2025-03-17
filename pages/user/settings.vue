<template>

    <div class="bg-slate-50">
      <UserNavbar page_tittle="Account Settings" class=" text-[poppins] w-full hiddn " :pagelaod="pagelaod"></UserNavbar>
  
      <div class="  flex mt-5  gap-3 ">
        <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
        <div class=" md:mx-4 px-4   w-full  flex justify-center shrink  flex-initial ">
          <div class=" container pb-52  mx-auto flex gap-1 flex-col justify-center ">
  
            <!-- FOR NAME CHANGE -->
            <section class="  rounded-lg  bg-white sm:p-5 p-2  ">
              <div class=" w-full gap-2 py-3 flex  items-center  bg-primary rounded-lg text-white px-3 mb-5">
                <img src="@/assets/images/svg/spanner-setting.svg" alt=" spanner setting" class=" w-4 scale-x-[-1] ">
                <TypographyH4 class="a">  Account Settings  </TypographyH4>
              </div>
              <div class=" relative">
  
                <div  action="" class=" md:flex block w-full gap-4">
                    <FormInput  type="text" v-model:inputValue="user.full_name" :minlength="1" class=" w-full" label="Full name"></FormInput>
                    <FormInput  type="text" :disabled="true" v-model:inputValue="user.email" :minlength="1" class=" w-full" label="Email"></FormInput>
                    <FormInput  type="text" :disabled="true" v-model:inputValue="user.phoneNumber" :minlength="1" class=" w-full" label="Phone Number"></FormInput>
                </div>
  
  
              </div>
  
  
            </section>


            <section class="  rounded-lg  bg-white sm:p-5 ">
              <div class=" w-full py-3 flex  items-center  bg-primary rounded-lg text-white px-3 mb-5">
                <img src="@/assets/images/svg/padlock.svg" alt=" password icon" class=" w-6 scale-x-[-1] ">
                <TypographyH4 class="a"> Change of Password  </TypographyH4>
              </div>
              <div class=" relative">
  
                <div  action="" class=" md:flex block w-full gap-4">
                    <FormInput  type="password" v-model:inputValue="user.currentpassword" :minlength="1" class=" w-full" label="Current Password"></FormInput>
                    <FormInput  type="password"  v-model:inputValue="user.newpassword" :minlength="1" class=" w-full"label="New Password"></FormInput>
                    <FormInput  type="password"  v-model:inputValue="user.confirm" :minlength="1" class=" w-full"label="Confirm Password"></FormInput>
                </div>
  
  
              </div>
  
  
            </section>
  

            <section class="  rounded-lg  bg-white sm:p-5 p-2  mb-1 mt-">
              <div class=" w-full py-3 flex  items-center  bg-primary rounded-lg text-white px-3 mb-5">
                <img src="@/assets/images/svg/padlock.svg" alt=" password icon" class=" w-6 scale-x-[-1] ">
                <TypographyH4 class="a"> Google Two Factor Authentication  </TypographyH4>
              </div>
             
              <div class=" relative">
  
                <div  action="" class="  items-center flex w-full gap-2">
                    <input type="radio"  class=" w-fit h-fit">
                   <TypographyP>Use Google Two Factor Authentication for Login</TypographyP>
                </div>

                <TypographyP class=" pt-4">Get Google Authenticator on your phone</TypographyP>

                <div class=" flex mt-6 gap-4">
                    <img src="@/assets/images/iphone.png" alt=" iphone icon" class=" w-32" srcset="">
                    <img src="@/assets/images/android.png" alt=" android icon" class="w-32" srcset="">
                </div>
                
                <div class=" w-1/2">
                    <div class=" flex w-full mt-10 justify-center items-center  gap-5">
                    <ButtonsTertiary  type="submit"  class=" width-full text-" >Update</ButtonsTertiary>
                    <ButtonsPrimary type="button" @clicked="$router.push({path: '/register'})" class="s font-medium text-xl ">Cancel</ButtonsPrimary>
                    
                  </div>
                </div>
  
              </div>
  
  
            </section>
         
  
            
  
            
          </div> 
  
  
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { fetchUserData } from '@/stores/dashboard'

  definePageMeta({
  middleware: "auth",
});

const pagelaod = ref(false)
  const user = ref({
    full_name: ' waliu idowu',
    email: 'dhfshueh@gmail.com',
    phoneNumber:'',
    currentpassword:'',
    newpassword:'',
  });

  


  const store = fetchUserData()

  watch(() => store.userData, (newData) => {   
   user.value.email = newData.email; 
   user.value.phoneNumber = newData.phone;
   user.value.full_name = newData.full_name;
   pagelaod.value = true
});

// watch(() => store.userData, (newData) => {   
//    user.email = newData.email
//    user.phoneNumber = newData.phone
//   user.full_name = newData.full_name; 
//   console.log(  user.email, 'ddd vbxfxvsa');
  
//     pagelaod.value = true
// });

  </script>
  
  
  
  
  
  
  <style>
  .shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
    box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  }

  .accout_icon::before{
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><path d='M12 2C8.69 2 6 4.69 6 8V10H4V22H20V10H18V8C18 4.69 15.31 2 12 2ZM8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V10H8V8ZM6 12H18V20H6V12Z'/></svg>");
    background-size: cover;
  }
  </style>