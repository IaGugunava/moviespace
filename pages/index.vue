<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultSlider from '~/components/DefaultSlider/DefaultSlider.vue';
import { movies } from '../data/movies'

const popularData = movies.slice(10, 20);
const showsData = movies.filter((el) => el.movieType === "series").slice(20, 30)
const moviesData = movies.filter((el) => el.movieType === "movie").slice(10, 20)

</script>

<template>
    <div>
        <DefaultSlider title="პოპულარული" buttonLink="/populars" :contentData="popularData"/>
        <DefaultSlider title="სერიალები" buttonLink="/tv-series" :contentData="showsData"/>
        <DefaultSlider title="ფილმები" buttonLink="/movies" :contentData="moviesData"/>
    </div>
</template>

<style lang="scss">

</style>