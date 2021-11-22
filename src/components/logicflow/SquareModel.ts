import { RectNodeModel } from '@logicflow/core';

export default class SquareModel extends RectNodeModel {
  setAttributes() {
    const size = 80;
    const circleOnlyAsTarget = {
      message: '正方形节点下一个节点只能是圆形节点',
      validate: (source: any, target: any) => {
        return target.type === 'circle';
      },
    };

    console.log(this.properties);

    this.width = size;
    this.height = size;
    this.anchorsOffset = [
      [size / 2, 0],
      [-size / 2, 0],
    ];
    this.sourceRules.push(circleOnlyAsTarget);
  }
}
