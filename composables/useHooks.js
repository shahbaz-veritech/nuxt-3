import { reactive } from "vue";

export const useHooks = () => {
  const ragisteredUsers = reactive([]);
  
  
  const addUser = (user) => {
      console.log("useHooks ~ ragisteredUsers:", ragisteredUsers)
    ragisteredUsers.push(user);
  };

  return {
    ragisteredUsers,
    addUser,
  };
};
