const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    host: 'localhost',
    port: 80,
    proxy: {
      '/servers': {
        target: 'http://47.96.120.46:9090/servers',
        changeOrigin: true,
        pathRewrite: {
          '^/servers': '',
        },
      },
      '/players': {
        target: 'http://47.96.120.46:9090/players',
        changeOrigin: true,
        pathRewrite: {
          '^/players': '',
        },
      },
      '/user/': {
        target: 'http://47.96.120.46:9091',
        changeOrigin: true,
      },
      '/match/': {
        target: 'http://47.96.120.46:9091',
        changeOrigin: true,
      },
      '/genCaptcha': {
        target: 'http://47.96.120.46:9091',
        changeOrigin: true,
      },
      '/verifyCaptcha': {
        target: 'http://47.96.120.46:9091',
        changeOrigin: true,
      },
      '/videos': {
        target: 'https://api.bilibili.com/x/web-interface/view',
        changeOrigin: true,
        pathRewrite: {
          '^/videos': '',
        },
      },
    },
  },
  productionSourceMap: false,
};
