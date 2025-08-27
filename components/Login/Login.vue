<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Input from "../UiComponents/Input.vue";

import { required, helpers, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useGlobalStore } from "~/store/globalStore.js";

const router = useRouter();

const globalStore = useGlobalStore()

const loginFields = reactive({
  email: "",
  password: "",
});

const loginFieldsRules = computed(() => ({
  email: {
    required: helpers?.withMessage("ველი სავალდებულოა", required),
    email: helpers?.withMessage("არასწორი იმეილის ფორმატი", email),
  },
  password: {
    required: helpers?.withMessage("ველი სავალდებულლოა", required),
  },
}));

const v$ = useVuelidate(loginFieldsRules, loginFields);

const message = ref();
const success = ref(true);

const resetForm = () => {
    loginFields.email = "";
    loginFields.password = "";
    message.value = "";
    success.value = false;
    v$.value?.$reset();
}

const handleLogin = async () => {
    const valid = await v$.value.$validate();
    if(valid){
        const { data, error } = await apiFetch("/auth/login", {
          method: "POST",
          body: {
            email: loginFields.email,
            password: loginFields.password,
          },
        });
      
        if (error.value) {
          success.value = false;
          message.value = "error";
          console.log(error.value, "error");
          return;
        }
      
        message.value = "success";
            
        sessionStorage.setItem("token", data?.value.token);

        globalStore.user = data?.value

        router.push("/profile")
      
        // setTimeout(() => {
        //   resetForm()
        // }, 3000);
    }
}

// const handleLogin = async () => {

//     try{
//         const { error } = await client.auth.signInWithPassword({
//             email: email.value,
//             password: password.value
//         });
//         if(error) {
//             message.value = error.message;
//             success.value = false;
//         } else {
//             message.value = "check your email";
//             success.value = true;
//         }

//         router.push("/profile");
//     } catch(error: any){
//         message.value = error.message;
//         console.log(error)
//     } finally{
//         console.log("!")
//     }

//    setTimeout(() => {
//     email.value = "";
//     password.value = "";
//    }, 3000)
// }
</script>

<template>
  <div class="login">
    <h3 class="login__title">შესვლა</h3>

    <div class="login__form">
      <div class="login__inputs">
        <p class="login__label">იმეილი</p>
        <Input
          input-type="email"
          :model-value="loginFields.email"
          @update:model-value="(e: any) => loginFields.email = e"
          :error-text="v$.email?.$errors?.[0]?.$message.toString()"
        />
      </div>

      <div class="login__inputs">
        <p class="login__label">პაროლი</p>
        <Input
          input-type="password"
          :model-value="loginFields.password"
          @update:model-value="(e: any) => loginFields.password = e"
          :error-text="v$.password?.$errors?.[0]?.$message.toString()"
        />
      </div>

      <UiComponentsButton class="login__button" title="შესვლა" @click="handleLogin"/>
    </div>
    <p
      v-if="message"
      class="login__message"
      :class="[
        { 'login__message--success': success },
        { 'login__message--error': !success },
      ]"
    >
      {{ message }}
    </p>
  </div>
</template>

<style lang="scss">
.login {
  width: 538px;
  border: 1px solid $starlightWhite;
  background-color: $deepSpaceBlue;
  border-radius: 16px;
  padding: 30px;
  margin-top: 50px;

  &__title {
    font-size: 32px;
    color: $starlightWhite;
  }

  &__label {
    font-size: 16px;
    color: $starlightWhite;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__button {
    margin-top: 30px;
  }

  &__message {
    font-size: 16px;
    padding: 10px 0;

    &--success {
      color: green;
    }

    &--error {
      color: red;
    }
  }
}
</style>
