<script setup lang="ts">
/**
 * @author Ia Gugunava
 */

defineProps<{
  title: string;
  active?: boolean;
}>();

</script>

<template>
    <div class="custom-button" :class="{'custom-button--active': active}">
        <span>{{ title }}</span>
    </div>
</template>

<style lang="scss">
.custom-button{
    cursor: pointer;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 25px;
    border: 2px solid $nebulaPurple;
    background: linear-gradient(-90deg, rgba($nebulaPurple, 0.5) 0%, rgba(1, 1, 22, .95) 100%) 0 0 no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease-in-out;

    span{
        color: $starlightWhite;
    }

    &:hover{
        background: $nebulaPurple;
    }

    &--active{
        background: $nebulaPurple;
    }
}
</style>