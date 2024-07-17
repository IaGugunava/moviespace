<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import StarsRating from './StarsRating.vue';
import { getSingleUrl } from '~/composables/helpers';

const props = defineProps<{
  data: any
}>();
</script>

<template>
    <div @click="getSingleUrl(data)" class="swiper-card">
        <div class="wrapper">
            <img class="swiper-card__image" :src="data?.poster"/>
        </div>

        <div class="swiper-card__title">
            {{ data?.name }}
        </div>

        <div class="swiper-card__rating">
            <StarsRating :value="data?.rating"/>

            <p>{{ data?.rating }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.swiper-card{
    cursor: pointer;
    .wrapper{
        position: relative;
        height: auto;
        padding-top: calc(100% / (232 / 376));
        overflow: hidden;
    }
    &__image{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        transition: all 500ms ease-in-out;
    }
    &__title{
        color: white;
        font-size: 21px;
        margin-top: 20px;
    }
    &__rating{
        display: flex;
        gap: 16px;
        align-items: center;

        p{
            color: white;
            font-size: 16px;
        }
    }

    &:hover{
        .swiper-card__image{
            transform: scale(1.2);
        }
    }
}
</style>