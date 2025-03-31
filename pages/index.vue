<script setup lang="ts">




</script>

<template>
    <div class=" ">
        <Navbar ></Navbar>

        <section id="hero" class=" dark:text-black bg-secondary px-4 hero-section">
            <div class="container  mx-auto block md:flex gap-5 justify-between py-7 items-center">
                <div class=" text-center md:text-left ">
                    <span class="  text-preprimary">
                        Generate
                        <span
                            class=" text-base font-medium rounded-sm px-1 text-center text-white bg-[#FFC059]">Virtual</span>
                        Numbers
                    </span>
                    <TypographyH1>Fast & Affordable SMS Verification with Virtual Phone Numbers</TypographyH1>
                    <TypographyP>Sign up for social networks, marketplaces, exchanges, freelence website and online services without spam
                        or sharing your personal information.</TypographyP>
                    <ButtonsPrimary @click="$router.push('/register')" class="mt-3">Start Using Now</ButtonsPrimary>
                </div>

                <div>
                    <img src="@/assets/images/hero.png" alt=" Hero image" srcset="">
                </div>
            </div>
        </section>

        <section id="our-service" class="  dark:text-black dark:bg-white px-4  my-20">
            <div class=" container  text-center s rounded-2xl   mx-auto">
                <TypographyH2>Our Services</TypographyH2>
                <div class=" mx-auto md:w-[60%] w-[100%]"> 
                   <TypographyP>We provide virtual phone numbers from various countries, including the USA, UK, Canada, and many more. Our services cater to freelancers, businesses, individuals, and apps like PayPal, Fiverr, Upwork, and Etsy
                   </TypographyP> 
                </div>
                
                <div class="s mt-4 ">
                    <div class="flex justify-between flex-wrap items-center md:px-6 px-0">
                        <img src="../assets/images/logos/fiveer-logo.png" alt=" fiveer loogo" class="  w-20 md:w-28" srcset="">I
                        <img src="../assets/images/logos/upwork.png" alt=" fiveer loogo" class="w-20 md:w-28" srcset="">I
                        <img src="../assets/images/logos/linkedin.png" alt=" fiveer loogo" class=" w-20 md:w-28" srcset="">I
                        <img src="../assets/images/logos/instagram.png" alt=" fiveer loogo" class=" w-20 md:w-28" srcset="">I
                        <img src="../assets/images/logos/whatsapp.png" alt=" fiveer loogo" class=" w-20 md:w-28" srcset="">I
                        <img src="../assets/images/logos/more.png" alt=" fiveer loogo" class=" w-20 md:w-28" srcset="">
                    </div>
                </div>
            </div>
        </section>

        <section id="how-it-work" class=" px-4 dark:text-black dark:bg-white how-it-work-section">
            <div class="container mx-auto gap-5  py-10 items-center how-it-work-wrapper ">
                <div class="">
                    <TypographyH2 class=" text-lg">How it works</TypographyH2>
                    <TypographyP class=" ">Three easy steps to receive SMS messages
                    </TypographyP>
                    <ButtonsPrimary @click="$router.push('/register')" class=" mt-3">Get Your Virtual Number</ButtonsPrimary>
                </div>

                <div class=" gap-4  sm:grid-cols-2 grid-cols-1   grid md:grid-cols-3  mt-8">
        

                     <div >
                        <TypographyH2 class="text-preprimary">01</TypographyH2>
                        <TypographyH3 class="">Register and make payment </TypographyH3>
                        <TypographyP>First, register using your full name, phone number, and email. Then, log in and click 'Fund' in the side menu to add money to your account either by bank transfer or using a card.</TypographyP>
                    </div>

                    <div>
                        <TypographyH2 class="text-preprimary">02</TypographyH2>
                        <TypographyH3 class=" ">Order a phone number in your personal account</TypographyH3>
                        <TypographyP>For example, if you want to create a Fiverr account, navigate to the dashboard, scroll down to select your country, and scroll down again to find the Fiverr app. At the bottom, your  phone number will be displayed</TypographyP>
                    </div>

                    <div>
                        <TypographyH2 class="text-preprimary">03</TypographyH2>
                        <TypographyH3  class="">Use it to receive SMS and get code</TypographyH3>
                        <TypographyP>Copy the issued number and paste it into the fiverr input number form to receive SMS and  with the registration code. and copy the code at the buttom of number history</TypographyP>
                    </div>

                </div>
            </div>
        </section>

        <section id="features" class="feature-section px-4 text-black  m bg-gray-50">
            <div class="container flex flex-col   items-center mx-auto py-10 ">
                <TypographyH2 class="text-center mb-10">Features</TypographyH2>
                <div class="md:w-[80%] w-[100%]  pt-7  justify-center">
                    <div class=" sm:flex block  gap-5 ">

                        <div class="sm:w-1/2 w-full  shadow-for-our-service p-5  h-full text- rounded-xl bg-secondary">
                            <div class="bg-white w-fit mt-5  py-3 px-3 rounded-full ">
                                <img src="@/assets/images/receive-otp.png" alt="receive otp" class=" w-7 " srcset="">
                            </div>

                            <TypographyH3 class=" pt-5">Virtual Phone Number</TypographyH3>
                            <TypographyP>Receive OTPs (One-Time Passwords) for verification purposes without revealing
                                your personal phone number.</TypographyP>
                        </div>

                        <div class="sm:w-1/2 w-full sm:mt-0 mt-10 relative z-30 shadow-for-our-service py-3 p-4  text-whie rounded-xl bg-ertiary">
                            <div class=" bg-preprimary w-fit mt-5  py-3 px-3 rounded-full ">
                                <img src="@/assets/images/easytouse.png" alt="easy to use" class=" w-7 " srcset="">
                            </div>

                            <TypographyH3 class=" mt-5">Multi-Platform Support</TypographyH3>
                            <TypographyP>Access services for various platforms, including social media (Facebook,
                                Instagram, Twitter, etc.) and music streaming services like Spotify.</TypographyP>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact-us" class=" dark:text-black dark:bg-white   px-4">
            <div class="container rounded-md flex flex-col bg-secondary  items-center mx-auto py-10">
                <TypographyH2> From the <span class=" bg-preprimary text-white px-2 rounded-md">cloud fdgf</span> to Customers,
                    We Bring all the Answers</TypographyH2>
                <ButtonsPrimary @click="$router.push('/register')" class="my-5">Get start</ButtonsPrimary>
                <TypographyP class=" tracking-wide"> Contact Us: dddfdfs +23408166988715</TypographyP>
            </div>

        </section>

        <Footer></Footer>

    </div>
</template>


<style>
.shadow-for-feature-section {
    box-shadow: 10px 10px 0px -4px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 10px 10px 0px -4px rgba(0, 0, 0, 1);
    -moz-box-shadow: 10px 10px 0px -4px rgba(0, 0, 0, 1);
}

.shadow-for-our-service {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>