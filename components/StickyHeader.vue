<link rel="stylesheet" href="../assets/sass/style.css">
<script setup lang="ts">
  import { defineComponent } from 'vue';

  defineComponent({
    components:{
    },
    methods: {
    }
  })

</script>

<template>
  <header class="sticky-header">
    <div class="logo">
      <img src="../assets/images/arasaka_green.png" height="50" alt="a cat"/>
    </div>
    <div>
      <h2 class="name">arasaka asset manager</h2>
    </div>
    <nav>
      <ul>
        <li><button v-on:click="navigateTo('/')" >Home</button></li>
        <li><button v-on:click="navigateTo('/about')" >About</button></li>
        <li><button v-on:click="navigateTo('/contact')" >Contact</button></li>
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
  }

  .logo img {
    max-height: 50px;
  }

  .name {
    font-family: cedge1,serif;
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