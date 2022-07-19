<script setup>
import { showConnectStatic } from "@stacks/connect";
import { userSession } from "../stacksUserSession";

function authenticate() {
  showConnectStatic({
    appDetails: {
      name: "Stacks Vue Starter",
      icon: window.location.origin + "/logo277.png",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

function disconnect() {
  userSession.signUserOut("/");
}
</script>

<template>
  <div v-if="userSession.isUserSignedIn()" class="flex items-center space-x-4">
    <button
      @click="disconnect"
      class="rounded hover:bg-green-500 duration-300 mono p-2 bg-blue-500 text-sm uppercase text-white hover:scale-95"
    >
      Disconnect Wallet
    </button>
    <div class="flex items-center space-x-2">
      <p>mainnet:</p>
      <p class="rounded w-40 overflow-hidden p-2 mono bg-slate-900 text-white">
        {{ userSession.loadUserData().profile.stxAddress.mainnet }}
      </p>
    </div>

    <!-- <div class="flex items-center space-x-2">
      <p>testnet:</p>
      <p class="rounded w-40 overflow-hidden p-2 mono bg-slate-900 text-white">
        {{ userSession.loadUserData().profile.stxAddress.testnet }}
      </p>
    </div> -->
  </div>
  <div v-else>
    <button
      @click="authenticate"
      class="mono text-white p-2 px-4 bg-blue-500 rounded w-full hover:scale-95 hover:bg-green-500 duration-300"
    >
      Connect Hiro Wallet
    </button>
  </div>
</template>

<style scoped></style>
