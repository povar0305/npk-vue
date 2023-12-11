<script setup lang="ts">
const properties=defineProps({
  modelValue: { type: String, required: true},
  label: { type: String, required: false },
  status: { type: String, required: false },
  placeholder: { type: String, required: false },
  type: { type: String, required: false },
})
console.log('npk-input',properties)
</script>

<template>
<div class="wrapper">
  <span class="label" v-if="label">{{label}}</span>
  <div class="input">
    <input type="text" :value="modelValue" :placeholder="placeholder"/>
    {{type}}
  </div>
  <span class="status" v-show="status">{{ status }}</span>
</div>
</template>

<style scoped>

</style>