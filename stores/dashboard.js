import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const fetchUserData = defineStore('user_detail', () => {
  const config = useRuntimeConfig(); // ✅ Must be inside setup()
  const BASE_URL = config.public.BASE_URL;

  const iDataEmpty = ref(true);
  const message = ref('Hello from Pinia!');
  const totalNumberUsed = ref(0);
  const userData = ref([]); // Store the fetched data

  const fetchUserDetail = async () => {
    
    try {
      const response = await axios.get(`${BASE_URL}/dashbord`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      userData.value = response.data.foundUser;

      try {
        const response = await axios.get(`${BASE_URL}/getRates`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        const apps = response.data;
        const number_used = apps.filter(element => element.Activation_Code);
        totalNumberUsed.value = number_used.length;

      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return { iDataEmpty, message, totalNumberUsed, userData, fetchUserDetail };
});
