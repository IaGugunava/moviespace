<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Input from "../UiComponents/Input.vue";

import { required, helpers, email, sameAs, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useGlobalStore } from "~/store/globalStore";

const globalStore = useGlobalStore()

const registerFields = reactive({
    username: "",
    email: "",
    password: "",
    repeatPassword: ""
})

const registerFieldsRules = computed(() => ({
  username: {
    required: helpers?.withMessage("ველი სავალდებულოა", required),
  },
  email: {
    required: helpers?.withMessage("ველი სავალდებულოა", required),
    email: helpers?.withMessage("არასწორი იმეილის ფორმატი", email),
  },
  password: {
    required: helpers?.withMessage("ველი სავალდებულლოა", required),
    minLength: helpers?.withMessage("პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო", minLength(8)),
    oneDigit: helpers?.withMessage("მინიმუმ ერთი ციფრი სავალდებულოა", helpers.regex(/^(?=.*\d)/)),
    oneUpper: helpers?.withMessage("მინიმუმ ერთი uppercase letter სავალდებულოა", helpers.regex(/^(?=.*[A-Z])/))
  },
  repeatPassword: {
    required: helpers?.withMessage("ველი სავალდებულლოა", required),
    sameAsPassword: helpers?.withMessage("პაროლები არ ემთხვევა", sameAs(registerFields.password))
  },
}));

const v$ = useVuelidate(registerFieldsRules, registerFields);

const message = ref();
const success = ref(true);

const resetForm = () => {
    registerFields.username = "";
    registerFields.email = "";
    registerFields.password = "";
    registerFields.repeatPassword = "";
    message.value = "";
    success.value = false;
    v$.value?.$reset();
}

const handleRegister = async () => {
    const valid = await v$.value.$validate();
    if(valid){
        const { data, error } = await apiFetch("/auth/register", {
          method: "POST",
          body: {
            username: registerFields.username,
            email: registerFields.email,
            password: registerFields.password,
          },
        });
      
        if (error.value) {
          success.value = false;
          message.value = "error";
          console.log(error.value, "error");
          return;
        }
      
        message.value = "success";
      
        console.log(data.value);
      
        sessionStorage.setItem("token", data?.value.token);

        globalStore.user = data?.value
      
        setTimeout(() => {
          resetForm()
        }, 3000);
    }
};
</script>

<template>
  <div>
    <div class="register">
      <h3 class="register__title">რეგისტრაცია</h3>

      <div class="register__form">
        <div class="register__inputs">
          <p class="register__label">სახელი</p>
          <Input
            input-type="text"
            :model-value="registerFields.username"
            @update:model-value="(e: any) => registerFields.username = e"
            :error-text="v$.username?.$errors?.[0]?.$message.toString()"
          />
        </div>
        <div class="register__inputs">
          <p class="register__label">იმეილი</p>
          <Input
            input-type="email"
            :model-value="registerFields.email"
            @update:model-value="(e: any) => registerFields.email = e"
            :error-text="v$.email?.$errors?.[0]?.$message.toString()"
          />
        </div>

        <div class="register__inputs">
          <p class="register__label">პაროლი</p>
          <Input
            input-type="password"
            :model-value="registerFields.password"
            @update:model-value="(e: any) => registerFields.password = e"
            :error-text="v$.password?.$errors?.[0]?.$message.toString()"
          />
        </div>

        <div class="register__inputs">
          <p class="register__label">გაიმეორეთ პაროლი</p>
          <Input
            input-type="password"
            :model-value="registerFields.repeatPassword"
            @update:model-value="(e: any) => registerFields.repeatPassword = e"
            :error-text="v$.repeatPassword?.$errors?.[0]?.$message.toString()"
          />
        </div>

        <UiComponentsButton
          class="register__button"
          title="რეგისტრაცია"
          @click="handleRegister"
        />
      </div>
      <p
        v-if="message"
        class="register__message"
        :class="[
          { 'register__message--success': success },
          { 'register__message--error': !success },
        ]"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.register {
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
