<script setup>
import TracksUsingSetup from "../components/songbooks/TracksUsingSetup.vue";
//import TracksUsingAxios from "../components/songbooks/TracksUsingAxios.vue";
import StacksConnectWallet from "../components/StacksConnectWallet.vue";
</script>

<template>
  <div class="flex justify-between items-center mt-8 p-8">
    <div class="flex items-center space-x-4">
      <router-link to="/">
        <p class="bg-gray-900 px-4 p-2 rounded text-white">Home</p>
      </router-link>
      <p class="text-xl font-bold">/</p>

      <p class="p-2 dark:text-white text-xl">Tracks</p>
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
  <TracksUsingSetup />
  <!-- <TracksUsingAxios /> -->
</template>
