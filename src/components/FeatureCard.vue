<template>
  <div className="flex gap-4">
    <img :src="svgSrc" :alt="title" className="w-14" />
    <div className="flex flex-col justify-center">
      <h3 cds-text="subtitle" className="mb-6">{{ title }}</h3>
      <p cds-text="body">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ svgSrc: string; title: string; content: string }>();
</script>
