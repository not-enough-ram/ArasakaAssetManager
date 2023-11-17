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
