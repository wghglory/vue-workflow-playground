<template>
  <header class="flex items-center py-2 px-4 text-white fixed w-full z-50" style="background: rgb(0 54 77)">
    <h1 class="pr-6">
      <router-link to="/" class="flex items-center">
        <n-icon size="40">
          <cloud-outline />
        </n-icon>
        <span class="font-bold text-2xl pl-3">PCDL</span>
      </router-link>
    </h1>
    <nav class="flex-1">
      <n-menu v-model="activeKey" :inverted="true" :options="menuOptions" mode="horizontal" />
      <!-- <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link> -->
    </nav>
    <NButton
      text
      style="font-size: 24px"
      @click="emit('updateTheme', theme === 'dark' ? 'light' : 'dark')"
      class="text-gray-100 hover:text-green-400 focus-within:text-green-400"
    >
      <NIcon>
        <SunnyOutline v-if="theme === 'dark'" />
        <CloudyNightOutline v-if="theme === 'light'" />
      </NIcon>
    </NButton>
  </header>
</template>

<script setup lang="tsx">
import { h, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, NMenu, NButton } from 'naive-ui';
import { HomeOutline, CloudOutline, CloudyNightOutline, SunnyOutline } from '@vicons/ionicons5';

const { theme } = defineProps<{ theme: string }>();
const emit = defineEmits(['updateTheme']);

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const activeKey = ref(null);

const menuOptions = [
  {
    // label: () =>
    //   h(
    //     RouterLink,
    //     {
    //       to: {
    //         name: 'Home',
    //       },
    //     },
    //     { default: () => 'Home' },
    //   ),
    label: () => {
      return <RouterLink to={{ name: 'Home' }}>Home</RouterLink>;
    },
    key: 'home',
    icon: renderIcon(HomeOutline),
  },
  {
    // label: () =>
    //   h(
    //     RouterLink,
    //     {
    //       to: {
    //         name: 'API',
    //       },
    //     },
    //     { default: () => 'API' },
    //   ),
    label: () => <RouterLink to={{ name: 'API' }}>API</RouterLink>,
    key: 'api',
  },
  {
    // label: () =>
    //   h(
    //     RouterLink,
    //     {
    //       to: {
    //         name: 'Vuex',
    //       },
    //     },
    //     { default: () => 'Vuex' },
    //   ),
    label: () => <RouterLink to={{ name: 'Vuex' }}>Vuex</RouterLink>,
    key: 'vuex',
  },
];
</script>

<style scoped></style>
