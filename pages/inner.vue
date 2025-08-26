<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import MovieInner from '~/components/MovieInner/MovieInner.vue';
import { useRoute } from 'vue-router';
import { useGlobalStore } from '~/store/globalStore.js';

const route = useRoute()

const globalStore = useGlobalStore()

const innerId = computed(() => route.query.id);

const innerData = ref();
const genresData = ref()

const getGenresData = () => {
  globalStore.getGenres();

  genresData.value = globalStore.genres;
};

const getInnerData = async () => {
    const { data, error } = await apiFetch(`/movies/${route.query?.slug}`);

  if (error.value) {
    console.log(error.value, "error");
    return;
  }

  console.log(data?.value)

  innerData.value = data?.value;
}

watch(
  () => route.query,
  () => {
    getGenresData();
    getInnerData();
  },
  {
    immediate: true,
  }
);
</script>

<template>
    <div>
        <MovieInner :movies-data="innerData" :genres-data="genresData"/>
    </div>
</template>

<style lang="scss">

</style>