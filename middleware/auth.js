import { useRouter } from "vue-router";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const router = useRouter();
    const getAccessToken = () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("accessToken");
        }
        return null;
    };
    
    const { login, logout, refresh, startTokenRefresh } = useAuth();

   
    
    if (getAccessToken()) {
    
      
      try {
        // console.log('trying to refresh');
        await refresh();
        return; // Try refreshing token if access token is missing
      } catch (error) {
        console.log('');
        return router.push("/login"); // Redirect to login if refresh fails
      }
    }
    console.log('');
  
    startTokenRefresh(); // Start token refresh interval if token exists
});
