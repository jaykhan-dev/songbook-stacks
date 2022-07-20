<script setup>
import StacksWalletConnect from "../components/StacksConnectWallet.vue";
//import BitcoinSection from "../components/home/BitcoinSection.vue";
//import StacksSection from "../components/home/StacksSection.vue";
import HeroSection from "../components/home/HeroSection.vue";
import ArtistsSection from "../components/home/ArtistsSection.vue";
//import TrendingSection from "../components/home/TrendingSection.vue";
//import UpcomingSection from "../components/home/UpcomingSection.vue";
import FeaturesSection from "../components/home/FeaturesSection.vue";
//import ScrollingSection from "../components/home/ScrollingSection.vue";

import { userSession } from "../stacksUserSession";
</script>

<template>
  <main class="p-2">
    <div class="lg:flex justify-between items-center mt-8 space-y-2 p-2">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <p class="bg-gray-900 px-4 p-2 rounded">Home</p>
        </router-link>
        <p class="text-xl font-bold">/</p>
      </div>
      <div class="flex items-center space-x-4">
        <StacksWalletConnect />
        <!-- <i class="fa-solid fa-copy dark:text-white text-black"></i> -->

        <!-- <button
          class="p-1 rounded-full bg-gray-900 text-white hover:bg-green-500"
        >
          <i class="fa-solid fa-pencil p-2"></i>
        </button> -->
      </div>
    </div>
    <div
      class="grid grid-cols-2 border-b dark:border-blue-600 py-12 p-2"
      v-if="userSession.isUserSignedIn()"
    >
      <!-- COL -->
      <div class="">
        <h1 class="text-8xl font-bold my-4 serif">Hello</h1>
        <h1 class="text-2xl font-bold my-4">Account holders name</h1>
      </div>
      <!-- COL -->
      <div class="grid grid-cols-2 gap-4">
        <!-- COL -->
        <div
          class="dark:bg-blue-800 border dark:border-none border-black grid place-items-center dark:text-white rounded"
        >
          <div>
            <p>Total asset value</p>
            <h1 class="text-4xl font-bold">N/A</h1>
          </div>
        </div>
        <!-- COL -->
        <div
          class="dark:bg-blue-800 border dark:border-none border-black grid place-items-center dark:text-white rounded"
        >
          <div>
            <p>Total claimable rewards</p>
            <h1 class="text-4xl font-bold">N/A</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <!-- COMPONENTS -->
      <HeroSection />
      <ArtistsSection />
      <!-- <ScrollingSection /> -->
      <div class="grid place-items-center p-8 rounded">
        <img
          src="../assets/music-equipment-gray.svg"
          alt=""
          class="block dark:hidden"
          width="350"
        />
        <img
          src="../assets/music-equipment.svg"
          alt=""
          class="hidden dark:block"
          width="350"
        />
      </div>

      <FeaturesSection />
    </div>
  </main>
</template>
