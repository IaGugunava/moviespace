<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultList from '~/components/DefaultList/DefaultList.vue';
// import { movies } from '../data/movies';
import { useRoute } from 'vue-router';
import { useGlobalStore } from '~/store/globalStore.js';

const route = useRoute()

const globalStore = useGlobalStore()

const searched = computed(() => route.query.search)

const foundData = computed(() => globalStore.searchedMovies);

</script>

<template>
    <div class="search">
        <DefaultList v-if="foundData?.length" :title="`შედეგები: ${searched}`" :contentData="foundData"/>
        <div v-else class="search--error">ფილმი ვერ მოიძებნა</div>
    </div>
</template>

<style lang="scss">
.search{
     &--error {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 30px;
    margin-top: 50px;
    color: red;
  }
}
</style>