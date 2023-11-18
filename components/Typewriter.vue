<template>
  <div class="bg-bg">
    <div class="typewriter flex items-center justify-start" ref="typewriter">
      <slot :animatedText="animatedText" />
      <span v-if="showBlinker" class="blinker text-primary" ref="blinker"
        >|</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  typingDelay: {
    type: Number,
    default: 150,
  },
  blinkerVisibleAfter: {
    type: Boolean,
    default: false,
  },
  showBlinker: {
    type: Boolean,
    default: true,
  },
});

const animatedText = ref('');
const typewriter: Ref<HTMLElement | null> = ref(null);
const blinker: Ref<HTMLElement | null> = ref(null);

function startTypingAnimation(text: string) {
  let index = 0;
  animatedText.value = '';

  const timer = setInterval(() => {
    if (index < text.length) {
      animatedText.value += text.charAt(index);
      index++;
    } else {
      clearInterval(timer);
      if (!props.blinkerVisibleAfter && blinker.value) {
        blinker.value.style.display = 'none';
      }
    }
  }, props.typingDelay);
}

onMounted(async () => {
  startTypingAnimation(props.text);

  await nextTick();
  if (typewriter.value) {
    const computedStyle = window.getComputedStyle(typewriter.value);
    if (blinker.value) {
      blinker.value.style.display = props.showBlinker ? 'inline' : 'none';
      blinker.value.style.fontSize = computedStyle.fontSize;
    }
  }
});

watch(
  () => props.text,
  (newText) => {
    startTypingAnimation(newText);
  }
);
</script>

<style>
.typewriter {
  white-space: nowrap;
  overflow: hidden;
}

.blinker {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
