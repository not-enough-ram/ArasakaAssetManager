<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen">
    <section class="mainContent h-screen">
      <slot />
    </section>
    <div class="relative">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.mainContent {
  width: 100%;
  height: 100%;
}
.hidden {
  display: none;
}
</style>
