<script setup>
const { sayHello } = useUtils();
sayHello("From Index.js");
const counter = useState("counter", () => 0);
</script>
<template>
  <div class="bg-white border rounded w-36 text-center p-2">{{ counter }}</div>
  <div class="flex gap-4">
    <button
      class="btn bg-sky-500 hover:bg-sky-700 rounded p-2"
      @click="counter--"
    >
      Decrease
    </button>
    <button
      class="btn bg-sky-500 hover:bg-sky-700 rounded p-2"
      @click="counter++"
    >
      Increase
    </button>
  </div>
</template>
