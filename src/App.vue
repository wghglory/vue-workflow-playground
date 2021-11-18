<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';

import { NConfigProvider, NLayout } from 'naive-ui';
// locale & dateLocale
import { enUS, dateEnUS, darkTheme } from 'naive-ui';

// https://www.naiveui.com/en-US/dark/docs/theme
// const theme = ref(null); // darkTheme
const theme = ref(darkTheme); // darkTheme
</script>

<template>
  <n-config-provider :theme="theme" :locale="enUS" :date-locale="dateEnUS" class="h-full">
    <n-layout content-style="display:flex;flex-direction:column;" embedded>
      <TheHeader />
      <main class="p-6 flex-1">
        <router-view></router-view>
      </main>
    </n-layout>
  </n-config-provider>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  height: 100vh;
}

.n-layout .n-layout-scroll-container {
  height: 100vh;
}
</style>
