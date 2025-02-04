export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true;
  console.log(to.fullPath, from.fullPath);
  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath);
  // } else {
  //   if (to.fullPath !== "/") {
  //     return navigateTo("/");
  //   }
  // }
});
