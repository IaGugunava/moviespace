<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Register from '~/components/Register/Register.vue';
</script>

<template>
    <div class="register-page">
        <Register/>

        <NuxtLink to="/login" class="login-page__link">already have an account?</NuxtLink>

    </div>
</template>

<style lang="scss">
.register-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    &__link{
        font-size: 24px;
    }
}
</style>