<template>
  <the-topbar @on-navbar-toggle="toggleNavbar" />
  <div class="wrapper">
    <transition name="slide">
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
  margin: 160px 200px 100px 200px;
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

.slide-enter {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  // position: absolute;
}

.slide-leave {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 750ms ease;
}
</style>
