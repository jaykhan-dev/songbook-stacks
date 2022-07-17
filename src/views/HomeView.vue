<script setup>
import StacksWalletConnect from "../components/StacksConnectWallet.vue";
</script>

<template>
  <main class="h-screen">
    <div class="flex justify-between items-center mt-8 p-8">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <p class="bg-gray-900 px-4 p-2 rounded">Home</p>
        </router-link>
        <p class="text-xl font-bold">/</p>
      </div>
      <div class="flex items-center space-x-4">
        <StacksWalletConnect />
        <i class="fa-solid fa-copy dark:text-white text-black"></i>

        <!-- <button
          class="p-1 rounded-full bg-gray-900 text-white hover:bg-green-500"
        >
          <i class="fa-solid fa-pencil p-2"></i>
        </button> -->
      </div>
    </div>
    <div class="grid grid-cols-2 border-b dark:border-blue-600 p-8">
      <!-- COL -->
      <div class="">
        <h1 class="text-8xl font-bold my-4 serif">Hello</h1>
        <h1 class="text-2xl font-bold my-4">Account holders name</h1>
      </div>
      <!-- COL -->
      <div class="grid grid-cols-2 gap-4">
        <!-- COL -->
        <div
          class="dark:bg-blue-800 bg-gray-200 grid place-items-center dark:text-white rounded-xl"
        >
          <div>
            <p>Total asset value</p>
            <h1 class="text-4xl font-bold">N/A</h1>
          </div>
        </div>
        <!-- COL -->
        <div
          class="dark:bg-blue-800 bg-gray-200 grid place-items-center dark:text-white rounded-xl"
        >
          <div>
            <p>Total claimable rewards</p>
            <h1 class="text-4xl font-bold">N/A</h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
