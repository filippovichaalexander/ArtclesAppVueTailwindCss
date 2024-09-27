<template>
  <div class="main">
    <div class="main__img"></div>
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="main__title max-w-[900px] pb-20">
        <h1
          class="main__title-top italic font-light text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          We bring <span>solutions</span> to make life easier for our customers.
        </h1>
        <h3
          class="mt-8 main__title-bottom italic font-light text-xl text-gray-700 sm:text-xl sm:tracking-tight lg:text-xl"
        >
          We have considered our solutions to support every stage of your
          growth.
        </h3>
        <button
          class="mt-8 bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 px-6 rounded-md transition-colors duration-500"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
// import WelcomeItem from "./WelcomeItem.vue";
// import DocumentationIcon from "./icons/IconDocumentation.vue";
// import ToolingIcon from "./icons/IconTooling.vue";
// import EcosystemIcon from "./icons/IconEcosystem.vue";
// import CommunityIcon from "./icons/IconCommunity.vue";
// import SupportIcon from "./icons/IconSupport.vue";
</script>
<style scoped>
.main__img {
  background-image: url(../assets/images/main-img.jpg);
  height: calc(100vh - 128px);
  background-size: cover;
  background-repeat: no-repeat;
}
.container {
}
.main__title-top {
}
</style>
