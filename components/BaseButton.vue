<script setup lang="ts">

</script>

<template>
  <button class="border-green-500 bg-black text-green-500 rounded-xl" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
</style>