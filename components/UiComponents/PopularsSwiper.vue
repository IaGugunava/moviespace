<script setup lang="ts">
import SwiperCard from '../SwiperCard.vue';

/**
 * @author Ia Gugunava
 */
</script>

<template>
    <div class="populars-swiper">
        <h3 class="populars-swiper__title">popular movies</h3>
        <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="5"
        :space-between="50"
        >
        <SwiperSlide v-for="slide in 10" :key="slide">
            <SwiperCard/>
        </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="scss">
.populars-swiper{
    margin: 70px 0;
    &__title{
        color: white;
        font-size: 44px;
    }
}
</style>