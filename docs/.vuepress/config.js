const navList = require('./config/nav/index.js');
const sidebar = require('./config/sidebar/index.js');
const head = require('./config/head/index.js');
const plugins = require('./config/plugin/index.js');

module.exports = {
  title: '前端文档',
  description: 'vuepress',
  port: '8090',
  base: '/yj-doc/',
  dest: './yj-doc',
  head: head,
  theme: require.resolve('../../packages/vuepress-theme-itachi'),
  themeConfig: {
    logo: '/img/logo.png',
    nav: navList,
    sidebar: sidebar,
    lastUpdated: 'Last Updated',
    // 搜索设置
    search: true,
    subSidebar: 'auto',
    sidebarDepth: 4,
    displayAllHeaders: true, // 默认值：false
    searchMaxSuggestions: 10,
    serviceWorker: {
      updatePopup: {
        message: '有新的内容',
        buttonText: '更新'
      }
    },
    editLinks: true
  },
  plugins: plugins,
  markdown: {
    lineNumbers: false
  }
}