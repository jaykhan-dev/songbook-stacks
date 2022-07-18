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

        <p class="p-2 rounded dark:text-white text-xl">Privacy</p>
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
    <h1 class="lg:text-8xl font-bold mt-8 serif">Privacy Policy</h1>
    <p class="text-2xl my-8">
      Part of what makes web3 different from web2 is how data is gathered. With
      blockchain technology, the ledger is public knowledge which makes it
      easier to audit. More importantly, with web3 logins (i.e wallets), there
      is no need to collect and store personal data indefinitely.
    </p>
    <ul class="p-4 space-y-4">
      <li>
        The only data that is collected will be cookies for UX purposes and data
        analysis
      </li>
      <li>
        The Hiro wallet does not collect names, birthdays, or other identifying
        information
      </li>
      <li>
        Security is a major concern, which is why Bitcoin and Stacks was chosen
        as the blockchain platforms
      </li>
      <li>No personal identitying data is stored on the servers</li>
      <li>
        Personal data should be in total control of the user, and if he/she/they
        wish to share that information while interacting with other users, that
        is their choice
      </li>
      <li>
        Copyrights are automatically assigned to the creator of the NFT. If
        there are violations in the form of plagiarism, it is upto the offender
        to deal with consequences such as lawsuits.
      </li>
      <li>
        This document is subject to change and will be updated without notice.
      </li>
    </ul>
  </div>
</template>

<style></style>
