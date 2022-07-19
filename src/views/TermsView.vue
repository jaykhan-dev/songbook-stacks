<script setup>
import StacksConnectWallet from "../components/StacksConnectWallet.vue";
</script>
<template>
  <div class="h-screen">
    <div class="flex justify-between items-center mt-8">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <p class="bg-gray-900 px-4 p-2 rounded text-white">Home</p>
        </router-link>
        <p class="text-xl font-bold">/</p>

        <p class="p-2 rounded dark:text-white text-xl">Terms</p>
      </div>
      <div class="flex items-center space-x-4">
        <StacksConnectWallet />
        <!-- <i class="fa-solid fa-copy dark:text-white text-black"></i> -->

        <!-- <button
          class="p-1 rounded-full bg-gray-900 text-white hover:bg-green-500"
        >
          <i class="fa-solid fa-pencil p-2"></i>
        </button> -->
      </div>
    </div>
    <h1 class="lg:text-8xl font-bold mt-8 serif">Terms of Service</h1>
    <p class="text-2xl my-8"></p>
    <ul class="p-4 space-y-4"></ul>
  </div>
</template>

<style>
ul {
  list-style-type: circle;
}
</style>
