<script setup lang="ts">
const properties = defineProps({
  modelValue: { type: Boolean },
});
const emits = defineEmits(["update:modelValue"]);
console.log("npk-switch", properties);
</script>

<template>
  <label>
    <input
      type="checkbox"
      @click.self="$emit('update:modelValue', $event.target.checked)"
    />Toggle{{ modelValue }}</label
  >
</template>

<style scoped lang="scss">
@import "@/style";

input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 30px;
  height: 100%;
  background: $color-grey-2;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  background: $color-white;
  border-radius: 90px;
  transition: 0.5s;
}
label:has(input:checked) {
  background: $color-sky-blue;
}
label:has(input:checked)::after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

label:active:after {
  width: 130%;
}
</style>
