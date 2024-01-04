<script></script>

<template>
  <button
    class="bg-bg w-28 h-8 flex items-center justify-center border-2 border-green-500 hover:glow hover:bg-highlight/10"
  >
    <span class="text-primary text-center">
      <slot></slot><span class="text-2xl">.</span>
    </span>
  </button>
</template>

<style scoped>
.hover\:glow {
  @apply transition-all duration-200 ease-in-out;
}

.hover\:glow:hover .text-2xl {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
