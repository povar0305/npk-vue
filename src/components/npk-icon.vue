<template>
  <i :class="name"></i>
</template>

<script lang="ts" setup>
const properties = defineProps({
  name: { type: String, required: true },
});
console.log("npm-icon", properties);
</script>

<style scoped>
@import "bootstrap-icons/font/bootstrap-icons.css";
.hover {
  opacity: 0.8;
  cursor: pointer;
  transition: 2ms ease-in-out;
}

.hover:hover {
  opacity: 1;
}
</style>
