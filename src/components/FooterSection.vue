<script setup></script>

<template>
  <div
    class="rounded lg:flex justify-between py-20 relative p-12 overflow-hidden bg-gradient-to-r from-blue-800 to-violet-700 text-white shadow-xl"
    id="rock-on"
  >
    <div class="lg:py-10 py-20">
      <div class="flex space-x-4 items-center">
        <img src="../assets/enso-dragon-logo.png" alt="" width="75" />
        <h1 class="lg:text-6xl text-4xl font-bold serif lg:my-8">SongBook</h1>
      </div>

      <p class="text-2xl my-4">Bitcoin Music NFTs</p>
      <p class="my-4 lg:w-1/2">
        The new internet gives power back to the artists, misfits, geeks, and
        those who dare to be self sovereign.
      </p>
      <div class="my-2">
        <a href="">
          <i class="fa-brands fa-twitter text-4xl hover:text-green-500"></i>
        </a>
      </div>
    </div>

    <img
      src="../assets/rock-on.svg"
      alt=""
      width="500"
      class="hover:scale-110 duration-500 absolute right-0 bottom-0"
    />
  </div>
  <div class="grid lg:grid-cols-3 my-8">
    <div class="lg:text-left text-center">
      <p>SongBook. 2022.</p>
    </div>
    <div class="text-center lg:my-0 my-2">
      <p>Powered by Bitcoin and Stacks</p>
    </div>
    <div class="flex items-center space-x-4 lg:justify-end justify-center">
      <router-link to="/terms">
        <p>Terms</p>
      </router-link>
      <router-link to="/privacy">
        <p>Privacy</p>
      </router-link>
    </div>
  </div>
</template>
