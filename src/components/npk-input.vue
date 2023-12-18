<script setup lang="ts">
import NpkIcon from "@/components/npk-icon.vue";

const properties = defineProps({
  modelValue: { type: String, required: true },
  label: { type: String, required: false },
  status: { type: String, required: false },
  placeholder: { type: String, required: false },
  type: { type: String, required: false },
  cleaner: { type: Boolean, required: false, default: false },
  error: { type: String, required: false },
  disabled: { type: Boolean, required: false },
});

const emits = defineEmits(["search", "update:model-value"]);
console.log("npk-input", properties);
</script>

<template>
  <div class="wrapper" :class="{ '-disabled': disabled }">
    <span class="label" v-show="label">{{ label }}</span>
    <div
      class="input-wrapper"
      :class="{
        '-search': type == 'search',
        '-clean': cleaner,
        '-error': error,
      }"
    >
      <npk-icon
        v-if="type == 'search'"
        name="bi bi-search hover"
        class="search"
        @click="$emit('search')"
      />
      <input
        type="text"
        :value="modelValue"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <npk-icon
        v-if="cleaner"
        name="bi bi-x hover"
        class="clean"
        @click="$emit('update:model-value', '')"
      />
    </div>
    <span class="status" v-show="status && !error">{{ status }}</span>
    <span class="error" v-show="error">{{ error }}</span>
  </div>
</template>

<style scoped lang="scss">
@import "@/style";
@import "bootstrap-icons/font/bootstrap-icons.css";

.wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  color: white;
  &.-disabled span {
    color: $color-white-transparent;
  }
  &.-disabled input,
  input:hover {
    border: 1px solid $color-white-transparent;
    color: $color-white-transparent;
  }
}

input {
  display: flex;
  border: 1px solid $color-white-transparent;
  outline: none;
  background: transparent;
  border-radius: 0.25rem;
  padding: 8px 16px;
  color: $color-white-transparent-2;
  width: 100%;
}

input:hover,
input:focus {
  border-color: $color-white-transparent-1;
  color: $color-white-transparent-1;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  &.-search input {
    padding-left: 40px;
  }

  &.-clean input {
    padding-right: 40px;
  }
}

.search {
  position: absolute;
  left: 16px;
}

.clean {
  position: absolute;
  right: 16px;
}

.label {
  color: $color-white;
  margin-bottom: 0.3rem;
}
.statue {
  color: $color-white;
  margin-top: 0.3rem;
}

.error {
  margin-top: 0.3rem;
  color: $color-error;
}

.-error input {
  border-color: $color-error;
}
</style>
