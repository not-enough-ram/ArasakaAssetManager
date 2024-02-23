<template>
  <div class="w-full bg-black relative">
    <div
      class="loading-bar p-5 flex justify-center items-center text-3xl bg-primary relative h-6"
      :style="{ width: loadingPercentage + '%' }"
    >
      <span class="text-content">{{ loadingPercentage }}%</span>
    </div>
    <div
      class="loading-text absolute inset-0 flex justify-center items-center text-3xl pointer-events-none"
    >
      {{ loadingPercentage }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps({
  loadingPercentage: {
    type: Number,
    default: 0,
  },
});

const loadingPercentage = ref(props.loadingPercentage);

watchEffect(() => {
  loadingPercentage.value = props.loadingPercentage;
});
</script>

<style scoped>
.loading-bar {
  transition: width 0.3s;
}

.text-content {
  @apply text-black;
  mix-blend-mode: difference;
}

.loading-text {
  color: var(--color-primary);
  mix-blend-mode: difference;
}
</style>
