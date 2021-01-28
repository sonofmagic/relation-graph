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
        sidebar:{
            '/demo/':[
                {
                    title: '基本',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        'simple/simple'
                    ]
                },
                {
                    title: '布局',
                    collapsable: false,
                },
                {
                    title: '使用场景',
                    collapsable: false,
                },
                {
                    title: '高级 & 交互',
                    collapsable: false,
                }
            ]
        }
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