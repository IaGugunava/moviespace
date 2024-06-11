<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
const props = withDefaults(
  defineProps<{
    value?: number
  }>(),
  {
    value: 0,
  },
)

const style = computed(() => ({
  'clip-path': `inset(0 ${(10 - props.value) * 10}% 0 0)`,
}))
</script>

<template>
  <div class="stars-rating">
    <img class="stars-rating__stars" src="/stars.webp" />
    <img class="stars-rating__stars" src="/stars-filled.webp" :style="style"/>
  </div>
</template>

<style lang="scss">
.stars-rating{
    position: relative;
    width: 5rem;
    aspect-ratio: 11 / 2;

    &__stars{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: auto;
        max-width: 100%;
    }
}
</style>