import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/global.css';
import '@/styles/reset.css';
import MyUI from '../packages'
Vue.config.productionTip = false
Vue.use(ElementUI); // 注册element-ui
Vue.use(MyUI); // 注册element-ui
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
