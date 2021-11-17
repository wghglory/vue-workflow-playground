<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

import { NConfigProvider, NInput, NDatePicker, NSpace } from 'naive-ui';
// locale & dateLocale
import { enUS, dateEnUS, darkTheme } from 'naive-ui';

// https://www.naiveui.com/en-US/dark/docs/theme
const theme = ref(null); // darkTheme
</script>

<template>
  <n-config-provider :theme="theme" :locale="enUS" :date-locale="dateEnUS">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </n-config-provider>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
