<template>
  <div>
    <div class="flex items-center mb-4">
      <n-input type="text" v-model:value="input" autosize style="min-width: 20%" class="mr-4" />
      <n-button @click="setQuery">搜索</n-button>
    </div>
    <div v-if="loading">Loading ...</div>
    <div v-else-if="error">Something went wrong ...</div>
    <ul v-else>
      <li v-for="item of hits" :key="item.objectID">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted, watchEffect } from 'vue';
import { NInput, NButton } from 'naive-ui';

interface Hit {
  objectID: string;
  url: string;
  title: string;
}

const state: {
  input: string;
  query: string;
  hits: Hit[];
  error: boolean;
  loading: boolean;
} = reactive({
  input: 'vue',
  query: 'vue',
  hits: [],
  error: false,
  loading: false,
});

const fetchData = async (query: string) => {
  state.error = false;
  state.loading = true;

  try {
    const data = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`).then((rsp) => rsp.json());
    state.hits = data.hits;
  } catch {
    state.error = true;
  }
  state.loading = false;
};

const setQuery = () => {
  state.query = state.input;
};

onMounted(() => {
  watchEffect(() => {
    fetchData(state.query);
  });
});

const { input, hits, loading, error } = toRefs(state);
</script>

<style scoped></style>
