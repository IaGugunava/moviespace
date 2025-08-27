import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalstore", {
  state: () => ({
    genres: null,
    searchedMovies: null,
    user: null,
    isSigned: false,
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

    async getUserToken() {
      const token = sessionStorage.getItem("token")

      if(token){
        this.isSigned = true;
      }
    }
  },
});
