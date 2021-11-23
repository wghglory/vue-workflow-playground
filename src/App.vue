<script setup lang="ts">
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useQueryProvider } from 'vue-query';
import { VueQueryDevTools } from 'vue-query/devtools';

import { ref } from 'vue';

import { NConfigProvider, GlobalThemeOverrides, NLayout, enUS, dateEnUS, darkTheme } from 'naive-ui';

// import http from '~/utils/axios';

// import TheHeader from './components/TheHeader.vue';
import TheHeader from './components/TheHeader';

useQueryProvider();

// https://www.naiveui.com/en-US/dark/docs/theme
const themeString = ref('light');
const theme: any = ref(null); // darkTheme

const lightThemeOverrides: GlobalThemeOverrides = {
  Layout: {
    colorEmbedded: '#F5FBFD',
  },
};

const darkThemeOverrides: GlobalThemeOverrides = {
  Layout: {
    colorEmbedded: 'hsl(198,23%,23%)',
  },
};

const updateTheme = (t: string) => {
  themeString.value = t;
  theme.value = t === 'dark' ? darkTheme : null;
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
      <TheHeader :theme="themeString" @updateTheme="updateTheme" />
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

.active-node {
  transform-origin: 50%;
  transform-box: fill-box;
  animation: upDown 1s ease infinite alternate;
}

@keyframes upDown {
  0% {
    transform: rotateX(0);
  }

  100% {
    transform: rotateX(20deg);
  }
}
</style>
