<script setup lang="ts">
/**
 * @author Ia Gugunava
 */

const props = defineProps<{
  title: string,
  movieId: number,
  userId: string
}>();

</script>

<template>
    <div class="adding-modal">
        <h3 class="adding-modal__title">adding-modal</h3>

        <div class="adding-modal__form">
            <div class="adding-modal__inputs">
                <p class="adding-modal__label">Email</p>
                <!-- <Input input-type="email" :model-value="email" @update:model-value="(e: any) => email = e"/> -->
            </div>

            <div class="adding-modal__inputs">
                <p class="adding-modal__label">Password</p>
                <!-- <Input input-type="password" :model-value="password" @update:model-value="(e: any) => password = e"/> -->
            </div>

            <!-- <UiComponentsButton class="adding-modal__button" title="adding-modal" @click="handleadding-modal"/> -->
        </div>
        <!-- <p v-if="message" class="adding-modal__message" :class="[{'adding-modal__message--success': success}, {'adding-modal__message--error': !success}]">{{ message }}</p> -->

    </div>
</template>

<style lang="scss">
.adding-modal{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>