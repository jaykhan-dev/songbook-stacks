<script>
//import StacksConnectWallet from "./components/StacksConnectWallet.vue";
//import StacksContractVote from "./components/StacksContractVote.vue";
//import LightningLogin from "./components/LightningLogin.vue";
//import SideNav from "./components/SideNav.vue";
//import TopNav from "./components/TopNav.vue";
import { ref } from "vue";

export default {
  components: {},
  setup() {
    const isDark = ref(false);

    //MENU
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav, isDark };
  },
};
</script>

<template>
  <div class="p-2">
    <nav
      class="container py-2 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="hover:text-green-600 flex items-center space-x-2"
        >
          <img
            src="../assets/enso-dragon-logo.png"
            alt="Sound Logo"
            width="50"
            height=""
            class=""
          />
          <h1 class="serif text-4xl font-bold">SongBook</h1>
        </router-link>

        <!-- MOBILE MENU BUTTON -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-orange-400 focus:outline-none focus:text-gray-900"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- MOBILE OPEN -->
      <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        @click="showMenu == !showMenu"
      >
        <router-link to="/tracks">
          <p>Tracks</p>
        </router-link>
        <router-link to="/pipelines">
          <p>Pipelines</p>
        </router-link>
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
        <div class="">
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
            class="border-2 border-black dark:border-white rounded-full hover:bg-green-500 p-2"
          >
            <a href="https://github.com/jaykhan-dev/songbook-stacks.git">
              <i class="fa-brands fa-github p-1"></i>
            </a>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
