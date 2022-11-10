<template>
  <the-topbar @on-navbar-toggle="toggleNavbar" />
  <div class="wrapper">
    <transition>
      <the-navbar v-if="isNavbarVisible && token" />
    </transition>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import TheTopbar from "@/components/App/TheTopbar.vue";
import TheNavbar from "@/components/App/TheNavbar.vue";

const authStore = useAuthStore();
const { token } = storeToRefs(authStore);

const isNavbarVisible = ref(false);

function toggleNavbar() {
  isNavbarVisible.value = !isNavbarVisible.value;
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.main-container {
  margin: 100px 200px;
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 800px) {
  .main-container {
    margin: 50px 100px;
  }
}

@media (max-width: 600px) {
  .main-container {
    margin: 0;
  }
}
</style>
