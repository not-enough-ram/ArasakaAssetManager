<script setup lang="ts">
import { fetchData } from "~/services/ApiService";

//todo remove this assignment asap
const assetsData = ref();
onMounted(async () => {
  const uri = "http://localhost:8080/my-assets";
  const data = await fetchData(uri);

  if (!data) {
    return;
  }

  assetsData.value = data;
  console.log(data);
});
</script>

<template>
  <h1>My Assets</h1>
  <Asset
    v-for="asset in assetsData"
    :key="asset.id"
    :title="asset.title"
    :description="asset.description"
    :owner="asset.owner"
    :image-url="asset.imageUrl"
  />
</template>

<style scoped></style>
