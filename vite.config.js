import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    // 自动导入 ElMessage / ElNotification / ElMessageBox 等组合式 API
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: false,
    }),
    // 模板中的 el-* 组件按需自动引入（含样式）
    Components({
      resolvers: [ElementPlusResolver()],
      dts: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: 'localhost',
    port: 80,
    // 以下代理规则与旧 vue.config.js 的 devServer.proxy 完全一致
    proxy: {
      '/servers': {
        target: 'http://47.96.120.46:9090/servers',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/servers/, ''),
      },
      '/players': {
        target: 'http://47.96.120.46:9090/players',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/players/, ''),
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
        rewrite: (p) => p.replace(/^\/videos/, ''),
      },
    },
  },
  build: {
    sourcemap: false,
  },
})
