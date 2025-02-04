<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex justify-center items-center m-4 flex-col"
  >
    <div class="space-y-12 w-2/4">
      <div class="">
        <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
        <p class="mt-1 text-sm/6 text-gray-600">
          Add your details here to get resgister yourself for the Event.
        </p>

        <div class="col-span-full">
          <div class="sm:col-span-4">
            <label
              for="username"
              class="block text-sm/6 font-medium text-gray-900"
              >Username</label
            >
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
              >
                <input
                  v-model="form.username"
                  type="text"
                  name="username"
                  id="username"
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="User Name"
                />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label for="about" class="block text-sm/6 font-medium text-gray-900"
              >About</label
            >
            <div class="mt-2">
              <textarea
                v-model="form.about"
                name="about"
                id="about"
                rows="3"
                placeholder="Write a few sentences about yourself."
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="border-t mb-4 border-gray-900/10">
        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm/6 font-medium text-gray-900"
              >First name</label
            >
            <div class="mt-2">
              <input
                v-model="form.firstName"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm/6 font-medium text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
              <input
                v-model="form.lastName"
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm/6 font-medium text-gray-900"
              >Country</label
            >
            <div class="mt-2 grid grid-cols-1">
              <select
                v-model="form.country"
                id="country"
                name="country"
                autocomplete="country-name"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm/6 font-medium text-gray-900"
              >City</label
            >
            <div class="mt-2">
              <input
                v-model="form.city"
                type="text"
                name="city"
                id="city"
                placeholder="City"
                autocomplete="address-level2"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="region"
              class="block text-sm/6 font-medium text-gray-900"
              >State / Province</label
            >
            <div class="mt-2">
              <input
                v-model="form.region"
                type="text"
                name="region"
                id="region"
                placeholder="State / Province"
                autocomplete="address-level1"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm/6 font-medium text-gray-900"
              >ZIP / Postal code</label
            >
            <div class="mt-2">
              <input
                v-model="form.postalCode"
                type="text"
                name="postal-code"
                id="postal-code"
                placeholder="ZIP / Postal code"
                autocomplete="postal-code"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6 w-2/4">
      <button
        type="button"
        class="text-sm rounded-md font-semibold w-24 text-gray-900 bg-red-400 hover:bg-red-500 py-2 px-3"
        @click="resetForm"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-blue-600 w-28 px-3 py-2 text-sm cursor-pointer font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
// import { useHooks } from "~/composables/useHooks";
// const { addUser } = useHooks();
import { useUsersStore } from "~/store/usersStore";
const { addUser } = useUsersStore();
const form = reactive({
  username: "",
  about: "",
  firstName: "",
  lastName: "",
  country: "India",
  city: "",
  region: "",
  postalCode: "",
});

function handleSubmit() {
  addUser({ ...form });
  resetForm();
}
function resetForm() {
  Object.keys(form).forEach((key) => {
    form[key] = key === "country" ? "India" : "";
  });
}
</script>
