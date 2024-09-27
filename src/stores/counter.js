import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const customers = ref([]);
  const post = ref({});

  async function fetchCustomers() {
    debugger;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      customers.value = await response.json();
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }
  async function fetchPost(customerId) {
    debugger;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${customerId}`
      );
      post.value = await response.json();
      console.log("Fetched post:", post.value);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  return { customers, fetchCustomers, fetchPost, post };
});
