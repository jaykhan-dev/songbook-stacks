<template>
  <section class="grid lg:grid-cols-5">
    <div class="">
      <SongbookNav />
    </div>
    <div class="col-span-4">
      <SongbookPage />
    </div>
  </section>
</template>

<script setup>
import SongbookNav from "./SongbookNav.vue";
import SongbookPage from "./SongbookPage.vue";
</script>
