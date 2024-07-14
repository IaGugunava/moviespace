<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultList from '~/components/DefaultList/DefaultList.vue';
import { data } from '../data/movies'

const showsData = data.filter((el) => el.movieType === "series").slice(20, 30)
</script>

<template>
    <div>
        <DefaultList title="tv series" :contentData="showsData"/>
    </div>
</template>

<style lang="scss">

</style>