<template>
  <div ref="container" class="h-full"></div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';

import SquareModel from '~/components/logicflow/SquareModel';
import SquareView from '~/components/logicflow/SquareView';

const data = reactive({
  nodes: [
    {
      id: 50,
      type: 'rect',
      x: 100,
      y: 150,
      text: '你好',
    },
    {
      id: 21,
      type: 'circle',
      x: 300,
      y: 150,
    },
    {
      id: 10,
      type: 'square',
      x: 300,
      y: 200,
      text: '正方形',
      properties: {
        name: 'derek',
      },
    },
  ],
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
});

const container = ref(null);

onMounted(() => {
  const lf = new LogicFlow({
    container: container.value!,
    stopScrollGraph: true,
    stopZoomGraph: true,
    grid: {
      type: 'dot',
      size: 20,
    },
  });

  lf.register({
    type: 'square',
    view: SquareView,
    model: SquareModel,
  });

  lf.render(data);
});
</script>

<style scoped></style>
