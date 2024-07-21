<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultList from '~/components/DefaultList/DefaultList.vue';
import { movies } from '../data/movies'

const moviesData = computed(() => movies.filter((el) => el.movieType === "movie").slice(20, 30))

// const handleLoadMore = () => {

// }

</script>

<template>
    <div class="movies">
        <DefaultList title="ფილმები" :contentData="moviesData"/>

        <!-- <UiComponentsButton class="movies__button" title="load more" /> -->
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
}
</style>