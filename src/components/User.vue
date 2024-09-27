<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row w-full relative"
  >
    <div class="w-full sm:w-1/3 flex items-center justify-center">
      <div class="flex flex-col items-center">
        <span class="text-4xl font-bold text-blue-600">{{
          props.customer.id
        }}</span>
      </div>
    </div>
    <div class="p-6 flex flex-col justify-center w-full">
      <h5 class="text-black-400 font-normal text-xl mb-2">
        {{ props.customer.title }}
      </h5>
      <h4 class="text-gray-400 font-normal text-xl mb-2">
        {{ props.customer.body }}
      </h4>
      <button
        class="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        More
        <svg
          class="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="absolute bottom-4 right-4 flex items-center bg-white px-4 py-2 rounded-md shadow-md"
    >
      <svg
        class="w-6 h-6 text-gray-400 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span class="text-gray-500 text-sm">10 min read</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  customer: {
    type: Object,
    required: true,
  },
});
onMounted(() => {
  console.log("Customer name:", props.customer);
});
</script>
