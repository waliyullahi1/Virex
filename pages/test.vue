<script setup>
import { useTestStore } from '@/stores/dashboard'
import { onMounted, watch } from 'vue'

const store = useTestStore()

onMounted(() => {
  store.fetchUserDetail() // Fetch user data when component mounts
})

// Watch for changes in userData
watch(() => store.userData, (newData) => {   
    const full_name = newData.full_name;  
    console.log(full_name);  

    // Extract first name correctly
    const firstname = full_name.split(' ')[0];  
    console.log("First name:", firstname);
});
</script>

<template>
  <div>
    <h2>{{ store.userData.full_name }}</h2>
    <div v-if="store.userData.length">
      <h3>User Details:</h3>
      <ul>
        <li v-for="(user, index) in store.userData" :key="index">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
    </div>
    <p v-else>No user data available</p>
  </div>
</template>
