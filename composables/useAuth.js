import { useRouter } from "vue-router";

export const useAuth = () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const BASE_URL = config.public.BASE_URL;

  // Check if localStorage is available
  const getAccessToken = () => (typeof window !== "undefined" ? localStorage.getItem("accessToken") : null);
  const setAccessToken = (token) => {
    if (typeof window !== "undefined") localStorage.setItem("accessToken", token);
  };
  const clearAccessToken = () => {
    if (typeof window !== "undefined") localStorage.removeItem("accessToken");
  };

  // 🔹 Login function
  const login = async (emaillOrPhone, password) => {
    try {
      const data = await $fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: { emaillOrPhone: emaillOrPhone, pwd: password },
        credentials: "include",
      });

      setAccessToken(data?.accessToken); // Store new access token

       // Start auto-refresh after login
      return getAccessToken();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  // 🔹 Refresh Token function
  const refresh = async () => {
    try {
      const data = await $fetch(`${BASE_URL}/refresh`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      console.log("Access token refreshed");
      setAccessToken(data?.accessToken); // Update access token
      return getAccessToken();
    } catch (err) {
      console.error("Token refresh failed:", err);
      logout(); // Logout if refresh fails
    }
  };

  // 🔹 Auto-refresh token every 60 seconds
  let refreshInterval; // Declare refreshInterval globally

  const startTokenRefresh = () => {
    if (typeof window === "undefined") return; // Ensure client-side execution only
  
    if (refreshInterval) {
      clearInterval(refreshInterval); // Clear any existing interval
    }
  
    // Set a new interval for refreshing the token
    refreshInterval = setInterval(refresh, 60000); // 60 seconds (1 minute)
  };

  // 🔹 Logout function
  const logout = async () => {
    console.log("Logging out...");

    if (typeof window !== "undefined") {
      clearAccessToken(); // Clear access token from localStorage
      clearInterval(refreshInterval); // Stop the token refresh loop

      await router.push("/login"); // Ensure token removal happens before redirection
      console.log("Redirected to login, access token cleared.");
    } else {
      console.warn("Logout called on server-side, skipping localStorage access.");
    }
  };

  return { login, refresh, logout, getAccessToken, startTokenRefresh };
};
