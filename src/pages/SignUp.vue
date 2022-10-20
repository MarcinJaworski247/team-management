<template>
  <div class="signup-form">
    <h1>Sign up</h1>
    <div>
      <label for="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        v-model="firstName"
      />
    </div>
    <div>
      <label for="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        v-model="lastName"
      />
    </div>
    <div>
      <label for="email">Email address</label>
      <input
        type="email"
        id="email"
        v-model="email"
      />
    </div>
    <div>
      <label for="email">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
      />
    </div>
    <div>
      <button @click="signup">Sign up</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const { firstName, lastName, email, password } = storeToRefs(authStore);

const { signup } = mapActions(useAuthStore, ["signup"]);
</script>
<style lang="scss" scoped>
.signup-form {
  width: 400px;
  border: 1px solid black;
}
</style>
