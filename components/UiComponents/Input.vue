<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
 const props = withDefaults(
  defineProps<{
    modelValue?: string | null | Object;
    placeholder?: string | null;
  }>(),
  {
    modelValue: "",
    placeholder: ""
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
        :placeholder="placeholder"
        />
    </div>
</template>

<style lang="scss">
.custom-input{
    overflow: hidden;
    border-radius: 8px;
    
    &__input{
        color: white;
        border-radius: 8px;
        border: none;
        background-color: $midnightBlue;
        padding: 12px;
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 18px;
        transition: all 500ms ease-in-out;

        &:focus{
            border: 2px solid $meteorGray;
        }
    }
}
</style>