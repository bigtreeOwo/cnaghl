const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
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
          '^/servers': ''
        }
      },
      '/players': {
        target: 'http://localhost:9090/players',
        changeOrigin: true,
        pathRewrite: {
          '^/players': ''
        }
      }
    }
  },
  productionSourceMap: false
}