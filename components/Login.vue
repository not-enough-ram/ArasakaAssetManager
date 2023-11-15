<script setup lang="ts">

  import {BaseButton} from "#components";

  const user = ref({
    username: '',
    password: '',
  });

  const login = async () => {

  };
</script>

<template>
  <div class="">
    <div>
      <label for="username" class="text-primary"><b>Username</b></label>
      <input
          v-model="user.username"
          type="text"
          class=""
          placeholder="Enter Username"
          name="username"
          required
      />
    </div>
    <div class="shrink-0">
      <label for="password" class=""><b>Password</b></label>
      <input
          v-model="user.password"
          type="password"
          class=""
          placeholder="Enter Password"
          name="password"
          required
      />
    </div>
    <div>
      <BaseButton @click.prevent="login">Login</BaseButton>
    </div>
  </div>
</template>

<style scoped>
</style>