import { EventArgs, RectNodeModel } from '@logicflow/core';

export default class SquareModel extends RectNodeModel {
  setAttributes() {
    const size = 80;
    this.width = size; // 100, 80 default rect
    this.height = size;

    const circleOnlyAsTarget = {
      message: '正方形节点下一个节点只能是圆形节点',
      validate: (source: any, target: any) => {
        return target.type === 'circle';
      },
    };

    this.menu = [
      {
        text: '自定义元素菜单',
        icon: true,
        className: 'custom-menu',
        callback: (res: EventArgs) => {
          this.graphModel.eventCenter.emit('custom:square:event', res);
        },
      },
    ];

    this.anchorsOffset = [
      [size / 2, 0],
      [-size / 2, 0],
    ];
    this.sourceRules.push(circleOnlyAsTarget);
  }
}
