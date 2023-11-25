<template>
  <div class="console-container" :class="{ 'is-visible': consoleIsVisible }">
    <BaseButton @click="toggleConsole" class="toggle-console-btn"
      >Console</BaseButton
    >
    <div class="console">
      <Console />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  toggleConsole,
  consoleIsVisible,
} from '~/composables/useConsoleMessages';
</script>

<style scoped>
.console-container {
  position: fixed;
  top: 0;
  right: -450px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 9;
  transition: right 0.5s ease-in-out;
}

.console-container.is-visible {
  right: 0;
}

.console {
  width: 450px;
  padding: 5px;
  background: var(--color-bg);
}

.toggle-console-btn {
  transform: rotate(270deg);
  padding: 0.5em 1em;
  cursor: pointer;
  position: absolute;
  right: 92%;
  transform-origin: center;
}
</style>
