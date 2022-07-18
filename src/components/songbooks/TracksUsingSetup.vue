<template>
  <LoadingScreen class="" v-if="store.loading == true" />

  <div class="lg:flex justify-between items-center mt-8">
    <h1 class="lg:text-8xl font-bold serif">Tracks</h1>
    <div class="flex items-center space-x-4">
      <input
        type="text"
        name=""
        id=""
        placeholder="search"
        class="dark:bg-blue-900 border border-gray-500 dark:border-white p-2 rounded"
      />
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>

  <TabsWrapper>
    <TabsEach title="Discover">
      <div class="flex justify-center" aria-label="all tracks section">
        <div class="p-4 my-8 w-full">
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
                  <div class="flex space-x-4 items-center">
                    <i
                      class="fa-solid fa-star opacity-50 hover:opacity-100"
                    ></i>
                    <img
                      v-if="item.song_image_thumbnail"
                      :src="item.song_image_thumbnail.url"
                      width="75"
                      height="75"
                      class="rounded"
                    />
                    <!-- SONG INFO -->
                    <div>
                      <h1 class="font-bold">
                        {{ item.title }}
                      </h1>
                      <div class="flex space-x-4">
                        <p>{{ item.artist_name }}</p>
                        <p>{{ item.album }}</p>
                        <p
                          v-for="category in item.categories"
                          :key="category.id"
                          class="bg-blue-600 border border-blue-500 font-mono px-1 text-white uppercase"
                        >
                          {{ category.name }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p class="text-xl">
                      BTC 0.00 <i class="fa-solid fa-location-arrow"></i>
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
      <div class="flex justify-end w-full mt-8">
        <router-link to="/create-track">
          <button
            class="mono p-2 px-4 bg-green-500 text-white rounded shadow hover:scale-95 duration-300 font-bold"
          >
            + Add new track
          </button>
        </router-link>
      </div>
    </TabsEach>
  </TabsWrapper>
</template>

<script setup>
import LoadingScreen from "../../components/LoadingScreen.vue";
import { onMounted, computed } from "vue";
import { SongsStore } from "../../stores/SongsStore";
import TabsWrapper from "../../components/TabsWrapper.vue";
import TabsEach from "../../components/TabsEach.vue";

const store = SongsStore();
const songs = computed(() => {
  return store.songs;
});

onMounted(() => {
  store.fetchSongs();
});
</script>
