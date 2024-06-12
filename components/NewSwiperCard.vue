<script setup lang="ts">
const data = {
    img: "https://movies-proxy.vercel.app/ipx/f_webp&s_400x600/tmdb/rXojaQcxVUubPLSrFV8PD4xdjrs.jpg",
    title: "hazbin hotel",
    rating: 9
}
</script>

<template>
    <div class="new-swiper-card">
        <div class="wrapper">
            <img class="new-swiper-card__image" :src="data.img"/>
        </div>

        <div class="new-swiper-card__title">
            <h2>{{ data.title }}</h2>
        </div>
    </div>
</template>

<style lang="scss">
.new-swiper-card{
    .wrapper{
        position: relative;
        height: auto;
        overflow: hidden;
        padding-top: calc(100% / (232 / 376));
    }

    &__image{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
}
</style>