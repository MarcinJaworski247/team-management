<template>
  <nav class="navbar pt-3">
    <ul class="navbar__list">
      <li class="navbar__list-item">{{ $t("navbar.team") }}</li>
      <li class="navbar__list-item">{{ $t("navbar.games") }}</li>
      <li class="navbar__list-item">{{ $t("navbar.stats") }}</li>
      <li class="navbar__list-item">{{ $t("navbar.schedule") }}</li>
      <li class="navbar__list-item">{{ $t("navbar.workouts") }}</li>
    </ul>
  </nav>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.navbar {
  width: 196px;
  height: 100%;
  top: 60px;
  background-color: var(--background-ternary);
  position: fixed;
  display: flex;
  justify-content: center;

  &__list {
    margin-top: 64px;
    list-style: none;
    text-transform: uppercase;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__list-item {
    cursor: pointer;
    padding: 8px 16px;
    letter-spacing: 1.3px;

    &:hover {
      color: var(--orange-dark);
      background-color: var(--background-secondary);
      border-radius: 9px;
    }
  }
}
</style>
