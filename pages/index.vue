<template>
  <div class="h-1/2 grid auto-cols-auto-auto gap-x-0 gap-y-0">
    <DesktopIcon linkTarget="/mygames" linkText="My Games" icon="folder-open" />
    <DesktopIcon
      linkTarget="/myassets"
      linkText="My Assets"
      icon="folder-open"
    />
    <DesktopIcon
      @iconClick="toggleConsole"
      linkTarget=""
      linkText="Console"
      icon="terminal"
    />
    <DesktopIcon linkTarget="/profile" linkText="Profile" icon="profile" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
