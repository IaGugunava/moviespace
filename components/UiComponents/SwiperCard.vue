<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import StarsRating from './StarsRating.vue';
import AddingModal from '../AddingModal/AddingModal.vue';
import { getSingleUrl } from '~/composables/helpers.js';
import { useGlobalStore } from '~/store/globalStore';

const props = defineProps<{
  data: any,
  buttonTitle?: string,
  isSigned?: boolean
}>();

const globalStore = useGlobalStore()

//@ts-expect-error
const userId = computed(() => globalStore.user?.userId)

// const user = useSupabaseUser();

const isModalOpen = ref(false);

const deleteMovie = async () => {
    console.log(props?.data?.id)

    // await client.from('movies').delete().match({ movie_id: props?.data?.id })

    // const { data, error } = await client.from('movies').upsert({
    //     user_id: user.value.id,
    //     name: "favorites",
    //     movie_id: props.data?.id
    // })

    // if(error){
    //     console.log(error);
    // }
    
}

// console.log(user.value?.id, "~~~~~~~~~~~~~~~~~~~~");

// const emit = defineEmits<{
//   (e: "addMovie"): void;
// }>();

</script>

<template>
    <div @click="getSingleUrl(data)" class="swiper-card">
        <div class="wrapper">
            <NuxtImg class="swiper-card__image" :src="`https://${data?.poster}`"/>
        </div>

        <div class="swiper-card__title">
            {{ data?.name }}
        </div>

        <div class="swiper-card__rating">
            <StarsRating :value="data?.rating"/>

            <p>{{ data?.rating }}</p>
        </div>
        <UiComponentsButton class="swiper-card__button" v-if="isSigned && !buttonTitle" title="დაამატე ფილმი" @click.stop="isModalOpen = true"/>
        <UiComponentsButton class="swiper-card__button" v-if="isSigned && buttonTitle" :title="buttonTitle" @click.stop="deleteMovie"/>
    </div>

    <Teleport to="body">
        <Transition name="fade">
            <UiComponentsBaseModal v-if="isModalOpen" title="დაამატე ფილმი" @close="isModalOpen = false">
                <AddingModal :user-id="userId" :movie-id="data?._id" @close-modal="isModalOpen = false"/>
            </UiComponentsBaseModal>
        </Transition>
    </Teleport>
</template>

<style lang="scss">
.swiper-card{
    cursor: pointer;
    .wrapper{
        position: relative;
        height: auto;
        padding-top: calc(100% / (232 / 346));
        overflow: hidden;

        @include maxq(tablet){
            padding-top: calc(100% / (232 / 300));
        }
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