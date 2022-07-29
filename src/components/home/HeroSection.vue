<template>
  <div
    class="rounded p-8 grid lg:grid-cols-2 gap-4 py-12 mt-8 text-white shadow-xl lg:bg-fixed"
    id="hero-section"
  >
    <!-- COL -->
    <div class="">
      <h1 class="lg:text-7xl text-6xl font-bold serif">
        Music NFTs on the Bitcoin blockchain
      </h1>
      <p class="lg:text-xl my-12">
        The new paradigm of decentralized apps are bring self soveriegnty to
        arists and creators. This application is for those who want to take
        control of their art and find like minded individuals and groups.
      </p>
      <div class="flex space-x-2 items-center">
        <router-link to="/tracks">
          <button
            class="p-2 rounded bg-blue-800 mono hover:scale-95 duration-300 px-4"
          >
            See Tracks
          </button>
        </router-link>
        <!-- <router-link to="/tracks/create-track">
          <button
            class="p-2 rounded bg-blue-800 mono hover:scale-95 duration-300 px-4"
          >
            Mint Track
          </button>
        </router-link> -->
      </div>
    </div>
    <!-- COL -->
    <div class="grid place-items-center">
      <lottie-player
        src="https://assets1.lottiefiles.com/private_files/lf30_fzgzqgfe.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        style="width: 300px; height: 300px"
        class=""
      ></lottie-player>
    </div>
  </div>
</template>

<style>
#hero-section {
  background-image: url("../../assets/abstract1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
