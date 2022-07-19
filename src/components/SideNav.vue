<template>
  <!-- MAIN NAV -->
  <div
    class="lg:fixed lg:h-screen flex flex-col px-12 lg:justify-between justify-center border-r border-black dark:border-white p-4 items-center"
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
        <p class="mono uppercase text-sm">Prototype</p>
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
        <router-link to="/blog">
          <p>Blog</p>
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
          <a href="https://github.com/jaykhan-dev/songbook-stacks.git">
            <i class="fa-brands fa-github p-1"></i>
          </a>
        </button>
      </div>
    </div>
  </div>
</template>
