import { RectNode, h } from '@logicflow/core';

export default class CurrentRectView extends RectNode {
  getShape() {
    // 通过 getAttributes 获取 model 中的属性
    const { x, y, width, height, fill, stroke, strokeWidth } = this.getAttributes();
    const attrs = {
      // rect 标签的 x，y 对应的是图形的左上角
      // 所以我们要将矩形的中心移动到 x，y
      x: x - width / 2,
      y: y - height / 2,
      width,
      height,
      stroke,
      fill,
      strokeWidth,
      rx: 6,
      ry: 6,
    };

    const props = this.getProperties();
    // console.log(props);
    // getShape 的返回值是一个通过 h 方法创建的 svg 元素
    return h('g', { class: props.isActive ? 'current-node' : '' }, [
      h('rect', { ...attrs }),
      h(
        'svg',
        {
          x: x - width / 2 + 5,
          y: y - height / 2 + 5,
          width: 25,
          height: 25,
          viewBox: '0 0 24 24',
        },
        h('path', {
          fill: stroke,
          d: 'M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
        }),
      ),
    ]);
  }
}
