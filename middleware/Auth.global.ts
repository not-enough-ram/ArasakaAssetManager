import { defineNuxtRouteMiddleware } from 'nuxt/app';
import useConsoleMessages from '@/composables/useConsoleMessages';

export default defineNuxtRouteMiddleware((to, from) => {
  const { addMessage } = useConsoleMessages();

  console.log('From auth middleware');

  // In the future, add authentication logic here and check if the user has access.
  // For example:
  // if (!userHasAccess(to)) {
  //   addMessage({ type: 'error', content: `Access denied: ${to.path}` });
  //   return abortNavigation();
  // }

  // For now, simply add a success message
  addMessage({ type: 'success', content: `Access granted: ${to.path}` });
});
