/**
 * 导入指定组件库
 * @param {Vue} Vue 
 * @param {object} components 
 */
export default function componentsImport(Vue, components) {
  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName]);
  });
}