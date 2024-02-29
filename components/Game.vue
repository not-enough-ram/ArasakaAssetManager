<script setup lang="ts">
const props = defineProps({
  id: String,
  title: String,
  gameMaster: String,
  players: Array,
  description: String,
  imageUrl: String,
});
</script>

<template>
  <div class="bg-bg p-5 border-2 border-primary w-1/4 m-5 font-curier shadow-custom-border">
    <p class="text-xl font-bold italic">{{ props.title }}</p>
    <p class="text-sm">{{ props.gameMaster }}</p>
    <p class="text-sm">{{ props.description }}</p>
    <ul>
      <li v-for="(player, index) in props.players" :key="index" class="retro-list-item">{{ player }}</li>
    </ul>
    <img :src="props.imageUrl" class="w-40 h-auto pixelated" alt="Some Image" />
  </div>
</template>

<style scoped>
  .pixelated {
    image-rendering: pixelated; /* Gives the image a pixelated look */
  }
</style>
