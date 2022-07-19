<script setup>
import LoadingScreen from "../../components/LoadingScreen.vue";
import { onMounted, computed } from "vue";
import { ArtistsStore } from "../../stores/ArtistsStore";

const store = ArtistsStore();
const artists = computed(() => {
  return store.artists;
});

onMounted(() => {
  store.fetchArtists();
});
</script>

<template>
  <LoadingScreen v-if="store.loading == true" />
  <div class="my-20 p-2">
    <h2 class="lg:text-6xl text-4xl font-bold my-8">Featured Artists</h2>
    <div class="grid lg:grid-cols-3 gap-4">
      <div
        v-for="artist in artists.items"
        :key="artist.id"
        class="border border-black dark:bg-blue-800 dark:border-none p-4 rounded grid"
      >
        <div class="flex justify-center">
          <img
            v-if="artist.artist_image_api"
            :src="artist.artist_image_api.url"
            width="400"
            height=""
            alt=""
          />
        </div>

        <div class="flex items-center text-center">
          <h1 class="text-4xl text-center w-full my-4">
            {{ artist.title }}
          </h1>
        </div>
        <div class="flex justify-center space-x-4 my-4 text-2xl">
          <!-- <router-link v-if="" to="/tracks">
            <i class="fa-solid fa-music opacity-50"></i>
          </router-link> -->
          <a
            v-if="artist.website"
            :href="artist.website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-globe"></i>
          </a>
          <a
            v-if="artist.twitter"
            :href="artist.twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            v-if="artist.other_link"
            :href="artist.other_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <!-- <p class="my-4">{{ artist.blurb }}</p> -->
      </div>
    </div>
  </div>
</template>
