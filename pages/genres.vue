<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import { VueAwesomePaginate } from "vue-awesome-paginate";
import Genres from "~/components/Genres/Genres.vue";
import { useGlobalStore } from "~/store/globalStore.js";

const route = useRoute();
const router = useRouter();
const globalStore = useGlobalStore();

// const genreId = computed(() => route?.query?.genreId);

// const filteredData = computed(() => movies.filter(movie => movie.genres.some(genre => genre.id === genreId.value)));

const genresData = ref(null);
const moviesData = ref(null);
const filteredLength = ref(0)

const pagination = ref({
  pageNumber: Number(route?.query?.page) || 1,
  maxPages: 5,
  perPage: 10,
});

const onClickHandler = (page: number) => {
  router.push({ path: "/genres", query: { page: page } });
};

const getGenresData = () => {
  globalStore.getGenres();

  genresData.value = globalStore.genres;
};

const filterMovies = async () => {
  const { data, error } = await apiFetch("/movies", {
    params: {
      page: route.query?.page,
      genre: route.query?.genreId,
    },
  });

  if (error.value) {
    console.log(error.value, "error");
    return;
  }

  moviesData.value = data?.value?.results;
  filteredLength.value = data?.value?.totalResults;
};

watch(
  () => route.fullPath,
  () => {
    console.log("request");
    getGenresData();
    filterMovies();
  },
  {
    immediate: true,
  }
);

watchEffect(() => {
  // getGenresData()
});
</script>

<template>
  <div class="genres">
    <Genres :data="genresData" />
    <div class="genres--text">მოიძიე ფილმები ჟანრების მიხედვით</div>
    <DefaultList
      v-if="moviesData?.length"
      title=""
      :content-data="moviesData"
    />
    <div v-else class="genres--error">ფილმი ვერ მოიძებნა</div>

    <div class="genres__paginate">
        <VueAwesomePaginate
          v-if="filteredLength! / pagination?.perPage > 1"
            v-model="pagination.pageNumber"
            :total-items="filteredLength"
            :items-per-page="pagination.perPage"
            :max-pages-shown="5"
            @click="onClickHandler(pagination.pageNumber)"
        />
    </div>
  </div>
</template>

<style lang="scss">
.genres {
    margin-bottom: 30px;
  &--text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 30px;
    margin-top: 50px;
  }

  &--error {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 30px;
    margin-top: 50px;
    color: red;
  }

  &__paginate{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .pagination-container{
        gap: 8px;
    }
    
    .paginate-buttons{
        background-color: transparent;
        border: 1px solid $nebulaPurple;
        padding: 16px;
        border-radius: 50%;
        width: 50px;
        color: $starlightWhite;
        font-size: 16px;
        transition: all ease-in-out 300ms;
        cursor: pointer;

        &:hover{
            background-color: $nebulaPurple;
        }
    }

    .active-page{
        background-color: $nebulaPurple;
    }
  }
}
</style>
