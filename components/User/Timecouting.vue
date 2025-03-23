<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  examStartTime: {
    type: String,
    default: "08:00:00",
  },
  examEndTime: {
    type: String,
    default: "10:00:00",
  },
});

const timeLeft = ref("");
const statusMessage = ref("");
let timer = null;

// Convert "hh:mm:ss" to total seconds
const timeToSeconds = (time) => {
  const [h, m, s] = time.split(":").map(Number);
  return h * 3600 + m * 60 + s;
};

// Fetch current time in seconds
const getCurrentTimeInSeconds = async () => {
  try {
    const response = await fetch(
      "https://timeapi.io/api/Time/current/zone?timeZone=Africa/Lagos"
    );
    const data = await response.json();
    return data.hour * 3600 + data.minute * 60 + data.seconds;
  } catch (error) {
    console.error("Failed to fetch time:", error);
    statusMessage.value = "Unable to fetch time.";
    return null;
  }
};

// Update countdown
const updateCountdown = async () => {
  const currentSeconds = await getCurrentTimeInSeconds();
  if (currentSeconds === null) return;

  const startSeconds = timeToSeconds(props.examStartTime);
  const endSeconds = timeToSeconds(props.examEndTime);

  if (currentSeconds < startSeconds) {
    statusMessage.value = "Exam starts in:";
    timeLeft.value = formatTime(startSeconds - currentSeconds);
  } else if (currentSeconds < endSeconds) {
    statusMessage.value = "Time left for the exam:";
    timeLeft.value = formatTime(endSeconds - currentSeconds);
  } else {
    statusMessage.value = "Exam has ended";
    timeLeft.value = "00:00:00";
    clearInterval(timer);
  }
};

// Format time as hh:mm:ss
const formatTime = (seconds) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${secs}`;
};

// Auto-update on mount
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

// Clear timer when unmounting
onBeforeUnmount(() => {
  clearInterval(timer);
});

// Watch for prop changes
watch(() => [props.examStartTime, props.examEndTime], () => {
  updateCountdown();
});
</script>

<template>
  <div class="text-center text-xl font-bold">
    <p>{{ statusMessage }}</p>
    <span class="text-red-500">{{ timeLeft }}</span>
  </div>
</template>
