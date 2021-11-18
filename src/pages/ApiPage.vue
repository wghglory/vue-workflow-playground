<template>
  <div>
    <div class="flex items-center mb-4">
      <n-input type="text" v-model:value="query" autosize style="min-width: 20%" class="mr-4" />
      <n-button @click="refetch()">Search</n-button>
    </div>
    <div v-if="isLoading || isFetching">Loading ...</div>
    <div v-else-if="isError">Something went wrong ...</div>
    <ul v-else>
      <li v-for="item of data?.hits" :key="item.objectID">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from 'vue-query';
import { ref } from 'vue';
import { NInput, NButton } from 'naive-ui';

interface Hit {
  objectID: string;
  url: string;
  title: string;
}

const query = ref('vue');

const fetchData = async (q: string): Promise<{ hits: Hit[] }> => {
  return fetch(`https://hn.algolia.com/api/v1/search?query=${q}`).then((res) => res.json());
};

const { isLoading, isFetching, isError, data, refetch } = useQuery('getHits', () => fetchData(query.value));
</script>

<style scoped></style>
