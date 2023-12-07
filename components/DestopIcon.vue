<template>
  <div class="icon-wrapper m-5 w-24 h-24 cursor-pointer">
    <a @click="navigateTo(`${props.linkTarget}`)">
      <div class="flex flex-col justify-center">
        <div :class="`icon-${props.icon} text-5xl text-center`"></div>
        <span class="link-text font-mono font-bold text-center">{{
          props.linkText
        }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  linkTarget: String,
  icon: String,
  linkText: String,
});
</script>

<style scoped>
.icon-wrapper:hover .link-text {
  color: var(--color-bg);
  background: var(--color-primary);
}
</style>
