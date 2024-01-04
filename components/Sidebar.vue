<template>
  <aside
    class="sidebar bg-bg border-r-2 border-primary pt-8 fixed"
    v-if="authenticated"
  >
    <ul class="bg-bg mb-8">
      <li class="w-full flex items-center">
        <span class="icon-folder mx-5"></span
        ><button @click="navigateTo('/mygames')">
          <span class="hover:inverted p-1">Show My Games</span>
        </button>
      </li>
      <li class="w-full flex items-center">
        <span class="icon-folder mx-5"></span
        ><button @click="navigateTo('/myassets')">
          <span class="hover:inverted p-1">Show My Assets</span>
        </button>
      </li>
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
  box-sizing: border-box;
  height: 100%;
  width: 250px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 15px; /* Spacing between items */
}
</style>
