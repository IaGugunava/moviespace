<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultSlider from '~/components/DefaultSlider/DefaultSlider.vue';
import { data } from '../data/movies'

const popularData = data.slice(10, 20);
const showsData = data.filter((el) => el.movieType === "series").slice(20, 30)
const moviesData = data.filter((el) => el.movieType === "movie").slice(10, 20)

</script>

<template>
    <div>
        <DefaultSlider title="popoular" buttonLink="/populars" :contentData="popularData"/>
        <DefaultSlider title="tv series" buttonLink="/tv-series" :contentData="showsData"/>
        <DefaultSlider title="movies" buttonLink="/movies" :contentData="moviesData"/>
    </div>
</template>

<style lang="scss">

</style>