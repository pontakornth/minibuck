<template>
  <div class="login">
      <LoginForm v-model:email="email" v-model:password="password" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    return {
      email,
      password,
    };
  },
  components: {
    LoginForm,
  },
};
</script>
