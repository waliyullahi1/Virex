<template>
  <!-- OTP number -->
  <section class="w-full rounded-lg bg-white mb-10 p-2 md:p-3">
    <!-- Header -->
    <div class="w-full py-2 border-b sm:flex block justify-between items-center border-b-black px-1 mb-3">
      <TypographyH3>
        <span class="font-medium">Recent Numbers</span>
      </TypographyH3>
    </div>

    <!-- Notice + Link -->
    <div class="w-full sm:flex block justify-between items-center border-b-black px-1 mb-4">
      <TypographyP>
        <span class="font-bold text-red-600 text-[14px]">
          Click refresh button next to Number to get Code.
        </span>
      </TypographyP>
      <nuxt-link to="/deduction_history">
        <TypographyP>
          <span class="font-medium text-orange-500 text-[14px]">
            Credit Deduction History
          </span>
        </TypographyP>
      </nuxt-link>
    </div>

    <button @click="store.fetchNumbers()">fetch number</button>

    <!-- SMS List -->
    <div class="relative w-full">
      <div id="SMS" class="z-20 px-3 w">
        <!-- Loading List -->
        <div :class="isLoading ? 'flex' : 'hidden'"
          class=" flex justify-center items-center absolute bg-opacity-20 h-full  w-full bg-primary">
          <img class="w-16 " src="@/assets/images/svg/preload.svg" alt="" srcset="">
        </div>
        <div class="w-full space-y-4 h-fit gap-2">
          <div v-for="item in store.numbers.slice(0, 7)" :key="item._id"
            class="md:flex block group overflow-hidden shadow-sm border-l-4 rounded-lg border-green-700 items-center justify-between gap-2 hover:border-primary transform duration-300 text-left h-fit w-full border py-1 px-2">
            <!-- Number Info -->
            <div class="sm:block flex justify-between font-semibold">
              <TypographyP class="font-semibold">
                <span class=" text-base">{{ item.Phone_Number }}</span>
              </TypographyP>
              <TypographyP class="bg-slate-100 rounded-md px-2 py-0.5 font-semibold text-sm">
                <span class="text-blue-500 text-sm">{{ item.App }}</span>
                <span class="text-slate-600 text-sm"> • {{ item.Country }}</span>
              </TypographyP>
            </div>

            <!-- Message Info -->
            <div class="text-left pt-3 md:text-center font-semibold">
              <TypographyP class="font-semibold leading-[4px]">
                No message yet...
              </TypographyP>
              <TypographyP class="tracking-tighter font-semibold text-sm">
                <!-- Countdown -->
                <span v-if="item.remaining && !item.expired" class="leading-[4px] text-slate-600 text-[12px]">
                  Time left: {{ item.remaining }}
                </span>
                <span v-else class="leading-[4px] text-[13px] tracking-wide">Expired</span>
                <br />
                <span class="text-slate-600 leading-[4px] text-[13px]">{{ formatDate(item.expireAt) }}</span>
              </TypographyP>
            </div>



            <div class=" flex flex-col sm:items-end gap-1">
              <!-- Status -->
              <span :class="[
                item.status.toLowerCase() === 'active'
                  ? 'bg-green-200 text-green-800'
                  : item.status === 'Expired'
                    ? 'bg-red-300 text-red-800'
                    : 'bg-yellow-200 text-yellow-800',
                ' rounded-sm px-1 text-[14px] whitespace-nowrap font-medium text-center'
              ]">
                {{ item.status }}
              </span>
              <div v-if="item.status.toLowerCase() === 'active'" class=" text-[10px] flex gap-1 ">
                <button
                  class=" rounded-md p-1 font-semibold duration-300 text-white hover:bg-cyan-800 bg-cyan-600 flex "
                  @click="reloadSms(item)">
                  <img src="@/assets/images/svg/reload.svg" class=" w-[10px] w" alt="" srcset="">
                  Refresh
                </button>
                <button @click="rejectNumber(item)"
                  class=" rounded-md p-1 font-semibold duration-300 text-white hover:bg-red-800 bg-red-600 flex -">
                  <img src="@/assets/images/svg/delete.svg" class=" w-[10px] w" alt="" srcset="">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-6">
      <TypographyP class="text-center">
        <strong>View All Codes</strong>
      </TypographyP>
    </div>

    <!-- Warning Box -->
    <div class="mt-6 p-4 bg-yellow-100">
      <TypographyH4 class="text-yellow-800">🔔 Didn't receive the code?</TypographyH4>
      <TypographyP>
        If no message arrives within a short time, you can reject the number and
        request a new one. Your balance will be automatically refunded.
      </TypographyP>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useRuntimeConfig, useToast } from "#imports"
import axios from "axios"

const store = useUserStore();

// local statement
const timers = ref([]);
const isLoading = ref(false);
// notification Import
const toast = useToast()

//---------NOTIFICATION----------

const nofit = (title, description, color = "red") => {
  toast.add({ title, description, color })
}

// Env
const config = useRuntimeConfig()
const BASE_URL = config.public.BASE_URL

// ✅ Countdown function
async function updateCountdown() {


  const now = new Date();
  console.log("run");

  const tasks = store.numbers.map(async (item) => {
    console.log(item.status, item.Phone_Number, 'ssss');

    if (item.status.toLowerCase() !== "active" && item.status.toLowerCase() !== "expire") return;
    console.log('log ', item.Phone_Number);
    const expire = new Date(item.expireAt);
    const diff = expire - now;
    console.log(diff <= 0);
    console.log(diff);
    if (diff <= 0) {

      console.log('ass');


      item.remaining = "Expired";
      item.expired = true;
      item.status = "Expired";

      try {
        const response = await axios.put(
          `${BASE_URL}/otp/${item.Phone_Number}`,
          {},
          { withCredentials: true }
        );
        nofit("Notices", response.data.success, "green");
        await store.fetchNumbers();
      } catch (err) {
        console.error("❌ Failed to notify server:", err);
      }
    } else {
      const minutes = Math.floor(diff / 1000 / 60);
      const seconds = Math.floor((diff / 1000) % 60);
      item.remaining = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      item.expired = false;

      if (minutes === 0 && seconds === 0 && item.status.toLowerCase() !== "rejected") {
        if (item.status.toLowerCase() !== "active") return;
        console.log('ass');
        try {
          const response = await axios.put(
            `${BASE_URL}/otp/${item.Phone_Number}`,
            {},
            { withCredentials: true }
          );
          nofit("Notices", response.data.success, "green");
          await store.fetchNumbers();
        } catch (err) {
          console.error("❌ Failed to notify server:", err);
        }
      }
    }
  });

  await Promise.all(tasks); // wait for all to finish
}

// ----------------REJECT NUMBER ----------------
const rejectNumber = async (item) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/rejectNumber/${item.Phone_Number}`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const apps = response.data;
    nofit('Notices', apps, "green")
    await store.fetchNumbers();
  } catch (error) {
    console.log(error);
  }
}

// ----------------RELOAD SMS NUMBER ----------------
const reloadSms = async (item) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/otp/${item.Phone_Number}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const apps = response.data;
    console.log(apps);

    nofit('Notices', apps.success, "green");
    await store.fetchNumbers();
  } catch (error) {
    console.log(error);
  }
}

// ✅ Auto update every second
let interval;
onMounted(() => {
  updateCountdown();
  store.fetchNumbers()
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});

// ✅ Date formatting (DD/MM HH:mm)
function formatDate(isoString) {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month} ${hours}:${minutes}`;
}
</script>
