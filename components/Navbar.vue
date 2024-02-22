<template>
  <div
    class="w-full fixed flex items-center mb-1.5 border-b-2 border-primary p-1 bg-black z-20"
  >
    <div class="flex-none">
      <a
        v-if="!isHomePage"
        @click.prevent="navigateTo('/')"
        class="cursor-pointer"
      >
        <span>&lt; Back</span>
      </a>
    </div>
    <div class="flex-grow text-center">
      <span class="text-gray-400"> LocalDisc(C:) > </span>
      <a href="/" class="text-blue-500 hover:text-blue-700">home</a>
      <span v-for="(segment, index) in pathSegments" :key="index">
        <span>/</span>
        <a
          :href="segment.path"
          class="text-blue-500 hover:text-blue-700"
          v-html="segment.name"
        ></a>
      </span>
    </div>
    <div class="flex-none">
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isHomePage = computed(() => route.path === '/');

const navigateTo = (path: string) => {
  router.push(path);
};

const pathSegments = computed(() => {
  const segments = route.path.split('/').filter(Boolean);
  return segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    return { name: segment, path };
  });
});
</script>

<style>

</style>
