<script setup lang="ts">
import Header from './components/LayoutComponents/Header/Header.vue';
</script>

<template>
  <div>
    <Header/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
body {
  background-color: #111;
  background-image: url("./assets/images/image.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>