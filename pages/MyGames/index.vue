<script setup lang="ts">
  import {fetchData} from '../../services/ApiService'

  const gamesData = ref(null)
  onMounted(async () => {
    const uri = 'https://example.com/data';
    const data = await fetchData(uri);
    if(!data){
      return
    }
    gamesData.value =  data
    console.log(data);
  });

</script>

<template>
  <h1>My Games</h1>
  <Game v-for="game in gamesData" :title = "game.title" :game-master = "game.gameMaster" :image-url = "game.imageUrl" :players = "game.players"/>
</template>

<style scoped>

</style>