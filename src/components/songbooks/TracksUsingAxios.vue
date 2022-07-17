<template>
  <div class="p-8 flex justify-between">
    <div class="flex items-center space-x-4">
      <input
        type="text"
        name=""
        id=""
        placeholder="search"
        class="dark:bg-blue-900 border p-2 rounded-xl"
      />
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div>
      <button
        class="p-2 px-4 bg-green-500 text-white rounded-xl shadow hover:scale-95 duration-300 font-bold"
      >
        + Add new track
      </button>
    </div>
  </div>
  <section class="flex justify-center" aria-label="all tracks section">
    <div class="p-4 my-8 w-full">
      <!-- TRACKS -->
      <div class="space-y-4 w-full" v-motion-fade :delay="500">
        <div
          v-for="item in projectItems"
          :key="item.id"
          class="dark:hover:bg-slate-900 hover:bg-slate-300 duration-300 rounded-xl"
        >
          <router-link :to="/tracks/ + item.meta.slug" class="">
            <div class="lg:flex items-center justify-between lg:space-x-4 p-2">
              <div class="flex space-x-4 items-center">
                <i
                  class="fa-solid fa-star opacity-50 hover:text-yellow-500 hover:opacity-100"
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
  </section>
</template>

<script>
import axios from "axios";
// import { useSound } from "@vueuse/sound";
// import Swish from "../assets/swish.mp3";

export default {
  name: "WagtailTracks",
  props: {},
  components: {},
  data() {
    return {
      projectItems: [],
      loading: true,
    };
  },
  // setup() {
  //   const { play, stop } = useSound(Swish);
  //   return { play, stop };
  // },
  mounted() {
    axios
      .get(
        "https://khanquest.herokuapp.com/api/v2/pages/?type=songs.SongPage&fields=title,artist_name,album,date,song_key,bpm,writers,tags,categories(name),song_catalog,song_history,song_file,song_image_thumbnail"
      )
      .then(
        function (response) {
          this.projectItems = response.data.items;
          this.loading = false;
        }.bind(this)
      )
      .catch((error) => console.log(error));
  },
  methods: {
    getSongSlug() {
      this.projectItems.forEach((s) => {
        if (s.slug == this.$route.params.slug) {
          this.projectItems = s;
        }
      });
    },
    created() {
      this.getSongSlug();
    },
  },
};
</script>
