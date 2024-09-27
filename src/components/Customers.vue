<template>
  <div class="customers bg-gray-200">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="customers__title mx-auto text-center">
        <h3
          class="customers__title-top italic font-light text-3xl text-gray-700 sm:text-3xl sm:tracking-tight lg:text-3xl"
        >
          Why Choose Us?
        </h3>
        <h2
          class="customers__title-bottom mt-6 font-light text-2xl text-gray-700 sm:text-2xl sm:tracking-tight lg:text-2xl"
        >
          Here are a few reasons why our customers choose Flux.
        </h2>
      </div>
      <div class="customers__cards mt-8 w-full">
        <User
          v-for="customer in counterStore.customers"
          :key="customer.id"
          :customer="customer"
          class="mt-6 rounded-xl shadow-lg hover:shadow-2xl hover:cursor-pointer transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { onBeforeMount } from "vue";
import User from "./User.vue";

const counterStore = useCounterStore();

onBeforeMount(() => {
  debugger;
  counterStore.fetchCustomers();
});

// watch(
//   () => counterStore.customers,
//   (customers) => {
//     if (customers.length === 0) {
//       counterStore.fetchCustomers();
//     }
//   }
// );
</script>
<style scoped>
.customers__cards {
  width: 100%;
}
</style>
