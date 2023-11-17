<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useConsoleMessages from '@/composables/useConsoleMessages';
import { useRouter } from 'vue-router';

const { messages, addMessage, clearMessages, initializeConsole } =
  useConsoleMessages();
const userInput = ref('');

const router = useRouter();
//Breadcrups?
//const currentRoute = router.currentRoute.value.path;

onMounted(() => {
  initializeConsole();
});
const userName = 'user'; //use actuall user name when auth is ready

//TODO: smaller functions/Switch case
/* const submitInput = () => {
  if (userInput.value.trim()) {
    const input = userInput.value.trim().toLowerCase();

    if (input === 'clear') {
      clearMessages();
    } else {
      const serverPrefix = `${userName}$:`;
      addMessage(
        {
          type: 'message',
          content: `${serverPrefix} ${input}`,
        },
        false
      );

      const [command, ...pathParts] = input.split(' ');
      if (command === 'cd') {
        const pathInput = pathParts.join('/').replace(/^\/+/, '');
        const normalizedPathInput = `/${pathInput
          .charAt(0)
          .toUpperCase()}${pathInput.slice(1)}`;

        if (
          router.getRoutes().some((route) => route.path === normalizedPathInput)
        ) {
          router.push(normalizedPathInput);
        } else {
          addMessage(
            {
              type: 'error',
              content: `ERROR: No such directory found: ${normalizedPathInput}`,
            },
            true
          );
        }
      }
    }

    userInput.value = '';
  }
}; */
const submitInput = () => {
  if (userInput.value.trim()) {
    const input = userInput.value.trim().toLowerCase();

    if (input === 'clear') {
      clearMessages();
    } else if (input === '!help') {
      const helpMessage = `Available commands:\n- clear: Clears the console messages.\n- cd <path>: Changes directory to the specified path.`;
      addMessage(
        {
          type: 'info',
          content: helpMessage,
        },
        true
      );
    } else {
      const serverPrefix = `${userName}$:`;
      addMessage(
        {
          type: 'message',
          content: `${serverPrefix} ${input}`,
        },
        false
      );

      const [command, ...pathParts] = input.split(' ');
      if (command === 'cd') {
        const pathInput = pathParts.join('/').replace(/^\/+/, '');
        const normalizedPathInput = `/${pathInput
          .charAt(0)
          .toUpperCase()}${pathInput.slice(1)}`;

        if (
          router.getRoutes().some((route) => route.path === normalizedPathInput)
        ) {
          router.push(normalizedPathInput);
        } else {
          addMessage(
            {
              type: 'error',
              content: `ERROR: No such directory found: ${normalizedPathInput}`,
            },
            true
          );
        }
      }
    }

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
      />
    </div>
  </div>
</template>

<style scoped>
.console {
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 450px;
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
  min-height: 40px;
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
</style>
