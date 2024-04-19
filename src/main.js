import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/font_4515977_sb8dryyefm/iconfont.css";
import router from './router/index.js';

Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app');