<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import type { Database } from '~/types/database.types';

const props = defineProps<{
  movieId: number,
  userId: string
}>();

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();

const client = useSupabaseClient<Database>();

const category = ref();
const categories = reactive([
    {name: 'სანახავი', active: false, value: 'towatch' },
    {name: 'ფავორიტი', active: false, value: 'favorites' }
])

const addMovie = async () => {
    if(!category?.value) return;

    try{
        const { data } = await client.from('movies').upsert({
            user_id: props?.userId,
            movie_id: props?.movieId,
            name: category?.value
        })
    } catch(error) {
        console.log(error)
    } finally {
        console.log("@")
    }

    category.value = null

    setTimeout(() => {
        emit('closeModal')
    }, 3000)
}

watch(
    categories, 
    (ns) => {
        ns.forEach((el) => {
            if(el.active){
                category.value = el.value
            }
        })
    },
    {
        deep: true
    }
)
</script>

<template>
    <div class="adding-modal">
        <div class="adding-modal__form">
            <div class="adding-modal__inputs">
                <p class="adding-modal__label">აირჩიეთ კატეგორიის სახელი</p>
                <div class="adding-modal__categories">
                    <div class="category" v-for="(item, index) in categories" :key="index">
                        <UiComponentsButton :title="item?.name" @click="item.active = !item.active" :active="item.active"/>
                    </div>
                </div>
                <!-- <Input input-type="email" :model-value="category" @update:model-value="(e: any) => category = e"/> -->
            </div>

            <UiComponentsButton class="adding-modal__button" title="დაამატე ფილმი" @click="addMovie"/>
        </div>
        <!-- <p v-if="message" class="adding-modal__message" :class="[{'adding-modal__message--success': success}, {'adding-modal__message--error': !success}]">{{ message }}</p> -->

    </div>
</template>

<style lang="scss">
.adding-modal{
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__form{
        color: $starlightWhite;
    }

    &__categories{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;

        .category{
            width: 100%;
        }
    }

    &__button{
        margin-top: 40px;
    }
}
</style>