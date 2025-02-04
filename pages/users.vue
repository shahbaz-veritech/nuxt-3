<template>
  <div class="relative overflow-x-auto m-4">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">User name</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">City</th>
          <th scope="col" class="px-6 py-3">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="count > 0"
          v-for="(user, index) in users"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ user.username }}
          </th>
          <td class="px-6 py-4">{{ user.firstName }} {{ user.lastName }}</td>
          <td class="px-6 py-4">{{ user.city }}</td>
          <td class="px-6 py-4">{{ user.country }}</td>
        </tr>
        <tr v-else>
          <td colspan="4" class="bg-gray-100 text-center py-2">No Users Added</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// import { useHooks } from "~/composables/useHooks";
// const { ragisteredUsers } = useHooks();
// console.log("ragisteredUsers:", ragisteredUsers);

import { useUsersStore } from "~/store/usersStore";
const store = useUsersStore();
const { users, count } = storeToRefs(store);
</script>
