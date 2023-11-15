<script setup lang="ts">
const text = "Follow the white Rabbit..."
</script>

<template>
  <CreateGameForm/>
  <Typewriter :text="text" :typingDelay="150">
      <template #default="{ animatedText }">
        <h1 class="text-primary font-mono text-3xl">{{ animatedText }}</h1>
      </template>
  </Typewriter>
</template>

<style scoped>

</style>