<template>
  <aside class="sidebar" v-if="authenticated">
    <ul>
      <li><button @click="navigateTo('/mygames')">Show My Games</button></li>
      <li><button @click="navigateTo('/myassets')">Show My Assets</button></li>
      <!-- Add more sidebar entries here -->
    </ul>
  </aside>
</template>

<script setup>
const authenticated = true;
// import {authenticateUser} from '../services/AuthenticationService.js'
// const authenticated = ref(false)
// authenticated.value = authenticateUser("123123", "user");

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
