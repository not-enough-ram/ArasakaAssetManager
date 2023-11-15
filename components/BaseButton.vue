<script></script>

<template>
  <button class="bg-bg w-28 h-8 flex items-center justify-center border-2 border-green-500 hover:glow hover:bg-highlight/10">
    <span class="text-primary text-center">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.hover\:glow {
  @apply transition-all duration-200 ease-in-out;
}

.hover\:glow:hover {
  box-shadow: 0 0 7px var(--color-primary), 0 0 8px var(--color-primary);
}
/* .hexagon-button {
  background-color: black;
  width: 7em; 
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #00ff00;
}

.hexagon-inner {
  color: #0f0; 
  text-align: center;
} */
</style>
