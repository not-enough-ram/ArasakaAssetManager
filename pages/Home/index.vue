<script setup lang="ts">

import Sidebar from "~/components/Sidebar.vue";
import Asset from "~/components/Asset.vue";
</script>

<template>
  <StickyHeader/>
  <aside>
    <Sidebar/>
  </aside>
  <section>
    <Asset/>
  </section>
  <Footer/>
</template>

<style scoped>

</style>