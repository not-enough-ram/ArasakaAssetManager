<script setup lang="ts">
import { BaseButton } from '#components';
const authenticated = true;
</script>

<template>
  <header class="sticky-header border-b-2 border-primary">
    <div class="logo">
      <img src="../assets/images/arasaka_green.png" height="50" alt="a cat" />
    </div>
    <div>
      <h2 class="name">arasaka asset manager</h2>
    </div>
    <nav>
      <ul>
        <li><BaseButton @click="navigateTo('/')">Home</BaseButton></li>
        <li>
          <BaseButton v-if="!authenticated" @click="navigateTo('/login')"
            >Login</BaseButton
          >
        </li>
        <li>
          <BaseButton v-if="authenticated" @click="navigateTo('/profile')"
            >Profile</BaseButton
          >
        </li>
        <li>
          <BaseButton v-if="authenticated" @click="navigateTo('/createcontent')"
            >Add Stuff</BaseButton
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@font-face {
  font-family: 'cedge1';
  src: url('../assets/fonts/cedge1.ttf') format('truetype');
}

.sticky-header {
  position: sticky;
  top: 0;
  background-color: #000000;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.logo img {
  max-height: 50px;
}

.name {
  font-family: cedge1, serif;
  color: #13eb5e;
  font-size: xx-large;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav li {
  margin: 0 10px;
}

nav a {
  text-decoration: none;
  color: #72f502;
}
</style>
