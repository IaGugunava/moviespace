<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Input from '../UiComponents/Input.vue';

const router = useRouter();
const client = useSupabaseClient();

const email: Ref<string | null | Object> = ref("");
const password: Ref<string | null | Object> = ref("");
const message = ref("");
const success = ref(false);

const handleLogin = async () => {

    try{
        const { error } = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });
        if(error) {
            message.value = error.message;
            success.value = false;
        } else {
            message.value = "check your email";
            success.value = true;
        }

        router.push("/profile");
    } catch(error: any){
        message.value = error.message;
        console.log(error)
    } finally{
        console.log("!")
    }

   setTimeout(() => {
    email.value = "";
    password.value = "";
   }, 3000)
}

</script>

<template>
    <div class="login">
        <h3 class="login__title">შესვლა</h3>

        <div class="login__form">
            <div class="login__inputs">
                <p class="login__label">იმეილი</p>
                <Input input-type="email" :model-value="email" @update:model-value="(e: any) => email = e"/>
            </div>

            <div class="login__inputs">
                <p class="login__label">პაროლი</p>
                <Input input-type="password" :model-value="password" @update:model-value="(e: any) => password = e"/>
            </div>

            <UiComponentsButton class="login__button" title="შესვლა" @click="handleLogin"/>
        </div>
        <p v-if="message" class="login__message" :class="[{'login__message--success': success}, {'login__message--error': !success}]">{{ message }}</p>

    </div>
</template>

<style lang="scss">
.login{
    width: 538px;
    border: 1px solid $starlightWhite;
    background-color: $deepSpaceBlue;
    border-radius: 16px;
    padding: 30px;
    margin-top: 50px;

    &__title{
        font-size: 32px;
        color: $starlightWhite;
    }

    &__label{
        font-size: 16px;
        color: $starlightWhite;
    }

    &__form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__button{
        margin-top: 30px;
    }

    &__message{
        font-size: 16px;
        padding: 10px 0;

        &--success{
            color: green;
        }

        &--error{
            color: red;
        }
    }
}
</style>