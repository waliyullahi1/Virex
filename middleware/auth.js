export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!process.client) return; // Only run on client

  const { refresh, logout } = useAuth();
  const token = localStorage.getItem("accessToken");

  if (to.meta.middleware === "auth") {
    if (token) {
      try {
        await refresh(); // try refreshing
      } catch (err) {
        await logout(); // logout if refresh fails
        return navigateTo("/login");
      }
    } else {
      await logout();
      return navigateTo("/login");
    }
  }
});
