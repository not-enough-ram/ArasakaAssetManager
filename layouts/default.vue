<script setup lang="ts"></script>

<template>
  <Navbar />
  <div
    class="w-full h-full absolute top-0 -z-10 flex justify-center opacity-25"
  >
    <ArasakaLogo/>
  </div>
  <div class="flex flex-col h-screen">
    <main class="mainContent h-screen">
      <slot />
    </main>
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
  background-color: black;
}
</style>
