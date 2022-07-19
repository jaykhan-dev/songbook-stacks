<template>
  <section class="overflow-hidden truncate ...">
    <h1
      class="py-8 text-gray-800 text-opacity-80 uppercase text-8xl font-bold"
      id="features-heading"
    >
      Features - Tune in - Turn on - Make some noize - Disrupt the status quo -
      Reimagine the future
    </h1>
  </section>
  <section class="overflow-hidden truncate ...">
    <h1
      class="uppercase text-8xl text-gray-800 text-opacity-80 font-bold"
      id="ecosystem-heading"
    >
      Ecosystem - DAPPS - Community - DAO - DeFi - Decentralized - Borderless
      Economy -
    </h1>
  </section>
  <section class="overflow-hidden truncate ...">
    <h1
      class="my-4 uppercase text-gray-800 text-opacity-80 text-8xl font-bold"
      id="creators-heading"
    >
      Creators - Developers - Songwriters - Musicians - Producers - Sound
      engineers - Managers -
    </h1>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  //FEATURES
  gsap.set("#features-heading", { opacity: 0, x: 0 });
  gsap.to("#features-heading", {
    scrollTrigger: {
      trigger: "#features-heading",
      scrub: 1,
      start: "top bottom",
      end: "top top",
    },
    x: -800,
    opacity: 1,
    ease: "none",
    duration: 3,
  });
  //ECOSYSTEM
  gsap.set("#ecosystem-heading", { opacity: 0, x: -1500 });
  gsap.to("#ecosystem-heading", {
    scrollTrigger: {
      trigger: "#ecosystem-heading",
      scrub: 1,
      start: "top bottom",
      end: "top top",
    },
    x: 0,
    opacity: 1,
    ease: "none",
    duration: 3,
  });
  //CREATORS
  gsap.set("#creators-heading", { opacity: 0, x: 100 });
  gsap.to("#creators-heading", {
    scrollTrigger: {
      trigger: "#creators-heading",
      scrub: 1,
      start: "top bottom",
      end: "top top",
    },
    x: -1500,
    opacity: 1,
    ease: "none",
    duration: 3,
  });
});
</script>

<style></style>
