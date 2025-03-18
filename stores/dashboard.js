import { defineStore } from 'pinia'
import axios from 'axios'

export const fetchUserData = defineStore('user_detail', {
  state: () => ({
    iDataEmpty: true,
    message: 'Hello from Pinia!',
    totalNumberUsed: 0,
    userData: [] // Store the fetched data
  }),
  actions: {
    async fetchUserDetail() {
      
      try {
        const response = await axios.get("https://82ea-102-89-82-236.ngrok-free.app/dashbord", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        const user = response.data.foundUser
        
         this.userData = user
        
        
        try {
          const response = await axios({
            url: "http://localhost:3500/getRates",
            method: "GET",
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          });
      
          const apps = response.data;
       
        
          const number_used = apps.filter(element => {
            return element.Activation_Code
          });
         this.totalNumberUsed = number_used.length
         
         
      
      
        } catch (error) {
          if (error.response) {
            nofit('error', error.response.data.message, "red")
            console.error(error)
      
          }
        }
         
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },

 
   
    
  }
})
