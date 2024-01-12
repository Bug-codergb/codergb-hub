const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.VUE_APP_WEBPACK_SERVER_PORT,
    proxy: {
      '/gb': {
        target: `http://localhost:${process.env.VUE_APP_SERVER_PORT}`,
        pathRewrite: { '^/gb': '' }
      }
    }
  }
});
