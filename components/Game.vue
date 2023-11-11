<script setup lang="ts">
  const props = defineProps({
    title: String,
    gameMaster: String,
    players: Array,
    imageUrl: String
  });
</script>

<template>
  <p>{{ props.title }}</p>
  <p>{{ props.gameMaster }}</p>
  <ul>
    <li v-for="player in props.players">{{ player }}</li>
  </ul>
  <p>{{ props.imageUrl }}</p>
</template>

<style scoped>

</style>