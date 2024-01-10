<script setup lang="ts">
import NpkIcon from "@/components/npk-icon.vue";

const properties = defineProps({
  modelValue: { type: Boolean },
});
const emits = defineEmits(["update:modelValue"]);

function close() {
  console.log("close popup");
  emits("update:modelValue", false);
}

console.log("npk-popup", properties);
</script>

<template>
  <div class="wrapper" v-show="modelValue" @click.self="close">
    <div class="popup">
      <slot />
      <npk-icon name="bi bi-x" class="close hover" @click="close" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/style";

.popup {
  position: fixed;
  z-index: 2;
  top: 62px;
  padding: 16px;
  left: 0;
  right: 0;
  bottom: 0;
  background: $color-grey-5;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: $color-white;

  :deep(.close) {
    position: absolute;
    right: 16px;
    font-size: 24px;
    cursor: pointer;
  }
}
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: $color-black-transparent;
}
</style>
