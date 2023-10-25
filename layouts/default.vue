<script setup lang="ts">
import Sidebar from "~/components/Sidebar.vue";
</script>

<template>
  <StickyHeader/>
  <aside>
    <Sidebar/>
  </aside>
  <section class="mainContent">
    <slot/>
  </section>
  <Footer/>
</template>

<style scoped>

</style>