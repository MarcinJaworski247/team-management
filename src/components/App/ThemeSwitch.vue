<template>
  <div
    class="toggle"
    :class="{
      'toggle--light': theme === 'light',
      'toggle--dark': theme === 'dark',
    }"
    tabindex="0"
    @click="toggle"
  >
    <div
      class="toggle__icon"
      :class="{
        'toggle__icon--light': theme === 'light',
        'toggle__icon--dark': theme === 'dark',
      }"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const theme = ref<string>();

onMounted(() => {
  theme.value = localStorage.getItem("theme") ?? "light";
});

function toggle() {
  // set to dark
  if (theme.value === "light") {
    theme.value = "dark";
    localStorage.setItem("theme", "dark");
    document.querySelector("body")?.classList.add("theme-dark");
  }
  // set to light
  else {
    theme.value = "light";
    localStorage.setItem("theme", "light");
    document.querySelector("body")?.classList.remove("theme-dark");
  }
}
</script>
<style lang="scss" scoped>
.toggle {
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid var(--orange-dark);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;

  &--light {
    background-color: #fff;
    justify-content: flex-start;
  }

  &--dark {
    background: var(--orange-dark);
    justify-content: flex-end;
  }

  &__icon {
    border: 1px solid var(--orange-dark);
    border-radius: 50%;
    width: 50%;
    height: 100%;

    &--light {
      border-color: var(--orange-dark);
    }

    &--dark {
      border-color: var(--grey-medium);
    }
  }
}
</style>
