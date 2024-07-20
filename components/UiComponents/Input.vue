<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
 const props = withDefaults(
  defineProps<{
    modelValue?: string | null | Object;
    placeholder?: string | null;
    inputType: "email" | "number" | "password" | "text";
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
        v-model="inputModel"
        :type="inputType"
        :placeholder="placeholder"
        />
    </div>
</template>

<style lang="scss">
.custom-input{
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid $starlightWhite;
    
    &__input{
        color: white;
        border-radius: 8px;
        border: none;
        background-color: #0000007d;
        padding: 12px;
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 18px;
        transition: all 500ms ease-in-out;

        &:focus{
            outline: 2px solid $midnightBlue;
        }
    }
}
</style>