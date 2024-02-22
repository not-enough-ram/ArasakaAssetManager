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
  <div class="retro-container">
    <h3 class="retro-title">{{ props.title }}</h3>
    <p class="retro-text">{{ props.gameMaster }}</p>
    <p class="retro-desc">{{ props.description }}</p>
    <ul>
      <li v-for="(player, index) in props.players" :key="index" class="retro-list-item">{{ player }}</li>
    </ul>
    <img :src="props.imageUrl" class="w-40 h-auto pixelated" alt="Some Image" />
  </div>
</template>

<style scoped>
  .retro-container {
    font-family: 'Courier New', monospace;
    background-color: #000;
    color: #0f0;
    padding: 20px;
    border: 1px solid #0f0;
    width: 640px;
    margin: 20px;
    box-shadow: 0 0 0 4px rgb(2, 76, 2);
  }

  .retro-title {
    font-size: 1.25rem; /* 20px */
    font-weight: bold;
    font-style: italic;
  }

  .retro-text {
    font-size: 0.875rem; /* 14px */
  }

  .retro-desc {
    font-size: 0.875rem; /* 14px */
    font-weight: bold;
    font-style: italic;
  }

  .retro-list-item {
    font-size: 0.875rem; /* 14px */
  }

  .pixelated {
    image-rendering: pixelated; /* Gives the image a pixelated look */
  }
</style>
