<template>
  <div class="login">
      <LoginForm v-model:email="email" :onSubmit="login" v-model:password="password" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
// TODO: Find a way to fix this
// eslint-disable-next-line import/no-cycle
import router from '../router';
import LoginForm from '../components/LoginForm.vue';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const login = () => {
      router.push('/budget');
    };
    return {
      email,
      password,
      login,
    };
  },
  components: {
    LoginForm,
  },
});
</script>

<style lang="stylus">
.login
  display flex
  justify-content center
</style>
