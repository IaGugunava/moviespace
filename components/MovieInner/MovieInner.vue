<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import StarsRating from '../UiComponents/StarsRating.vue';
import Genres from '../Genres/Genres.vue';

const props = defineProps<{
  moviesData: any;
  genresData: any;
}>();

// const genresFilter = computed(() => {
//     let res: any[] = []
//     props.moviesData?.genreIds.forEach((el: any, index: number) => {
//       res = props?.genresData?.filter((element: any) => element.id === el[index])
//     });

//     return res;
// })
</script>

<template>
    <div class="movie-inner">
        <div class="movie-inner__image">
             <img :src="`https://${moviesData?.banner}`"/>

            <div class="img-overlay"></div>
        </div>

        <div class="movie-inner__content">
            <p class="movie-inner__content-title">{{ moviesData?.name }}</p>
            <StarsRating :value="moviesData?.rating"/>
            <p class="movie-inner__content-description">{{ moviesData?.description }}</p>
            <div class="movie-inner__content-infos">
                <p>
                    ქვეყანა: {{ moviesData?.country?.name }}
                </p>
                <p>
                    წელი: {{ moviesData?.year }}
                </p>
                <p>
                    rating: {{ moviesData?.mpaaRating }}
                </p>
            </div>

            <!-- <Genres :data="genresFilter"/> -->
            
        </div>
    </div>
</template>

<style lang="scss">
.movie-inner{
    color: white;
    .wrapper{
        position: relative;
    }

    &__image{
        position: relative;
        // width: 33%;
        height: auto;
        padding-top: calc(100% / (928 / 464));
        overflow: hidden;
        img{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
            transition: all 500ms ease-in-out;
        }
        .img-overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent linear-gradient(-180deg, rgba(1, 1, 22, .05) 0%, rgba(1, 1, 22, .95) 100%) 0 0 no-repeat padding-box;
        }
    }

    &__content{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        padding: 40px;

        &-title{
            font-size: 34px;
            margin: 15px 0;
        }

        &-description{
            font-size: 16px;
        }

        &-infos{
            display: flex;
            gap: 10px;
            p{
                opacity: 0.7;
            }
        }
    }
}
</style>