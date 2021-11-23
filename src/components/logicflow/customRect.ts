import { RectNode, RectNodeModel } from '@logicflow/core';

class CustomRectModel extends RectNodeModel {
  setAttributes() {
    this.stroke = '#1E90FF';
    this.fill = '#F0F8FF';
    this.radius = 6;
    const {
      properties: { isActiveNode },
    } = this;

    const defaultMenu = [
      {
        className: 'lf-menu-delete',
        text: 'Delete',
        callback: (node: any) => {
          this.graphModel.deleteNode(node.id);
          this.graphModel.eventCenter.emit('custom:event', node);
        },
      },
      {
        text: 'Edit',
        className: 'lf-menu-item',
        callback: (node: any) => {
          this.graphModel.setElementStateById(node.id, 2);
        },
      },
      {
        text: 'Copy',
        className: 'lf-menu-item',
        callback: (node: any) => {
          this.graphModel.cloneNode(node.id);
        },
      },
      {
        text: 'Link',
        callback() {
          alert('open a new tab');
        },
      },
      {
        text: 'Props',
        className: 'lf-menu-item',
        callback: (node: any) => {
          const nodeModel = this.graphModel.getNodeModel(node.id);
          alert(`
            Props link: ${nodeModel.properties.link}
            Node id：${node.id}
            Node Type：${node.type}
            Node Coordinates：(x: ${node.x}, y: ${node.y})`);
        },
      },
    ];

    const activeNodeMenu = [
      {
        text: 'Complete',
        callback(node: any) {
          console.log(node);
          alert(`complete ${node}`);
        },
      },
      {
        text: 'Fail',
        callback(node: any) {
          alert(`fail ${node}`);
        },
      },
    ];

    if (isActiveNode) {
      this.menu = [...activeNodeMenu, ...defaultMenu];
    } else {
      this.menu = defaultMenu;
    }
  }
}

export default {
  type: 'custom:rect',
  view: RectNode,
  model: CustomRectModel,
};
