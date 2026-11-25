import { createApp } from 'vue'
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'
import App from './App.vue'
import router from './router/index.js'
import { asset } from '@/utils/asset.js'
import {
  Medal, OfficeBuilding, Download, VideoCamera, Notebook,
  UserFilled, DocumentAdd, User, Message, Lock, CircleCheck, Clock,
} from '@element-plus/icons-vue'

// Element Plus 基础样式（组件 JS 由 unplugin-vue-components 按需引入）
import 'element-plus/dist/index.css'
// 项目自定义 iconfont（含 el-icon-wenhao 等自定义图标）
import '@/assets/font_4515977_sb8dryyefm/iconfont.css'
// 全局主题变量、卡片/分页样式、响应式断点
import '@/assets/css/theme.css'

const app = createApp(App)

app.use(router)

// 兼容 Options API 组件内的 this.$message / $notify / $confirm 等调用
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$notify = ElNotification
app.config.globalProperties.$msgbox = ElMessageBox
app.config.globalProperties.$alert = ElMessageBox.alert
app.config.globalProperties.$confirm = ElMessageBox.confirm
app.config.globalProperties.$prompt = ElMessageBox.prompt

// 模板中资源引用：$asset('images/xxx.png')
app.config.globalProperties.$asset = asset

// 全局注册本站在用的 Element Plus 图标，供 Options API 组件模板直接使用
const icons = {
  Medal, OfficeBuilding, Download, VideoCamera, Notebook,
  UserFilled, DocumentAdd, User, Message, Lock, CircleCheck, Clock,
}
Object.entries(icons).forEach(([name, component]) => {
  app.component(name, component)
})

app.mount('#app')
