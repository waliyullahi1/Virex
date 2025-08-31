import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const fetchUserData = defineStore('user_detail', () => {
  const config = useRuntimeConfig(); // ✅ Must be inside setup()
  const BASE_URL = config.public.BASE_URL;

  //countrySelected
  const selectedCountry = ref(null);
  const selectedApp = ref(null);


  
  const iDataEmpty = ref(true);
  const message = ref('Hello from Pinia!');
  const totalNumberUsed = ref(0);
  const userData = ref([]); // Store the fetched data

  const fetchUserDetail = async () => {
    
    try {
      const response = await axios.get(`${BASE_URL}/dashbord`, {
        headers: { "Content-Type": "application/json" },
        timeout: 30000,
        withCredentials: true,
      });

      userData.value = response.data.foundUser;

     
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return { iDataEmpty, message, selectedCountry, selectedApp, totalNumberUsed, userData, fetchUserDetail };
});
