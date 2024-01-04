/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        error: 'var(--color-error)',
        bg: 'var(--color-bg)',
        highlight: 'var(--color-highlight)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
        information: 'var(--color-information)',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        arasaka: ['"rabikiso"', 'serif'],
      },
      maxWidth: {
        360: '360px',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
      textColor: ['before', 'after'],
    },
  },
  plugins: [],
};
