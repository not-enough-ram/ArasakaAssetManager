<template>
  <div class="flex items-end space-x-2 mb-1">
    <div
      class="bg-primary w-2.5"
      :style="{ height: Math.max(10, barHeightX) + 'px' }"
    ></div>
    <div
      class="bg-primary w-2.5"
      :style="{ height: Math.max(10, barHeightY) + 'px' }"
    ></div>
    <div
      class="bg-primary w-2.5"
      :style="{ height: Math.max(10, barHeightCombined) + 'px' }"
    ></div>
  </div>
  <div class="coordinates text-primary text-xs">
    {{ formattedMouseX }}, {{ formattedMouseY }}
  </div>
</template>

<script setup lang="ts">
const mouseX = ref(0);
const mouseY = ref(0);

let barHeightX: Ref<number>;
let barHeightY: Ref<number>;
let barHeightCombined: Ref<number>;

const updateMousePosition = (event: MouseEvent) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

const formattedMouseX = computed(() =>
  mouseX.value.toString().padStart(4, '0')
);
const formattedMouseY = computed(() =>
  mouseY.value.toString().padStart(4, '0')
);

if (process.client) {
  barHeightX = computed(() => (mouseX.value / window.innerWidth) * 100);
  barHeightY = computed(() => (mouseY.value / window.innerHeight) * 100);
  barHeightCombined = computed(
    () =>
      ((mouseX.value + mouseY.value) /
        (window.innerWidth + window.innerHeight)) *
      100
  );
} else {
  barHeightX = ref(0);
  barHeightY = ref(0);
  barHeightCombined = ref(0);
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('mousemove', updateMousePosition);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', updateMousePosition);
  }
});
</script>

<style scoped>
.coordinates {
  min-width: 100px;
}
</style>
