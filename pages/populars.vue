<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
 import DefaultList from '~/components/DefaultList/DefaultList.vue';
 import { movies } from '../data/movies'

const popularData = movies.slice(10, 20)

</script>

<template>
    <div>
        <DefaultList title="პოპულარული ფილმები" :contentData="popularData"/>
    </div>
</template>

<style lang="scss">

</style>