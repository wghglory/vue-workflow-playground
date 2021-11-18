<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useQueryProvider } from 'vue-query';
import { VueQueryDevTools } from 'vue-query/devtools';

import { ref } from 'vue';
// import { useStore } from 'vuex';

import { NConfigProvider, GlobalThemeOverrides, NLayout, enUS, dateEnUS, darkTheme } from 'naive-ui';

// import http from '~/utils/axios';

// import HelloWorld from './components/HelloWorld.vue';
// import TheHeader from './components/TheHeader.vue';
import TheHeader from './components/TheHeader';

useQueryProvider();

// https://www.naiveui.com/en-US/dark/docs/theme
const theme = ref(darkTheme); // darkTheme

const lightThemeOverrides: GlobalThemeOverrides = {
  Layout: {
    colorEmbedded: '#F5FBFD',
  },
  // ...
};

const darkThemeOverrides: GlobalThemeOverrides = {
  Layout: {
    colorEmbedded: 'hsl(198,23%,23%)',
  },
};
</script>

<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
    :locale="enUS"
    :date-locale="dateEnUS"
    class="h-full"
  >
    <n-layout content-style="display:flex;flex-direction:column;" embedded>
      <TheHeader />
      <main class="p-6 flex-1" style="margin-top: 60px">
        <router-view></router-view>
      </main>
    </n-layout>
    <VueQueryDevTools />
  </n-config-provider>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-2xl;
  }
  h3 {
    @apply text-xl;
  }
}

html,
body {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.n-layout .n-layout-scroll-container {
  height: 100vh;
}
</style>
