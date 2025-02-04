<script setup>
definePageMeta({
  title: "Nuxt Home",
});
import { storeToRefs } from "pinia";
import { useCounterStore } from "~/store/myStore";
const store = useCounterStore();
const { increment } = store;
const { count } = storeToRefs(store);
console.log("store:", count);
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <h1>Welcome to Nuxt Home!</h1>
    <button
      class="cursor-pointer bg-sky-500 px-4 py-2 rounded hover:bg-sky-700"
      @click="increment()"
    >
      Increase
    </button>
  </div>
</template>
