import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const users = ref([]);
  const count = computed(() => users.value.length);

  function addUser(user) {
    users.value.push(user);
  }
  return {
    users,
    addUser,
    count,
  };
});
