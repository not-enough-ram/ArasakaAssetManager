<script setup lang="ts">
import {fetchData} from '../../services/ApiService'
const mockedData = [
  {
    id: "dataset_001",
    title: "Cosmic Exploration",
    description: "Delve into the mysteries of the universe with this immersive space adventure.",
    owner: "James T. Kirk",
    imageUrl: "https://example.com/images/cosmic_exploration.jpg"
  },
  {
    id: "dataset_002",
    title: "Historical Journey",
    description: "Travel back in time to witness key moments in history.",
    owner: "Ada Lovelace",
    imageUrl: "https://example.com/images/historical_journey.jpg"
  },
  {
    id: "dataset_003",
    title: "Underwater World",
    description: "Experience the vibrant life and hidden treasures beneath the ocean's surface.",
    owner: "Jacques Cousteau",
    imageUrl: "https://example.com/images/underwater_world.jpg"
  },
  {
    id: "dataset_004",
    title: "Mountain Adventure",
    description: "Explore the rugged beauty of the world's most awe-inspiring mountain ranges.",
    owner: "Edmund Hillary",
    imageUrl: "https://example.com/images/mountain_adventure.jpg"
  },
  {
    id: "dataset_005",
    title: "Urban Safari",
    description: "Discover the hidden gems and fascinating stories of the city.",
    owner: "Jane Jacobs",
    imageUrl: "https://example.com/images/urban_safari.jpg"
  }
];

//todo remove this assignment asap
const assetsData = ref(mockedData)
onMounted(async () => {
  const uri = '/my-assets';
  const data = await fetchData(uri);

  if(!data && !mockedData){
    return
  }

  assetsData.value =  mockedData || data
  console.log(data);
});

</script>

<template>
  <h1>My Games</h1>
  <Game v-for="asset in assetsData" :id = "asset.id" :title = "asset.title" :description = "asset.description" :owner = "asset.owner" :image-url = "asset.imageUrl"/>
</template>

<style scoped>

</style>