<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultSlider from '~/components/DefaultSlider/DefaultSlider.vue';
import { apiFetch } from '~/composables/helpers';
import { useGlobalStore } from '~/store/globalStore.js';

const moviesData = ref(null)

const globalStore = useGlobalStore()

const isUserSigned = computed(() => Boolean(sessionStorage.getItem('token')))

const getMoviesData = async () => {
    const { data, error } = await apiFetch('/movies')
    if(error.value){
        console.log(error.value, "error");
        return;
    }


    moviesData.value = data.value?.results;

}

onMounted(async () => {
    await globalStore.getGenres()
    await getMoviesData()
})

</script>

<template>
    <div>
        <DefaultSlider title="ფილმები" buttonLink="/movies" :contentData="moviesData" :is-signed="isUserSigned"/>
    </div>
</template>

<style lang="scss">

</style>

