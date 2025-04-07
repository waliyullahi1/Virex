import { useRouter } from "vue-router";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Allow route change without checking on the server-side (only check on the client)
  if (process.client) {
    //console.log("Navigating to:", to.path);

    const { refresh, logout } = useAuth();
    const token = localStorage.getItem("accessToken");

    // Allow route navigation, then check token
    setTimeout(async () => {
      if (to.meta.middleware === "auth") {
        if (token) {
          try {
           // console.log("Client-side token check. Trying to refresh token...");
            await refresh(); // Refresh the token
           // console.log("Token refresh successful.");
          } catch {
           // console.warn("Token refresh failed. Logging out...");
            logout(); // Logout and redirect to login on error
          }
        } else {
         // console.warn("No access token found. Redirecting to login...");
          await logout(); // Redirect if no token exists
        }
      }
    }, 100); // Delay ensures it runs after route renders
  } else {
   // console.log("Skipping token check during SSR for client-side smoothness.");
  }
});
