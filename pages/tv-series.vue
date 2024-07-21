<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultList from '~/components/DefaultList/DefaultList.vue';
import { movies } from '../data/movies'

const showsData = movies.filter((el) => el.movieType === "series").slice(20, 30)
</script>

<template>
    <div>
        <DefaultList title="სერიალები" :contentData="showsData"/>
    </div>
</template>

<style lang="scss">

</style>