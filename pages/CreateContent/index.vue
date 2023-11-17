<script setup lang="ts">
import { ref } from 'vue';

type TabName = 'game' | 'asset';

const activeTab = ref<TabName>('game');
</script>

<template>
  <section
    class="p-test tabs-container mt-8 w-full h-full flex flex-col justify-center items-center inset-0"
  >
    <div class="w-full justify-start flex gap-5 border-b-2 border-primary">
      <button
        class="text-3xl p-1"
        :class="{ active: activeTab === 'game' }"
        @click="activeTab = 'game'"
      >
        Games
      </button>
      <button
        class="text-3xl p-1"
        :class="{ active: activeTab === 'asset' }"
        @click="activeTab = 'asset'"
      >
        Assets
      </button>
    </div>
    <div
      class="w-full h-full flex justify-center border-2 border-primary border-t-0"
    >
      <div v-show="activeTab === 'game'" class="mb-24 mt-5">
        <Typewriter :text="'Add a game...'" :typingDelay="150">
          <template #default="{ animatedText }">
            <h1 class="text-primary text-4xl">{{ animatedText }}</h1>
          </template>
        </Typewriter>
        <CreateGameForm />
      </div>
      <div v-show="activeTab === 'asset'" class="mb-24 mt-5">
        <Typewriter :text="'Add an asset...'" :typingDelay="150">
          <template #default="{ animatedText }">
            <h1 class="text-primary text-4xl">{{ animatedText }}</h1>
          </template>
        </Typewriter>
        <CreateAssetForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
.p-test {
  padding-left: 250px;
}
.active {
  border: 2px solid var(--color-primary);
  background: var(--color-bg);
  border-bottom: none;
  margin-bottom: -2px;
}
</style>
