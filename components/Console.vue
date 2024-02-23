<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useConsoleMessages, {
  consoleIsVisible,
} from '@/composables/useConsoleMessages';
import { useRouter } from 'vue-router';
import { processInput } from '~/services/consoleService';
const { messages, initializeConsole } = useConsoleMessages();
const userInput = ref('');

const router = useRouter();
//Breadcrups?
//const currentRoute = router.currentRoute.value.path;

onMounted(() => {
  initializeConsole();
});
const userName = 'user'; //use actuall user name when auth is ready

const submitInput = () => {
  if (userInput.value.trim()) {
    processInput(userInput.value, userName, router);
    userInput.value = '';
  }
};
</script>

<template>
  <div class="flex flex-col w-96 h-96 border-2 border-primary">
    <div
      class="custom-scroll-bar overflow-y-auto flex flex-grow flex-col-reverse p-2.5 bg-bg"
    >
      <div
        v-for="(message, index) in messages.slice().reverse()"
        :key="index"
        :class="`message ${message.type}`"
      >
        <span>{{ message.author }}</span>
        <span
          v-if="
            message.type &&
            (message.type === 'error' || message.type === 'success')
          "
          :class="`${message.type}-tag`"
          >&lt;{{ message.type.toUpperCase() }}&gt;</span
        >
        {{ message.content }}
      </div>
    </div>
    <div class="mt-1.5">
      <BaseInput
        ref="consoleInput"
        type="text"
        v-model="userInput"
        @keyup.enter="submitInput"
        :hasFocus="consoleIsVisible"
      />
    </div>
  </div>
</template>

<style scoped>
.message {
  color: var(--color-tertiary);
}
.message.error {
  color: var(--color-error);
}
.message.success {
  color: var(--color-success);
}
.message.warning {
  color: var(--color-warning);
}
.message.info {
  color: var(--color-warning);
}
.console-input {
  color: var(--color-tertiary);
}
.error-tag {
  background-color: var(--color-error);
  color: white;
}
.success-tag {
  background-color: var(--color-success);
  color: white;
}
.warning-tag {
  background-color: var(--color-warning);
  color: white;
}
</style>
