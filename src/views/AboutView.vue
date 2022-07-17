<script setup>
import StacksWalletConnect from "../components/StacksConnectWallet.vue";
</script>
<template>
  <div class="h-screen">
    <div class="flex justify-between items-center mt-8 p-8">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <p class="bg-gray-900 px-4 p-2 rounded text-white">Home</p>
        </router-link>
        <p class="text-xl font-bold">/</p>

        <p class="p-2 rounded dark:text-white text-xl">About</p>
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
    <h1 class="lg:text-8xl serif font-bold">About</h1>
    <h2 class="my-8 text-4xl font-bold lg:w-2/3">
      <span class="serif font-bold">Songbook</span> is a web3 app for music NFTs
    </h2>
    <div class="grid lg:grid-cols-2 gap-4 mt-20">
      <!-- COL -->
      <div
        class="p-8 dark:bg-blue-800 border border-black/40 dark:border-none rounded-xl"
      >
        <img
          src="../assets/enso-dragon-logo.png"
          alt="Sound Co Logo"
          class=""
        />
        <h1 class="lg:text-4xl font-bold my-4">Stacks</h1>
        <p class="">
          SongBook App uses the Stacks platform for building web3 apps to use
          the Bitcoin Blockchain
        </p>
        <a href="https://stacks.org">
          <button
            class="text-green-500 text-2xl font-bold hover:translate-x-4 duration-300 my-4"
          >
            stacks.org ->
          </button>
        </a>
      </div>

      <!-- COL -->
      <div
        class="p-8 dark:bg-blue-800 border border-black/40 dark:border-none rounded-xl"
      >
        <img src="../assets/jk-logo.png" alt="Jay Khan Logo" class="" />
        <h1 class="lg:text-4xl font-bold my-4">Jay Khan</h1>
        <p class="">
          Khan is a designer, developer, blockchain enthusiast and musician.
        </p>
        <a href="https://jkhan.live">
          <button
            class="text-green-500 text-2xl font-bold hover:translate-x-4 duration-300 my-4"
          >
            Portfolio ->
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
