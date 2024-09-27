import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const posts = ref([]);
  const post = ref({});

  async function fetchCustomers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts.value = await response.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  async function fetchPost(postId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post.value = await response.json();
      console.log("Fetched post:", post.value);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  return { posts, fetchCustomers, fetchPost, post };
});
