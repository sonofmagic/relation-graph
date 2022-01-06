
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  chainWebpack: config => {
    config.entry('app').clear().add('./src/demo/main.ts')
  }
}
