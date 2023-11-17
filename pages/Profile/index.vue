<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchData } from '../../services/ApiService';
import useLoadingState from '@/composables/useLoadingState';
const { isLoading, showLoading, hideLoading } = useLoadingState();
const loadingProgress = ref(0);

const loadData = async () => {
  showLoading();
  await fetchData(
    '/test-endpoint',
    (progress) => {
      loadingProgress.value = progress;
    },
    true
  );
  hideLoading();
};

onMounted(loadData);
</script>

<template>
  <div>
    <LoadingIndicator :loading-percentage="loadingProgress" v-if="isLoading" />
  </div>
</template>

<style scoped></style>
