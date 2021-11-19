<template>
  <div class="flex justify-center items-center flex-col h-full">
    <img :src="notFoundSvg" alt="404 not found" />
    <h1 class="mb-8">{{ l10n('common.notFound') }}</h1>
  </div>
</template>

<script setup lang="ts">
import { l10n } from '~/i18n/i18nUtils';
import notFoundSvg from '~/assets/images/not-found.svg';
</script>
