const pkg = require('../../package.json');

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
        ]
    }
}