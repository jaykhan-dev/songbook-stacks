import { defineStore } from "pinia";
import axios from "axios";

export const BlogStore = defineStore("BitcoinBlog", {
  state: () => ({
    articles: [],
    loading: true,
  }),
  getters: {
    getArticles(state) {
      return state.articles;
    },
  },
  actions: {
    async fetchArticles() {
      try {
        const data = await axios.get(
          "https://khanquest.herokuapp.com/api/v2/pages/?type=blog.BlogPage&category=14&fields=title,date,author_api(author_name,author_image_api),category(name),intro,content,tags,blog_thumbnail_api,blog_image_api"
        );
        this.articles = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
