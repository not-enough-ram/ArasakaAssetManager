<script></script>

<template>
  <button class="hexagon-button">
    <span class="hexagon-inner">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.hexagon-button {
  background-color: black;
  width: 7em; /* Adjust as needed */
  height: 2em; /* Three times the width */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #00ff00;
}

.hexagon-inner {
  color: #0f0; /* Matrix green color */
  text-align: center;
}
</style>
