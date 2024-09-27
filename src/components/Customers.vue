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
          Here are our articles why our customers choose Flux.
        </h2>
      </div>
      <div
        class="customers__cards mt-8 w-full transition-all duration-500 ease-in-out"
      >
        <Article
          v-for="post in displayedCustomers"
          :key="post.id"
          :post="post"
          class="mt-6 rounded-xl shadow-lg hover:shadow-2xl hover:cursor-pointer transition-all duration-300 ease-in-out"
          @click="navigateToArticle(post.id)"
        />
      </div>
    </div>
    <div
      class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 transition-all duration-500 ease-in-out"
    >
      <div class="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
          @click.prevent="prevPage"
          >Previous</a
        >
        <a
          href="#"
          class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
          @click.prevent="nextPage"
          >Next</a
        >
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p
            class="text-sm text-gray-700 transition-all duration-500 ease-in-out"
          >
            Showing
            <span class="font-medium transition-all duration-500 ease-in-out">{{
              (currentPage - 1) * itemsPerPage + 1
            }}</span>
            to
            <span class="font-medium transition-all duration-500 ease-in-out">{{
              Math.min(currentPage * itemsPerPage, counterStore.posts.length)
            }}</span>
            {{ " " }}
            of
            {{ " " }}
            <span class="font-medium transition-all duration-500 ease-in-out">
              {{ counterStore.posts.length }}</span
            >
            results
          </p>
        </div>
        <div>
          <nav
            class="isolate inline-flex -space-x-px rounded-md shadow-sm transition-all duration-500 ease-in-out"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 transition-all duration-300 ease-in-out"
              :class="{
                'cursor-not-allowed opacity     -50': currentPage === 1,
              }"
              @click.prevent="prevPage"
            >
              <span class="sr-only">Previous</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              v-for="page in totalPages"
              :key="page"
              href="#"
              :class="[
                'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out',
                currentPage === page
                  ? 'z-10 bg-indigo-600 text-white'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
              ]"
              @click.prevent="setPage(page)"
            >
              {{ page }}
            </a>
            <a
              href="#"
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 transition-all duration-300 ease-in-out"
              :class="{
                'cursor-not-allowed opacity-50': currentPage === totalPages,
              }"
            >
              <span class="sr-only">Next</span>
              <ChevronRightIcon
                class="h-5 w-5"
                aria-hidden="true"
                @click.prevent="nextPage"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { onBeforeMount, ref, computed } from "vue";
import Article from "./Article.vue";
import { useRouter } from "vue-router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";

const counterStore = useCounterStore();
const router = useRouter();

let currentPage = ref(1);
const itemsPerPage = 10;
const totalPages = computed(() => {
  return Math.ceil(counterStore.posts.length / itemsPerPage);
});

onBeforeMount(() => {
  counterStore.fetchCustomers();
});
const navigateToArticle = async (id) => {
  router.push({ name: "ArticleView", params: { id } });
  await counterStore.fetchPost(id);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < Math.ceil(counterStore.posts.length / itemsPerPage)) {
    currentPage.value++;
  }
};

const setPage = (page) => {
  currentPage.value = page;
};
const displayedCustomers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return counterStore.posts.slice(startIndex, endIndex);
});
</script>
<style scoped>
.customers__cards {
  width: 100%;
}
</style>
