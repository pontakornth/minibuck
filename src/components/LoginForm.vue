<template>
  <form class="login-form">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input name="email" id="email" type="email" :value="email" @input="updateEmail"/>
      <label for="password">Password</label>
      <input name="password" id="password" type="password" :value="password"
          @input="updatePassword" />
  </form>
</template>

<script lang="ts">
// This is for practicing composition API
// TODO: Update the type to actual type
export default {
  props: {
    email: String,
    password: String,
  },
  setup(props: any, { emit }: any) {
    const updateEmail = (e: any) => {
      emit('update:email', e.target.value);
    };
    const updatePassword = (e: any) => {
      emit('update:password', e.target.value);
    };
    return {
      updateEmail,
      updatePassword,
    };
  },
};
</script>
