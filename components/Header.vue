<template>
  <header class="bg-gray-800 text-white w-full">
    <ul class="flex items-center gap-4 py-2 px-4 bg-gray-800 text-white">
      <li>
        <img src="/favicon.ico" alt="logo" class="h-8 w-12 m-4" />
      </li>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/events">Events</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ragistration">Ragistration</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users"
          >Users
          <span class="rounded-full bg-gray-500 w-4 px-2 py-1 text-xs"
            >{{ count }}
          </span></NuxtLink
        >
      </li>
    </ul>
  </header>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useUsersStore } from "~/store/usersStore";
const store = useUsersStore();
const { count } = storeToRefs(store);
</script>
