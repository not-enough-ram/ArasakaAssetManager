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
  <p>{{ props.title }}</p>
  <p>{{ props.gameMaster }}</p>
  <p>{{ props.description }}</p>
  <ul>
    <li v-for="(player, index) in props.players" :key="index">{{ player }}</li>
  </ul>
  <img :src="props.imageUrl" width="200px" height="200px" />
</template>

<style scoped></style>
