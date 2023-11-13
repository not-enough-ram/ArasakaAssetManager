<script setup lang="ts">

import {BaseButton} from "#components";
</script>

<template>
  <h2>Footer</h2>
  <nav>
    <ul>
      <li><BaseButton v-on:click="navigateTo('/about')" >About</BaseButton></li>
      <li><BaseButton v-on:click="navigateTo('/contact')" >Contact</BaseButton></li>
    </ul>
  </nav>
</template>

<style scoped>

</style>