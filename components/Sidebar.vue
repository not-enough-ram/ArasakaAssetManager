<template>
  <aside class="sidebar">
    <ul>
      <li><button @click="navigateTo('/mygames')">Show My Games</button></li>
      <li><button @click="navigateTo('/myassets')">Show My Assets</button></li>
      <!-- Add more sidebar entries here -->
    </ul>
  </aside>
</template>

<script setup>
const showGames = () => {
  // Logic to show games
};

const showAssets = () => {
  // Logic to show assets
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f0f0f0;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px; /* Spacing between items */
}
</style>
