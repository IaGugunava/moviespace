<script setup lang="ts">
/**
 * @author Ia Gugunava
 */

defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
    <div class="base-modal">
        <ClientOnly>
            <div class="base-modal__wrapper">
                <div class="base-modal__header">
                    <h2 v-if="title" class="base-modal__header--title">
                        {{ title }}
                    </h2>

                    <div class="base-modal__close" @click="$emit('close')">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.0001 35.2L12.8001 38L24.0001 26.8L35.2001 38L38.0001 35.2L26.8001 24L38.0001 12.8L35.2001 10L24.0001 21.2L12.8001 10L10.0001 12.8L21.2001 24L10.0001 35.2Z"
                            fill="white"
                            />
                        </svg>
                    </div>
                </div>

                <div class="base-modal__content">
                    <slot/>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>

<style lang="scss">
.base-modal{
    top: 0;
    left: 0;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;

    &__wrapper{
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 1;
        padding: 30px;
        background-color: $deepSpaceBlue;
        border-radius: 16px;
        border: 3px solid $midnightBlue;
    }

    &__header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $starlightWhite;
    }

    &__close {
        cursor: pointer;
    }

    &__content{
        min-width: 400px;
        position: relative;
    }
}
</style>