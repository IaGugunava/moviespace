<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Input from '~/components/UiComponents/Input.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const searchText:Ref<string> = ref("");

const handleSearch = async (value: string) => {
    router.push({ path: '/search', query: { searchText: `${searchText.value}` } })

    setTimeout(() => {
        searchText.value = "";
    }, 1000)
}
</script>

<template>
    <div class="header">
        <!-- logo -->
        <NuxtLink to="/" class="header__logo">
            <img src="../../../assets/images/moviespacelogo.png"/>
        </NuxtLink>

        <!-- other stuff -->
         <div class="header__content">
            <NuxtLink class="header__link" to="/populars">popular</NuxtLink>
            <NuxtLink class="header__link" to="/movies">movies</NuxtLink>
            <NuxtLink class="header__link" to="/tv-series">tv series</NuxtLink>
            <NuxtLink class="header__link" to="/genres">genres</NuxtLink>
            <Input placeholder="Search..." :modelValue="searchText" @update:modelValue="(e: string) => searchText = e" @keydown.enter="handleSearch(searchText)"/>
         </div>
    </div>
</template>

<style lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba($color: #cccbf5, $alpha: 0.7);
    padding: 30px;
    position: relative;
    top: 0;
    left: 0;

    &__logo{
        height: 50px;
        width: 100px;

        img{
            height: 100%;
            width: 100%;
        }
    }

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