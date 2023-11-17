<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  description: String,
  owner: String,
  imageUrl: String,
});
</script>

<template>
  <p>{{ props.id }}</p>
  <p>{{ props.title }}</p>
  <p>{{ props.description }}</p>
  <p>{{ props.owner }}</p>
  <img :src="props.imageUrl" class="w-20" />
</template>

<style scoped></style>
