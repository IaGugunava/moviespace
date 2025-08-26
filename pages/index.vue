<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultSlider from '~/components/DefaultSlider/DefaultSlider.vue';
import { apiFetch } from '~/composables/helpers';
import { useGlobalStore } from '~/store/globalStore.js';

const popularData = ref(null)
const moviesData = ref(null)

const globalStore = useGlobalStore()

const getMoviesData = async () => {
    const { data, error } = apiFetch('/movies')
    if(error.value){
        console.log(error.value, "error");
        return;
    }

    popularData.value = data.value?.results;

    moviesData.value = data.value?.results;

}

getMoviesData()

onMounted(() => {
    globalStore.getGenres()
})

</script>

<template>
    <div>
        <DefaultSlider title="პოპულარული" buttonLink="/populars" :contentData="popularData"/>
        <DefaultSlider title="ფილმები" buttonLink="/movies" :contentData="moviesData"/>
    </div>
</template>

<style lang="scss">

</style>

