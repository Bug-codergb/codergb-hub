const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/gb': {
        target: `http://localhost:8888`,
        pathRewrite: { '^/gb': '' }
      }
    }
  }
});
