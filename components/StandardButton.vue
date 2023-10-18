<script setup lang="ts">

</script>

<template>
  <button class="my-button" @click="">
    <slot></slot>
  </button>
</template>

<style scoped>
.my-button {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;
}

.my-button.default {
  background-color: #333;
  color: #fff;
}

.my-button.primary {
  background-color: #ff7f00;
  color: #333;
}

.my-button.disabled {
  background-color: #555;
  color: #888;
  cursor: not-allowed;
}

.my-button.default:hover {
  background-color: #555;
}

.my-button.primary:hover {
  background-color: #ff9e42;
}

.my-button.large {
  font-size: 20px;
  padding: 12px 24px;
}

.my-button.icon {
  display: flex;
  align-items: center;
}

.my-button.icon i {
  margin-right: 8px;
}

.my-button.icon-reverse i {
  margin-right: 0;
  margin-left: 8px;
}

.my-button.icon i,
.my-button.icon-reverse i {
  font-size: 20px;
}

.my-button.round {
  border-radius: 50%;
}

.my-button.outlined {
  background-color: transparent;
  border: 2px solid #ff7f00;
  color: #ff7f00;
}

.my-button.outlined.default:hover {
  background-color: rgba(51, 51, 51, 0.3);
}
</style>