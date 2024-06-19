<script setup lang="ts">

</script>

<template>
    <div class="header">
        <a class="header__logo" href="/">
            <img src="../../../assets/images/moviespacelogo.png"/>
        </a>
    </div>
</template>

<style lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(191,211,242, 0.7);
    padding: 30px;

    &__logo{
        position: relative;
        width: 150px;
        height: 75px;

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>