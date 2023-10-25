<script setup lang="ts">

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
      <label for="username" class="text-green-500"><b>Username</b></label>
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
      <button @click.prevent="login" class="bg-black text-green-500 border-2 border-green-500 rounded-xl shadow">Login</button>
    </div>
  </div>
</template>

<style scoped>
</style>