<script setup>
import StacksConnectWallet from "../components/StacksConnectWallet.vue";
</script>
<template>
  <div class="">
    <div class="flex justify-between items-center mt-8">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <p class="bg-gray-900 px-4 p-2 rounded text-white">Home</p>
        </router-link>
        <p class="text-xl font-bold">/</p>

        <p class="p-2 rounded dark:text-white text-xl">About</p>
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
    <h1 class="lg:text-8xl mt-8 serif font-bold">About</h1>
    <h2 class="my-8 text-4xl font-bold lg:w-2/3">
      <span class="serif font-bold">Songbook</span> is a web3 app for music NFTs
    </h2>
    <div class="grid lg:grid-cols-2 gap-4 my-8">
      <p>
        This app is for content creators, artists, musicians, writers, producers
        and NFT collectors. Blockchain technology makes self sovereignty
        possible. The artist is now in full control of their music, royalties
        and merchandise.
      </p>
      <p>
        Music NFTs are changing the music industry for the better. Smart
        contracts elimiate the need for third parties and middlemen.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-4 mt-20">
      <!-- COL -->
      <div
        class="p-8 dark:bg-blue-800 border border-black/40 dark:border-none rounded"
      >
        <i class="fa-brands fa-bitcoin text-8xl"></i>
        <h1 class="lg:text-4xl font-bold my-4">Bitcoin</h1>
        <p class="">
          The Bitcoin blockchain is by far the most secure, robust and well
          known of all the blockchains currently running.
        </p>
        <a href="https://bitcoin.org">
          <button
            class="text-green-500 text-2xl font-bold hover:translate-x-4 duration-300 my-4"
          >
            Bitcoin.org ->
          </button>
        </a>
      </div>

      <!-- COL -->
      <div
        class="p-8 dark:bg-blue-800 border border-black/40 dark:border-none rounded"
      >
        <img src="../assets/stacks-logo.svg" alt="Sound Co Logo" class="" />
        <h1 class="lg:text-4xl font-bold my-4">Stacks</h1>
        <p class="">
          SongBook App uses the Stacks platform for building web3 apps to use
          the Bitcoin Blockchain
        </p>
        <div class="flex items-center justify-between">
          <a href="https://stacks.org">
            <button
              class="text-green-500 text-2xl font-bold hover:translate-x-4 duration-300 my-4"
            >
              Stacks.co ->
            </button>
          </a>
          <a href="">
            <button
              class="text-green-500 text-2xl font-bold hover:translate-x-4 duration-300 my-4"
            >
              Hiro Wallet ->
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <h2 class="text-4xl font-bold my-8">Roadmap</h2>
      <!-- PART1 -->
      <div class="grid lg:grid-cols-3 gap-4" v-motion-fade :delay="1000">
        <!-- COL -->
        <div
          class="border p-4 rounded dark:bg-blue-800 dark:border-none border-black"
        >
          <div class="flex space-x-2 items-center">
            <button class="text-3xl rounded bg-black text-white p-2">1</button>
            <h2 class="text-4xl my-4">Setup</h2>
          </div>

          <p class="text-xl">
            Web app with wallet integration, user interface and basic features
          </p>
          <ul class="p-8">
            <li>Frontend with Vue Js &#10004;</li>
            <li>Backend with Django/Wagtail &#10004;</li>
            <li>Hiro Wallet login&#10004;</li>
            <li>Responsive</li>
            <li>Mint NFTs</li>
            <li>CRUD</li>
          </ul>
        </div>
        <!-- COL -->
        <div
          class="border p-4 rounded dark:bg-blue-800 dark:border-none border-black"
        >
          <div class="flex space-x-2 items-center">
            <button class="text-3xl rounded bg-black text-white p-2">2</button>
            <h2 class="text-4xl my-4">Pipelines</h2>
          </div>
          <p class="text-xl">Drag-and-drop functionality for processes</p>
          <ul class="p-8">
            <li>Mixing</li>
            <li>Mastering</li>
            <li>Quality Assurance</li>
            <li>DAO</li>
            <li>Data analysis</li>
          </ul>
        </div>
        <!-- COL -->
        <div
          class="border p-4 rounded dark:bg-blue-800 dark:border-none border-black"
        >
          <div class="flex space-x-2 items-center">
            <button class="text-3xl rounded bg-black text-white p-2">3</button>
            <h2 class="text-4xl my-4">Mobile App</h2>
          </div>
          <p class="text-xl">
            Native mobile app that can run on Android and iPhone
          </p>
          <ul class="p-8">
            <li>Setup</li>
            <li>Add features</li>
            <li>Test</li>
          </ul>
        </div>
        <!-- COL -->
      </div>
    </div>

    <div class="my-20">
      <h2 class="text-4xl font-bold my-8">Contact</h2>
      <div class="grid lg:grid-cols-2 gap-4">
        <!-- COL -->
        <div
          class="p-8 dark:bg-blue-800 border border-black/40 dark:border-none rounded"
        >
          <img src="../assets/jk-logo.png" alt="Jay Khan Logo" class="" />
          <h1 class="lg:text-4xl font-bold my-4">Jay Khan</h1>
          <p class="">
            Khan is a designer, developer, blockchain enthusiast and musician.
          </p>
          <div class="flex items-center justify-between">
            <a href="https://jkhan.live">
              <button
                class="text-green-500 text-2xl font-bold hover:translate-x-4 duration-300 my-4"
              >
                Portfolio ->
              </button>
            </a>
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-envelope"></i>
              <p>jay.khan@gmx.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
