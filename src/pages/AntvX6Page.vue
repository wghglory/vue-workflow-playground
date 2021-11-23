<template>
  <div ref="container" class="h-full"></div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { Graph, Shape, Addon } from '@antv/x6';

const data: any = reactive({
  nodes: [
    {
      id: 1,
      shape: 'rect',
      x: 200,
      y: 350,
      label: 'Default',
      // angle: -5,
    },
    {
      id: 50,
      shape: 'rect',
      x: 100,
      y: 150,
      width: 80,
      height: 40,
      label: '你好',
      attrs: {
        body: {
          fill: '#2ECC71',
          stroke: '#000',
          strokeDasharray: '10,2',
        },
        label: {
          text: 'Hello',
          fill: '#333',
          fontSize: 13,
        },
      },
    },
    {
      id: 21,
      // shape: 'circle',
      x: 300,
      y: 150,
      width: 80,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          fill: '#F39C12',
          stroke: '#000',
          rx: 16,
          ry: 16,
        },
        label: {
          text: 'World',
          fill: '#333',
          fontSize: 18,
          fontWeight: 'bold',
          fontVariant: 'small-caps',
        },
      },
    },
  ],
  edges: [
    {
      source: 50,
      target: 21,
      attrs: {
        line: {
          stroke: 'orange',
        },
      },
    },
    {
      source: 50,
      target: 1,
      label: 'Wow',
    },
  ],
});

const container = ref(null);
const lf: any = reactive({});

// Default Config
Shape.Rect.config({
  width: 80,
  height: 40,
  attrs: {
    rect: {
      fill: '#fff',
      stroke: '#000',
      strokeWidth: 1,
      rx: 6,
      ry: 6,
    },
    text: {
      fontSize: 14,
      fill: '#333',
      fontFamily: 'Arial, helvetica, sans-serif',
      textAnchor: 'middle',
      textVerticalAnchor: 'middle',
    },
  },
});
Shape.Edge.config({
  router: 'orth',
  connector: 'rounded',
});

onMounted(() => {
  lf.value = new Graph({
    // keyboard: true,
    panning: true,
    // scroller: true,
    snapline: true,
    selecting: {
      enabled: true,
      showNodeSelectionBox: true,
    },
    clipboard: {
      enabled: true,
      useLocalStorage: true,
    },
    container: container.value!,
    background: {
      color: '#fffbe6', // 设置画布背景颜色
    },
    grid: {
      size: 10, // 网格大小 10px
      visible: true, // 渲染网格背景
    },
    // grid: false,
    // background: {
    //   color: '#F5FBFD',
    // },
    resizing: {
      enabled: true,
    },
  });

  const lfIstance = lf.value;

  lfIstance.fromJSON(data);

  lfIstance.enableClipboard();
  lfIstance.enableKeyboard();
  lfIstance.centerContent();

  // export svg
  // lfIstance.toSVG((dataUri: string) => {
  //   // 下载
  //   DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg');
  // });
});

onUnmounted(() => {
  lf.value.dispose();
});
</script>

<style scoped></style>
