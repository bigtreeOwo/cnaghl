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
        target: 'http://localhost:9090/servers',
        changeOrigin: true,
        pathRewrite: {
          '^/servers': '',
        },
      },
      '/players': {
        target: 'http://localhost:9090/players',
        changeOrigin: true,
        pathRewrite: {
          '^/players': '',
        },
      },
      '/signin': {
        target: 'http://localhost:9091/signin',
        changeOrigin: true,
        pathRewrite: {
          '^/signin': '',
        },
      },
      '/signup': {
        target: 'http://localhost:9091/signup',
        changeOrigin: true,
        pathRewrite: {
          '^/signup': '',
        },
      },
      '/genCaptcha': {
        target: 'http://localhost:9091/genCaptcha',
        changeOrigin: true,
        pathRewrite: {
          '^/genCaptcha': '',
        },
      },
      "/verifyCaptcha": {
        target: 'http://localhost:9091/verifyCaptcha',
        changeOrigin: true,
        pathRewrite: {
          '^/verifyCaptcha': '',
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
