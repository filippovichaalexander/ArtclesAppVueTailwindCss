<template>
  <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="px-6 py-8 sm:px-10 sm:py-10">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">
          {{ counterStore.post.title }}
        </h1>
        <div class="text-gray-600 leading-relaxed mb-8">
          {{ counterStore.post.body }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useRoute } from "vue-router";

const route = useRoute();
const counterStore = useCounterStore();
onBeforeMount(() => {
  counterStore.fetchPost(route.params.id);
});
// const loading = ref(true);

// onMounted(async () => {
//   debugger;
//   try {
//     await counterStore.fetchPost(route.params.id);
//     loading.value = false;
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     loading.value = false;
//   }
// });
</script>
