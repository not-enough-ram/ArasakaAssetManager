<script setup lang="ts"></script>

<template>
  <Navbar />
  <div
    class="w-full h-full absolute top-0 -z-10 flex justify-center opacity-25"
  >
    <ArasakaLogo class="pixelated" />
  </div>
  <div class="flex flex-col h-screen">
    <section class="mainContent h-screen">
      <slot />
    </section>
    <div class="relative">
      <Footer />
    </div>
  </div>
  <div v-if="consoleIsVisible" class="absolute bottom-24 right-5">
    <Console />
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
