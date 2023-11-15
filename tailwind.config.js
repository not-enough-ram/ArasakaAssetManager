/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF00', // Vibrant Green
        secondary: '#0000FF', // Neon Blue
        //tertiary: '#A0A0A0', // Metallic Gray
        error: '#FF0000', // Bright Red
        bg: 'var(--color-background)',
        highlight: '#FF00FF', // Neon Pink
        warning: '#FFA500', // Orange
        //success: '#008000', // Bright Green
        //information: '#5F9EA0', // Light Blue
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

