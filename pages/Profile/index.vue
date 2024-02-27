<script setup lang="ts">
import { fetchData } from '~/services/ApiService';
import type { Profile } from '~/interface/Types';

const profileData: Ref<Profile | null> = ref(null);
onMounted(async () => {
  const uri = 'http://localhost:8080/my-profile';
  const data: Profile = await fetchData(uri);
  if (!data) {
    return;
  }
  profileData.value = data;
  console.log(data);
});
</script>

<template>
  <div>
    Name: {{ profileData?.name }}
    <div v-for="asset in profileData?.assets">
      <Asset
        :key="asset.id"
        :title="asset.title"
        :description="asset.description"
        :owner="asset.owner"
        :image-url="asset.imageUrl"
      />
    </div>
    <div v-for="game in profileData?.games">
      <Game
        :key="game.id"
        :title="game.title"
        :game-master="game.gameMaster"
        :image-url="game.imageUrl"
        :players="game.players"
        :description="game.description"
      />
    </div>
  </div>
</template>

<style scoped></style>
