<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';
</script>

<template>
  <StickyHeader />
  <div class="container">
    <aside>
      <Sidebar />
    </aside>
    <section class="mainContent">
      <slot />
    </section>
  </div>
  <div>
    <ConsoleWrapper />
  </div>
  <Footer />
  <div class="fixed bottom-0 right-0">
    <Coordinates />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.mainContent {
  width: calc(100% - 250px);
  padding-left: 260px;
  padding-top: 15px;
}
</style>
