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
import { defineComponent } from 'vue';
// This is for practicing composition API
export default defineComponent({
  props: {
    email: String,
    password: String,
  },
  setup(props, { emit }) {
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
});
</script>
