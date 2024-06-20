<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultSlider from '~/components/DefaultSlider/DefaultSlider.vue';
import Banner from '~/components/Banner/Banner.vue';
import { data } from '../data/movies'

const popularData = data.slice(10, 20)
</script>

<template>
    <div>
        <Banner/>
        <DefaultSlider :contentData="popularData"/>
    </div>
</template>

<style lang="scss">

</style>