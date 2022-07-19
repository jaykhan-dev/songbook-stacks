<template>
  <div v-if="store.loading == true">
    <LoadingScreen />
  </div>
  <section class="flex justify-center">
    <div class="">
      <h1 class="lg:text-6xl text-4xl font-bold my-8 serif">Blog</h1>

      <div class="grid lg:grid-cols-3 gap-4 my-20">
        <div v-for="article in articles.items" :key="article.id">
          <div
            class="border border-black p-2 rounded dark:border-none dark:bg-blue-800"
          >
            <router-link
              :to="/blog/ + article.meta.slug"
              class="hover:bg-blue-500 duration-300"
            >
              <img
                v-if="article.blog_thumbnail_api"
                :src="article.blog_thumbnail_api.url"
                :width="article.blog_thumbnail_api.width"
                :height="article.blog_thumbnail_api.height"
                class="hover:scale-95 duration-300 rounded"
              />
              <div class="flex justify-between p-2 items-center">
                <p
                  class="uppercase font-bold my-2"
                  v-for="category in article.category"
                  :key="category.id"
                >
                  {{ category.name }}
                </p>
                <p class="">
                  {{ article.date }}
                </p>
              </div>

              <div class="">
                <h2
                  class="text-3xl font-bold hover:underline underline-offset-4"
                >
                  {{ article.title }}
                </h2>
                <div class="flex flex-wrap space-x-2 my-2">
                  <p
                    v-for="tag in article.tags"
                    :key="tag.id"
                    class="border p-1 text-sm rounded hover:bg-black hover:text-white duration-300 px-2 my-1 mono"
                  >
                    {{ tag }}
                  </p>
                </div>
                <div
                  class="text-gray-400 my-2 font-bold text-xl lg:flex lg:space-x-4 items-center justify-between"
                >
                  <div
                    class="flex space-x-2 items-center"
                    v-for="author in article.author_api"
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
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- <div
        class="border border-gray-300 p-4 text-center font-bold text-2xl rounded-xl hover:border-green-400 hover:text-green-400 duration-300"
      >
        <router-link to="/blog">
          <p>More articles</p>
        </router-link>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import LoadingScreen from "../../components/LoadingScreen.vue";
import { onMounted, computed } from "vue";
import { BlogStore } from "../../stores/BlogStore";

const store = BlogStore();

const articles = computed(() => {
  return store.articles;
});

onMounted(() => {
  store.fetchArticles();
});
</script>
