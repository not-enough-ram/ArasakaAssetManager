<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchData } from '../../services/ApiService';

const loadingProgress = ref(0);

async function loadData() {
  // Call fetchData with the test flag set to true
  await fetchData(
    '/test-endpoint',
    (progress) => {
      loadingProgress.value = progress;
    },
    true
  );
}

onMounted(loadData);
</script>

<template>
  <div>
    <LoadingIndicator :loading-percentage="loadingProgress" />
  </div>
</template>

<style scoped></style>
