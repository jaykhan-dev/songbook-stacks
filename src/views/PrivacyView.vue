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
      Your privacy is very important to us. Accordingly, we have developed this
      Policy in order for you to understand how we collect, use, communicate and
      disclose and make use of personal information. The following outlines our
      privacy policy.
    </p>
    <ul class="p-4 space-y-4">
      <li>
        Before or at the time of collecting personal information, we will
        identify the purposes for which information is being collected.
      </li>
      <li>
        We will collect and use of personal information solely with the
        objective of fulfilling those purposes specified by us and for other
        compatible purposes, unless we obtain the consent of the individual
        concerned or as required by law.
      </li>
      <li>
        We will only retain personal information as long as necessary for the
        fulfillment of those purposes.
      </li>
      <li>
        We will collect personal information by lawful and fair means and, where
        appropriate, with the knowledge or consent of the individual concerned.
      </li>
      <li>
        Personal data should be relevant to the purposes for which it is to be
        used, and, to the extent necessary for those purposes, should be
        accurate, complete, and up-to-date.
      </li>
      <li>
        We will protect personal information by reasonable security safeguards
        against loss or theft, as well as unauthorized access, disclosure,
        copying, use or modification.
      </li>
      <li>
        We will make readily available to customers information about our
        policies and practices relating to the management of personal
        information.
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: circle;
}
</style>
