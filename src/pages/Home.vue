<template>
  <div class="flex flex-col justify-center items-center flex-1 p-9 bg-cds-light dark:bg-cds-dark">
    <h1 cds-text="display" class="mb-4">{{ l10n('home.title') }}</h1>
    <h2 cds-text="subtitle" class="mb-12 sm:mb-24">{{ l10n('home.subtitle') }}</h2>
    <section class="grid gap-x-14 gap-y-10 sm:gap-y-28 sm:grid-cols-2 md:px-16 pb-10">
      <FeatureCard :svgSrc="mspSvg" :title="l10n('home.section1Title')" :content="l10n('home.section1Content')" />
      <FeatureCard :svgSrc="cloudSvg" :title="l10n('home.section2Title')" :content="l10n('home.section2Content')" />
      <FeatureCard :svgSrc="numerousSvg" :title="l10n('home.section3Title')" :content="l10n('home.section3Content')" />
      <FeatureCard :svgSrc="cashSvg" :title="l10n('home.section4Title')" :content="l10n('home.section4Content')" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { l10n } from '~/i18n/i18nUtils';

import mspSvg from '~/assets/images/msp.svg';
import cloudSvg from '~/assets/images/cloud.svg';
import numerousSvg from '~/assets/images/numerous.svg';
import cashSvg from '~/assets/images/cash.svg';

import FeatureCard from '~/components/FeatureCard.vue';
</script>
