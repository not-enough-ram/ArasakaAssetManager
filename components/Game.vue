<script setup lang="ts">
  const props = defineProps({
    id: String,
    title: String,
    gameMaster: String,
    players: Array.of(String),
    description: String,
    imageUrl: String
  });
</script>

<template>
  <p>{{ props.title }}</p>
  <p>{{ props.gameMaster }}</p>
  <p>{{ props.description }}</p>
  <ul>
    <li v-for="(player, index) in props.players" :key = "index">{{ player }}</li>
  </ul>
  <p>{{ props.imageUrl }}</p>
</template>

<style scoped>

</style>