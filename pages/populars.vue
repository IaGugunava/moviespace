<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
 import DefaultList from '~/components/DefaultList/DefaultList.vue';
 import { data } from '../data/movies'

const popularData = data.slice(10, 20)

</script>

<template>
    <div>
        <DefaultList title="popular movies" :contentData="popularData"/>
    </div>
</template>

<style lang="scss">

</style>