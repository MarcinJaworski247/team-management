<template>
  <div class="topbar pl-2 pr-5">
    <header class="topbar__header">
      <menu-icon
        class="topbar__toggle mr-2"
        v-if="token"
        @click="toggleNavbar"
      />
      <h1>Team mngmnt.</h1>
    </header>
    <div class="flex">
      <div class="topbar__tools">
        <language-switch />
      </div>
      <div
        v-if="token"
        class="topbar__user"
      >
        <button
          type="button"
          class="topbar__logout mr-2"
          @click="logout"
        >
          {{ $t("auth.signOut") }}
        </button>
        <account-circle
          :size="48"
          class="topbar__user-icon"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const { token } = storeToRefs(authStore);

const emit = defineEmits(["onNavbarToggle"]);

function toggleNavbar() {
  emit("onNavbarToggle");
}

const router = useRouter();

function logout() {
  authStore.$reset();
  router.push({
    name: "login",
  });
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  gap: 32px;
}
.topbar {
  background-color: var(--grey-5);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;

  &__toggle {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 8px;

    h1 {
      font-weight: 500;
      font-size: 3rem;
      letter-spacing: 1.5px;
    }
  }

  &__user {
    display: flex;
    align-items: center;
  }

  &__user-icon {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  &__logout {
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 1.3px;
    border: none;
    background: none;
    text-transform: uppercase;

    &:hover {
      color: var(--orange-8);
    }
  }
}
</style>
