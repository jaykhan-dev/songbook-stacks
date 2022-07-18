<template>
  <div v-if="loading">
    <LoadingScreen />
  </div>
  <div class="flex justify-between items-center mt-8">
    <div class="flex items-center space-x-4">
      <router-link to="/">
        <p class="bg-gray-900 text-white px-4 p-2 rounded">Home</p>
      </router-link>
      <p class="text-xl font-bold">/</p>
      <router-link to="/blog">
        <p class="bg-gray-900 text-white px-4 p-2 rounded">Blog</p>
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
  <div class="my-8 flex justify-center">
    <div class="">
      <article class="items-stretch">
        <div class="">
          <div v-motion-slide-right :delay="700">
            <h1 class="lg:text-6xl text-4xl font-extrabold my-4 serif">
              {{ item.title }}
            </h1>
            <div
              v-html="item.intro"
              class="mt-2 font-bold text-2xl my-2 text-green-600 items-stretch"
            ></div>
            <div
              class="lg:flex lg:space-x-4 font-bold text-gray-400 uppercase my-4 items-center"
            >
              <p>{{ item.date }}</p>

              <p v-for="category in item.category" :key="category.id">
                {{ category.name }}
              </p>
            </div>

            <div class="flex flex-wrap space-x-2">
              <p
                v-for="tag in item.tags"
                :key="tag.id"
                class="p-1 border my-1 rounded hover:bg-black hover:text-white duration-300 px-2 text-sm mono"
              >
                {{ tag }}
              </p>
            </div>
            <div
              class="flex space-x-2 items-center my-4"
              v-for="author in item.author_api"
              :key="author.id"
            >
              <img
                v-if="author.author_image_api"
                :src="author.author_image_api.url"
                alt="Blog Author image"
                class="border rounded-full"
                width="50"
              />
              <p>{{ author.author_name }}</p>
            </div>
          </div>
          <img
            v-if="item.blog_image_api"
            :src="item.blog_image_api.url"
            :width="item.blog_image_api.width"
            :height="item.blog_image_api.height"
            class="border border-gray-700 my-8"
            v-motion-fade
            :delay="500"
          />
        </div>

        <div
          v-for="block in item.content"
          class=""
          :key="block.id"
          v-motion-fade
          :delay="1000"
        >
          <div v-if="block.type == 'heading'" class="">
            <h2
              v-html="block.value"
              class="lg:text-4xl text-2xl tracking-wide font-bold p-2"
            ></h2>
          </div>
          <div v-else-if="block.type == 'paragraph'" class="p-4">
            <div v-html="block.value" class="leading-7 tracking-wide"></div>
          </div>
          <div
            v-else-if="block.type == 'quote'"
            class="p-8 font-bold bg-gray-100 border-l-8 border-black m-8 text-2xl"
          >
            <div v-html="block.value" class="leading-7 tracking-wide"></div>
          </div>
          <div
            v-else-if="block.type == 'image'"
            class="my-4 grid place-items-center w-full"
          >
            <img :src="block.value.url" />
          </div>
          <div
            v-else-if="block.type == 'code'"
            class="my-4 grid place-items-center w-full p-2"
          >
            <prism
              :language="block.value.language"
              class="overflow-x-scroll w-full"
              id="prism"
            >
              {{ block.value.code }}</prism
            >
          </div>
          <div
            v-else-if="block.type == 'youtube'"
            class="my-4 grid place-items-center w-full"
          >
            <iframe
              :src="'https://youtube.com/embed/' + block.value"
              width="400"
              height="350"
            ></iframe>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen.vue";
const API_ROOT = "https://khanquest.herokuapp.com/api/v2/pages/";
import StacksConnectWallet from "../../components/StacksConnectWallet.vue";

export default {
  name: "BlogPage",
  components: {
    LoadingScreen,
    StacksConnectWallet,
  },
  data() {
    return {
      item: [],
      loading: true,
    };
  },
  methods: {
    getArticle() {
      axios
        .get(
          API_ROOT +
            this.$route.params.slug +
            "/?fields=author_api(author_name,author_image_api),category(name)"
        )
        .then(
          function (response) {
            this.item = response.data;
            this.loading = false;
          }.bind(this)
        )
        .catch((error) => alert(error));
    },
  },
  mounted() {
    this.getArticle();
    window.scrollTo(0, 0);
  },
  computed: {},
};
</script>
