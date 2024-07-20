<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
 import Input from '../UiComponents/Input.vue';

const client = useSupabaseClient();

const name: Ref<string | null | Object> = ref("");
// const surname: Ref<string | null | Object> = ref("");
// const phone: Ref<string | null | Object> = ref("");
const email: Ref<string | null | Object> = ref("");
const password: Ref<string | null | Object> = ref("");
const repeatPassword: Ref<string | null | Object> = ref("");
const message = ref("");
const success = ref(false);

const handleRegister = async () => {
    
    try{
        const { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                data: {
                    first_name: name.value,
                }
            }
        })

        if(error) {
            message.value = error.message;
            success.value = false;
        } else {
            message.value = "check your email";
            success.value = true;
        }

    } catch(error: any){
        console.log(error)
        message.value = error.message;
    } finally{
        console.log("?")
    }

   setTimeout(() => {
    name.value = "";
    email.value = "";
    password.value = "";
    repeatPassword.value = "";
    message.value = "";
    success.value = false;
   }, 3000)
}
</script>

<template>
    <div>
        <div class="register">
        <h3 class="register__title">register</h3>

        <div class="register__form">
            <div class="register__inputs">
                <p class="register__label">Name</p>
                <Input input-type="text" :model-value="name" @update:model-value="(e: any) => name = e"/>
            </div>
<!-- 
            <div class="register__inputs">
                <p class="register__label">Surname</p>
                <Input input-type="text" :model-value="surname" @update:model-value="(e: any) => surname = e"/>
            </div> -->

            <!-- <div class="register__inputs">
                <p class="register__label">Phone</p>
                <Input input-type="text" :model-value="phone" @update:model-value="(e: any) => phone = e"/>
            </div> -->

            <div class="register__inputs">
                <p class="register__label">Email</p>
                <Input input-type="email" :model-value="email" @update:model-value="(e: any) => email = e"/>
            </div>

            <div class="register__inputs">
                <p class="register__label">Password</p>
                <Input input-type="password" :model-value="password" @update:model-value="(e: any) => password = e"/>
            </div>

            <div class="register__inputs">
                <p class="register__label">Repeat Password</p>
                <Input input-type="password" :model-value="repeatPassword" @update:model-value="(e: any) => repeatPassword = e"/>
            </div>

            <UiComponentsButton class="register__button" title="register" @click="handleRegister"/>
        
        </div>
        <p v-if="message" class="register__message" :class="[{'register__message--success': success}, {'register__message--error': !success}]">{{ message }}</p>
    </div>
    </div>
</template>

<style lang="scss">
.register{
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