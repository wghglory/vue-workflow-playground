<template>
  <div>
    <h2>About page</h2>
    <pre>{{ store }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
</script>

<style lang="scss" scoped></style>
