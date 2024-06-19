<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Input from '~/components/UiComponents/Input.vue';

const searchText:Ref<string> = ref("");

const handleSearch = async (value: string) => {
    console.log(value, '~~~~~~~~~~~~~~~~~~~');

    setTimeout(() => {
        searchText.value = "";
    }, 1000)
}
</script>

<template>
    <div class="header">
        <!-- logo -->
        <div class="header__logo">

        </div>

        <!-- other stuff -->
         <div class="header__content">
            <NuxtLink class="header__link" to="/populars">popular</NuxtLink>
            <NuxtLink class="header__link" to="/movies">movies</NuxtLink>
            <NuxtLink class="header__link" to="/tv-series">tv series</NuxtLink>
            <Input :modelValue="searchText" @update:modelValue="(e: string) => searchText = e" @keydown.enter="handleSearch(searchText)"/>
         </div>
    </div>
</template>

<style lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba($color: #aa80f2, $alpha: 0.7);
    padding: 30px;
    position: relative;
    top: 0;
    left: 0;

    &__content{
        display: flex;
        gap: 16px;
        align-items: center;
    }

    &__link{
        font-size: 24px;
        text-transform: uppercase;
    }
}
</style>