<template>
  <div
    class="absolute z-50 h-screen w-full dark:bg-blue-900 dark:text-white grid place-items-center"
  >
    <h1 class="uppercase text-2xl font-bold my-4 animate-pulse">Loading...</h1>
    <lottie-player
      src="https://assets9.lottiefiles.com/packages/lf20_hl1mhwst.json"
      background="transparent"
      speed="1"
      loop
      autoplay
      style="width: 300px; height: 300px"
      class="z-0 opacity-40 translate-x-20 -translate-y-10"
    ></lottie-player>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
