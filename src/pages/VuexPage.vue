<template>
  <div>
    <h2>Vuex page</h2>
    <p>
      Count: <strong>{{ count }}</strong>
    </p>
    <p>
      Double from getter: <strong>{{ double }}</strong>
    </p>
    <NButton @click="increment">Add Sync</NButton>
    <NButton @click="asyncIncrement">Add ASync</NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { computed } from 'vue';
import { useStore } from '~/store';

const store = useStore();

// computed access state
const count = computed(() => store.state.count);

// computed access getter
const double = computed(() => store.getters.double);

// use mutation
const increment = () => store.commit('increment');

// use action
const asyncIncrement = () => store.dispatch('asyncIncrement');
</script>
