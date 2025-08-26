<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
 import DefaultList from '~/components/DefaultList/DefaultList.vue';

const popularData = ref(0)

const getMoviesData = async () => {
    const { data, error } = apiFetch('/movies')
    if(error.value){
        console.log(error.value, "error");
        return;
    }

    popularData.value = data.value?.results;
}

getMoviesData()

</script>

<template>
    <div>
        <DefaultList title="პოპულარული ფილმები" :contentData="popularData"/>
    </div>
</template>

<style lang="scss">

</style>