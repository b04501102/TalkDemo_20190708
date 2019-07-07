module.exports = {
  outputDir: undefined,
  publicPath: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/../node_modules/bootstrap/scss/_functions.scss';
          @import '@/../node_modules/bootstrap/scss/_variables.scss';
          @import '@/../node_modules/bootstrap/scss/_mixins.scss';
        `
      }
    }
  }
}