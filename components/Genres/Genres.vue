<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Button from '../UiComponents/Button.vue';

const router = useRouter();
const route = useRoute();

defineProps<{
  data: any;
}>();

const onGenreClick = (id: number) => {
    router.push({path: '/genres', query: { genreId: id } })
}

const genreId = computed(() => 
    route?.query?.genreId
)

</script>

<template>
    <div class="genres">
        <div v-for="item in data" :key="item.id" class="genres__button">
            <Button :title="item?.name" :active="item.id == genreId" @click="onGenreClick(item?.id)"/>
        </div>
    </div>
</template>

<style lang="scss">
.genres{
    display: flex;
    gap: 20px;
    color: white;
    flex-wrap: wrap;
    margin-top: 50px;
}
</style>