const { addMessage, clearMessages } = useConsoleMessages();

export function processInput(
  input: string,
  userName: string,
  router: any
): void {
  input = input.trim().toLowerCase();

  switch (input) {
    case '!clear':
      clearMessages();
      break;
    case '!help':
      showHelp();
      break;
    default:
      processCommand(input, userName, router);
      break;
  }
}

function showHelp(): void {
  const helpMessage = `Available commands:\n- clear: Clears the console messages.\n- ls or dir: Displays available directories.\n- cd <path>: Changes directory to the specified path.`;
  addMessage(
    {
      type: 'info',
      content: helpMessage,
    },
    true
  );
}

function processCommand(input: string, userName: string, router: any) {
  const serverPrefix = `${userName}$:`;

  addMessage(
    {
      type: 'message',
      content: `${serverPrefix} ${input}`,
    },
    false
  );

  const [command, ...pathParts] = input.split(' ');
  switch (command) {
    case 'cd':
      changeDirectory(pathParts, router);
      break;
    case 'ls':
      listDirectories(router);
      break;
    case 'dir':
      listDirectories(router);
      break;
  }
}

function listDirectories(router: any) {
  const routes = router.getRoutes();
  const directories = routes
    .map((route: any) => route.path)
    .filter((path: string) => path !== '/')
    .sort()
    .join('\n- ');

  const messageContent =
    directories.length > 0
      ? `Available paths:\n- ${directories}`
      : 'No available paths.';

  addMessage(
    {
      type: 'info',
      content: messageContent,
    },
    true
  );
}

function changeDirectory(pathParts: string[], router: any) {
  if (pathParts.length === 1 && pathParts[0] === '/') {
    router.push('/');
    return;
  }

  const userInputPath = `/${pathParts.join('/')}`.toLowerCase();

  if (userInputPath === '/..') {
    router.push('/');
    return;
  }

  const matchingRoute = router
    .getRoutes()
    .find((route: any) => route.path.toLowerCase() === userInputPath);

  if (matchingRoute) {
    router.push(matchingRoute.path);
  } else {
    addMessage(
      {
        type: 'error',
        content: `No such directory found: ${userInputPath}. Please ensure the path is correct.`,
      },
      true
    );
  }
}
