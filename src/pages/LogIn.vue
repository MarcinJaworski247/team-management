<template>
  <div class="login-form">
    <h1>Log in</h1>
    <div>
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
      />
    </div>
    <div>
      <button @click="login">Log in</button>
    </div>
    <div>
      <router-link :to="{ name: 'signup' }">Sign up</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const { email, password } = storeToRefs(authStore);

const { login } = mapActions(useAuthStore, ["login"]);
</script>
<style lang="scss" scoped>
.login-form {
  width: 400px;
  border: 1px solid black;
}
</style>
