<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import SwiperCard from '../UiComponents/SwiperCard.vue';
import Button from '../UiComponents/Button.vue';

defineProps<{
  contentData: any;
  title?: string;
  buttonLink?: string;
}>();

</script>

<template>
    <div class="default-slider">
        <div class="container">
            <div class="default-slider__header">
                <h3 class="default-slider__title" v-if="title">{{ title }}</h3>
                <NuxtLink v-if="buttonLink" :to="buttonLink">
                    <Button title="see more"/>
                </NuxtLink>
            </div>
            <Swiper
            :slides-per-view="5"
            :space-between="50"
            :watch-overflow="true"
            :watch-slides-progress="true"
            :breakpoints="{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1360: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1680: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }"
            >
                <SwiperSlide v-for="slide in contentData" :key="slide.id">
                    <SwiperCard :data="slide"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<style lang="scss">
.default-slider{
    margin: 70px 0;
    color: white;

    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__title{
        color: $starlightWhite;
        font-size: 44px;
    }

    .swiper{
        overflow: visible;
    }

    .swiper-slide {
        opacity: 0.4;
    }
    .swiper-slide-visible {
        opacity: 1;
    }
// .swiper-button-next,
// .swiper-button-prev,
// .slidePrev-btn,
// .slideNext-btn {
//   width: 54px;
//   height: 54px;
//   right: -25px;
//   border-radius: 50%;
//   box-shadow: 0 0 15px 5px rgba(0, 97, 175, 0.05);
//   transition: 0.4s ease-in-out;
//   cursor: pointer;
//   background-color: white;
// }

// .slidePrev-btn,
// .slideNext-btn {
//   position: absolute;
//   z-index: 10;
//   top: calc(50% - 25px);
//   /* display: grid;
//   place-items: center; */
//   /* display: flex;
//   justify-content: center;
//   align-items: center; */
//   transition: background-color 0.4 ease-in-out;
// }
// .slidePrev-btn:hover,
// .slideNext-btn:hover {
//   background-color: #444958;
// }
// .slidePrev-btn:hover path,
// .slideNext-btn:hover path {
//   stroke: white;
// }
// .slidePrev-btn {
//   left: -25px;
// }

// .services__slider .swiper-button-disabled {
//   opacity: 0;
//   visibility: hidden;
// }
// .swiper-button-next::after,
// .swiper-button-prev::after {
//   content: "";
// }
// moviespace578!
}
</style>
