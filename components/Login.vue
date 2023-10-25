<script setup lang="ts">

</script>

<template>
  <div class="login-area">
    <label for="login">e-mail:</label><br>
    <input name="login" type="email" text="email" autofocus /> <br>
    <label for="password">password:</label><br>
    <input name="password" type="password" /><br>
    <button v-on:submit="navigateTo('/home')" type="submit">Login</button>
  </div>
</template>

<style scoped>

</style>