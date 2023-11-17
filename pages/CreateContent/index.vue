<script setup lang="ts"></script>

<template>
  <section
    class="mt-8 w-full h-full flex flex-col justify-center items-center inset-0"
  >
    <Typewriter :text="'Add a game...'" :typingDelay="150" class="mb-5">
      <template #default="{ animatedText }">
        <h1 class="text-primary text-4xl">{{ animatedText }}</h1>
      </template>
    </Typewriter>
    <CreateGameForm />
    <Typewriter :text="'Add an asset...'" :typingDelay="150" class="mb-5 mt-5">
      <template #default="{ animatedText }">
        <h1 class="text-primary text-4xl">{{ animatedText }}</h1>
      </template>
    </Typewriter>
    <CreateAssetForm />
  </section>
</template>

<style scoped></style>
