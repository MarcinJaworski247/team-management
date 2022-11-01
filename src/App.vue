<template>
  <div class="main-container">
    <router-view />
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.main-container {
  margin: 100px 200px;
  display: flex;
  justify-content: center;
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
