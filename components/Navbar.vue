<template>
    <div class="  ">
        <div class="  bg-secondary w-full md:h-20 h-14"> </div>
        
        <div :class="top?' transition transform  -translate-y-36':'translate-y-0 transition transform '" class=" fixed top-0 z-50 shadow-md  w-[100%] flex justify-center md:h-20 h-14 bg-white   mx-auto l">
            <div class="  container mxo  pt-  w-full z-30    bg top-0 ">

                <button class="flex top-6 fixed z-20 right-4  md:hidden" @click="toggleMenu">
                    <div class="w-8">
                        <div :class="mobileNav ? 'transition transform rotate-45 items-center w-8' : 'transition w-8'"
                            class="block cursor-pointer bg-preprimary" style="height: 3px;"></div>

                       

                        <div :class="mobileNav ? 'transition transform   -rotate-45 item-center w-8 -mt-0.5' : 'transition  w-8 mt-1.5'"
                            class="block cursor-pointer bg-preprimary" style="height: 3px;"></div>
                    </div>
                </button>
                <nav class=" py-  bg-white items-center md:h-20 h-14  md:flex block justify-between md:justify-between">
                    <div class=" bg-k justify-center  flex items-center w-fit h-full f">
                        <img src="@/assets/images/svg/logo.svg" class=" sm:w-32 w-20 " alt="logo">
                    </div>
                    <ul :class="mobileNav ? ' 6 transition transform  item-center  -mt' : ' -translate-x-[50rem] md:translate-x-0 transition '"
                        class="text-gray-500 bg-white  md:pt-0 pt-20 h-screen md:h-fit flex md:flex-row flex-col items-center gap-3">
                        <li>
                            <ButtonsSecondary>
                                <nuxt-link to="/" exact-active-class="active-link">Home</nuxt-link>
                            </ButtonsSecondary>
                        </li>
                        <li>
                            <ButtonsSecondary>
                                <nuxt-link to="/pricing" exact-active-class="active-link">Pricing</nuxt-link>
                            </ButtonsSecondary>
                        </li>
                        <li>
                            <ButtonsSecondary>
                                <nuxt-link to="/faqs" exact-active-class="active-link">FAQS</nuxt-link>
                            </ButtonsSecondary>
                        </li>
                        <li>
                            <ButtonsSecondary>
                                <nuxt-link :to="{ path: '/', hash: '#how-it-work' }">How it work</nuxt-link>
                            </ButtonsSecondary>
                        </li>
                        <li>
                            <ButtonsSecondary>
                                <nuxt-link :to="{ path: '/', hash: '#contact-us' }">Contact Us</nuxt-link>
                            </ButtonsSecondary>
                        </li>
                        <li>
                            <ButtonsPrimary @click="$router.push('/login')">Log in</ButtonsPrimary>
                        </li>
                    </ul>
                </nav>



            </div>
        </div>

    </div>

</template>

<script setup>

import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';


const router = useRouter();
const menuRevealed = ref(false);
const mobileNav = ref(false);
let flex = ref(false);
let scrollPosition = ref(0);
let top = ref(false);
let lastScrollPosition = 0;
defineProps({
    keep_button_hovered: Boolean,
});

const toggleMenu = () => {
    mobileNav.value = !mobileNav.value;
    menuRevealed.value = !menuRevealed.value;
};



const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  top.value = currentScrollPosition > lastScrollPosition;
  scrollPosition.value = currentScrollPosition;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Active link should be blue */
.active-link {
    color: #FFC059 !important;
   
    border-bottom: 2px solid #FFC059;
}

/* Ensure hash-based links do NOT get blue */
.nuxt-link-active:not([href*='#']) {
    color: inherit !important;
}
</style>
