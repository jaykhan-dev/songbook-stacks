import { defineStore } from "pinia";
import axios from "axios";

export const OtherBlogs = defineStore("OtherBlogs", {
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
          "https://khanquest.herokuapp.com/api/v2/pages/?type=blog.BlogPage&fields=title,date,author_api(author_name,author_image_api),category(name),intro,content,tags,blog_thumbnail_api,blog_image_api&limit=5&order=random"
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
