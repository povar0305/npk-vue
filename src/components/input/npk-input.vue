<script setup lang="ts">
const properties=defineProps({
  modelValue: { type: String, required: true},
  label: { type: String, required: false },
  status: { type: String, required: false },
})
</script>

<template>
<div class="wrapper">
  <span class="label">{{label}}</span>
  <input type="text" :value="modelValue"/>
  <span class="status">{{ status }}</span>
</div>
</template>

<style scoped>

</style>