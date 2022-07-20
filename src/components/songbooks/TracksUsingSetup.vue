<template>
  <div class="lg:flex justify-between items-center mt-8">
    <h1 class="lg:text-8xl text-6xl font-bold serif lg:my-0 my-4">Tracks</h1>
    <div class="flex items-center space-x-4 border p-2 rounded justify-between">
      <input
        type="text"
        name=""
        id=""
        placeholder="search"
        class="dark:bg-blue-900 p-2"
      />
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>

  <TabsWrapper>
    <TabsEach title="Discover">
      <LoadingScreen class="" v-if="store.loading == true" />
      <div class="lg:flex justify-center" aria-label="all tracks section">
        <div class="p-2 my-8 w-full">
          <!-- TRACKS -->
          <div class="space-y-4 w-full" v-motion-fade :delay="500">
            <div
              v-for="item in songs.items"
              :key="item.id"
              class="hover:bg-slate-900 duration-300 rounded"
            >
              <router-link :to="/tracks/ + item.meta.slug" class="">
                <div
                  class="lg:flex items-center justify-between lg:space-x-4 p-2"
                >
                  <div class="lg:flex lg:space-x-4 items-center">
                    <img
                      v-if="item.song_image_thumbnail"
                      :src="item.song_image_thumbnail.url"
                      class="rounded song-image"
                    />
                    <!-- SONG INFO -->
                    <div class="lg:flex-col sm:flex space-y-2">
                      <div class="flex space-x-2 items-center">
                        <h1 class="font-bold lg:text-xl text-2xl lg:my-0 my-2">
                          {{ item.title }}
                        </h1>
                        <button
                          v-for="category in item.categories"
                          :key="category.id"
                          class="bg-blue-600 border border-blue-500 font-mono px-1 text-white uppercase"
                        >
                          {{ category.name }}
                        </button>
                      </div>
                      <div class="lg:flex lg:space-x-4">
                        <p>{{ item.artist_name }}</p>
                        <p>{{ item.album }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex space-x-2 items-center">
                    <i
                      class="fa-solid fa-star opacity-50 hover:opacity-100"
                    ></i>
                    <p class="text-xl">
                      <i class="fa-solid fa-location-arrow"></i>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </TabsEach>
    <TabsEach title="My tracks">
      <div class="flex w-full mt-8" v-if="userSession.isUserSignedIn()">
        <div class="flex justify-between w-full h-screen">
          <p class="mono">No Tracks!</p>
          <router-link to="/tracks/create-track">
            <button
              class="mono p-2 px-4 bg-green-500 text-white rounded shadow hover:scale-95 duration-300 font-bold"
            >
              + Mint NFT
            </button>
          </router-link>
        </div>
      </div>
      <div class="h-screen mono" v-else>Connect your wallet to mint an NFT</div>
    </TabsEach>
  </TabsWrapper>
</template>

<script setup>
import LoadingScreen from "../../components/LoadingScreen.vue";
import { onMounted, computed } from "vue";
import { SongsStore } from "../../stores/SongsStore";
import TabsWrapper from "../../components/TabsWrapper.vue";
import TabsEach from "../../components/TabsEach.vue";
import { userSession } from "../../stacksUserSession";

const store = SongsStore();
const songs = computed(() => {
  return store.songs;
});

onMounted(() => {
  store.fetchSongs();
});
</script>

<style>
@media screen and (min-width: 480px) {
  .song-image {
    width: 75px;
  }
}

@media screen and (max-width: 480px) {
  .song-image {
    width: 400px;
  }
}
</style>
