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
  <div
    class="bg-bg p-5 border-2 border-primary w-1/4 m-5 font-curier shadow-custom-border"
  >
    <p>{{ props.id }}</p>
    <p class="text-xl font-bold italic">{{ props.title }}</p>
    <p class="text-sm">{{ props.description }}</p>
    <p class="text-sm">{{ props.owner }}</p>
    <img :src="props.imageUrl" class="w-40 h-auto pixelated" />
  </div>
</template>

<style scoped>
.pixelated {
  image-rendering: pixelated; /* Gives the image a pixelated look */
}
</style>
