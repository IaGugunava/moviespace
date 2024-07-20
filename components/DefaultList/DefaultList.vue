<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import SwiperCard from '../UiComponents/SwiperCard.vue';

defineProps<{
  contentData: any;
  title?: string;
}>();

</script>

<template>
    <div class="default-list">
        <div class="container">
            <h2 v-if="title" class="default-list__title">
                {{ title }}
            </h2>

            <div class="default-list__cards">
                <div v-for="item in contentData" class="default-list-card" :key="item.id">
                    <SwiperCard :data="item"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.default-list{
    margin: 90px 0;
    &__title{
        color: $starlightWhite;
        font-size: 44px;
    }

    &__cards{
        display: grid;
        grid-gap: 50px;
        grid-template-columns: repeat(5, minmax(0, 1fr));

        @include maxq(desktop-sm){
            grid-gap: 30px;
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        @include maxq(tablet){
            grid-gap: 30px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @include maxq(mobile){
            grid-gap: 30px;
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
}
</style>