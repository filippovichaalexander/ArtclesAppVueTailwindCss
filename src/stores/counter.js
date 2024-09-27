import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }
  const customers = ref([]);

  async function fetchCustomers() {
    debugger;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      customers.value = await response.json();
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }

  return { customers, fetchCustomers };
});
