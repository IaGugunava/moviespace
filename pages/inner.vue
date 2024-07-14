<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import MovieInner from '~/components/MovieInner/MovieInner.vue';
import { data } from '../data/movies'
import { useRoute } from 'vue-router';

const route = useRoute()

const innerId = computed(() => route.query.id);

const innerData = ref();

const getInnerData = async (id: number) => {
    setTimeout(() => {
        innerData.value = data.filter((el) => el.id === id)
    }, 500)
}

onMounted(() => {
    getInnerData(Number(innerId.value));
})
</script>

<template>
    <div>
        <MovieInner :data="innerData"/>
    </div>
</template>

<style lang="scss">

</style>