import { defineStore } from "pinia";
//options API

// export const useCounterStore1 = defineStore("counter", {
//   state: () => ({ count: 0, name: "Eduardo" }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// composition API
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    console.log("Clicked")
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
