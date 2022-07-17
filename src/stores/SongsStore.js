import { defineStore } from "pinia";
import axios from "axios";

export const SongsStore = defineStore("SongsStore", {
  state: () => ({
    songs: [],
    loading: true,
  }),
  getters: {
    getSongs(state) {
      return state.songs;
    },
  },
  actions: {
    async fetchSongs() {
      try {
        const data = await axios.get(
          "https://khanquest.herokuapp.com/api/v2/pages/?type=songs.SongPage&fields=title,artist_name,album,date,song_key,bpm,writers,tags,categories(name),song_catalog,song_history,song_file,song_image_thumbnail"
        );
        this.songs = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
