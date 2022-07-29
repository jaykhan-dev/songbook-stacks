<template>
  <div v-if="store.loading == true">
    <LoadingScreen />
  </div>

  <div class="space-y-7">
    <!-- FEATURED -->
    <div v-for="article in articles.items" :key="article.id" class="">
      <div
        class="border border-black p-2 rounded dark:border-none dark:bg-blue-800"
      >
        <router-link
          :to="/blog/ + article.meta.slug"
          class="hover:bg-blue-500 duration-300"
        >
          <div class="flex space-x-4">
            <img
              v-if="article.blog_thumbnail_api"
              :src="article.blog_thumbnail_api.url"
              width="150"
              height=""
              class="duration-300 rounded hover:rounded-2xl"
            />
            <div>
              <h2 class="text-xl font-bold hover:underline underline-offset-4">
                {{ article.title }}
              </h2>
              <!-- AUTHOR AND DATE -->
              <div class="">
                <p class="text-sm">
                  {{ article.date }}
                </p>
                <div
                  class="my-2 lg:flex lg:space-x-4 items-center justify-between"
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
                      width="30"
                    />
                    <p>{{ author.author_name }}</p>
                  </div>
                </div>
                <!-- <p
                  class="uppercase font-bold my-2"
                  v-for="category in article.category"
                  :key="category.id"
                >
                  {{ category.name }}
                </p> -->
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- SIDE  -->
    <div></div>
  </div>
</template>

<script setup>
import LoadingScreen from "../../components/LoadingScreen.vue";
import { onMounted, computed } from "vue";
import { OtherBlogs } from "../../stores/OtherBlogs";

const store = OtherBlogs();

const articles = computed(() => {
  return store.articles;
});

onMounted(() => {
  store.fetchArticles();
});
</script>
