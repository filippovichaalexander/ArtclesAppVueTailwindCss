<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row w-full"
  >
    <div class="w-full sm:w-1/3">
      <img
        src="../assets/images/face.jpg"
        alt="Customer"
        class="w-full h-full object-cover"
      />
    </div>
    <!-- <div
      class="w-full sm:w-1/3 rounded-l-lg bg-cover bg-center"
      :style="{
        'background-image': `url(${require('../assets/images/face.jpg')})`,
      }"
    ></div> -->
    <div class="p-6 flex flex-col justify-center w-full">
      <h4 class="text-gray-800 font-bold text-xl mb-2">
        {{ props.customer.name }}
      </h4>
      <p class="text-gray-600 text-base">
        {{ props.customer.email }}
      </p>
      <p class="text-gray-600 text-base">
        {{ props.customer.address.city }}
      </p>
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
