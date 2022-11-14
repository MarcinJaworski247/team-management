<template>
  <section class="login-form">
    <div class="login-form__image-wrapper">
      <img
        :src="basketballImageUrl"
        alt="A picture of basketball in basket."
        class="login-form__image"
      />
    </div>

    <div class="px-3 pt-4">
      <header class="login-form__header mb-4">
        <h1>{{ $t("auth.login") }}</h1>
      </header>
      <div>
        <input
          type="email"
          v-model="emailInput"
          :placeholder="$t('auth.email')"
          class="login-form__input mb-2"
        />
      </div>
      <div>
        <input
          type="password"
          v-model="passwordInput"
          :placeholder="$t('auth.password')"
          class="login-form__input"
        />
      </div>
      <div class="mt-4">
        <button
          @click="onLogin"
          class="login-form__button mb-4"
        >
          {{ $t("auth.loginButton") }}
        </button>
      </div>
      <div>
        {{ $t("auth.dontHaveAccount") }}
        <router-link
          :to="{ name: 'signup' }"
          class="login-form__sign-up"
        >
          {{ $t("auth.signup") }}
        </router-link>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import basketballImageUrl from "@/assets/images/basketball.jpg";

const authStore = useAuthStore();

const emailInput = ref("");
const passwordInput = ref("");
const router = useRouter();

function onLogin() {
  authStore.login(emailInput.value, passwordInput.value);
  router.push({
    name: "dashboard",
  });
}
</script>
<style lang="scss" scoped>
.login-form {
  width: 700px;
  border-radius: 9px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;

  &__image {
    width: 100%;
    opacity: 0.8;
  }

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
      color: var(--orange-8);
      border-color: var(--orange-8);
    }
  }

  &__sign-up {
    text-decoration: none;
    transition: color 0.3s ease;

    &:link,
    &:visited {
      color: var(--orange-8);
    }

    &:hover,
    &:active {
      color: var(--orange-9);
    }
  }
}

@media (max-width: 1100px) {
  .login-form {
    grid-template-columns: 1fr;
    width: 500px;

    &__image-wrapper {
      grid-row: 2/3;
      margin-top: 32px;
      justify-self: center;
    }
  }
}

@media (max-width: 800px) {
  .login-form {
    max-width: 700px;
  }
}
</style>
