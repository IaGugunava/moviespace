<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultList from '~/components/DefaultList/DefaultList.vue';
import { data } from '../data/movies';
import { useRoute } from 'vue-router';

const route = useRoute()

const searched = computed(() => route.query.searchText)

const foundData = ref();

const searchForFilms = async (text: string) => {
    setTimeout(() => {
        foundData.value = data.filter((el) => el.name.includes(text))
    }, 500)
}

onMounted(() => {
    searchForFilms(searched.value?.toString()!)
})

watch(
    () => searched,
    (n) => {
        searchForFilms(n.value?.toString()!);
    }, 
    {
        deep: true,
    }
)
</script>

<template>
    <div>
        <DefaultList :title="`results for: ${searched}`" :contentData="foundData"/>
    </div>
</template>

<style lang="scss">

</style>