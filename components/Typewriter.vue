<template>
    <div class="bg-bg">
      <div class="typewriter flex items-center justify-start" ref="typewriter">
        <slot :animatedText="animatedText" />
        <span class="blinker text-primary" ref="blinker">|</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    text: {
      type: String,
      default: ''
    },
    typingDelay: {
      type: Number,
      default: 150
    }
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
      }
    }, props.typingDelay);
  }
  
  onMounted(() => {
    startTypingAnimation(props.text);
  });
  
  watch(() => props.text, (newText) => {
    startTypingAnimation(newText);
  });
  
  onMounted(async () => {
    await nextTick();
    if (typewriter.value instanceof HTMLElement) {
      const typewriterElement = typewriter.value.querySelector(':scope > :first-child') as HTMLElement; 
      const computedStyle = window.getComputedStyle(typewriterElement);
      if (blinker.value instanceof HTMLElement) { 
        blinker.value.style.fontSize = computedStyle.fontSize;
      }
    }
  });
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
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  </style>
  