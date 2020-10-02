<template>
  <form class="login-form">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input name="email" id="email" type="email" placeholder="example@mail.com" :model="email" />
      <label for="password">Password</label>
      <input name="password" id="password" type="password" :model="password" />
  </form>
</template>

<script lang="ts">
// This is for practicing composition API
import { ref } from 'vue';

export default {
  setup() {
    const email = ref();
    const password = ref();

    return {
      email,
      password,
    };
  },
};
</script>
