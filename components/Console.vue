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
  <div class="console">
    <div class="console-messages custom-scroll-bar">
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
    <div class="console-input">
      <BaseInput
        ref="consoleInput"
        type="text"
        v-model="userInput"
        @keyup.enter="submitInput"
        class="console-input"
        :hasFocus="consoleIsVisible"
      />
    </div>
  </div>
</template>

<style scoped>
.console {
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 550px;
  border: 2px solid;
}

.console-messages {
  overflow-y: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
  background: var(--color-bg);
}
.console-output {
  overflow-y: auto;
  flex-grow: 1;
  max-height: 100vh;
}

.console-input {
  min-height: 30px;
  margin-top: 5px;
}
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
