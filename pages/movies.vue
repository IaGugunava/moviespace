<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultList from '~/components/DefaultList/DefaultList.vue';
import { data } from '../data/movies'

const moviesData = data.filter((el) => el.movieType === "movie").slice(20, 30)

</script>

<template>
    <div>
        <DefaultList title="movies" :contentData="moviesData"/>
    </div>
</template>

<style lang="scss">

</style>