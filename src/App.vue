<script setup>
//import StacksConnectWallet from "./components/StacksConnectWallet.vue";
//import StacksContractVote from "./components/StacksContractVote.vue";
//import LightningLogin from "./components/LightningLogin.vue";

import { ref } from "vue";
const isDark = ref(false);
</script>

<template>
  <div class="" :class="isDark ? 'dark' : ''">
    <div
      class="flex justify-center dark:bg-blue-900 dark:text-white dark:duration-300"
    >
      <div class="lg:w-3/4 relative">
        <!-- MAIN NAV -->
        <div
          class="fixed h-screen flex flex-col px-12 lg:justify-between justify-center border-r border-black dark:border-white p-4 items-center"
        >
          <div class="flex flex-col">
            <div class="">
              <img
                src="./assets/enso-dragon-logo.png"
                alt="Sound Logo"
                width=""
                height=""
                class=""
              />
              <h1 class="text-4xl my-4 serif font-extrabold">SongBook</h1>
            </div>
            <div class="mt-20 flex flex-col space-y-8 text-2xl">
              <router-link to="/">
                <p>Home</p>
              </router-link>
              <router-link to="/tracks">
                <p>Tracks</p>
              </router-link>
              <router-link to="/pipelines">
                <p>Pipelines</p>
              </router-link>
            </div>
          </div>
          <div class="w-full text-xl">
            <!-- <button class="rounded-full px-4 p-1 border border-gray-500">
            <i class="fa-solid fa-wallet"></i> : 0.00
          </button> -->
            <div class="my-20 flex flex-col space-y-4 text-sm">
              <router-link to="/about">
                <p>About</p>
              </router-link>
              <router-link to="/privacy">
                <p>Privacy</p>
              </router-link>
              <router-link to="/terms">
                <p>Terms</p>
              </router-link>
            </div>
            <div class="flex mb-8">
              <button
                type="button"
                @click="isDark = !isDark"
                class="border-2 border-black dark:border-white rounded-full hover:bg-green-500 p-2"
              >
                <i class="fa-solid fa-sun hidden dark:block p-1"></i>
                <i class="fa-solid fa-moon block dark:hidden p-1"></i>
              </button>

              <button
                type="button"
                class="border-2 border-black dark:border-white rounded-full hover:bg-green-500 p-2 mx-2"
              >
                <i class="fa-brands fa-github p-1"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- CONTENT -->
        <div class="ml-72">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Serif+Display&family=Poppins:wght@700&family=Space+Mono&display=swap");
/*
font-family: 'Montserrat', sans-serif;
font-family: 'Noto Serif Display', serif;
font-family: 'Poppins', sans-serif;
font-family: 'Space Mono', monospace;
*/

body,
html {
  display: block;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

.activeClass {
  color: cornflowerblue;
  font-weight: 600;
}

.serif {
  font-family: "Noto Serif Display", serif;
}

h1 {
  font-family: "Poppins", sans-serif;
}

h2,
p {
  font-family: "Montserrat", sans-serif;
}

.mono {
  font-family: "Space Mono", monospace;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(5, 118, 247);
  border-radius: 0px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(3, 206, 88);
}
</style>
