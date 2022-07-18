<template>
  <section class="h-screen">
    <div class="flex justify-between items-center mt-8 p-8">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <p class="bg-gray-900 text-white px-4 p-2 rounded">Home</p>
        </router-link>
        <p class="text-xl font-bold">/</p>
        <router-link to="/tracks">
          <p class="bg-gray-900 text-white px-4 p-2 rounded">Tracks</p>
        </router-link>
        <p class="text-xl font-bold">/</p>
        <p class="text-xl">{{ item.title }}</p>
      </div>
      <div class="flex space-x-4">
        <StacksConnectWallet />
        <!-- <i class="fa-solid fa-copy dark:text-white text-black"></i> -->

        <!-- <button
          class="p-1 rounded-full bg-gray-900 text-white hover:bg-green-500"
        >
          <i class="fa-solid fa-pencil p-2"></i>
        </button> -->
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-4 mt-8">
      <!-- COL -->
      <div
        class="dark:bg-blue-800 rounded border dark:border-none border-black p-4"
      >
        <div class="flex space-x-2 items-center">
          <img
            v-if="item.song_image_thumbnail"
            :src="item.song_image_thumbnail.url"
            width="75"
            height=""
            class="rounded"
          />
          <h1 class="text-4xl">{{ item.title }}</h1>
          <p
            v-for="category in item.categories"
            :key="category.id"
            class="p-1 font-mono text-sm rounded px-2 bg-green-500"
          >
            {{ category.name }}
          </p>
        </div>
        <div class="flex space-x-4 items-center">
          <p>{{ item.date }}</p>
          <div v-if="item.song_file" class="my-4">
            <audio ref="audioPlayer" class="">
              <source :src="item.song_file" type="" />
              Your browser does not support the audio tag.
            </audio>
            <div class="flex space-x-4">
              <button @click="play">
                <i class="fa-solid fa-play duration-200"></i>
              </button>
              <button @click="pause">
                <i class="fa-solid fa-pause duration-200"></i>
              </button>
              <button @click="stop">
                <i class="fa-solid fa-stop duration-200"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="flex space-x-4 items-center">
          <a href="">
            <button
              class="bg-gray-800 text-white rounded flex space-x-1 hover:bg-green-500 duration-300 items-center p-2"
            >
              <i class="fa-solid fa-globe text-sm"></i>
              <p>Website</p>
              <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
            </button>
          </a>
          <a href="">
            <button
              class="bg-gray-800 text-white rounded flex space-x-1 hover:bg-green-500 duration-300 items-center p-2"
            >
              <i class="fa-solid fa-globe text-sm"></i>
              <p>Explorer</p>
              <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
            </button>
          </a>
        </div>
        <div>
          <p class="font-bold my-2">Writers</p>
          <p v-html="item.writers" class=""></p>
        </div>
      </div>
      <!-- COL -->
      <div class="grid lg:grid-cols-2 gap-4">
        <!-- COL -->
        <div
          class="dark:bg-blue-800 dark:text-white border dark:border-none border-black p-8 rounded"
        >
          <p>Key</p>
          <p class="text-4xl font-bold my-2" v-if="item.song_key">
            {{ item.song_key }}
          </p>
          <p v-else class="text-4xl font-bold my-2">N/A</p>
        </div>
        <!-- COL -->
        <div
          class="dark:bg-blue-800 dark:text-white border dark:border-none border-black p-8 rounded"
        >
          <p>BPM</p>
          <p class="text-4xl font-bold my-2" v-if="item.bpm">{{ item.bpm }}</p>
          <p v-else class="text-4xl font-bold my-2">N/A</p>
        </div>
        <!-- COL -->
        <div
          class="dark:bg-blue-800 dark:text-white border dark:border-none border-black p-8 rounded"
        >
          <p>Earnings</p>
          <p class="text-4xl font-bold my-2" v-if="item.earnings"></p>
          <p v-else class="text-4xl font-bold my-2">N/A</p>
        </div>
        <!-- COL -->
        <div
          class="dark:bg-blue-800 dark:text-white border dark:border-none border-black p-8 rounded"
        >
          <p>Status</p>
          <p class="text-4xl font-bold my-2" v-if="item.status"></p>
          <p v-else class="text-4xl font-bold my-2">N/A</p>
        </div>
      </div>
    </div>
    <div>
      <TabsWrapper class="">
        <TabsEach title="Data" class="p-4 active">
          <h1>Song Data</h1>
        </TabsEach>
        <TabsEach title="Pipelines" class="p-4">
          <h1>Pipelines</h1>
        </TabsEach>
      </TabsWrapper>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import TabsWrapper from "../../components/TabsWrapper.vue";
import TabsEach from "../../components/TabsEach.vue";
import StacksConnectWallet from "../../components/StacksConnectWallet.vue";

const API_ROOT = "https://khanquest.herokuapp.com/api/v2/pages/";

export default {
  name: "PostEach",
  components: {
    TabsWrapper,
    TabsEach,
    StacksConnectWallet,
  },
  data() {
    return {
      item: [],
      loading: true,
    };
  },

  methods: {
    getTracks() {
      axios
        .get(API_ROOT + this.$route.params.slug + "/?fields=categories(name)")
        .then(
          function (response) {
            this.item = response.data;
            this.loading = false;
          }.bind(this)
        )
        .catch((error) => console.log(error));
    },
    //AUDIO
    play() {
      this.$refs.audioPlayer.play();
    },
    pause() {
      this.$refs.audioPlayer.pause();
    },
    stop() {
      const { audioPlayer } = this.$refs;
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    },
    tabsPressed() {},
  },
  mounted() {
    this.getTracks();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.active:active {
  color: blueviolet;
}
</style>
