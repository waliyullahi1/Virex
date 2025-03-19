<template>

    <div class="bg-slate-50">
      <UserNavbar page_tittle="Account Settings" class=" text-[poppins] w-full hiddn " :pagelaod="pagelaod"></UserNavbar>
  
      <div class="  flex mt-5  gap-3 ">
        <div class=" h-3  bg lg:block md:block flex-none bg-orage-400 lg:min-w-56 md:min-w-7 hidden  ml-[1rem] "></div>
        <div class=" md:mx-4 px-0   w-full  flex justify-center shrink  flex-initial ">
          <form  @submit.prevent="edit_detail" class=" container pb-52  mx-auto flex gap-1 flex-col justify-center ">
  
            <!-- FOR NAME CHANGE -->
            <section class="  rounded-lg  bg-white sm:p-5 p-2  ">
              <div class=" w-full gap-2 py-3 flex  items-center  bg-primary rounded-lg text-white px-3 mb-5">
                <img src="@/assets/images/svg/spanner-setting.svg" alt=" spanner setting" class=" w-4 scale-x-[-1] ">
                <TypographyH4 class="a">  Account Settings  </TypographyH4>
              </div>
              <div class=" relative">
  
                <div   class=" md:flex block w-full gap-4">
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
                    <FormInput  type="password"  v-model:inputValue="user.currentpassword" :minlength="1"  :required="require_password" class=" w-full" label="Current Password"></FormInput>
                    <FormInput  type="password"  v-model:inputValue="user.newpassword" :minlength="1" :required="require_password" class=" w-full"label="New Password"></FormInput>
                    <FormInput  type="password"  v-model:inputValue="user.confirm_password" :minlength="1" :required="require_password" class=" w-full"label="Confirm Password"></FormInput>
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
                    <ButtonsTertiary :loading =loadingbtn  type="submit"  class=" width-full text-" >Update</ButtonsTertiary>
                    <ButtonsPrimary type="button" @clicked="$router.push({path: '/register'})" class="s font-medium text-xl ">Cancel</ButtonsPrimary>
                    
                  </div>
                </div>
  
              </div>
  
  
            </section>
         
  
            
  
            
          </form> 
  
  
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  const config = useRuntimeConfig();
const BASE_URL = config.public.BASE_URL;
  import { fetchUserData } from '@/stores/dashboard'
  import axios from "axios";
  const toast = useToast();
  definePageMeta({
  middleware: "auth",
});
const require_password = ref(false)
const pagelaod = ref(false)
const loadingbtn =ref(false)
  const user = ref({
    full_name: ' waliu idowu',
    email: 'dhfshueh@gmail.com',
    phoneNumber:'',
    currentpassword:'',
    newpassword:'',
    confirm_password:''
  });

  

  const nofit = (title, description, color="red" )=>{
  toast.add({
    title: title,
    description: description,
    color: color,
  });
}

  const store = fetchUserData()

  watch(() => store.userData, (newData) => {   
   user.value.email = newData.email; 
   user.value.phoneNumber = newData.phone;
   user.value.full_name = newData.full_name;
   pagelaod.value = true
});

const edit_detail = async()=>{
  loadingbtn.value = true
  
  
  const fullNameValid = user.value.full_name.trim().split(/\s+/).length >= 2;
  if(!fullNameValid){
     console.log('Write your name properly like this: "Sumae Jame"');
      nofit('Error', 'Full name must contain at least two words. firstname and lastname (daniel tenny)', "red");
      loadingbtn.value = false;
      return; 
  }
console.log(user.value.full_name);
if (user.value.newpassword || user.value.currentpassword ) {
  console.log(user.value.newpassword !== user.value.confirm_password, user.value.newpassword, user.value.confirm_password );
  
 if (user.value.newpassword !== user.value.confirm_password){
      nofit('Error', 'New password and confirm password must be the same', "red");
      loadingbtn.value = false;
      return
} 
}

  try {
  const response = await axios({
    url: `${BASE_URL}/resetpassword`,   method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    data: { full_name: user.value.full_name, currentpassword:user.value.currentpassword, newPassword:user.value.newpassword }
  });
console.log(response.data);
console.log(response);

 console.log('finished');
     nofit('Succeful', response.data.success, "green")
 


} catch (error) {
      loadingbtn.value = false
    
  if (error.response) {
    nofit('Error', error.response.data.message, "red")
    console.error(error)

  }
}
  loadingbtn.value = false

}

watch([() => user.value.currentpassword, () => user.value.confirm_password, () => user.value.newpassword], ([currentpassword, confirm_password, newpassword]) => {
  require_password.value = !!(currentpassword || confirm_password || newpassword); // Convert to boolean
});


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