const app = require('electron').app;
const pkg = require('../../package.json');

module.exports = {
  label: pkg.displayName,
  submenu: [{
      label: `关于 ${pkg.displayName}`,
      role: 'about'
    },
    {
      type: 'separator'
    },
    {
      label: '服务',
      role: 'services',
      submenu: []
    },
    {
      type: 'separator'
    },
    {
      label: '隐藏',
      role: 'hide'
    },
    {
      label: '隐藏其它',
      role: 'hideothers'
    },
    {
      label: '取消隐藏',
      role: 'unhide'
    },
    {
      type: 'separator'
    },
    {
      label: '退出',
      role: 'quit'
    }
  ]
};