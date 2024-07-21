<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Genres from '~/components/Genres/Genres.vue';
import { genres } from '~/data/genres';
import { movies } from '~/data/movies';

const route = useRoute();

const genreId = computed(() => route?.query?.genreId);

const filteredData = computed(() => movies.filter(movie => movie.genres.some(genre => genre.id === genreId.value)));

</script> 

<template>
    <div>
        <Genres :data="genres"/>
        <DefaultList title="" :content-data="filteredData"/>
    </div>
</template>

<style lang="scss">

</style>