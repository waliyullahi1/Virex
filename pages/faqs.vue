<template>
    <div class=" dark:bg-white dark:text-black  ">
        <Navbar></Navbar>
        <div class="container mx-auto px-4 py-7 items-center">
            <TypographyH1 class="py-4">FAQs</TypographyH1>

            <div v-for="items in question_and_answer" :key="items.id"  class="mt-5 md:w-2/3 w-full">
                <TypographyH3 >{{items.question}}</TypographyH3>
                <TypographyP>{{ items.answer }}</TypographyP>
            </div>


        </div>
       

       
        <Footer></Footer>

    </div>
</template>

<script setup>

const question_and_answer =[
    {
        id:1,
        question:"1. How to get started with us?",
        answer : "Ans: virex.Com created keeping in mind for users simple interface. With using virex.com you can verify any networks like Gmail, Facebook, Instagram etc in just few minutes.Just register and choose the packages you want and add credits."
    },
    {
        id:2,
        question:"2. Okay I understand to add credits then what?",
        answer : "Ans: After payment is done with bank transfer. The system will add the credits automatically to your account. Next what to do is click get new number and then choose an app which you want to use the number. After that click on “Receive Code”. Don’t forget to click on “Receive Code” option otherwise code will not come."
    },

    {
        id:3,
        question:"3. Why so much time takes to get number?",
        answer : "Ans: We have time set of less than 30 seconds to get numbers. Every number will show up in less than 30 seconds thats guaranteed but we are working to reduce the time in next few months."
    },

    {
        id:4,
        question:"4.Why there are packages system on virex ?",
        answer : "Ans: We want to offer more credits to users who buys more numbers daily. Keeping that in mind we added packages system on virex.com"
    },

    {
        id:5,
        question:"5. Is all number Real Sim Card and not Virtual Number?",
        answer : "Ans: Yes we guarantee all numbers are Real Sim Card numbers and not like virtual or poor quality numbers."
    },

    {
        id:6,
        question:"6. What to do if number not came?",
        answer : "Ans: Its rare case when number not shown the reason should be there is no numbers available on our device. In that case just contact us we will add it asap. But as we said its rare case and chances very low as we monitor the system 24×7."
    },

    {
        id:7,
        question:"7. What to do if verification code not come?",
        answer : "Ans. The credits only deduct if you receive verification code otherwise not. So if code not came then try new numbers."
    }

]
</script>