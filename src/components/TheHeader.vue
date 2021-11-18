<template>
  <header class="flex items-center py-2 px-4 bg-gray-600 text-white">
    <h1 class="pr-6">
      <router-link to="/" class="flex items-center">
        <n-icon size="40">
          <cloud-outline />
        </n-icon>
        <span class="font-bold text-2xl pl-3">PCDL</span>
      </router-link>
    </h1>
    <nav class="flex-1">
      <n-menu v-model:value="activeKey" :inverted="true" :options="menuOptions" mode="horizontal" />
      <!-- <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link> -->
    </nav>
  </header>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon, NMenu } from 'naive-ui';

import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon,
  CloudOutline,
} from '@vicons/ionicons5';

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const activeKey = ref(null);

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/',
          },
        },
        { default: () => 'Home' },
      ),
    key: 'home',
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: 'about',
          },
        },
        { default: () => 'About' },
      ),
    key: 'about',
  },
];
</script>

<style scoped></style>
