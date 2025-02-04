<script setup>
const route = useRoute();
const nuxt = useNuxtApp();

console.log("nuxt:", nuxt);
console.log(route.params);

const { data } = await useFetch("/api/hello");
const { data: user } = await useFetch(
  `https://jsonplaceholder.typicode.com/todos/${route.params.id}`
);
</script>
<template>
  <div class="m-8">
    <p>{{ data }}</p>
    <p>{{ user }}</p>
    <div>event page {{ $route.params.id }}</div>
    <div>event page {{ route.params }}</div>
  </div>
</template>
