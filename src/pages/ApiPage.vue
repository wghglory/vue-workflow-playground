<template>
  <div>
    <ul>
      <li v-for="item of state.hits" :key="item.objectID">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue';

interface Hit {
  objectID: string;
  url: string;
  title: string;
}

const state: {
  hits: Hit[];
} = reactive({
  hits: [],
});
onMounted(async () => {
  const data = await fetch('https://hn.algolia.com/api/v1/search?query=vue').then((rsp) => rsp.json());
  state.hits = data.hits as Hit[];
});
</script>

<style scoped></style>
