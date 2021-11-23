<template>
  <div ref="container" id="graph-container" class="h-full"></div>
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
//     },
//     {
//       id: 2,
//       shape: 'red-rect',
//       x: 400,
//       y: 450,
//       label: 'Red Rect',
//     },
//     {
//       id: 3,
//       shape: 'current-rect',
//       x: 500,
//       y: 450,
//       label: 'Current Rect',
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
    keyboard: true,
    panning: true,
    // scroller: true,
    snapline: true,
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
    connecting: {
      router: 'orth',
    },
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
    highlighting: {
      magnetAdsorbed: {
        name: 'stroke',
        args: {
          attrs: {
            fill: '#5F95FF',
            stroke: '#5F95FF',
          },
        },
      },
    },
    resizing: true,
    rotating: true,
    selecting: {
      enabled: true,
      rubberband: true,
      showNodeSelectionBox: true,
    },

    // background: {
    //   color: '#F5FBFD',
    // },
  });

  const lfInstance = lf.value;

  lfInstance.fromJSON(data);

  lfInstance.centerContent();

  // register tools
  // lfInstance.on('cell:mouseenter', ({ cell }: any) => {
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

  // lfInstance.on('cell:mouseleave', ({ cell }: any) => {
  //   cell.removeTools();
  // });

  // lfInstance.addNode({
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
  // lfInstance.toSVG((dataUri: string) => {
  //   // 下载
  //   DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg');
  // });

  // 控制连接桩显示/隐藏
  const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
    for (let i = 0, len = ports.length; i < len; i += 1) {
      // eslint-disable-next-line no-param-reassign
      ports[i].style.visibility = show ? 'visible' : 'hidden';
    }
  };
  lfInstance.on('node:mouseenter', () => {
    const c = document.getElementById('graph-container')!;
    const ports = c.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>;
    showPorts(ports, true);
  });
  lfInstance.on('node:mouseleave', () => {
    const c = document.getElementById('graph-container')!;
    const ports = c.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>;
    showPorts(ports, false);
  });

  // copy cut paste
  lfInstance.bindKey(['meta+c', 'ctrl+c'], () => {
    const cells = lfInstance.getSelectedCells();
    if (cells.length) {
      lfInstance.copy(cells);
    }
    return false;
  });
  lfInstance.bindKey(['meta+x', 'ctrl+x'], () => {
    const cells = lfInstance.getSelectedCells();
    if (cells.length) {
      lfInstance.cut(cells);
    }
    return false;
  });
  lfInstance.bindKey(['meta+v', 'ctrl+v'], () => {
    if (!lfInstance.isClipboardEmpty()) {
      const cells = lfInstance.paste({ offset: 32 });
      lfInstance.cleanSelection();
      lfInstance.select(cells);
    }
    return false;
  });

  // undo redo
  lfInstance.bindKey(['meta+z', 'ctrl+z'], () => {
    if (lfInstance.history.canUndo()) {
      lfInstance.history.undo();
    }
    return false;
  });
  lfInstance.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
    if (lfInstance.history.canRedo()) {
      lfInstance.history.redo();
    }
    return false;
  });

  // select all
  lfInstance.bindKey(['meta+a', 'ctrl+a'], () => {
    const nodes = lfInstance.getNodes();
    if (nodes) {
      lfInstance.select(nodes);
    }
  });

  // delete
  lfInstance.bindKey('backspace', () => {
    const cells = lfInstance.getSelectedCells();
    if (cells.length) {
      lfInstance.removeCells(cells);
    }
  });

  // zoom
  lfInstance.bindKey(['ctrl+1', 'meta+1'], () => {
    const zoom = lfInstance.zoom();
    if (zoom < 1.5) {
      lfInstance.zoom(0.1);
    }
  });
  lfInstance.bindKey(['ctrl+2', 'meta+2'], () => {
    const zoom = lfInstance.zoom();
    if (zoom > 0.5) {
      lfInstance.zoom(-0.1);
    }
  });
  // #endregion
});

onUnmounted(() => {
  lf.value.dispose();
});
</script>

<style scoped></style>
