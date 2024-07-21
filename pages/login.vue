<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Login from '~/components/Login/Login.vue';
</script>

<template>
    <div class="login-page">
        <Login/>
        <NuxtLink to="/register" class="login-page__link">ან დარეგისტრირდით</NuxtLink>
    </div>
</template>

<style lang="scss">
.login-page{
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