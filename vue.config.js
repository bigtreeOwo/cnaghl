const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
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
      '/signin': {
        target: 'http://47.96.120.46:9091/signin',
        changeOrigin: true,
        pathRewrite: {
          '^/signin': '',
        },
      },
      '/signup': {
        target: 'http://47.96.120.46:9091/signup',
        changeOrigin: true,
        pathRewrite: {
          '^/signup': '',
        },
      },
      '/genCaptcha': {
        target: 'http://47.96.120.46:9091/genCaptcha',
        changeOrigin: true,
        pathRewrite: {
          '^/genCaptcha': '',
        },
      },
      '/verifyCaptcha': {
        target: 'http://47.96.120.46:9091/verifyCaptcha',
        changeOrigin: true,
        pathRewrite: {
          '^/verifyCaptcha': '',
        },
      },
      '/allplayers': {
        target: 'http://47.96.120.46:9091/allplayers',
        changeOrigin: true,
        pathRewrite: {
          '^/allplayers': '',
        },
      },
      '/recentmatch': {
        target: 'http://47.96.120.46:9091/recentmatch',
        changeOrigin: true,
        pathRewrite: {
          '^/recentmatch': '',
        },
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
}
