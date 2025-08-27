<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
 const props = withDefaults(
  defineProps<{
    modelValue?: string | null | Object;
    placeholder?: string | undefined;
    inputType: "email" | "number" | "password" | "text";
    errorText?: string | null;
  }>(),
  {
    modelValue: "",
    placeholder: "",
    inputType: "text"
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", param: typeof props.modelValue): void;
}>();

const inputModel = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: string) {
    emit("update:modelValue", newValue);
  }
});
</script>

<template>
    <div class="custom-input">
        <input
        class="custom-input__input"
        :class="{'custom-input--error': errorText}"
        v-model="inputModel"
        :type="inputType"
        :placeholder="placeholder"
        />
        <div v-if="errorText" class="custom-input--error-text">
          {{ errorText }}
        </div>
    </div>
</template>

<style lang="scss">
.custom-input{
    border-radius: 8px;
    position: relative;
    border: 1px solid $starlightWhite;

    &__input{
        color: white;
        border-radius: 8px;
        border: none;
        background-color: #0000007d;
        padding: 12px;
        width: calc(100% - 25px);
        height: 100%;
        outline: none;
        font-size: 18px;
        transition: all 500ms ease-in-out;

        &:focus{
          border: none;
          outline: 2px solid $midnightBlue;
        }
    }

    &--error{
      border: none;
      outline: 2px solid red;
    }

    &--error-text{
      position: absolute;
      top: 100%;
      padding-top: 10px;
      color: red;
    }
}
</style>