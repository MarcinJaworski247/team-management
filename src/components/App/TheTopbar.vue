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
    <div
      v-if="token"
      class="topbar__user"
    >
      <span
        class="topbar__logout mr-2"
        @click="logout"
      >
        LOGOUT
      </span>
      <account-circle
        :size="48"
        class="topbar__user-icon"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
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
.topbar {
  background-color: var(--grey-5);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

    &:hover {
      color: var(--orange-8);
    }
  }
}
</style>
