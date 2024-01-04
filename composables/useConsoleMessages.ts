import { ref } from 'vue';
export const consoleIsVisible = ref(false);

export function toggleConsole() {
  return (consoleIsVisible.value = !consoleIsVisible.value);
}

interface ConsoleMessage {
  author?: string;
  type: 'error' | 'success' | 'warning' | 'info' | 'message';
  content: string;
  showType?: boolean;
}

const messages = ref<ConsoleMessage[]>([]);

const addMessage = (
  message: ConsoleMessage,
  isSystemMessage: boolean = true
) => {
  message.author = isSystemMessage ? 'arasaka.net:' : '';

  const showType =
    isSystemMessage && (message.type === 'error' || message.type === 'success');

  if (message.type === 'error' && !consoleIsVisible.value) {
    toggleConsole();
  }

  messages.value.push(message);
};

const clearMessages = () => {
  messages.value = [];
};

const initializeConsole = () => {
  addMessage({ type: 'info', content: 'connecting...' });
  setTimeout(() => {
    addMessage({ type: 'success', content: 'Connection established' });
  }, 1000);
};

export default function useConsoleMessages() {
  return { messages, addMessage, clearMessages, initializeConsole };
}
