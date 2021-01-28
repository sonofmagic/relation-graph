const pkg = require('../../package.json');
const path = require('path');
// let addSidebar = require('./utils/getSidebarConfig');

module.exports = {
    title: 'Relation Graph在线示例',
    description: pkg.description,
    head:[['link',{rel:'icon',href:'./public/favicon.ico'}]],
    themeConfig: {
        logo:'', //这里引用一个logo文件
        nav:[
            {text:'组件文档',link:'/components/start'},
            {text:'更新记录',link:'/'},
            {text:'工程地址',link:pkg.repository.url}
        ],
        // 为以下路由添加侧边栏
    // sidebar: {
    //     '/component/': [
    //       {
    //         title: '指南',
    //         collapsable: false,
    //         // children: [
    //         //   'guide',
    //         //   'theme',
    //         //   'i18n',
    //         //   'transition',
    //         // ]
    //       },
    //       {
    //         title: '支持与维护',
    //         collapsable: false,
    //         // children: [
    //         //   'issue',
    //         //   'development',
    //         // ]
    //       },
    //       {
    //         title: '组件',
    //         collapsable: false,
    //         children: addSidebar.sidebars
    //       }
    //     ]
    //   }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../../docs')
            },
            extensions: ['.js', '.vue']
        }
    },
    // plugins: [['demo-code', {minHeight: 0}]], 
}