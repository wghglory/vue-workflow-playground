<template>
  <header>
    <nav>
      <n-menu v-model:value="activeKey" :options="menuOptions" mode="horizontal" />
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
