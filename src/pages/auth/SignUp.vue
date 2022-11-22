<template>
  <section class="signup-form px-3 pt-4">
    <header class="signup-form__header mb-4">
      <h1>{{ $t("auth.signupTitle") }}</h1>
    </header>
    <div>
      <input
        type="text"
        v-model="firstName"
        :placeholder="$t('auth.firstName')"
        class="signup-form__input mb-2"
      />
    </div>
    <div>
      <input
        type="text"
        v-model="lastName"
        :placeholder="$t('auth.lastName')"
        class="signup-form__input mb-2"
      />
    </div>
    <div>
      <input
        type="email"
        v-model="email"
        :placeholder="$t('auth.email')"
        class="signup-form__input mb-2"
      />
    </div>
    <div>
      <input
        type="password"
        v-model="password"
        :placeholder="$t('auth.password')"
        class="signup-form__input mb-2"
      />
    </div>
    <div>
      <button
        @click="authStore.signup"
        class="signup-form__button"
      >
        {{ $t("auth.signupButton") }}
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const { firstName, lastName, email, password } = storeToRefs(authStore);
</script>
<style lang="scss" scoped>
.signup-form {
  width: 500px;

  &__header {
    display: flex;
    justify-content: center;
  }

  &__input {
    width: 100%;
    border-radius: 9px;
    height: 48px;
    padding-left: 16px;
    font-size: 1.8rem;
  }

  &__button {
    background-color: #fff;
    padding: 8px 16px;
    font-size: 1.8rem;
    border-radius: 9px;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
    transition: color 0.3s ease;

    &:hover {
      color: var(--orange-medium);
      border-color: var(--orange-medium);
    }
  }
}
</style>
