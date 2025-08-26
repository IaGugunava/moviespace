import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalstore", {
  state: () => ({
    genres: null,
    searchedMovies: null
  }),
  actions: {
    async getGenres() {
      const { data, error } = apiFetch("/genres");
      if (error.value) {
        console.log(error.value, "error");
        return;
      }

      this.genres = data.value;
    },
  },
});
