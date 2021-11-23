<template>
  <div ref="container" class="h-full"></div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { Graph } from '@antv/x6';
import '~/components/x6/defaultConfig';
import data from '~/components/x6/InitialData';

// const data: any = reactive({
//   nodes: [
//     {
//       id: 1,
//       shape: 'rect',
//       x: 200,
//       y: 350,
//       label: 'Default',
//       // angle: -5,
//     },
//     {
//       id: 2,
//       shape: 'red-rect',
//       x: 400,
//       y: 450,
//       label: 'Red Rect',
//       // angle: -5,
//     },
//     {
//       id: 3,
//       shape: 'green-rect',
//       x: 500,
//       y: 450,
//       label: 'Green Rect',
//       // angle: -5,
//     },
//     {
//       id: 50,
//       shape: 'rect',
//       x: 100,
//       y: 150,
//       width: 80,
//       height: 40,
//       label: '你好',
//       attrs: {
//         body: {
//           fill: '#2ECC71',
//           stroke: '#000',
//           strokeDasharray: '10,2',
//         },
//         label: {
//           text: 'Hello',
//           fill: '#333',
//           fontSize: 13,
//         },
//       },
//     },
//     {
//       id: 21,
//       // shape: 'circle',
//       x: 300,
//       y: 150,
//       width: 80,
//       height: 40,
//       label: 'world',
//       attrs: {
//         body: {
//           fill: '#F39C12',
//           stroke: '#000',
//           rx: 16,
//           ry: 16,
//         },
//         label: {
//           text: 'World',
//           fill: '#333',
//           fontSize: 18,
//           fontWeight: 'bold',
//           fontVariant: 'small-caps',
//         },
//       },
//     },
//   ],
//   edges: [
//     {
//       source: 50,
//       target: 21,
//       attrs: {
//         line: {
//           stroke: 'orange',
//         },
//       },
//     },
//     {
//       source: 50,
//       target: 1,
//       label: 'Wow',
//     },
//   ],
// });

const container = ref(null);
const lf: any = reactive({});

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

  lfIstance.centerContent();

  // register tools
  // lfIstance.on('cell:mouseenter', ({ cell }: any) => {
  //   if (cell.isNode()) {
  //     cell.addTools([
  //       {
  //         name: 'boundary',
  //         args: {
  //           attrs: {
  //             fill: '#7c68fc',
  //             stroke: '#333',
  //             'stroke-width': 1,
  //             'fill-opacity': 0.2,
  //           },
  //         },
  //       },
  //       {
  //         name: 'button-remove',
  //         args: {
  //           x: 0,
  //           y: 0,
  //           offset: { x: 10, y: 10 },
  //         },
  //       },
  //     ]);
  //   } else {
  //     cell.addTools(['vertices', 'segments']);
  //   }
  // });

  // lfIstance.on('cell:mouseleave', ({ cell }: any) => {
  //   cell.removeTools();
  // });

  // lfIstance.addNode({
  //   x: 460,
  //   y: 120,
  //   width: 360,
  //   height: 120,
  //   shape: 'text-block',
  //   text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  //   attrs: {
  //     body: {
  //       fill: '#efdbff',
  //       stroke: '#9254de',
  //       rx: 4,
  //       ry: 4,
  //     },
  //   },
  // });

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
