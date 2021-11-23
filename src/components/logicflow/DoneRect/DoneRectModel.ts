import { RectNodeModel } from '@logicflow/core';

export default class DoneRectModel extends RectNodeModel {
  setAttributes() {
    this.stroke = '#32c854';
    this.fill = '#f5ffee';
    this.radius = 6;
    const {
      properties: { isActive },
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

    if (isActive) {
      this.menu = [...activeNodeMenu, ...defaultMenu];
    } else {
      this.menu = defaultMenu;
    }
  }
}
