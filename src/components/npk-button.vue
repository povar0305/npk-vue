<script setup lang="ts">
import NpkIcon from "@/components/npk-icon.vue";

const properties = defineProps({
  disabled: { type: Boolean },
  error: { type: Boolean },
  success: { type: Boolean },
  warning: { type: Boolean },
  primary: { type: Boolean },
  iconPrev: { type: String },
  iconNext: { type: String },
});
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="{
      '-error': error,
      '-success': success,
      '-warning': warning,
      '-primary': primary,
    }"
  >
    <npk-icon v-if="iconPrev" :name="iconPrev" />

    <slot>text</slot>
    <npk-icon v-if="iconNext" :name="iconNext" />
  </button>
</template>

<style scoped lang="scss">
@import "@/style";

button {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid $color-white-transparent-1;
  background-color: $color-grey-3;
  color: $color-white-transparent-1;
  transition: 100ms ease-in-out background-color;
  &:hover {
    color: $color-grey-3;
    background-color: $color-white-transparent-1;
  }
}

button[disabled="disabled"],
button:disabled {
  cursor: auto;
  background: $color-white-transparent;
  color: $color-white-transparent-2;
  border: 1px solid $color-white-transparent;
}

.-error {
  border-color: $color-error;
  &:hover {
    background: $color-error;
    color: $color-white;
  }
}

.-success {
  border-color: $color-success;
  &:hover {
    background: $color-success;
    color: $color-white;
  }
}
.-warning {
  border-color: $color-warning;
  &:hover {
    background: $color-warning;
    color: $color-white;
  }
}

.-primary {
  border-color: $color-primary;
  &:hover {
    background: $color-primary;
    color: $color-white;
  }
}
</style>
