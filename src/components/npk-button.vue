<script setup lang="ts"></script>

<template>
  <button type="button">
    <slot>text</slot>
  </button>
</template>

<style scoped lang="scss">
button {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 0.25rem;
  outline: none;
}
</style>
