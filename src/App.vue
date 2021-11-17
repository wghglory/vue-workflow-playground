<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';

import { NConfigProvider, NInput, NDatePicker, NSpace } from 'naive-ui';
// locale & dateLocale
import { enUS, dateEnUS, darkTheme } from 'naive-ui';

// https://www.naiveui.com/en-US/dark/docs/theme
const theme = ref(null); // darkTheme
</script>

<template>
  <n-config-provider :theme="theme" :locale="enUS" :date-locale="dateEnUS">
    <TheHeader />
    <main class="p-6">
      <router-view></router-view>
    </main>
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

#app {
  height: 100%;
}
</style>
