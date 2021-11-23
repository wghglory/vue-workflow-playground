import { Shape } from '@antv/x6';

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

// custom node
Shape.Rect.define({
  shape: 'red-rect', // 自动注册名为 'red-rect' 的节点，并且节点类名为 'RedRect'。
  attrs: {
    body: {
      stroke: 'red',
    },
  },
});
Shape.Rect.define({
  shape: 'green-rect',
  attrs: {
    body: {
      stroke: 'green',
    },
  },
});
