<script setup lang="ts">
import SwiperCard from './UiComponents/SwiperCard.vue';

/**
 * @author Ia Gugunava
 */
</script>

<template>
    <div class="populars-swiper">
        <div class="container">
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
    </div>
</template>

<style lang="scss">
.populars-swiper{
    margin: 70px 0;
    &__title{
        // color: ;
        font-size: 44px;
    }

    .swiper{
        overflow: visible;
    }
}
</style>