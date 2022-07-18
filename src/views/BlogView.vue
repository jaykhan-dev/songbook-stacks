<script setup>
import StacksConnectWallet from "../components/StacksConnectWallet.vue";
import BlogAPI from "../components/blog/BlogAPI.vue";
</script>

<template>
  <div class="h-screen dark:bg-blue-900 dark:text-white dark:duration-300">
    <div class="flex justify-between items-center mt-8">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <p class="bg-gray-900 px-4 p-2 rounded text-white">Home</p>
        </router-link>
        <p class="text-xl font-bold">/</p>

        <p class="p-2 rounded dark:text-white text-xl">Blog</p>
      </div>
      <div class="flex items-center space-x-4">
        <StacksConnectWallet />
        <i class="fa-solid fa-copy dark:text-white text-black"></i>

        <!-- <button
          class="p-1 rounded-full bg-gray-900 text-white hover:bg-green-500"
        >
          <i class="fa-solid fa-pencil p-2"></i>
        </button> -->
      </div>
    </div>
    <BlogAPI />
  </div>
</template>
