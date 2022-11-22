<template>
  <div class="relative">
    <translate-icon
      :size="32"
      class="icon"
      @click="toggleSelect"
    />
    <transition>
      <div
        class="select"
        ref="selectRef"
        v-if="selectVisible"
      >
        <div
          class="mb-2 select__option"
          :class="{ 'select__option--selected': currentLanguage === 'en' }"
          @click="switchLanguage('en')"
        >
          EN
        </div>
        <div
          class="select__option"
          :class="{ 'select__option--selected': currentLanguage === 'pl' }"
          @click="switchLanguage('pl')"
        >
          PL
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import TranslateIcon from "vue-material-design-icons/Translate.vue";
import { useI18n } from "vue-i18n";
import { onClickOutside } from "@vueuse/core";

const selectVisible = ref<boolean>(false);
const currentLanguage = ref<string>("");

function setLanguage() {
  currentLanguage.value = localStorage.getItem("lang") ?? "en";
}

onMounted(() => {
  setLanguage();
});

onUnmounted(() => {
  selectVisible.value = false;
});

function toggleSelect() {
  if (selectVisible.value) {
    selectVisible.value = false;
  } else {
    selectVisible.value = true;
  }
}

const { locale } = useI18n({ useScope: "global" });

function switchLanguage(lang: string) {
  locale.value = lang;
  localStorage.setItem("lang", lang);
  setLanguage();
}

const selectRef = ref(null);

onClickOutside(selectRef, () => {
  selectVisible.value = false;
});
</script>
<style lang="scss" scoped>
.relative {
  position: relative;
}

.icon {
  cursor: pointer;
}

.select {
  position: absolute;
  left: -50%;
  height: auto;
  background-color: var(--background-ternary);
  border-radius: 4px;
  padding: 8px 32px;
  text-align: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);

  &__option {
    transition: all 0.3 ease;
    &:hover {
      cursor: pointer;
      color: var(--orange-medium);
    }

    &--selected {
      font-weight: 700;
      color: var(--orange-dark);
    }
  }
}
</style>
