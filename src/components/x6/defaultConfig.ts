import { Shape } from '@antv/x6';

// Default Config
Shape.Rect.config({
  width: 120,
  height: 80,
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

Shape.Circle.config({
  width: 100,
  height: 100,
});
Shape.Polygon.config({
  width: 80,
  height: 80,
  attrs: {
    body: {
      fill: '#efdbff',
      stroke: '#9254de',
      // 指定 refPoints 属性，多边形顶点随图形大小自动缩放
      // https://x6.antv.vision/zh/docs/api/registry/attr#refpointsresetoffset
      refPoints: '0,10 10,0 20,10 10,20',
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
  shape: 'done-rect',
  attrs: {
    body: {
      stroke: 'green',
    },
  },
});
Shape.Rect.define({
  shape: 'current-rect',
  attrs: {
    body: {
      stroke: 'blue',
    },
  },
});
