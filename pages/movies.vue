<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultList from '~/components/DefaultList/DefaultList.vue';
import { movies } from '../data/movies'

const route = useRoute();
const router = useRouter();

const moviesData = ref(0)
const filteredLength = ref(0)

const pagination = ref({
  pageNumber: Number(route?.query?.page) || 1,
  maxPages: 5,
  perPage: 10,
});

const onClickHandler = (page: number) => {
  router.push({ path: "/genres", query: { page: page } });
};

const getMoviesData = async () => {
    const { data, error } = apiFetch('/movies', {
        params: {
            page: route.query?.page,
        },
    })
    if(error.value){
        console.log(error.value, "error");
        return;
    }

    moviesData.value = data.value?.results;
    filteredLength.value = data?.value?.totalResults;
}

watch(() => route.fullPath, () => {
    getMoviesData()
}, {
    immediate: true
})

getMoviesData()


</script>

<template>
    <div class="movies">
        <DefaultList title="ფილმები" :contentData="moviesData"/>

        <!-- <UiComponentsButton class="movies__button" title="load more" /> -->

        <div class="movies__paginate">
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
.movies{
    margin-bottom: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__button{
        width: fit-content;
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