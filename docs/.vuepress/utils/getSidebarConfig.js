const path = require('path');
const fs = require('fs');
const camelcase = require('camelcase');
const normalizePath = require('normalize-path');

const pathConfig = '../../../components/';
const lastPath = 'components';
const docDir = 'docs';
const sidbarConfigFile = './docs/.vuepress/utils/sidebarConfig.js';

const docDirReg = new RegExp(`${docDir}$`, 'i');
const vueReg = new RegExp('\\.vue$', 'i'); // eslint-disable-line
const mdReg = new RegExp('\\.md$', 'i'); // eslint-disable-line

const coms = [];
let comsObj = '\r\n\r\nexport default {';
const sidebars = [];
let sidebarAlpha = '';
const sidebarPages = [];
const moduleDir = path.resolve(__dirname, pathConfig);

fs.writeFile(sidbarConfigFile, '', (err) => {
  if (err) throw err;
});

// console.log(fs, path);
const getComponents = (dir) => {
  // 读取文件 和 文件夹
  const files = fs.readdirSync(dir, {
    withFileTypes: true
  });
  // console.log(files,dir);

  files.map((compDir) => { // eslint-disable-line
    // docs 文件夹
    if (docDirReg.test(dir)) {
      const dirArr = dir.split('/');
      const preDir = dirArr[dirArr.indexOf(docDir) - 1];

      // 找到需要注册的demo 组件
      if (vueReg.test(compDir.name) && preDir) {
        const relativePath = `${pathConfig + dir.substring(dir.indexOf(lastPath) + lastPath.length + 1, 10000)}/`;
        let comName = camelcase(preDir, { pascalCase: true })
          + camelcase(compDir.name.replace(/\.vue/, ''), { pascalCase: true });
        
        coms.push(`\r\nimport ${comName} from '${relativePath + compDir.name}';`);
        comsObj += `\r\n${comName}: ${comName},`;
      }
      // 找到需要引入的 md 文档
      if (mdReg.test(compDir.name) && preDir) {
        let subPath = `/component/${preDir}/`;
        // 如果一个组件需要多个 readme 的情况。(非 readme.md || README.md)
        if(compDir.name.toUpperCase() !== 'README.MD'){
          subPath = `/component/${compDir.name.replace(/\.md$/i, '')}/`;
        }
        sidebarPages.push({
          path: subPath,
          filePath: path.join(dir, compDir.name)
        });
        let alpha = preDir.slice(0,1).toUpperCase();
        if(sidebarAlpha !== alpha){
          sidebars.push(['https://sidebar-title', alpha]);
          sidebarAlpha = alpha
        }
        
        sidebars.push(subPath);
        // sidebars.push(relativePath+compDir.name);
      }
      return;
    }
    
    // 如果是文件夹，则进行下一级处理
    if (compDir.isDirectory()) {
      getComponents(normalizePath(path.join(dir, compDir.name)));
    }
  });
};

getComponents(moduleDir);

// 写入 config 文件
coms.forEach((item) => {
  fs.appendFile(sidbarConfigFile, item, (err) => {
    if (err) throw err;
  });
});
fs.appendFile(sidbarConfigFile, `${comsObj}\r\n}`, (err) => {
  if (err) throw err;
});

module.exports = {
  sidebars,
  sidebarPages
};
