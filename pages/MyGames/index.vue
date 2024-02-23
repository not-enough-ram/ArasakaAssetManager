<script setup lang="ts">
import { fetchData } from '~/services/ApiService';
import type { GameSession } from '~/interface/Types';

const gamesData: Ref<GameSession[] | null> = ref(null);
onMounted(async () => {
  const uri = 'http://localhost:8080/my-games';

  const data: GameSession[] = await fetchData(uri);
  if (!data) {
    return;
  }
  gamesData.value = data;
  console.log(data);
});
</script>

<template>
  <section class="flex flex-wrap">
    <Game
      v-for="game in gamesData"
      :key="game.id"
      :title="game.title"
      :game-master="game.gameMaster"
      :image-url="game.imageUrl"
      :players="game.players"
      :description="game.description"
    />
  </section>
</template>

<style scoped></style>
