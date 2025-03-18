import { useRouter } from "vue-router";

export const useAuth = () => {
  const router = useRouter();

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
      const { data, error } = await useFetch(" https://8997-102-89-82-236.ngrok-free.app/login", {
        method: "POST",
        body: { emaillOrPhone: emaillOrPhone, pwd: password },
        credentials: "include",
      });

      if (error.value) throw new Error(error.value);

      setAccessToken(data.value?.accessToken); // Store new access token
      

      startTokenRefresh(); // Start auto-refresh after login
      return getAccessToken();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  // 🔹 Refresh Token function
  const refresh = async () => {
    try {
      const { data, error, status } = await useFetch(" https://8997-102-89-82-236.ngrok-free.app/refresh", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (status.value === 401 || error.value) {
        throw new Error("Unauthorized");
      }

      console.log("Access token refreshed");
      setAccessToken(data.value?.accessToken); // Update access token
      return getAccessToken();
    } catch (err) {
      console.error("Token refresh failed:", err);
      logout(); // Logout if refresh fails
    }
  };

  // 🔹 Auto-refresh token every 60 seconds
  let refreshInterval = null;

  const startTokenRefresh = () => {
    if (typeof window === "undefined") return; // Make sure e no run for server-side
  
    if (refreshInterval) clearInterval(refreshInterval);
   
    refreshInterval = setInterval(refresh, 60000);
  };

  // 🔹 Logout function
  const logout = () => {
    clearAccessToken();
    clearInterval(refreshInterval); // Stop auto-refresh
    router.push("/login"); // Redirect to login
  };

  return { login, refresh, logout, getAccessToken, startTokenRefresh };
};
