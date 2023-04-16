export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo("https://forms.gle/ywt8X2Tzx6s8uhaU6", {
    external: true,
  });
});
