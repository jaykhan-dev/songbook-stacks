import { defineStore } from "pinia";
import axios from "axios";

export const ArtistsStore = defineStore("ArtistsStore", {
  state: () => ({
    artists: [],
    loading: true,
  }),
  getters: {
    getArtists(state) {
      return state.artists;
    },
  },
  actions: {
    async fetchArtists() {
      try {
        const data = await axios.get(
          "https://khanquest.herokuapp.com/api/v2/pages/?type=songs.ArtistPage&fields=*"
        );
        this.artists = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
